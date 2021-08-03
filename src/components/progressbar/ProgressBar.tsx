import { FC, HTMLAttributes, memo, ProgressHTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  theme?: "primary" | "secondary" | "dark",
  value: number,
}

const ProgressBar: FC<Props> = ({ theme, value, className, ...rest }) => {
  const themeClasses =
    (theme === "primary"
      ? "bg-blue-500"
      : (theme === "secondary"
        ? "bg-purple-500"
        : "bg-gray-500"
      )
    );
  if (value < 0) {
    console.log("ProgressBar value out of range, Min value: 0, Current value: " + value)
    value = 0;
  }
  else if (value > 100) {
    console.log("ProgressBar value out of range, Max value: 100, Current value: " + value)
    value = 100;
  }

  return (
    <div className=" rounded-full bg-gray-100 h-4 ">
      <div
        {...rest}
        style={{ width: (value + "%") }}
        className={themeClasses + " flex justify-center font-medium text-white text-xs transform ease-in-out duration-500 rounded-full h-full " + className}
      >
        {(value === 0 ? "" : (value + "%"))}
      </div>
    </div>
  );
};

ProgressBar.defaultProps = {
  theme: "primary",
  value: 0,
};

export default memo(ProgressBar);