import ProgressBar from './ProgressBar';
import "../../index.css";

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
}

export const Main = (args: any) => <ProgressBar {...args}></ProgressBar>;

Main.args = {
  value: "0"
}

