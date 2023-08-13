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
      const res = await getRequest("products")
    if(res){
      toast.success(res)
    }
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
