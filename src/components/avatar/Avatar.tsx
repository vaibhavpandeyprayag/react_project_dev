import { FC, HTMLAttributes, memo } from "react";

interface Props extends HTMLAttributes<HTMLImageElement> {
  avatarImg: string,
}

const Avatar: FC<Props> = ({ avatarImg, className }) => {
  return (
    <img
      src={avatarImg}
      className={"transform ease-in-out duration-300 hover:-translate-y-4 rounded-full border-3 border-white filter drop-shadow-xl -ml-4 " + className}
      style={{ width: 70, height: 70 }}
    />
  );
};

Avatar.defaultProps = {
  avatarImg: "https://cdna.artstation.com/p/assets/images/images/000/178/910/large/lars-loenstrup-cap-portrait-ll07.jpg?1408971925",
};

export default memo(Avatar);