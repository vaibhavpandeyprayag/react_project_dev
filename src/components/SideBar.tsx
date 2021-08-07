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
    <div className="flex flex-col w-1/6 h-screen p-1.5 bg-blue-500 text-white fixed left-0 bottom-0 top-0">
      <h1 className="text-xl text-center ">SideBar</h1>
      <div className="my-2">{userFirstName}</div>
      <SolidButton
        className=""
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
