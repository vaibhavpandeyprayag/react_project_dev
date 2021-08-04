import { useContext } from "react";
import { FC, memo } from "react";
import { logout } from "../api/auth";
import AppContext from "../App.context";
import SolidButton from "./button/SolidButton";

interface Props {}

const SideBar: FC<Props> = () => {
  const { user } = useContext(AppContext);
  return (
    <div className="flex flex-col w-1/6 h-screen p-1.5 bg-blue-500 text-white fixed left-0 bottom-0 top-0">
      <h1 className="text-xl text-center ">SideBar</h1>
      <div className="my-2">{user!.first_name}</div>
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
