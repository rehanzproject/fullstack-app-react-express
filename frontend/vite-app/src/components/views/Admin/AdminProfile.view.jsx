import React from "react";
import cover from "../../../assets/cover-01.png";
import pictureadmin from "../../../assets/pictureadmin.png";
import ListFollower from "../../molecule/ListFollower/ListFollower.molecule";

function AdminProfile() {
  return (
    <div className="relative">
      <img src={cover} alt="" className="w-full max-w-full" />
      <div className="absolute flex flex-col left-1/2 top-3/4 items-center transform -translate-x-1/2 ">
        <img
          src={pictureadmin}
          alt=""
          className="sm:h-24 md:h-40 h-20 md:max-w-full"
        />
        <h1 className="mb-2 text-base md:text-2xl">Daniels Hellium</h1>
        <p className="text-dark-30">Ui / Ux Designer</p>
        <ListFollower />
        <h5 className="py-2">About Me</h5>
        <p className="text-center text-dark-30 text-sm md:text-base">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam vel,
          quam fugiat quo itaque porro dolor neque ipsam dolores adipisci
          inventore, sit repudiandae laudantium ex esse laborum est assumenda
          iusto?
        </p>
        <p></p>
      </div>
    </div>
  );
}

export default AdminProfile;
