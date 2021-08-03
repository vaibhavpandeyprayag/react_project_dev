import { FC, HTMLAttributes, memo } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  status: "online" | "offline" | "none",
  avatarImg: string,
}

const AvatarsCollection: FC<Props> = ({ status, avatarImg, ...rest }) => {
  const [statusClasses, showStatus] =
    (status === "online"
      ? ["bg-green-700", true]
      : (status === "offline"
        ? ["bg-gray-400", true]
        : ["", false]
      )
    );
  return (
    <div className="flex items-center gap-1">
      <div className="relative">
        <img src={avatarImg} className="rounded-full" style={{ width: 80, height: 80 }} />
        {
          showStatus &&
          <span className={statusClasses + " absolute bottom-0 right-0 rounded-full border-3 border-white "} style={{ width: 25, height: 25 }} />
        }
      </div>
      <div className="relative">
        <img src={avatarImg} className="rounded-full" style={{ width: 65, height: 65 }} />
        {
          showStatus &&
          <span className={statusClasses + " absolute bottom-0 right-0 rounded-full border-3 border-white "} style={{ width: 22, height: 22 }} />
        }
      </div>
      <div className="relative">
        <img src={avatarImg} className="rounded-full" style={{ width: 50, height: 50 }} />
        {
          showStatus &&
          <span className={statusClasses + " absolute bottom-0 right-0 rounded-full border-3 border-white "} style={{ width: 19, height: 19 }} />
        }
      </div>
      <div className="relative">
        <img src={avatarImg} className="rounded-full" style={{ width: 40, height: 40 }} />
        {
          showStatus &&
          <span className={statusClasses + " absolute bottom-0 right-0 rounded-full border-3 border-white "} style={{ width: 16, height: 16 }} />
        }
      </div>
    </div>
  );
};

AvatarsCollection.defaultProps = {
  status: "none",
  avatarImg: "https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png"
};

export default memo(AvatarsCollection);