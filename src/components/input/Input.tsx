import { FC, InputHTMLAttributes, memo } from "react";
import { IconType } from "react-icons";
import { HiOutlinePencilAlt } from "react-icons/hi";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: IconType
}

const Input: FC<Props> = ({ Icon, children, className, ...rest }) => {
  return (
    <div className="relative w-full flex items-center pt-2 mb-1">
      {Icon && (
        <span className="absolute text-blue-600">
          <Icon className="w-7 h-7" fill="lightblue" />
        </span>
      )}
      <input
        {...rest}
        className={"w-full text-sm font-medium pt-4 pb-4 pl-9 outline-none ring-0 border-b border-gray-300 placeholder-gray-300 tracking-wider focus:border-blue-700 " + className}
      >
      </input>
    </div >
  );
};

Input.defaultProps = {
  Icon: HiOutlinePencilAlt
};

export default memo(Input);