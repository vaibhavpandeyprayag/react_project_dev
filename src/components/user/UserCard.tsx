import { FC, memo } from "react";
import {
  selectedUserSelector,
  selectedUserLoadingSelector,
  selectedUserErrorSelector,
} from "../../selectors/users.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const UserCard: FC<Props> = (props) => {
  const user = useAppSelector(selectedUserSelector);
  const loading = useAppSelector(selectedUserLoadingSelector);
  const error = useAppSelector(selectedUserErrorSelector);
  return (
    <div>
      {user ? (
        <div
          className={
            "relative flex items-start gap-8 my-2 mx-2 p-8 rounded-xl border bg-gray-50 hover:bg-gray-200 "
          }
          key={user.id}
        >
          <h3 className="absolute -top-8 right-0 text-white font-medium">
            Group Card
          </h3>
          <div className="flex flex-col tracking-wide gap-2">
            <h2 className="text-3xl font-medium mb-8">{user.first_name}</h2>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">ID: </span>
              {user.id}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">First Name: </span>
              {user.first_name}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Middle Name: </span>
              {user.middle_name ? user.middle_name : ""}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Last Name: </span>
              {user.last_name ? user.last_name : ""}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Role: </span>
              {user.role ? user.role : ""}
            </h3>
          </div>
        </div>
      ) : error ? (
        <div className="text-white text-lg font-semibold text-center">
          {"Error: " + error}
        </div>
      ) : (
        <></>
      )}
      {loading && (
        <div className="text-white text-lg font-semibold text-center">
          Loading...
        </div>
      )}
    </div>
  );
};

UserCard.defaultProps = {};

export default memo(UserCard);
