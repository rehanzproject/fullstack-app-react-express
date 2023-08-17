import React, { Fragment, useEffect, useState } from "react";
import SearchIcon from "../../atom/icons/SearchIcon";
import { Menu, Transition } from "@headlessui/react";
import DropdownProfile from "../../molecule/DropdownProfile/DropdownProfile.molecule";
import CartIcon from "../../atom/icons/CartIcon";
import XIcon from "../../atom/icons/XIcon";
import { motion, AnimatePresence } from "framer-motion";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavbarUser() {
  const [openCart, setopenCart] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => setScrolling(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () =>
        setScrolling(window.scrollY > 0)
      );
    };
  }, []);

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
            <h1 className="px-4 md:px-12">Diverse Food</h1>
          </div>
          {/* Large Mode */}
          <div className="hidden lg:flex relative ">
            <input
              type="text"
              name=""
              id=""
              onKeyDown={handleClick}
              className="px-8 rounded-full border-1  outline-none focus:outline-none w-96"
              placeholder="Type to search..."
            />
            <SearchIcon className="absolute right-0 items-center m-2" />
          </div>
        </div>
      </div>
      <div
        className={`bg-gray-50 lg:hidden justify-between items-center flex py-4 ${
          !scrolling
            ? "opacity-100 translate-y-0 transition-transform duration-300 ease-in-out"
            : "opacity-0 -translate-y-full"
        }
  `}
      >
        <p className="text-dark-30 text-xs md:text-sm px-4 md:px-16">
          Explore good grubs in Diverse Restaurant
        </p>
        <input
          type="text"
          name=""
          id=""
          onKeyDown={handleClick}
          className="px-8 rounded-full outline-none focus:outline-none w-52"
          placeholder="Type to search..."
        />
        <SearchIcon className="absolute right-0 items-center mr-6 my-2" />
      </div>

      <div className={`absolute right-0 top-0 flex py-4 px-12`}>
        <DropdownProfile />
        <div
          onClick={() => setopenCart(!openCart)}
          className="relative rounded-full p-2 hover:bg-dark-20"
        >
          <CartIcon width="36" height="36" />
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
                    onClick={() => setopenCart(!openCart)}
                    className="absolute flex -mt-12 bg-gray-100 right-4 p-2 rounded-full"
                  >
                    <XIcon />
                  </div>
                  <div className="flex flex-col justify-center items-center w-full h-full gap-4 text-center">
                    <CartIcon fill="red" />
                    <p className="text-dark-30 text-sm">
                      Your cart is empty. Let's discover our collections of
                      popular dishes.
                    </p>
                  </div>
                </motion.div>
              
                {/* Large */}
                <div className="absolute hidden rounded-xl shadow-xl md:flex bg-white right-0 w-96 h-96 my-4">
                  <div className="flex flex-col items-center gap-4 justify-center text-center">
                    <CartIcon fill="red" />
                    <p className="text-dark-30 text-sm">
                      Your cart is empty. Let's discover our collections of
                      popular dishes.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </AnimatePresence>
          <div className="absolute top-0 right-0 bg-red-500 text-xs rounded-full px-2 py-1 font-bold text-white">
            {1+1}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavbarUser;
