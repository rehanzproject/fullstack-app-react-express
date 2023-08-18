import React, { useState } from "react";
import PlusIcon from "../../atom/icons/PlusIcon";
import MinusIcon from "../../atom/icons/MinusIcon";
import NotesIcon from "../../atom/icons/NotesIcon";
import { formatNumber } from "../../../utils/helper/helperUtils";

function CartCard({ id, name, qty, price }) {
  const convert = formatNumber(price);
  const storedItems = JSON.parse(localStorage.getItem("cartstorage")) || [];
  const handleMinusClick = (itemId) => {
    const updatedItems = storedItems.map((item) => {
      if (item.id === itemId && item.qty > 0) {
        return { ...item, qty: item.qty - 1 };
      }
      return item;
    });

    localStorage.setItem("cartstorage", JSON.stringify(updatedItems));
    // Update state to trigger re-render
    setItems(updatedItems);
  };
  const handlePlusClick = (itemId) => {
    const updatedItems = storedItems.map((item) => {
      if (item.id === itemId && item.qty > 0) {
        return { ...item, qty: item.qty + 1 };
      }
      return item;
    });

    localStorage.setItem("cartstorage", JSON.stringify(updatedItems));
    // Update state to trigger re-render
    setItems(updatedItems);
  };

  const [items, setItems] = useState(storedItems);
  return (
    <div className="pt-4">
      <p className="font-semibold">{name}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <NotesIcon />
          <p className="text-green-500 font-bold text-sm">Notes</p>
        </div>
        <div className="flex items-center gap-8">
          <MinusIcon
            qty={qty}
            onClick={() => handleMinusClick(id)}
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
