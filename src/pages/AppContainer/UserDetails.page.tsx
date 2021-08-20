import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchOneUserAction } from "../../actions/users.actions";
import UserCard from "../../components/user/UserCard";

interface Props {}

const UserDetails: FC<Props> = (props) => {
  const id = +useParams<{ id: string }>().id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneUserAction(id.toString()));
  }, [id]);
  return (
    <div className="w-5/6">
      <div className="relative flex flex-col m-4 p-8 gap-4 rounded-xl bg-gray-900">
        <UserCard />
      </div>
    </div>
  );
};

UserDetails.defaultProps = {};

export default memo(UserDetails);
