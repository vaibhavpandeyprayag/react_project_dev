import { FC, memo } from "react";
import { logout } from "../app";
import OutlineButton from "./button/OutlineButton";
import SolidButton from "./button/SolidButton";

interface Props {}
const SideBar: FC<Props> = (props) => {
  return (
    <div className="flex flex-col w-1/6 h-screen p-1.5 rounded-r-lg bg-blue-500 text-white fixed left-0 bottom-0 top-0">
      <h1 className="text-xl text-center ">SideBar</h1>
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
