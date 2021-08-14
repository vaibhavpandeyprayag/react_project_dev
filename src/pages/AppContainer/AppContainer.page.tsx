import { FC, memo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SideBar from "../../components/SideBar";
import GroupDetailsPage from "./GroupDetails.page";
import DashboardPage from "./Dashboard.page";
import GroupsListPage1 from "./GroupsList1.page";
import GroupsListPage2 from "./GroupsList2.page";
import GroupsListPage3 from "./GroupsList3.page";
import LecturePage from "./Lecture.page";
import RecordingsPage from "./Recordings.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div className="flex flex-row">
      <div className="w-1/6">
        <SideBar />
      </div>
      <Switch>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
        <Route path="/groups/:id">
          <GroupDetailsPage />
        </Route>
        <Route path="/groupsApproach1">
          <GroupsListPage1 />
        </Route>
        <Route path="/groupsApproach2">
          <GroupsListPage2 />
        </Route>
        <Route path="/groupsApproach3">
          <GroupsListPage3 />
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
