import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import MenuIcon from "../../atom/icons/MenuIcon";
import XIcon from "../../atom/icons/XIcon";
import LogoTailIcon from "../../atom/icons/LogoTailIcon";
import { list } from "./constant";

function SidebarUser() {  
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`fixed top-0 left-0 z-10 bg-white ${
        open ? "w-screen translate-x-0" : "w-0 translate-x-0"
      } h-screen`}
    >
      <AnimatePresence>
        <motion.div
          key={open ? "open" : "closed"}
          initial={{ x: -100 }} 
          animate={{
            x: 0, 
            zIndex: 1,
            transition: {
              type: "tween",
              duration: 0.3, 
              ease: "easeInOut",
            },
          }}
          exit={{
            zIndex: 0,
            x: -100,
            transition: {
              type: "tween",
              duration: 0.3, 
              ease: "easeInOut",
            },
          }}
        >
          <div className={`${!open && "hidden"} p-4`}>
            <div className="z-50 flex  items-end justify-between font-bold text-base text-success-20 gap-2">
              <div className="flex items-end gap-4">
                <LogoTailIcon />
                <h1 className="text-black text-xl">Diverse Food</h1>
              </div>
              <XIcon onClick={() => setOpen(!open)} />
            </div>
            <div className="flex flex-col p-10 text-success-20 gap-2">
            {list.map((item, i) => (
              <a href={item.href} key={i} className="text-lg">
                {item.name}
              </a>
            ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {!open && (
        <button
          onClick={() => setOpen(!open)}
          className="absolute p-4 md:hidden flex transition hover:translate-x-0 hover:scale-110 ease-in duration-200 cursor-pointer z-10"
        >
          <MenuIcon />
        </button>
      )}
    </div>
  );
}

export default SidebarUser;
