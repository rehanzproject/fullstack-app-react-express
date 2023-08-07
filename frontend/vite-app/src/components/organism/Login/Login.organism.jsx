import { Link } from "react-router-dom";
import useLoginViewModel from "./Login.viewModel";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
function LoginView() {
  const { formik, showPassword, handleShowPassword } = useLoginViewModel();

  return (
    <div className="md:p-8 p-4 w-full md:w-[500px] bg-white">
      <h1 className="font-bold text-2xl">Login</h1>
      <p>
        Don`t have an account?{" "}
        <Link to="/register" className="text-blue-400">
          Create Your Account
        </Link>
      </p>
      <div className="py-6 flex flex-wrap">
        <input
          type="text"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          id="email"
          className="border-b-2 outline-none w-full px-2"
          placeholder="Username or Email"
        />
        {formik.errors.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
        <div className="w-full flex">
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            id=""
            className="border-b-2 outline-none w-full my-6 px-2"
            placeholder="Password"
          />
          <button onClick={handleShowPassword} className="">
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}{" "}
          </button>
          {formik.errors.password && (
            <p className="text-red-500 text-sm">{formik.errors.password}</p>
          )}
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
        Login
      </button>
      <div className="py-6">
        <p>Or Login With</p>
      </div>
    </div>
  );
}

export default LoginView;
