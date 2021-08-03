import React, { Suspense, useState } from "react";
import { useEffect } from "react";
import { lazy } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { me } from "./api/auth";
import { LS_AUTH_TOKEN } from "./api/base";
import { User } from "./modals/User";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AppContainerPage from "./pages/AppContainer/AppContainer.page";
import AuthPageLazy from "./pages/Auth/Auth.lazy";
import AuthPage from "./pages/Auth/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
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
            {user ? (
              <AppContainerPageLazy user={user!} />
            ) : (
              <Redirect to="/login" />
            )}
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
  );
}

export default App;
