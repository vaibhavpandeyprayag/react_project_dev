import { FC, memo } from "react";
import { useHistory } from "react-router-dom";
import { logout } from "../app";
import SolidButton from "./button/SolidButton";

interface Props {}
const SideBar: FC<Props> = (props) => {
  return (
    <div className="flex flex-col h-screen w-1/6 p-1.5 bg-blue-800 text-white">
      <h1 className="text-xl text-center">SideBar</h1>
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
