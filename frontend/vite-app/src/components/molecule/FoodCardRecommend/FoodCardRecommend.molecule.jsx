import React from "react";
import RatingIcon from "../../atom/icons/RatingIcon";
import { Link } from "react-router-dom";
import { useBoundStore } from "../../../config/zustand/useBoundStore";
import { formatNumber } from "../../../utils/helper/helperUtils";
function FoodCardRecommend(props) {
  const { pict, name, type, rating, price } = props;
  const addProduct = useBoundStore((state) => state.addProduct);

  const addToCart = () => {
    addProduct({ ...props, qty: 1 });
  };

  return (
    <div className="flex flex-col md:flex-row border rounded-xl p-2 md:block gap-4">
      <div className="relative h-[200px] md:w-[200px] w-full">
        <Link to={`/${name}`}>
          <img
            src={pict}
            alt=""
            className="rounded-xl object-center object-cover w-full h-full"
          />
        </Link>
        <div className="absolute flex bottom-0 right-0  bg-white px-4 m-4 rounded-full">
          <RatingIcon /> {rating}
        </div>
      </div>
      <div className="block md:flex-1">
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-xs">{type}</p>
          <p>{formatNumber(price)}</p>
        </div>
        <button
          onClick={addToCart}
          className="border border-green-500 rounded-full w-full py-2"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default FoodCardRecommend;
