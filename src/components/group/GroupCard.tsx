import { FC, HTMLAttributes, memo } from "react";
import { Group } from "../../app";

interface Props extends HTMLAttributes<HTMLDivElement> {
  group: Group;
  imgclassName?: string;
}

const GroupCard: FC<Props> = ({ group, imgclassName, className }) => {
  return (
    <div
      className={
        "flex items-center gap-8 my-2 mx-2 px-4 py-3 text-white rounded-lg border border-blue-500 bg-blue-500 hover:bg-blue-600 " +
        className
      }
    >
      <img
        src={group.group_image_url}
        className={"w-20 h-20 rounded-full " + imgclassName}
      />
      <div className="flex flex-col">
        <h2 className="text-xl font-medium mb-1">{group.name}</h2>
        <h3 className="text-sm font-normal">
          <span className="font-semibold">ID: </span>
          {group.id}
        </h3>
        <h3 className="text-sm font-normal">
          <span className="font-semibold">Description: </span>
          {group.description}
        </h3>
        <h3 className="text-sm font-normal">
          <span className="font-semibold">Created at: </span>
          {group.created_at}
        </h3>
      </div>
    </div>
  );
};

GroupCard.defaultProps = {};

export default memo(GroupCard);
