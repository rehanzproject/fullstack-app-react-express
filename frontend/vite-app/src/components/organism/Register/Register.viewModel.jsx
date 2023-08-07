import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../../config/helper/fetcherMethod";
import { toast } from "react-toastify";
import { useState } from "react";
function useRegisterViewModel() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const handleShowPassword = () =>{
    setShowPassword(prev  => !prev)
  }
  const handleConfirmPassword = () =>{
    setShowConfirmPassword(prev  => !prev)
  }
  const navigate = useNavigate();
  const RegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(10, "Too Long!")
      .required("Name Required!"),
    email: Yup.string().email("Invalid email!").required("Email Required!"),
    password: Yup.string().required("Password Required!"),
    confPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
    ),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      try {
        const res = await postRequest("user", values);
        if (res) {
          toast.success(res.msg, {
            onClose: () => {
              navigate("/login");
            },
          });
        }
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    },
  });
  return { formik ,handleConfirmPassword ,handleShowPassword, showPassword, showConfirmPassword};
}

export default useRegisterViewModel;
