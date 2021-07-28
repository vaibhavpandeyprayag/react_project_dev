import AvatarsCard from './AvatarsCard';
import "../../index.css";

export default {
  component: AvatarsCard,
  title: 'Components/Avatar/AvatarsCard',
}

export const Main = (args: any) => <AvatarsCard {...args}></AvatarsCard>;

Main.args = {
  avatarUrls: [
    "https://cdn.howold.co/uploads/photo/300x300/47/ratan-tata.jpg",
    "https://nursesvote.org/wp-content/uploads/2019/08/Donald_Trump.jpg",
    "https://i.pinimg.com/736x/3a/fa/b7/3afab703a73846bdb94d100a8898d64c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8kz5dsrWxOc8hZwu8pdDxdItJtjGGiKFrQ&usqp=CAU",
    "https://cdna.artstation.com/p/assets/images/images/000/178/910/large/lars-loenstrup-cap-portrait-ll07.jpg?1408971925",
    "https://cdn.howold.co/uploads/photo/300x300/47/ratan-tata.jpg",
    "https://nursesvote.org/wp-content/uploads/2019/08/Donald_Trump.jpg",
    "https://i.pinimg.com/736x/3a/fa/b7/3afab703a73846bdb94d100a8898d64c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8kz5dsrWxOc8hZwu8pdDxdItJtjGGiKFrQ&usqp=CAU",
    "https://cdna.artstation.com/p/assets/images/images/000/178/910/large/lars-loenstrup-cap-portrait-ll07.jpg?1408971925",
  ],
}

