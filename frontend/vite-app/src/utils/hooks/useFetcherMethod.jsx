import axios from "axios";
import { toast } from "react-toastify";
import { useTokenStore } from "../../config/zustand/tokenStore/useTokenStore";

function useFetcherMethod() {
  const token = useTokenStore((state) => state.token);
  const config = {
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${""}`,
    },
  };
  const getRequest = async (url) => {
    try {
      const res = await axios.get(
        import.meta.env.VITE_BASE_API_URL + url,
        config
      );
      if (res) {
        toast.success(res.data.msg);
      }
      return res.data;
    } catch (error) {
      toast.error(error.message || error.response.data);
    }
  };
  const postRequest = async (url, values) => {
    const res = await axios.post(
      import.meta.env.VITE_BASE_API_URL + url,
      values,
      config
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
    postRequest,
    updateRequest,
    deleteRequest,
  };
}

export default useFetcherMethod;
