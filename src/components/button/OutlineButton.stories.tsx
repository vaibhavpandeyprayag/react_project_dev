import OutlineButton from './OutlineButton';
import "../../index.css";

export default {
  component: OutlineButton,
  title: 'Components/Button/Outline',
}

export const Main = (args: any) => <OutlineButton {...args}></OutlineButton>;

Main.args = {
  children: "Outline Button",
  type: "submit",
  className: "",
}

