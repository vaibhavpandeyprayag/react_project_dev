import Alert from './Alert';
import "../../index.css";

export default {
  component: Alert,
  title: 'Components/Alert',
}

export const Main = (args: any) => <Alert {...args}></Alert>;

Main.args = {
  children: "Lorem Ipsum is simply dummy text of the printing.",
  className: "",
}

