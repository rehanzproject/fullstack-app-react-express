import React, { useState } from "react";
import PlusIcon from "../../atom/icons/PlusIcon";
import MinusIcon from "../../atom/icons/MinusIcon";
import NotesIcon from "../../atom/icons/NotesIcon";
import { formatNumber } from "../../../utils/helper/helperUtils";
import { useBoundStore } from "../../../config/zustand/useBoundStore";

function CartCard({ id, name, qty, price }) {
  const convert = formatNumber(price);
  const addQty = useBoundStore((state) => state.addQuantityProduct);

  const handleMinusClick = (id) => {};

  const handlePlusClick = (id) => {
    addQty(id);
  };

  const [items, setItems] = useState("");
  return (
    <div className="pt-4">
      <p className="font-semibold">{name}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <NotesIcon />
          <p className="text-green-500 font-bold text-sm">Notes</p>
        </div>
        <div className="flex items-center gap-8">
          <MinusIcon qty={qty} onClick={() => handleMinusClick(id)} />
          <p>{qty}</p>
          <PlusIcon onClick={handlePlusClick} />
        </div>
        <p className="text-sm">{convert}</p>
      </div>
    </div>
  );
}

export default CartCard;
