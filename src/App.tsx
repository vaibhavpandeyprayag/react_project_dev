import React, { FC, Suspense, useState, useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContext from "./App.context";
import { User } from "./modals/User";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AuthPageLazy from "./pages/Auth/Auth.lazy";
import NotFoundPage from "./pages/NotFound.page";

interface Props {}

const App: FC<Props> = (props) => {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!token) return;

    me().then((u) => setUser(u));
  }, []);

  if (!user && token) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider value={{ user, setUser }}>
      <Suspense
        fallback={<div className="text-blue-800 text-lg">Loading...</div>}
      >
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
            </Route>
            <Route path={["/login", "/signup", "/forgotpass"]} exact>
              {user ? (
                <Redirect to="/dashboard" />
              ) : (
                <AuthPageLazy onLogin={setUser} />
              )}
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
    </AppContext.Provider>
  );
};

export default App;
