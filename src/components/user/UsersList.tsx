import { FC, memo } from "react";
import { Link } from "react-router-dom";
import {
  usersSelector,
  usersLoadingSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UsersList: FC<Props> = (props) => {
  const users = useAppSelector(usersSelector);
  const loading = useAppSelector(usersLoadingSelector);
  return (
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
  );
};

UsersList.defaultProps = {};

export default memo(UsersList);
