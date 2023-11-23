import React from "react";
import FoodCardRecommend from "../../molecule/FoodCardRecommend/FoodCardRecommend.molecule";
import { list } from "./constant";
function OurRecommendation() {
  return (
    <div>
      <div className="p-4 md:px-16">
        <h1 className="text-2xl">Our Recommendation</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-16">
          {list.map((item, i) => (
            <FoodCardRecommend key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurRecommendation;
