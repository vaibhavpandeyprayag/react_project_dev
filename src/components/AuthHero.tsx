import { FC, memo } from "react";

interface Props {
}

var divStyle = {
  backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/12/10/16/39/shield-1086703_960_720.png)'
};

const AuthHero: FC<Props> = (props) => {
  return (
    <div className="hidden lg:flex h-screen w-1/2 bg-center bg-75% bg-custom-bg p-12 bg-no-repeat" style={divStyle}>
    </div>
  );
};

AuthHero.defaultProps = {};

export default memo(AuthHero);