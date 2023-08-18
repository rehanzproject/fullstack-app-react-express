import React from "react";
import RatingIcon from "../../atom/icons/RatingIcon"
function FoodCardRecommend({ pict, name, desc, type, rating }) {
  return (
    <div className="flex md:block gap-4">
      <div className="relative">
        <img src={pict} alt="" className="w-36 md:w-auto" />
        <div className="absolute flex bottom-0 right-0 lg:right-24 bg-white px-4 m-4 rounded-full">
        <RatingIcon />  {rating}
        </div>
      </div>
      <div className="flex flex-col">
        <p className="font-bold">{name}</p>
        <p className="text-xs">{type}</p>
      </div>
    </div>
  );
}

export default FoodCardRecommend;
