import { FC, HTMLAttributes, memo } from "react";
import {
  selectedGroupCreatorSelector,
  selectedGroupErrorSelector,
  selectedGroupInvitedMembersSelector,
  selectedGroupLoadingSelector,
  selectedGroupParticipantsSelector,
  selectedGroupSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props extends HTMLAttributes<HTMLDivElement> {
  imgclassName?: string;
}

const GroupCard: FC<Props> = ({ imgclassName, className }) => {
  const group = useAppSelector(selectedGroupSelector);
  const loading = useAppSelector(selectedGroupLoadingSelector);
  const error = useAppSelector(selectedGroupErrorSelector);
  const creator = useAppSelector(selectedGroupCreatorSelector);
  const participants = useAppSelector(selectedGroupParticipantsSelector)?.join(
    ", "
  );
  const invitedMembers = useAppSelector(
    selectedGroupInvitedMembersSelector
  )?.join(", ");
  return (
    <div>
      {group && group !== null ? (
        <div
          className={
            "relative flex items-start gap-8 my-2 mx-2 p-8 rounded-xl border bg-gray-50 hover:bg-gray-200 " +
            className
          }
          key={group.id}
        >
          <h3 className="absolute -top-8 right-0 text-white font-medium">
            Group Card
          </h3>
          <img
            alt=""
            src={group.group_image_url}
            className={"w-20 h-20 rounded-full " + imgclassName}
          />
          <div className="flex flex-col tracking-wide gap-2">
            <h2 className="text-3xl font-medium mb-8">{group.name}</h2>
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
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Creator: </span>
              {creator
                ? (creator.first_name ? creator.first_name : "") +
                  " " +
                  (creator.middle_name ? creator.middle_name : "") +
                  " " +
                  (creator.last_name ? creator.last_name : "")
                : ""}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Participants: </span>
              {participants ? participants : ""}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Invited Members: </span>
              {invitedMembers ? invitedMembers : ""}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Updated at: </span>
              {group.updated_at}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Chat Count: </span>
              {group.chatCount}
            </h3>
            <h3 className="text-sm font-normal">
              <span className="font-semibold">Is Private: </span>
              {group.is_private ? "Yes" : "No"}
            </h3>
          </div>
        </div>
      ) : error || group === null ? (
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

GroupCard.defaultProps = {};

export default memo(GroupCard);
