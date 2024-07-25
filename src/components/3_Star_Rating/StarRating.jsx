import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ starsNumbers }) => {
  const [rating, setRating] = useState(null);

  console.log(rating);

  return (
    <div>
      <h1 className="text-3xl py-2 font-bold text-center">Star Rating</h1>
      <div className="ratings dflex gap-3 my-6">
        {[...Array(starsNumbers)].map((item, index) => (
          <FaStar
            key={index}
            onClick={() => setRating(index + 1)}
            onMouseEnter={() => setRating(index + 1)}
            onMouseLeave={() => setRating(index + 1)}
            className={`${
              rating >= index + 1 ? "text-yellow-300" : "text-black"
            } text-3xl`}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
