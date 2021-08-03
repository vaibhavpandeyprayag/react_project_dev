import { FC, memo } from "react";
import { logout } from "../api/auth";
import { User } from "../modals/User";
import SolidButton from "./button/SolidButton";

interface Props {
  user: User;
}
const SideBar: FC<Props> = ({ user }) => {
  return (
    <div className="flex flex-col w-1/6 h-screen p-1.5 rounded-r-lg bg-blue-500 text-white fixed left-0 bottom-0 top-0">
      <h1 className="text-xl text-center ">SideBar</h1>
      <div className="my-2">{user.first_name}</div>
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
