import { FC, memo } from "react";
import { AiOutlineLoading, AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { QueryActionApproach2 } from "../../actions/groups.actions";
import GroupsList from "../../components/group/GroupsList";
import Input from "../../components/input/Input";
import {
  groupsLoadingSelector,
  groupQuerySelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Groups: FC<Props> = (props) => {
  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupsLoadingSelector);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-5/6 m-4 gap-4">
      <Link to="/dashboard">
        <span className="text-indigo-800"> Go to dashboard</span>
      </Link>
      <div className="">
        <Input
          Icon={AiOutlineSearch}
          value={query}
          onChange={(e) => dispatch(QueryActionApproach2(e.target.value))}
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
