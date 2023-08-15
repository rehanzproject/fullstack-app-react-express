import React from "react";
import FoodCardRecommend from "../../molecule/FoodCardRecommend/FoodCardRecommend.molecule";
import burger from "../../../assets/burger1.png";
function OurRecommendation() {
  const list = [
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
    {
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
    },
  ];
  return (
    <div>
      <div className="p-4 md:px-16">
        <h1 className="text-2xl">Our Recommendation</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {list.map((item, i) => (
            <FoodCardRecommend key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurRecommendation;
