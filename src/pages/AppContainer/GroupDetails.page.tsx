import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneGroupAction } from "../../actions/groups.actions";
import GroupCard from "../../components/group/GroupCard";
import { groupQuerySelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupDetails: FC<Props> = (props) => {
  const id = +useParams<{ id: string }>().id;
  const query = useAppSelector(groupQuerySelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOneGroupAction(id.toString()));
  }, [id]);
  return (
    <div className="w-5/6">
      <div className="relative flex flex-col m-4 p-8 gap-4 rounded-xl bg-gray-900">
        <GroupCard />
        <div className="absolute -mt-6 ml-2 flex gap-8 text-md font-semibold text-white">
          <Link to={"/groups/" + (id - 1)}>Previous</Link>
          <Link to={"/groups/" + (id + 1)}>Next</Link>
        </div>
      </div>
    </div>
  );
};

GroupDetails.defaultProps = {};

export default memo(GroupDetails);
