import { FC, memo, useEffect } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { groupsActions } from "../../actions/groups.actions";
import { fetchGroups } from "../../api/group";
import GroupsList from "../../components/group/GroupsList";
import Input from "../../components/input/Input";
import { groupQuerySelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Groups: FC<Props> = (props) => {
  const query = useAppSelector(groupQuerySelector);
  useEffect(() => {
    fetchGroups({ status: "all-groups", query: query }).then((groups) =>
      groupsActions.queryCompleted(query, groups)
    );
  }, [query]);

  return (
    <div className="flex flex-col w-5/6 m-4 gap-4">
      <Link to="/dashboard">
        <span className="text-indigo-800"> Go to dashboard</span>
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

Groups.defaultProps = {};

export default memo(Groups);
