import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../../config/helper/fetcherMethod";
import { toast } from "react-toastify";
import { useState } from "react";
function useLoginViewModel() {
  const navigate = useNavigate();
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
       
        const res = await postRequest("login", values);
        if (res) {
          toast.success(res.msg, {
            onClose: () => {
              navigate("/home");
            },
          });
        }
      } catch (error) {
        toast.error(error.response.data.msg || error.message);
      }
    },
  });
  return { formik, showPassword , handleShowPassword };
}

export default useLoginViewModel;
