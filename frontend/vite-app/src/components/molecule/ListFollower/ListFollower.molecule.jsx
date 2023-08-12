import React from "react";

function ListFollower() {
  return (
    <div className="border my-4">
      <div className="flex gap-4 px-2 py-2 md:py-5 text-xs md:text-lg text-black ">
        <p>
          259 <span className="text-dark-30">Post</span>{" "}
        </p>
        <p className="border-x px-5">
          129K <span className="text-dark-30">Followers</span>{" "}
        </p>
        <p>
          2K <span className="text-dark-30">Following</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default ListFollower;
