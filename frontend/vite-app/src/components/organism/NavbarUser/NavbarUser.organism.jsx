import React, { Fragment, useCallback, useEffect, useState } from "react";
import SearchIcon from "../../atom/icons/SearchIcon";
import { Menu, Transition } from "@headlessui/react";
import DropdownProfile from "../../molecule/DropdownProfile/DropdownProfile.molecule";
import CartIcon from "../../atom/icons/CartIcon";
import XIcon from "../../atom/icons/XIcon";
import { motion, AnimatePresence } from "framer-motion";
import CartCard from "../../molecule/CartCard/CartCard.molecule";
import {
  formatNumber,
  getTotalProduct,
} from "../../../utils/helper/helperUtils";
import { useBoundStore } from "../../../config/zustand/useBoundStore";
import SidebarUser from "../SidebarUser/SidebarUser.organism";

function NavbarUser() {
  const [openCart, setopenCart] = useState(false);
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const [scrollDirection, setScrollDirection] = useState("");
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
  return (
    <div className={`sticky top-0 w-full z-50`}>
      <div className="bg-gray-100 p-4 border-b">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <h1 className="px-8 md:px-4">Diverse Food</h1>
            <SidebarUser />
          </div>
          {/* Large Mode */}
          <div className="hidden lg:flex relative">
            <input
              type="text"
              name=""
              id=""
              onKeyDown={handleClick}
              className="px-8 rounded-full border-1 outline-none focus:outline-none w-96"
              placeholder="Type to search..."
            />
            <SearchIcon className="absolute right-0 items-center m-2" />
          </div>
        </div>
      </div>
      {/* small */}
      <motion.div
        initial={{ y: "100%" , opacity: 0 }}
        animate={{
          opacity: scrollDirection === "Up" ? 1 : 0,
          y: scrollDirection === "Up" ? "0%" : "-100%", // You can include y animation here if needed
        }}
        exit={{ y: "100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-gray-50 lg:hidden justify-between items-center flex py-4"
      >
        <p className="text-dark-30 text-xs md:text-sm px-4 md:px-16">
          Explore good grubs in Diverse Restaurant
        </p>
        <input
          type="text"
          name=""
          id=""
          autoFocus
          onKeyDown={handleClick}
          className="px-8 rounded-full outline-none focus:outline-none w-52"
          placeholder="Type to search..."
        />
        <SearchIcon className="absolute right-0 items-center mr-6 my-2" />
      </motion.div>

      <div className="absolute right-0 top-0 flex py-4 px-12">
        <DropdownProfile />
        <div
          onClick={() => setopenCart(!openCart)}
          className="relative rounded-full p-2 hover:bg-dark-20/50"
        >
          <CartIcon width="25" height="40" />
          <div className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-500 text-xs rounded-full px-2 py-1 font-bold text-white">
            {items.length}
          </div>
          <AnimatePresence>
            {openCart && (
              <div>
                {/* Small */}
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "100%" }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="flex rounded-xl md:hidden fixed bottom-0 left-0 w-screen h-96 bg-white"
                >
                  {" "}
                  <div
                    onClick={() => setopenCart(false)}
                    className="absolute flex -mt-12 bg-gray-100 right-4 p-2 rounded-full"
                  >
                    <XIcon />
                  </div>
                  {items.length ? (
                    <div className="w-full p-4">
                      <h1 className="text-lg font-bold">Your Order</h1>
                      <div className="h-64 overflow-y-auto">
                        {items?.map((items) => (
                          <CartCard key={items.id} {...items} />
                        ))}
                      </div>

                      <div className="border-t font-bold">
                        <div className="flex justify-between">
                          <h1>Total Price</h1>
                          <p className="text-lg">
                            IDR {formatNumber(getTotalProduct(items))}{" "}
                          </p>
                        </div>
                        <button className="w-full rounded-full bg-success-20 py-2 text-white">
                          Order Now!
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center items-center w-full h-full gap-4 text-center">
                      <CartIcon fill="red" />
                      <p className="text-dark-30 text-sm">
                        Your cart is empty. Let's discover our collections of
                        popular dishes.
                      </p>
                    </div>
                  )}
                </motion.div>

                {/* Large */}
                <div className="absolute hidden rounded-xl shadow-xl md:flex bg-white right-0 w-96 my-4">
                  {items.length ? (
                    <div className="w-full p-4">
                      <h1 className="text-lg font-bold">Your Order</h1>
                      <div className="h-64 overflow-y-auto">
                        {items?.map((items) => (
                          <CartCard key={items.id} {...items} />
                        ))}
                      </div>

                      <div className="border-t font-bold py-4">
                        <div className="flex justify-between">
                          <h1>Total Price</h1>
                          <p className="text-lg">
                            IDR {formatNumber(getTotalProduct(items))}{" "}
                          </p>
                        </div>
                        <button className="w-full rounded-full bg-success-20 py-2 text-white">
                          Order Now!
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center gap-4 justify-center text-center">
                      <CartIcon fill="red" />
                      <p className="text-dark-30 text-sm">
                        Your cart is empty. Let's discover our collections of
                        popular dishes.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default NavbarUser;
