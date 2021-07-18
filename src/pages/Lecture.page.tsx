import { FC, memo } from "react";
import { useParams } from "react-router-dom";

interface Props {
}

const Lecture: FC<Props> = (props) => {
  const data = useParams();

  return (
    <div>
      This is lectures page.
    </div>
  );
};

Lecture.defaultProps = {};

export default memo(Lecture);