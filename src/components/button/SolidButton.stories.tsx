import SolidButton from './SolidButton';
import "../../index.css";

export default {
  component: SolidButton,
  title: 'Components/Button/Solid',
}

export const Main = (args: any) => <SolidButton {...args}></SolidButton>;

Main.args = {
  children: "Solid Button",
  type: "submit",
  className: "",
}

