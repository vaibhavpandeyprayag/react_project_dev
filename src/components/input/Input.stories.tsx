import Input from './Input';
import "../../index.css";

export default {
  component: Input,
  title: 'Components/Input',
}

export const Main = (args: any) => <Input {...args}></Input>;

Main.args = {
  className: "",
  idAttribute: "",
  nameAttribute: "",
  typeAttribute: "",
  autoCompleteAttribute: "",
  placeholderAttribute: "",
}

