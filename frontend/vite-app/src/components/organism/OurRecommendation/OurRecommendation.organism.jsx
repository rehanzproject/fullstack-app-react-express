import React from "react";
import FoodCardRecommend from "../../molecule/FoodCardRecommend/FoodCardRecommend.molecule";
import burger from "../../../assets/burger1.png";
import burger3 from "../../../assets/Food1.png";
import { v4 as uuidv4 } from "uuid";
function OurRecommendation() {
  const list = [
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
    {
      id: uuidv4(),
      name: "Burger",
      pict: burger3,
      type: "Fast Food",
      rating: 4.7,
      price: 20000,
    },
  ];
  return (
    <div>
      <div className="p-4 md:px-16">
        <h1 className="text-2xl">Our Recommendation</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-16">
          {list.map((item, i) => (
            <FoodCardRecommend key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurRecommendation;
