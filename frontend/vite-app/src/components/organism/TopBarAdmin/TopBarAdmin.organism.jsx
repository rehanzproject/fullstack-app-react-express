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
        <Menu as="div" className="py-2 mx-4">
          <Menu.Button className="flex -mb-1 gap-3 rounded-full text-sm focus:ring-white focus:ring-offset-2">
            <NotifIcon />{" "}
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
            <Menu.Items className="absolute right-0 z-10 mt-2 w-80 origin-top-right rounded-md text-gray-700 bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {data?.data?.length ? (
                data?.data?.map((list) => (
                  <Menu.Item key={list.event.description}>
                    {({ active }) => (
                      <div
                        className={classNames(
                          active ? "bg-gray-100" : "",
                          "flex px-4 py-2 text-sm text-gray-700"
                        )}
                      >
                        <img
                          src={list.user.image}
                          alt={list.user.name}
                          className="w-10 h-10 object-contain object-full rounded-full"
                        />
                        <div className="-mt-2">
                          <p className="block px-4 py-2 text-sm">
                            {list.user.name}
                          </p>
                          <p className="block px-4 py-2 -mt-3 text-xs">
                            "{list.event.description}"
                          </p>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                ))
              ) : (
                <Menu.Item>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active ? "bg-gray-100" : "",
                        "block px-4 py-2 text-sm text-gray-700"
                      )}
                    >
                      You don't have any notification right now!
                    </p>
                  )}
                </Menu.Item>
              )}
            </Menu.Items>
          </Transition>
        </Menu>

        <DropdownProfile />
      </div>
    </div>
  );
}

export default TopBarAdmin;
