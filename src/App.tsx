import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { LS_AUTH_TOKEN } from "./api/base";
import AppContainerPage from "./pages/AppContainer.page";
import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>
        <Route path={["/login", "/signup", "/forgotpass"]} exact>
          {token ? <Redirect to="/dashboard" /> : <AuthPage />}
          <AuthPage />
        </Route>
        <Route
          path={[
            "/dashboard",
            "/recordings",
            "/batch/:batchNumber/lecture/:lectureNumber",
          ]}
          exact
        >
          {token ? <AppContainerPage /> : <Redirect to="/login" />}
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
        <Route>
          <Redirect to="/not-found"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
