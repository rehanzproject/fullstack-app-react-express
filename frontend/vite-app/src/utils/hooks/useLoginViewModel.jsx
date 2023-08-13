import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import useFetcherMethod from "./useFetcherMethod";
import { useBoundStore } from "../../config/zustand/boundStore";
function useLoginViewModel() {
  const { postRequest } = useFetcherMethod();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Email Required!"),
    password: Yup.string().required("Password Required!"),
  });
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  const updateToken = useBoundStore((state) => state.updateToken)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: async (values) => {
      try {
        const res = await postRequest("login", values);
        if (res) {
          toast.success(res.msg, {
            onClose: () => {
              navigate("/home");
            },
          });
          updateToken(res.accessToken)
        }
      } catch (error) {
        toast.error(error.response || error.message);
      }
    },
  });
  return { formik, showPassword, handleShowPassword };
}

export default useLoginViewModel;
