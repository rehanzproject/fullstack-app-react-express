import React, { useEffect } from "react";
import useFetcherMethod from "../../utils/hooks/useFetcherMethod";
import { toast } from "react-toastify";
import Navbar from "../organism/Navbar/Navbar.organism";
import { useBoundStore } from "../../config/zustand/boundStore";

function HomePage() {
  const { getRequest } = useFetcherMethod();
  const updateToken = useBoundStore((state) => state.updateToken)
 
  useEffect(() => {
    const fetch = async () => {
      const res = await getRequest("product")
      // const filter = URL.createObjectURL(res[0].picture.data)
      console.log(res[0].picture);
    }
    fetch()
  }, []);
  

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default HomePage;
