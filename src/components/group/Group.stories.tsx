import GroupCard from "./GroupCard";
import "../../index.css";

export default {
  component: GroupCard,
  title: "Components/GroupCard",
};

export const Main = (args: any) => <GroupCard {...args}></GroupCard>;

Main.args = {};
