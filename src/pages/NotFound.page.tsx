import { FC, memo } from "react";

interface Props {
}

const NotFoundPage: FC<Props> = (props) => {
  return (
    <div className="bg-red-700 m-4 p-4 pb-12 text-white font-bold text-2xl">
      Error: Page not found.
    </div>
  );
};

NotFoundPage.defaultProps = {};

export default memo(NotFoundPage);