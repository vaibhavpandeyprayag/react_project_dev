import { FC, memo } from "react";
import { useAppSelector } from "../../store";
import GroupCard from "./GroupCard";

interface Props {}

const GroupsList: FC<Props> = (props) => {
  const groups = useAppSelector((state) => state.groups);
  return (
    <div className="p-2 ">
      {groups.map((eachGroup) => (
        <GroupCard key={eachGroup.id} group={eachGroup} />
      ))}
    </div>
  );
};

GroupsList.defaultProps = {};

export default memo(GroupsList);
