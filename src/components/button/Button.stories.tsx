import Button from './Button';
import "../../index.css";

export default {
  component: Button,
  title: 'Components/Button',
}

export const Main = (args: any) => <Button {...args}></Button>;

Main.args = {
  children: "Sign In",
  type: "submit",
  className: "",
}

