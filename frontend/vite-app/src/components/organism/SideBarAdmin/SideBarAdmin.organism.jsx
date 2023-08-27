import React, { useState } from "react";
import FourSquareIcon from "../../atom/icons/FourSquareIcon";
import DropdownMenu from "../../molecule/DropdownMenu/DropdownMenu.organism";
import CalendarIcon from "../../atom/icons/CalendarIcon";
import ProfileMyIcon from "../../atom/icons/ProfileMyIcon";
import LogoutIcon from "../../atom/icons/LogoutIcon";
import LogoTailIcon from "../../atom/icons/LogoTailIcon";
import XLogo from "../../atom/icons/XIcon";
import { motion, AnimatePresence } from "framer-motion";
import BurgerIcon from "../../atom/icons/BurgerIcon";
function SideBarAdmin() {
  const [open, setOpen] = useState(false);
  const nav = [
    {
      icon: <FourSquareIcon />,
      name: "Dashboard",
      href: "/admin/analystic",
    },

    {
      icon: <BurgerIcon />,
      name: "Product",
      href: "/admin/product",
    },
    {
      icon: <CalendarIcon />,
      name: "Calendar",
      href: "/admin/calendar",
    },
    {
      icon: <ProfileMyIcon />,
      name: "Profile",
      href: "/admin/profile",
    },
    {
      icon: <LogoutIcon />,
      name: "Log Out",
      href: "/logout",
    },
  ];

  return (
    <div
      className={`fixed z-10 bg-dark-10 ${
        open ? "w-80 translate-x-0" : "w-0 translate-x-0"
      } h-screen`}
    >
      <motion.div
        initial={{
          width: 80,
        }}
        animate={{
          width: open ? 0 : 80, // Swap the width values
          transition: {
            opacity: { ease: "linear" },
            layout: { duration: 5 },
          },
        }}
      >
        <AnimatePresence>
          <motion.div
            key={open ? "open" : "closed"}
            initial={{ x: open ? 100 : 0 }} // Initial x position
            animate={{
              x: open ? 0 : 0, // Animate x position
              zIndex: 1,
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "easeInOut", // Use easeInOut for ease-in-out transition
              },
            }}
            exit={{
              zIndex: 0,
              x: open ? 100 : 0, // Exit x position
              transition: {
                type: "tween",
                duration: 0.15,
                ease: "easeInOut", // Use easeInOut for ease-in-out transition
              },
            }}
          >
            {!open && (
              <button
                onClick={() => setOpen(!open)}
                className="absolute transition hover:translate-x-0 hover:scale-110 ease-in duration-200 cursor-pointer top-0 px-10 py-5 z-10"
              >
                <LogoTailIcon />
              </button>
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      <AnimatePresence>
        <motion.div    key={open ? "open" : "closed"}
          initial={{ x: -100 }} // Initial x position
          animate={{
            x: 0, // Animate x position
            zIndex: 1,
            transition: {
              type: "tween",
              duration: 0.3, // Adjust the duration
              ease: "easeInOut", // Use easeInOut for ease-in-out transition
            },
          }}
          exit={{
            zIndex: 0,
            x: -100,
            transition: {
              type: "tween",
              duration: 0.3, // Adjust the duration
              ease: "easeInOut", // Use easeInOut for ease-in-out transition
            },
          }}>
          <div className={`${open ? "" : "hidden"} p-4`}>
            <div className="flex items-end justify-between font-bold text-base text-dark-20 gap-2">
              <LogoTailIcon />
              <h1 className="pr-12">Diverse Admin</h1>
              <XLogo onClick={() => setOpen(!open)} />
            </div>
            <div className="py-8">
              <p className="text-dark-20">MENU</p>
            </div>
            <div className="flex flex-col gap-4">
              {nav.map((list) => (
                <DropdownMenu key={list.name} {...list} />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default SideBarAdmin;
