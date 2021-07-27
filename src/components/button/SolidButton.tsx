import { ButtonHTMLAttributes, FC, memo } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary" | "dark",
  children: string
}

const SolidButton: FC<Props> = ({ theme, children, className, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "bg-blue-600"
      : (theme === "secondary"
        ? "bg-purple-500"
        : "bg-gray-700");
  return (
    <button
      {...rest}
      className={themeClasses + " w-auto rounded text-white text-sm py-2 px-5 shadow-xl filter drop-shadow-xl hover:shadow-none hover:drop-shadow-none active:drop-shadow-none active:shadow-none transform ease-in-out duration-500 " + className}
    >
      {children}
    </button>
  );
}

SolidButton.defaultProps = {
  theme: "primary"
};

export default memo(SolidButton);