import axios from "axios";
const API_URL = "http://localhost:5000/";
export const getRequest = async () => {
  try {
    const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ` },
      });
      return res.data;
  } catch (error) {
    console.error(error.response);
  }
};
export const postRequest = async (url, values) => {
  const res = await axios.post(API_URL + url, values);
  return res.data;
};

export const updateRequest = async (id, values) => {
  const res = await axios.put(`API_URL/${id} `, values);
  return res.data;
};

export const deleteRequest = async (id, values) => {
    const res = await axios.post(`API_URL/${id} `, values);
    return res.data;
  };
  
  
