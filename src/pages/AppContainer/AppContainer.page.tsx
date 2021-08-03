import { FC, memo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SideBar from "../../components/SideBar";
import { User } from "../../modals/User";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";

interface Props {
  user: User;
}

const AppContainer: FC<Props> = ({ user }) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/6">
        <SideBar user={user} />
      </div>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage user={user} />
        </Route>
        <Route path="/recordings">
          <RecordingsPage />
        </Route>
        <Route path="/batch/:batchNumber/lecture/:lectureNumber">
          <LecturePage />
        </Route>
        <Route>
          <Redirect to="/not-found"></Redirect>
        </Route>
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
