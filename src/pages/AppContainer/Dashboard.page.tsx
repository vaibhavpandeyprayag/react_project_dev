import { FC, memo } from "react";
import { useAppSelector } from "../../store";
import { meSelector } from "../../selectors/auth.selectors";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const user = useAppSelector(meSelector);

  return (
    <div className="flex flex-col w-5/6 m-4 gap-4">
      <h1>Hello {user!.first_name} ~ Welcome to Dashboard.</h1>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
