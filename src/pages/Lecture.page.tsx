import { FC, memo } from "react";
import { useParams } from "react-router-dom";

interface Props {
}

const Lecture: FC<Props> = (props) => {
  const { batchNumber, lectureNumber } = useParams<any>();

  return (
    <div>
      This is lectures page. Lecture #{lectureNumber} of batch #{batchNumber}
    </div>
  );
};

Lecture.defaultProps = {};

export default memo(Lecture);