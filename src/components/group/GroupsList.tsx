import { FC, memo } from "react";
import { Group } from "../../modals/Group";
import GroupCard from "./GroupCard";

interface Props {
  groups: Group[];
}

const GroupsList: FC<Props> = ({ groups }) => {
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
