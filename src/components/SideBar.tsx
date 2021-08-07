import { FC, memo } from "react";
import { logout } from "../api/auth";
import { useAppSelector } from "../store";
import SolidButton from "./button/SolidButton";

interface Props {}

const SideBar: FC<Props> = () => {
  const userFirstName = useAppSelector(
    (state) => state.users.byId[state.auth.id!].first_name
  );
  return (
    <div className="flex flex-col text-center gap-2 w-1/6 h-screen p-1.5 bg-gray-900 text-white fixed left-0 bottom-0 top-0">
      <div className="flex items-center justify-between mb-5">
        <h1 className="text-xl ">SideBar</h1>
        {userFirstName}
      </div>
      <SolidButton className="hover:scale-95" theme="dark" onClick={() => {}}>
        Groups
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
  );
};

SideBar.defaultProps = {};

export default memo(SideBar);
