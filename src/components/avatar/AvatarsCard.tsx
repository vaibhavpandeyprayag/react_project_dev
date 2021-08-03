import { FC, memo } from "react";
import Avatar from "./Avatar";

interface Props {
  avatarUrls: Array<string>,
}

const AvatarsCard: FC<Props> = ({ avatarUrls }) => {
  const avatarUrlsLen = avatarUrls.length;
  const showMore = (avatarUrlsLen > 4) ? true : false;
  return (
    <div className="p-4 w-max text-gray-700 border-gray-200 border shadow-lg">
      <h1 className="flex justify-between items-center text-gray-700 text-xl font-medium mb-8">Avatar Card<span className="ml-8 text-sm text-blue-600">{avatarUrlsLen} avatars</span></h1>
      <div className="flex items-center pl-4">
        {
          showMore
            ? avatarUrls.filter(function (url, index, array) { return ((index < 4) ? url : null) }).map((url) => <Avatar avatarImg={url} />)
            : avatarUrls.map((url) => <Avatar avatarImg={url} />)
        }
        {
          showMore &&
          <div
            className="transform ease-in-out duration-300 hover:-translate-y-2 rounded-full filter drop-shadow-xl -ml-4 px-2 py-1 bg-white border border-gray-100 flex-grow-0 text-sm text-blue-700"
          >+{avatarUrls.length - 4} more
          </div>
        }
      </div>
    </div>
  );
};

AvatarsCard.defaultProps = {
  avatarUrls: [
    "https://cdn.howold.co/uploads/photo/300x300/47/ratan-tata.jpg",
    "https://nursesvote.org/wp-content/uploads/2019/08/Donald_Trump.jpg",
    "https://i.pinimg.com/736x/3a/fa/b7/3afab703a73846bdb94d100a8898d64c.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn8kz5dsrWxOc8hZwu8pdDxdItJtjGGiKFrQ&usqp=CAU",
    "https://cdna.artstation.com/p/assets/images/images/000/178/910/large/lars-loenstrup-cap-portrait-ll07.jpg?1408971925",
  ],
};

export default memo(AvatarsCard);