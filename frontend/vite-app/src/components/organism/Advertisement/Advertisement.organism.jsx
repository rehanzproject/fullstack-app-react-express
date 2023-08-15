import React from "react";
import foodads from "../../../assets/foodads.png";
function Advertisement() {
  return (
    <div className="p-2 md:p-4">
      <div className="bg-yellow-300 p-6 md:h-[428px]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative flex flex-col items-start justify-center px-8">
            <h1 className="text-4xl font-bold">We Serve</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
              excepturi ex doloremque officia, reprehenderit rerum facere,
              magnam saepe nisi recusandae, eligendi quidem aperiam animi
              fugiat. Vitae saepe quaerat est pariatur?
            </p>
          </div>
          <img
            src={foodads}
            alt="Food Advertisement"
            className="w-full md:w-1/2 block bottom-1/2 right-0 object-cover
          "
          />
        </div>
      </div>
    </div>
  );
}

export default Advertisement;
