import axios from "axios";
import { useBoundStore } from "../zustand/boundStore";

function useFetcherMethod() {
  const token = useBoundStore((state) => state.token);
  const config = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const getRequest = async (url) => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_API_URL + url,
        config
      );
      return res.data;
    } catch (error) {
      console.error(error.response);
    }
  };
  const getRequestAuth = async (url) => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_API_URL + url,
        config
      );
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };
  const postRequest = async (url, values) => {
    const res = await axios.post(
      import.meta.env.VITE_BASE_API_URL + url,
      values,
      {
        withCredentials: true,
      }
    );
    return res.data;
  };

  const updateRequest = async (id, values) => {
    const res = await axios.put(
      `${import.meta.env.VITE_BASE_API_URL}${id}`,
      values
    );
    return res.data;
  };

  const deleteRequest = async (id, values) => {
    const res = await axios.delete(
      `${import.meta.env.VITE_BASE_API_URL}${id}`,
      values
    );
    return res.data;
  };

  return {
    getRequest,
    getRequestAuth,
    postRequest,
    updateRequest,
    deleteRequest,
  };
}

export default useFetcherMethod;
