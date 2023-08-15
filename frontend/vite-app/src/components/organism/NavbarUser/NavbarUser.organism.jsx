import React, { Fragment } from "react";
import SearchIcon from "../../atom/icons/SearchIcon";
import { Menu, Transition } from "@headlessui/react";
import DropdownProfile from "../../molecule/DropdownProfile/DropdownProfile.molecule";
import CartIcon from "../../atom/icons/CartIcon";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function NavbarUser() {
  const handleClick = (event) => {
    if (event.key === "Enter") {
      console.log("pppppp");
    }
  };
  const data = [];
  return (
    <div className="p-4 sticky top-0 w-full bg-gray-100 z-50">
      <div className="flex items-center">
        <div className="text-2xl font-bold">
          <h1 className="px-4 md:px-12">Diverse Food</h1>
        </div>
        <div className="hidden md:flex relative ">
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
      <div className="md:hidden w-full justify-end flex pt-10">
        <input
          type="text"
          name=""
          id=""
          onKeyDown={handleClick}
          className="px-8 rounded-full bg-tran border-0 outline-none focus:outline-none w-full"
          placeholder="Type to search..."
        />
        <SearchIcon className="absolute right-0 items-center mr-6 my-2" />
      </div>
      <div className="absolute right-0 top-0 flex py-4 px-12">
        <div>
          <DropdownProfile />
        </div>
        <Menu as="div" className="relative">
          <Menu.Button className="rounded-full hover:bg-dark-30/20 p-2">
            <CartIcon width="30" height="30" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 right-0 mt-2 w-40 md:w-80 rounded-md text-gray-700 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <div className="p-4 ">
                    <h1 className="divide-y divide-dark-20">Your Order</h1>
                    <div
                      className={
                        "block w-full text-sm text-dark-30 "
                      }
                    >
                      <div className="flex flex-col items-center justify-center text-center h-96 gap-6">
                        <CartIcon fill="red" />
                        <p>
                          Your cart is empty. Let's discover our collections of
                          popular dishes.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}

export default NavbarUser;
