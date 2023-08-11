import React from "react";
import cover from "../../../assets/cover-01.png";
import pictureadmin from "../../../assets/pictureadmin.png";

function AdminProfile() {
  return (
    <div className="relative">
      <img src={cover} alt="" className="w-full" />
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
        <img src={pictureadmin} alt="" className="w-40 h-40 -mb-20" />
      </div>
    </div>
  );
}

export default AdminProfile;
