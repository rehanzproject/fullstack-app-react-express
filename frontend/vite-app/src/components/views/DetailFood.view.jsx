import React from "react";
import { useLocation } from "react-router-dom";
import InformationFood from "../organism/InformationFood/InformationFood.organism";
import { useBoundStore } from "../../config/zustand/useBoundStore";
function DetailFood() {
  const token = useBoundStore((state) => state.token)
  return (
    <div>
      <InformationFood />
    </div>
  );
}

export default DetailFood;
