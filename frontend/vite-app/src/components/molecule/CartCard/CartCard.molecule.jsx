import React, { useState } from "react";
import PlusIcon from "../../atom/icons/PlusIcon";
import MinusIcon from "../../atom/icons/MinusIcon";
import NotesIcon from "../../atom/icons/NotesIcon";
import { formatNumber } from "../../../utils/helper/helperUtils";
import { useBoundStore } from "../../../config/zustand/useBoundStore";

function CartCard({ id, name, qty, price }) {
  const [openLegend, setOpenLegend] = useState(false);
  const convert = formatNumber(price);
  const { increaseQuantityProduct, decreaseQuantityProduct, deleteProduct } =
    useBoundStore((state) => state);

  const handleMinusClick = (id) => decreaseQuantityProduct(id);
  const handlePlusClick = (id) => increaseQuantityProduct(id);

  return (
    <div className="py-4">
      <p className="font-semibold text-sm">{name}</p>
      <div className="flex justify-between items-center">
        <div onClick={() => setOpenLegend(true)} className="flex gap-2">
          {openLegend ? (
            <fieldset>
              <legend>test</legend>
              <input type="text" name="" id="" />
            </fieldset>
          ) : (
            <>
              <NotesIcon />
              <p className="text-success-20 font-bold text-sm">Notes</p>
            </>
          )}
        </div>
        <div className="flex items-center gap-8">
          <MinusIcon
            className="fill-success-20"
            onClick={() =>
              qty <= 1 ? deleteProduct(id) : handleMinusClick(id)
            }
          />
          <p>{qty}</p>
          <PlusIcon onClick={() => handlePlusClick(id)} />
        </div>
        <p className="text-sm">{convert}</p>
      </div>
    </div>
  );
}

export default CartCard;
