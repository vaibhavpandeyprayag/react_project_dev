import { ButtonHTMLAttributes, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary" | "dark",
  children: string
}

const OutlineButton: FC<Props> = ({ theme, children, className, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "text-blue-500 border border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-xl filter hover:drop-shadow-xl"
      : (theme === "secondary"
        ? "text-purple-500 border border-purple-600 hover:bg-purple-600 hover:text-white hover:shadow-xl filter hover:drop-shadow-xl"
        : "text-gray-500 border border-gray-600 hover:bg-gray-600 hover:text-white hover:shadow-xl filter hover:drop-shadow-xl");
  return (
    <button
      {...rest}
      className={themeClasses + " w-auto rounded text-sm py-2 px-5 active:drop-shadow-none active:shadow-none transform ease-in-out duration-500 " + className}
    >
      {children}
    </button>
  );
}

OutlineButton.defaultProps = {
  theme: "primary"
};

export default memo(OutlineButton);