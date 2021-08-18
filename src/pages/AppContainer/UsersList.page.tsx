import { FC, memo } from "react";
import { AiOutlineLoading, AiOutlineSearch } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { usersFetchAction } from "../../actions/users.actions";
import Input from "../../components/input/Input";
import {
  usersLoadingSelector,
  usersQuerySelector,
  usersSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const Users: FC<Props> = (props) => {
  const users = useAppSelector(usersSelector);
  const loading = useAppSelector(usersLoadingSelector);
  const query = useAppSelector(usersQuerySelector);
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-5/6 m-4 gap-4">
      <Link to="/dashboard">
        <span className="text-indigo-800"> Go to dashboard</span>
      </Link>
      <div className="flex gap-4">
        <h2 className="text-lg font-bold">Users</h2>
        {loading && (
          <AiOutlineLoading
            className="w-6 h-6 animate-spin"
            style={{ stroke: "blue", fill: "blue", strokeWidth: 40 }}
          />
        )}
      </div>
      <Input
        Icon={AiOutlineSearch}
        value={query}
        onChange={(e) => dispatch(usersFetchAction(e.target.value))}
      />
      <div className="grid grid-cols-4 flex-shrink-0 p-2 ">
        {!loading &&
          users.map((eachUser) => (
            <Link
              to={`/people/${eachUser.id}`}
              key={eachUser.id}
              className="flex items-center gap-8 my-2 mx-2 px-4 py-3 min-w-min rounded-xl border transform ease-in-out duration-300 active:scale-95 bg-gray-50 hover:bg-gray-200 cursor-pointer"
            >
              <h2 className="text-xl font-medium">{eachUser.first_name}</h2>
            </Link>
          ))}
      </div>
    </div>
  );
};

Users.defaultProps = {};

export default memo(Users);
