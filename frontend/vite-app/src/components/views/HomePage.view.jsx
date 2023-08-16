import React, { useEffect } from "react";
import useFetcherMethod from "../../utils/hooks/useFetcherMethod";
import { toast } from "react-toastify";
import { useBoundStore } from "../../config/zustand/boundStore";
import NavbarUser from "../organism/NavbarUser/NavbarUser.organism";
import Advertisement from "../organism/Advertisement/Advertisement.organism";
import OurRecommendation from "../organism/OurRecommendation/OurRecommendation.organism";

function HomePage() {
  const { getRequest } = useFetcherMethod();
  const updateToken = useBoundStore((state) => state.updateToken);

  return (
    <div>
      <Advertisement />
      <OurRecommendation />
    </div>
  );
}

export default HomePage;
