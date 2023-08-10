import { Link } from "react-router-dom";
import  useRegisterViewModel from "../../../utils/hooks/useRegisterViewModel";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import ProfileIcon from "../../atom/icons/ProfileIcon";
import EmailIcon from "../../atom/icons/EmailIcon";
import PadLockIcon from "../../atom/icons/PadLockIcon";
function Register() {
  const {
    formik,
    showConfirmPassword,
    showPassword,
    handleConfirmPassword,
    handleShowPassword,
  } = useRegisterViewModel();

  return (
    <div className="flex flex-1 flex-col justify-center items-center md:p-8 p-4 bg-white">
      <div className="justify-center items-center">
        <h1 className="font-bold text-2xl">Register</h1>

        <div className="py-6 flex flex-wrap">
          <div className="relative w-full">
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              id="name"
              className="rounded-full outline-none w-full pl-12"
              placeholder="Your Name"
            />
            <div className="absolute inset-y-0 left-4 py-2 opacity-20">
              <ProfileIcon />
            </div>
            {formik.errors.name && (
              <p className="text-red-500 text-sm">{formik.errors.name}</p>
            )}
          </div>
          <div className="w-full relative py-8">
            <input
              type="text"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              id="email"
              className="rounded-full outline-none w-full pl-12"
              placeholder="Username or Email"
            />
            <div className="absolute inset-y-0 left-4 py-10 opacity-20">
              <EmailIcon />
            </div>
            {formik.errors.email && (
              <p className="text-red-500 text-sm">{formik.errors.email}</p>
            )}
          </div>

          <div className="w-full relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              id="password"
              className="rounded-full outline-none w-full pl-12"
              placeholder="Password"
            />
            <div className="absolute inset-y-0 left-4 py-2 opacity-20">
              <PadLockIcon />
            </div>
            <button
              onClick={handleShowPassword}
              className="absolute inset-y-0 right-4"
            >
              {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
            </button>
            {formik.errors.password && (
              <p className="text-red-500 text-sm">{formik.errors.password}</p>
            )}
          </div>
          <div className="w-full relative pt-8">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confPassword"
              value={formik.values.confPassword}
              onChange={formik.handleChange}
              id="confPassword"
              className="rounded-full outline-none w-full pl-12"
              placeholder="Confirm Password"
            />
            <div className="absolute inset-y-0 left-4 py-10 opacity-20">
              <PadLockIcon />
            </div>
            {formik.errors.confPassword && (
              <p className="text-red-500 text-sm">
                {formik.errors.confPassword}
              </p>
            )}
            <button
              onClick={handleConfirmPassword}
              className="absolute inset-y-0 right-4 pt-8"
            >
              {showConfirmPassword ? (
                <AiOutlineEye />
              ) : (
                <AiOutlineEyeInvisible />
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className=" bg-blue-500 p-2 px-4 my-4 rounded-full font-bold text-white"
        >
          Register
        </button>
        <p>
          Have an account?{" "}
          <Link to="/login" className="text-blue-400">
            Login Here
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
