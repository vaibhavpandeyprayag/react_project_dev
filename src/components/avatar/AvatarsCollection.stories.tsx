import AvatarsCollection from './AvatarsCollection';
import "../../index.css";

export default {
  component: AvatarsCollection,
  title: 'Components/Avatar/AvatarsCollection',
}

export const Main = (args: any) => <AvatarsCollection {...args}></AvatarsCollection>;

Main.args = {
  status: "none",
  avatarImg: "https://cdna.artstation.com/p/assets/images/images/000/178/910/large/lars-loenstrup-cap-portrait-ll07.jpg?1408971925",
}

