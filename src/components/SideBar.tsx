import { FC, memo } from "react";

interface Props {
}

const SideBar: FC<Props> = (props) => {
  return (
    <div className="h-screen w-1/6 bg-blue-800 text-white">
      <h1 className="p-2 text-xl">SideBar</h1>
    </div>
  );
};

SideBar.defaultProps = {};

export default memo(SideBar);