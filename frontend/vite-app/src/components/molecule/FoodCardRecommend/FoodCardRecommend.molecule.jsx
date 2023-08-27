import React from "react";
import RatingIcon from "../../atom/icons/RatingIcon";
import PlusIcon from "../../atom/icons/PlusIcon";
import MinusIcon from "../../atom/icons/MinusIcon";

import { Link } from "react-router-dom";
import { useBoundStore } from "../../../config/zustand/useBoundStore";
import { formatNumber } from "../../../utils/helper/helperUtils";
import NotesIcon from "../../atom/icons/NotesIcon";

function FoodCardRecommend(props) {
  const { id, pict, name, type, rating, price } = props;
  const { items , addProduct , increaseQuantityProduct , decreaseQuantityProduct ,deleteProduct } = useBoundStore((state) => state);
  const isProductInCart = items.some((item) => item.id === id);
  const foundProduct = items.find((item) => item.id === id);
  const productQuantity = foundProduct ? foundProduct.qty : 0; // Get the quantity from the found product
  
  const addToCart = () => addProduct({ ...props, qty: 1 });

  return (
    <div className="flex flex-col md:flex-row border rounded-xl p-2 md:block gap-4">
      <div className="relative h-[200px] md:w-[200px] w-full">
        <Link to={`/food/${name}-${id}`}>
          <img
            src={pict}
            alt={name}
            className="rounded-xl object-center object-cover w-full h-full"
          />
        </Link>
        <div className="absolute gap-2 flex items-center bottom-0 right-0 text-sm bg-white px-4 m-4 rounded-full">
          <RatingIcon /> {rating}
        </div>
      </div>
      <div className="block md:flex-1">
        <div>
          <p className="font-bold">{name}</p>
          <p className="text-xs">{type}</p>
          <p>{formatNumber(price)}</p>
        </div>
        {isProductInCart ? (
          <div className="flex justify-between">
            <div className="flex">
              <NotesIcon />
              <p className="hidden md:flex text-sm text-success-20">Notes</p>
            </div>
            <div className="flex items-center gap-2 ">
              <PlusIcon onClick={()=>increaseQuantityProduct(id)} />
              <p>{productQuantity}</p>
              <MinusIcon onClick={()=>productQuantity <= 1  ? deleteProduct(id): decreaseQuantityProduct(id)} className='fill-success-20' />
            </div>
          </div>
        ) : (
          <button
            onClick={addToCart}
            className="border border-green-500 rounded-full w-full py-2"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default FoodCardRecommend;
