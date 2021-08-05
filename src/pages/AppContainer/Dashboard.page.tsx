import { useEffect, useState } from "react";
import { FC, memo } from "react";
import { Link } from "react-router-dom";
import GroupsList from "../../components/group/GroupsList";
import Input from "../../components/input/Input";
import { AiOutlineSearch } from "react-icons/ai";
import { fetchGroups } from "../../api/group";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store";

interface Props {}

const Dashboard: FC<Props> = (props) => {
  const [query, setQuery] = useState("");
  const user = useAppSelector((state) => state.me);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchGroups({ status: "all-groups", query: query }).then((response) =>
      dispatch({ type: "groups/fetch", payload: response })
    );
  }, [query]);
  return (
    <div className="flex flex-col w-5/6 h-screen m-4 gap-4">
      <h1>Hello {user!.first_name} ~ Welcome to Dashboard.</h1>
      <Link className="w-auto mr-auto" to="/recordings">
        <span className="text-indigo-800"> Go to Recordings</span>
      </Link>
      <div className="">
        <Input
          Icon={AiOutlineSearch}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
        <GroupsList />
      </div>
    </div>
  );
};

Dashboard.defaultProps = {};

export default memo(Dashboard);
