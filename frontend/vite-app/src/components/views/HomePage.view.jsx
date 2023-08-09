import React, { useEffect } from "react";
import useFetcherMethod from "../../config/hooks/useFetcherMethod";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import Navbar from "../organism/Navbar/Navbar.organism";
import { useBoundStore } from "../../config/zustand/boundStore";

function HomePage() {
  const { getRequest, getRequestAuth } = useFetcherMethod();
  const updateToken = useBoundStore((state) => state.updateToken);
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getRequest("token");
        if (res) {
          updateToken(res.accessToken);
          const decoded = jwt_decode(res.accessToken);
          toast.success(`Welcome back : ${decoded.name}`);
          await getRequestAuth("user");
        }
      } catch (error) {
        toast.error(error);
      }
    };
    fetchApi();
  }, []);

  return (
    <div>
      <Navbar />
    </div>
  );
}

export default HomePage;
