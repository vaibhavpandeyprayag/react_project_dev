import { FC, memo, useEffect } from "react";
import { AiOutlineLoading, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import GroupsList from "../../components/group/GroupsList";
import Input from "../../components/input/Input";
import { fetchGroups } from "../../middlewares/groups.middleware";
import {
  groupLoadingSelector,
  groupQuerySelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Groups: FC<Props> = (props) => {
  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupLoadingSelector);
  return (
    <div className="flex flex-col w-5/6 m-4 gap-4">
      <Link to="/dashboard">
        <span className="text-indigo-800"> Go to dashboard</span>
      </Link>
      <div className="">
        <Input
          Icon={AiOutlineSearch}
          value={query}
          onChange={(e) =>
            fetchGroups({ query: e.target.value, status: "all-groups" })
          }
        />
        {loading && (
          <AiOutlineLoading
            className="w-6 h-6 animate-spin"
            style={{ stroke: "blue", fill: "blue", strokeWidth: 40 }}
          />
        )}
      </div>
      <GroupsList />
    </div>
  );
};

Groups.defaultProps = {};

export default memo(Groups);
