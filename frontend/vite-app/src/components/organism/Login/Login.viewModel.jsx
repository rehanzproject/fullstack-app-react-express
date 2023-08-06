import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { postRequest } from "../../../config/helper/fetcherMethod";
import { toast } from "react-toastify";
function useLoginViewModel() {
  const navigate = useNavigate();
  const LoginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Email Required!"),
    password: Yup.string().required("Password Required!"),
    confPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match!"
    ),
  });

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
            autoClose: 2000,
            onClose: () => {
              navigate("/home");
            },
          });
        }
      } catch (error) {
        toast.error(error.response.data.msg);
      }
    },
  });
  return { formik };
}

export default useLoginViewModel;
