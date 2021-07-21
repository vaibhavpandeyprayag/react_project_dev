import { FC, memo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SideBar from "../components/SideBar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";

interface Props {
}

const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
      <SideBar />
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
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