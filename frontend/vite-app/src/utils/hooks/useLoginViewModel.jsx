import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import useFetcherMethod from "./useFetcherMethod";
import { useTokenStore } from "../../config/zustand/tokenStore/useTokenStore";

function useLoginViewModel() {
  const { postRequest } = useFetcherMethod();
  const navigate = useNavigate();
  const updateToken = useTokenStore((state) => state.updateToken);

  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Email Required!"),
    password: Yup.string().required("Password Required!"),
  });
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        const res = await postRequest("/user/login", values);
        if (res) {
          toast.success(res.msg, {
            onClose: () => {
              navigate("/home");
            },
          });
          updateToken(res.accessToken);
        }
      } catch (error) {
        toast.error(error.response || error.message);
      }
    },
  });
  return { formik, showPassword, handleShowPassword };
}

export default useLoginViewModel;
