import { FC, memo } from "react";
import { Link } from "react-router-dom";
import SideBar from "../components/SideBar";

interface Props {
}

const Dashboard: FC<Props> = (props) => {
  return (
    <div>
      This is Dashboard. <Link to="/recordings"><span className="text-indigo-800"> Go to Recordings</span></Link>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);