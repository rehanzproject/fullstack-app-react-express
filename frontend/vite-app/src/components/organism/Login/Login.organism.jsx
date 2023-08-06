import { Link } from "react-router-dom";
import useLoginViewModel from "./Login.viewModel";
function LoginView() {
 const viewModel = useLoginViewModel()

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
          value={viewModel.formik.values.email}
          onChange={viewModel.formik.handleChange}
          id="email"
          className="border-b-2 outline-none w-full"
          placeholder="Username or Email"
        />
        {viewModel.formik.errors.email && (
          <p className="text-red-500 text-sm">{viewModel.formik.errors.email}</p>
        )}
        <input
          type="text"
          name="password"
          value={viewModel.formik.values.password}
          onChange={viewModel.formik.handleChange}
          id=""
          className="border-b-2 outline-none w-full my-6"
          placeholder="Password"
        />
        {viewModel.formik.errors.password && (
          <p className="text-red-500 text-sm">{viewModel.formik.errors.password}</p>
        )}
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
        onClick={viewModel.formik.handleSubmit}
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
