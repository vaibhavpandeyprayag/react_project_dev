import { FC, memo } from "react";

interface Props {
}

const Dashboard: FC<Props> = (props) => {
  return (
    <div>
      This is Dashboard.
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);