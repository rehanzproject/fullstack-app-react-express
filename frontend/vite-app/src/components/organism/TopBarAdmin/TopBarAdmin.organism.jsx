import React, { Fragment } from "react";
import SearchIcon from "../../atom/icons/SearchIcon";
import DropdownProfile from "../../molecule/DropdownProfile/DropdownProfile.molecule";
import NotifIcon from "../../atom/icons/NotifIcon";
import { Menu, Transition } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function TopBarAdmin() {
  const handleClick = (event) => {
    if (event.key === "Enter") {
      console.log("pppppp");
    }
  };
  const data = [];
  return (
    <div className="p-4 relative md:w-full">
      <div className="flex items-center px-20">
        <SearchIcon />
        <input
          type="text"
          name=""
          id=""
          onKeyDown={handleClick}
          className="rounded-full border-0 outline-none focus:outline-none w-1/2"
          placeholder="Type to search..."
        />
      </div>
      <div className="absolute right-0 top-4 flex">
  <Menu as="div" className="py-2 mx-4 relative">
    <Menu.Button className="">
      <NotifIcon />
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
      <Menu.Items className="absolute z-10 right-0 mt-2 w-80 rounded-md text-gray-700 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
        <Menu.Item>
          {({ active }) => (
            <div
              className={classNames(
                active ? "bg-dark-20" : "",
                "block w-full p-4 text-sm text-dark-30 "
              )}
            >
              <div className="">
                <p className="border-b pb-4">Notification</p>
                <p className="text-black">You don't have any notification right now!</p>
              </div>
            </div>
          )}
        </Menu.Item>
      </Menu.Items>
    </Transition>
  </Menu>
  <DropdownProfile />
</div>

    </div>
  );
}

export default TopBarAdmin;
