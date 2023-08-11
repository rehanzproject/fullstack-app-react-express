import React from "react";
import SearchIcon from "../../atom/icons/SearchIcon";
import DropdownProfile from "../../molecule/DropdownProfile/DropdownProfile.molecule";

function TopBarAdmin() {
  return (
    <div className="p-4 relative w-full">
      <div className="flex items-center">
        <SearchIcon />
       <input type="text" name="" id="" className="rounded-full border-0" placeholder="Type to search..." />
      </div>
      <div className="absolute right-0 top-4">
       <DropdownProfile />
      </div>
    </div>
  );
}

export default TopBarAdmin;
