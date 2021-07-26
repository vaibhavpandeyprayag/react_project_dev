import Button from './Button';
import "../../index.css";

const Template = (args: any) => <Button {...args}></Button>
export const main: any = Template.bind({});
main.args = {
  children: "Sign In",
  type: "submit",
  className: "",
}
export default {
  component: Button,
  title: 'Components/Button',
}
