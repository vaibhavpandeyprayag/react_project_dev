import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { QueryActionApproach3 } from "../../actions/groups.actions";
import GroupCard from "../../components/group/GroupCard";
import { groupQuerySelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupDetails: FC<Props> = (props) => {
  const params = useParams<any>();
  const query = useAppSelector(groupQuerySelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(QueryActionApproach3(query));
  }, [params]);
  return (
    <div className="flex flex-col w-5/6 m-4 p-8 gap-4 rounded-xl bg-gray-900">
      <GroupCard groupId={params.id} />
    </div>
  );
};

GroupDetails.defaultProps = {};

export default memo(GroupDetails);
