import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ starsNumbers }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  const ratingHandler = (getCurrentIndex) => {
    setRating(getCurrentIndex);
  };

  const handleMouseEnter = (getCurrentIndex) => {
    setHover(getCurrentIndex);
  };
  const handleMouseLeave = (getCurrentIndex) => {
    setHover(rating);
  };

  return (
    <div>
      <h1 className="text-3xl py-2 font-bold text-center">Star Rating</h1>
      <div className="ratings dflex gap-3 my-6">
        {[...Array(starsNumbers)].map((item, index) => {
          index += 1;
          return (
            <FaStar
              key={index}
              onClick={() => ratingHandler(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              // className={`${
              //   rating >= index + 1 ? "text-yellow-300" : "text-black"
              // } text-3xl`}
              className={`${
                index <= (hover || rating) ? "text-yellow-300" : "text-black"
              } text-3xl`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
