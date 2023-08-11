import React, { useState } from "react";
import LogoIcon from "../../atom/icons/LogoIcon";
import FourSquareIcon from "../../atom/icons/FourSquareIcon";
import DropdownMenu from "../../molecule/DropdownMenu/DropdownMenu.organism";
import CalendarIcon from "../../atom/icons/CalendarIcon";
import ProfileMyIcon from "../../atom/icons/ProfileMyIcon";
import LogoutIcon from "../../atom/icons/LogoutIcon";

function SideBarAdmin() {
  const [open, setOpen] = useState(true);
  const nav = [
    {
      icon: <FourSquareIcon />,
      name: "Dashboard",
      href: '/admin/analystic'
    },
    {
      icon: <CalendarIcon />,
      name: "Calendar",
      href: '/admin/calendar'
    },
    {
        icon: <ProfileMyIcon />,
        name: "Profile",
        href: '/admin/profile'
      },
      {
        icon: <LogoutIcon />,
        name: "Log Out",
        href: '/logout'
      },
  ];

  return (
    <div
      className={`relative bg-dark-10 transition-width ${
        open ? "w-72" : "w-16"
      } h-screen`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="absolute right-0 -mr-4 z-10 flex rounded-full border-dark-10 border-2 bg-white p-2 text-black top-1/2 transition-transform duration-300 transform hover:scale-110 cursor-pointer"
      >
        {`>`}
      </button>
      <div className={`${open ? "" : "hidden"} p-8`}>
        <div>
          <LogoIcon />
        </div>
        <div className="py-8">
          <p className="text-dark-20">MENU</p>
        </div>
        <div className="flex flex-col gap-8">
          {nav.map((list) => (
            <DropdownMenu key={list.name} {...list} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SideBarAdmin;
