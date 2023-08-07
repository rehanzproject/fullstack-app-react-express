import { Link } from "react-router-dom";
import useRegisterViewModel from "./Register.viewModel";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
function Register() {
  const {
    formik,
    showConfirmPassword,
    showPassword,
    handleConfirmPassword,
    handleShowPassword,
  } = useRegisterViewModel();

  return (
    <div className="md:p-8 p-4 w-full md:w-[500px] bg-white">
      <h1 className="font-bold text-2xl">Register</h1>
      <p>
        Have an account?{" "}
        <Link to="/login" className="text-blue-400">
          Login Here
        </Link>
      </p>
      <div className="py-6 flex flex-wrap">
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          id="name"
          className="border-b-2 outline-none w-full"
          placeholder="Your Name"
        />
        {formik.errors.name && (
          <p className="text-red-500 text-sm">{formik.errors.name}</p>
        )}
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          className="border-b-2 outline-none w-full my-6"
          placeholder="Username or Email"
        />
        {formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
        <div className="w-full flex">
          <input
             type={showPassword ? "text" :  "password"}
           
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            id=""
            className="border-b-2 outline-none w-full my-6"
            placeholder="Password"
          />
          <button onClick={handleShowPassword}>
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
          {formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
        </div>
        <div className="w-full flex">
          <input
            type={showConfirmPassword ? "text" :  "password"}
            name="confPassword"
            value={formik.values.confPassword}
            onChange={formik.handleChange}
            id=""
            className="border-b-2 outline-none w-full my-6"
            placeholder="Confirm Password"
          />
          {formik.errors.confPassword && (
            <p className="text-red-500 text-sm">{formik.errors.confPassword}</p>
          )}
          <button onClick={handleConfirmPassword}>
            {showConfirmPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
      </div>
      <div className="flex gap-4 justify-between text-sm">
        <div className="flex items-center gap-4">
          <input type="checkbox" name="" id="" />
          <p className="">Remember Me</p>
        </div>
        <p>Forgot Password?</p>
      </div>

      <button
        type="submit"
        onClick={formik.handleSubmit}
        className=" bg-purple-500 p-2 px-4 my-4 rounded-full font-bold text-white"
      >
        Register
      </button>
      <div className="py-6">
        <p>Or Login With</p>
      </div>
    </div>
  );
}

export default Register;
