import { FC, memo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import ForgotPasswordPage from "../ForgotPassword.page";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {}

const Auth: FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/forgotpass">
          <ForgotPasswordPage />
        </Route>
        <Route>
          <Redirect to="/not-found"></Redirect>
        </Route>
      </Switch>
      <AuthHero />
    </div>
  );
};

Auth.defaultProps = {};

export default memo(Auth);
