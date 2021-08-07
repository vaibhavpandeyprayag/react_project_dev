import { useEffect } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import GroupsList from "../../components/group/GroupsList";
import Input from "../../components/input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchGroups } from "../../api/group";
import { useAppSelector } from "../../store";
import { groupsActions } from "../../actions/groups.actions";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const query = useAppSelector((state) => state.groups.query);

  const user = useAppSelector((state) => state.users.byId[state.auth.id!]);

  useEffect(() => {
    fetchGroups({ status: "all-groups", query: query }).then((groups) =>
      groupsActions.queryCompleted(query, groups)
    );
  }, [query]);
  return (
    <div className="flex flex-col w-5/6 m-4 gap-4">
      <h1>Hello {user!.first_name} ~ Welcome to Dashboard.</h1>
      <Link className="w-auto mr-auto" to="/recordings">
        <span className="text-indigo-800"> Go to Recordings</span>
      </Link>
      <div className="">
        <Input
          Icon={AiOutlineSearch}
          value={query}
          onChange={(e) => groupsActions.query(e.target.value)}
        />
        <GroupsList />
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
