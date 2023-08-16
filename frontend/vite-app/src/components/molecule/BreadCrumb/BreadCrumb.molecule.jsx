import React from "react";
import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const { pathname } = useLocation();
  const pathnameParts = pathname.split("/");
  const lastPart = pathnameParts[pathnameParts.length - 1];

  const arr = ["Home", "Food", lastPart];
  return (
    <div className="p-12">
      {arr.map((item, index) => (
        <Link key={item} to={item} className="text-green-500">
          {item} {index !== arr.length - 1 && " / "}
        </Link>
      ))}
    </div>
  );
}

export default BreadCrumb;
