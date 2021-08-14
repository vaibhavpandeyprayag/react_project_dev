import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../api/auth";
import { meSelector } from "../selectors/auth.selectors";
import { useAppSelector } from "../store";
import SolidButton from "./button/SolidButton";

interface Props {}

const SideBar: FC<Props> = () => {
  const history = useHistory();
  const userFirstName = useAppSelector(meSelector)?.first_name;
  return (
    <div className="w-1/6 h-screen p-1.5 bg-gray-900 text-white fixed left-0 bottom-0 top-0">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between mb-5">
          <h1 className="text-xl ">SideBar</h1>
          {userFirstName}
        </div>
        <SolidButton
          className="hover:scale-95"
          theme="dark"
          onClick={() => {
            history.push("/groupsApproach1");
          }}
        >
          Groups (Request Approach 1)
        </SolidButton>
        <SolidButton
          className="hover:scale-95"
          theme="dark"
          onClick={() => {
            history.push("/groupsApproach2");
          }}
        >
          Groups (Request Approach 2)
        </SolidButton>
        <SolidButton
          className="hover:scale-95"
          theme="dark"
          onClick={() => {
            history.push("/groupsApproach3");
          }}
        >
          Groups (Request Approach 2)
        </SolidButton>
        <SolidButton
          className="hover:scale-95"
          theme="dark"
          onClick={() => {
            history.push("/recordings");
          }}
        >
          Recordings
        </SolidButton>
        <SolidButton
          className="hover:scale-95"
          theme="dark"
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          Logout
        </SolidButton>
      </div>
    </div>
  );
};

SideBar.defaultProps = {};

export default memo(SideBar);
