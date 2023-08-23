import React, { useCallback, useEffect, useState } from "react";
import { useBoundStore } from "../../config/zustand/useBoundStore";
import { useNavigate } from "react-router-dom";

function useNavbarViewModel() {
  const navigate = useNavigate();
  const [openCart, setopenCart] = useState(false);
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection, setScrollDirection] = useState("");
  const handleOrder = () => {
    navigate("/order", { state: { items } });
  };
  const items = useBoundStore((state) => state.items);
  const handleNavigation = useCallback(
    (e) => {
      if (y > window.scrollY) {
        setScrollDirection("Up");
      } else if (y < window.scrollY) {
        setScrollDirection("Down");
      }
      setY(window.scrollY);
    },
    [y]
  );
  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  const handleClick = (event) => {
    if (event.key === "Enter") {
      console.log("pppppp");
    }
  };
  return {handleOrder,  handleClick, scrollDirection, setopenCart, openCart, items };
}

export default useNavbarViewModel;
