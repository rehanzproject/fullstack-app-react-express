import React, { useEffect } from "react";
import { getRequest, getRequestAuth } from "../../config/helper/fetcherMethod";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import Navbar from "../organism/Navbar/Navbar.organism";

function HomePage() {
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await getRequest("token");
        if (res) {
          localStorage.setItem("token", res.accessToken);
          const decoded = jwt_decode(res.accessToken);
          toast.success(`Welcome back : ${decoded.name}`);
          await getRequestAuth("user")
        }
      } catch (error) {
        console.log(error);
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
