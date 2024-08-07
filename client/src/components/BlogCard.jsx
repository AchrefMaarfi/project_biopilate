import { React, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";

export default function BlogCard({ article }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(article.jaimes); // Initialize likes with article's jaimes count

  const toggleLike = () => {
    if (liked) {
      // If already liked, unlike it
      setLikes(likes - 1);
    } else {
      // If not liked yet, like it
      setLikes(likes + 1);
    }
    setLiked(!liked); // Toggle the liked state
  };

  return (
    <div className="flex flex-col justify-center items-center shadow-xl gap-5 rounded-3xl w-[300px] sm:w-[410px]">
      <div className="flex flex-col items-end bg-white">
        <div className="text-3xl z-[1] mb-[-55px] ml-[-55px] pt-6 pr-6">
          {liked ? (
            <FaHeart
              className=" text-red-500 bg-white rounded-xl"
              onClick={toggleLike}
            />
          ) : (
            <FaRegHeart
              className=" text-marron bg-white rounded-xl"
              onClick={toggleLike}
            />
          )}
        </div>
        <img
          loading="lazy"
          src={article.image}
          alt="Aricle"
          className="rounded-3xl w-[280px] h-[231px] sm:w-[384px] sm:h-[318px] object-cover mt-4"
        />
      </div>

      <div className="px-4 flex flex-col gap-3">
        <p className="text-marron text-xl">{article.title}</p>
        <div className="flex items-center gap-2">
          <img
            loading="lazy"
            src={require("../images/biopilate-logo.png")}
            alt="User"
            className="rounded-full w-[22px] h-[22px]"
          />
          <p className="text-sm text-gray-500">{article.ecrivain}</p>
        </div>
        <p className="text-base">{article.description}</p>
        <div className="flex items-center gap-2 text-sm">
          <FaHeart className="text-blueText" />
          <p>{likes} j'aimes</p>
        </div>
      </div>

      <button className="reserver-button flex mb-3 flex-col justify-center items-center text-base rounded-lg w-[90%] py-2 bg-bgColor text-marron ">
        <Link
          to={{ pathname: "/article", state: { article } }}
          className="w-full h-full flex justify-center items-center"
        >
          Lire la suite
        </Link>
      </button>
    </div>
  );
}
