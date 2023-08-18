import * as React from "react";

function MinusIcon({ qty, onClick }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      fill={(qty = 1 ? "gray" : "green")}
      onClick={onClick}
      viewBox="0 0 24 24"
    >
      <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8zm4-9H8a1 1 0 000 2h8a1 1 0 000-2z" />
    </svg>
  );
}

export default MinusIcon;
