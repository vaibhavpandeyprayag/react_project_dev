import { FC, memo } from "react";
import { Link } from "react-router-dom";
import {
  currentQueryGroupsSelector,
  groupLoadingSelector,
} from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {}

const GroupsList: FC<Props> = (props) => {
  const groups = useAppSelector(currentQueryGroupsSelector);
  return (
    <div className="grid grid-cols-2 p-2 ">
      {groups.map((eachGroup) => (
        <Link
          to={`/groups/${eachGroup.id}`}
          key={eachGroup.id}
          className="flex items-center gap-8 my-2 mx-2 px-4 py-3 rounded-xl border transform ease-in-out duration-300 active:scale-95 bg-gray-50 hover:bg-gray-200 cursor-pointer"
        >
          <img
            alt=""
            src={eachGroup.group_image_url}
            className="w-8 h-8 rounded-full "
          />
          <h2 className="text-xl font-medium">{eachGroup.name}</h2>
        </Link>
      ))}
    </div>
  );
};

GroupsList.defaultProps = {};

export default memo(GroupsList);
