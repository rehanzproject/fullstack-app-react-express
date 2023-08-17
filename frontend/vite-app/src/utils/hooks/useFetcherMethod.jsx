import axios from "axios";
import { useBoundStore } from "../../config/zustand/boundStore";
import { toast } from "react-toastify";

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
