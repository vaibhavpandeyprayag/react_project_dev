import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import AppContainerPage from './pages/AppContainer.page';
import AuthPage from './pages/Auth.page';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login" />
        </Route>
        <Route path={["/login", "/signup"]}>
          <AuthPage />
        </Route>
        <Route path={["/dashboard", "/recordings"]}>
          <AppContainerPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
