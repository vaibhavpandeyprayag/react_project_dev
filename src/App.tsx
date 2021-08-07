import { FC, Suspense, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { meFetchAction } from "./actions/auth.actions";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthPageLazy from "./pages/Auth/Auth.lazy";
import NotFoundPage from "./pages/NotFound.page";
import { useAppSelector } from "./store";

interface Props {}

const App: FC<Props> = (props) => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const user = useAppSelector(
    (state) => state.auth.id && state.users.byId[state.auth.id]
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) return;

    me().then((u) => dispatch(meFetchAction(u)));
  }, []);

  if (!user && token) {
    return (
      <AiOutlineLoading
        className="w-6 h-6 animate-spin"
        style={{ stroke: "blue", fill: "blue", strokeWidth: 40 }}
      />
    );
  }

  return (
    <>
      <Suspense
        fallback={
          <AiOutlineLoading
            className="w-6 h-6 animate-spin"
            style={{ stroke: "blue", fill: "blue", strokeWidth: 40 }}
          />
        }
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup", "/forgotpass"]} exact>
              {user ? <Redirect to="/dashboard" /> : <AuthPageLazy />}
            </Route>
            <Route
              path={[
                "/dashboard",
                "/recordings",
                "/batch/:batchNumber/lecture/:lectureNumber",
              ]}
              exact
            >
              {user ? <AppContainerPageLazy /> : <Redirect to="/login" />}
            </Route>
            <Route path="/not-found">
              <NotFoundPage />
            </Route>
            <Route>
              <Redirect to="/not-found"></Redirect>
            </Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
