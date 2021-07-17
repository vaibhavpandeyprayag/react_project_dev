import { FC, memo } from "react";
import { Link } from "react-router-dom";

interface Props {
}

const Login: FC<Props> = (props) => {
  return (
    <div className="w-1/2">This is Login page. Don't have an account. <Link to="/signup"><span className="text-indigo-800"> Click here</span></Link> <Link to="/dashboard"><span className="text-indigo-800"> Go to dashboard</span></Link>
    </div>
  );
};

Login.defaultProps = {};

export default memo(Login);