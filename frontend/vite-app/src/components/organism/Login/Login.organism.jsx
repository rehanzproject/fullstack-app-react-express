import { Link } from "react-router-dom";
import useLoginViewModel from "./Login.viewModel";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import EmailIcon from "../../atom/icons/EmailIcon";
import PadLockIcon from "../../atom/icons/PadLockIcon";
function LoginView() {
  const { formik, showPassword, handleShowPassword } = useLoginViewModel();
  return (
    <div className="flex flex-1 flex-col justify-center items-center md:p-8 p-4 bg-white">
      <div className="justify-center items-center">
        <h1 className="font-extrabold text-2xl">Hello Again</h1>
        <p>Welcome Back </p>
        <div className="py-6 flex flex-wrap">
          <div className="w-full relative">
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              id="email"
              className="rounded-full outline-none w-full pl-12"
              placeholder="Username or Email"
            />

            <div className="absolute left-4 inset-y-0 py-2 opacity-20">
              <EmailIcon />
            </div>

            {formik.errors.email && (
              <p className="text-red-500 text-sm py-2">{formik.errors.email}</p>
            )}
          </div>
          <div className="w-full relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              value={formik.values.password}
              onChange={formik.handleChange}
              id=""
              className="rounded-full outline-none w-full px-2 my-4 pl-12"
              placeholder="Password"
            />
            <div className="absolute left-4 inset-y-0 py-6 opacity-20">
              <PadLockIcon />
            </div>
            <button
              onClick={handleShowPassword}
              className="absolute inset-y-0 right-4 mb-1"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}{" "}
            </button>
            {formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
        </div>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className=" bg-blue-500 p-2 px-4 rounded-full w-full text-white"
        >
          Login
        </button>
        <div className="py-6 flex gap-2">
          <p>Don`t Have An Account?</p>
          <Link to="/register" className="text-blue-400">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
