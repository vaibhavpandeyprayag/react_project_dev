import { ButtonHTMLAttributes, FC, HTMLAttributes, memo, useState } from "react";
import * as Icons from "react-icons/io";

interface Props extends HTMLAttributes<HTMLDivElement> {
  theme?: "primary" | "warning" | "success" | "error",
  children: string
}

const Alert: FC<Props> = ({ theme, children, className, ...rest }) => {
  const [display, setdisplay] = useState("flex");

  let themeClasses;
  let alertType;

  if (theme === "primary") {
    alertType = "Primary!"
    themeClasses = "bg-indigo-50 text-indigo-500";
  }
  else if (theme === "warning") {
    alertType = "Warning!"
    themeClasses = "bg-yellow-50 text-yellow-500";
  }
  else if (theme === "success") {
    alertType = "Success!"
    themeClasses = "bg-green-50 text-green-500";
  }
  else if (theme === "error") {
    alertType = "Error!"
    themeClasses = "bg-red-50 text-red-500";
  }

  return (
    <div
      {...rest}
      className={themeClasses + " " + display + " items-center text-sm justify-between p-4 rounded-md  " + className}
    >
      <div><span className="font-medium">{alertType}</span> {children}</div>
      <button
        className=" hover:opacity-50"
        onClick={() => setdisplay("hidden")}
      >
        <Icons.IoMdClose className="w-5 h-5" />
      </button>
    </div>
  );
};

Alert.defaultProps = {
  theme: "primary",
};

export default memo(Alert);