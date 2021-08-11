import { FC, HTMLAttributes, memo } from "react";
import { currentQueryGroupsSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props extends HTMLAttributes<HTMLDivElement> {
  groupId: number;
  imgclassName?: string;
}

const GroupCard: FC<Props> = ({ groupId, imgclassName, className }) => {
  const group = useAppSelector(currentQueryGroupsSelector).filter(
    (eachGroup) => eachGroup.id == groupId
  );
  return (
    <>
      {group.map((onlyGroup) => (
        <div
          className={
            "relative flex items-start gap-8 my-2 mx-2 p-8 rounded-xl border bg-gray-50 hover:bg-gray-200 " +
            className
          }
          key={onlyGroup.id}
        >
          <h3 className="absolute -top-8 right-0 text-white font-medium">
            Group Card
          </h3>
          <img
            alt=""
            src={onlyGroup.group_image_url}
            className={"w-20 h-20 rounded-full " + imgclassName}
          />
          <div className="flex flex-col tracking-wide gap-2">
            <h2 className="text-3xl font-medium mb-8">{onlyGroup.name}</h2>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">ID: </span>
              {onlyGroup.id}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Description: </span>
              {onlyGroup.description}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Created at: </span>
              {onlyGroup.created_at}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Creator: </span>
              {onlyGroup.creator.first_name +
                " " +
                (onlyGroup.creator.middle_name
                  ? onlyGroup.creator.middle_name
                  : "") +
                " " +
                onlyGroup.creator.last_name}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Updated at: </span>
              {onlyGroup.updated_at}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Chat Count: </span>
              {onlyGroup.chatCount}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Is Private: </span>
              {onlyGroup.is_private ? "Yes" : "No"}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

GroupCard.defaultProps = {};

export default memo(GroupCard);
