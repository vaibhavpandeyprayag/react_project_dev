import { FC, memo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../modals/User";
import ForgotPasswordPage from "../ForgotPassword.page";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {
  onLogin: (user: User) => void;
}

const Auth: FC<Props> = ({ onLogin }) => {
  return (
    <div className="flex flex-row">
      <Switch>
        <Route path="/login">
          <LoginPage onLogin={onLogin} />
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
