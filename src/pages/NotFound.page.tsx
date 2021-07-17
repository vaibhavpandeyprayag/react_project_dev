import { FC, memo } from "react";

interface Props {
}

const NotFoundPage: FC<Props> = (props) => {
  return (
    <div className="bg-red-800 m-4 p-4 text-white font-bold text-2xl">
      Error: Page not found.
    </div>
  );
};

NotFoundPage.defaultProps = {};

export default memo(NotFoundPage);