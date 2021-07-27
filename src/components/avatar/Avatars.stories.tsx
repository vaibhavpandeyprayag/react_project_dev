import Avatars from './Avatars';
import "../../index.css";

export default {
  component: Avatars,
  title: 'Components/Avatars',
}

export const Main = (args: any) => <Avatars {...args}></Avatars>;

Main.args = {
  status: "none",
  avatarImg: "https://cdna.artstation.com/p/assets/images/images/000/178/910/large/lars-loenstrup-cap-portrait-ll07.jpg?1408971925",
}

