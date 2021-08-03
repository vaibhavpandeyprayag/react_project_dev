import React, { Suspense } from "react";
import { lazy } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerPageLazy from "./pages/AppContainer/AppContainer.lazy";
import AppContainerPage from "./pages/AppContainer/AppContainer.page";
import AuthPageLazy from "./pages/Auth/Auth.lazy";
import AuthPage from "./pages/Auth/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
    <Suspense
      fallback={<div className="text-blue-800 text-lg">Loading...</div>}
    >
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>
          <Route path={["/login", "/signup", "/forgotpass"]} exact>
            {token ? <Redirect to="/dashboard" /> : <AuthPageLazy />}
          </Route>
          <Route
            path={[
              "/dashboard",
              "/recordings",
              "/batch/:batchNumber/lecture/:lectureNumber",
            ]}
            exact
          >
            <AppContainerPageLazy />
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
