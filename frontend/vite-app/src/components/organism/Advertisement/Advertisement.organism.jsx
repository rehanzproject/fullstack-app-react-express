import React from "react";
import foodads from "../../../assets/foodads.png";
function Advertisement() {
  return (
    <div className="p-2 md:p-4">
      <div className="bg-yellow-300 p-6 md:h-[428px] px-8">
        <div className="flex justify-end items-center h-full">
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-2xl md:text-4xl font-bold">We Serve</h1>
            <p className="text-sm md:text-base">
              Discover what's good to eat and drink here, from local best
              sellers to culinary legends.
            </p>
          </div>
          <div className="ml-auto">
            <img
              src={foodads}
              alt="Food Advertisement"
              className="md:w-[420px] block object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
