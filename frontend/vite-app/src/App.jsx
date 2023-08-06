import laptop from "./assets/laptop.png";
import { useFormik } from "formik";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const arr = [
    {
      icon: "",
      text: "Learn to Code",
    },
    {
      icon: "",
      text: "Gain a new Skill",
    },
    {
      icon: "",
      text: "Get a new Job",
    },
  ];
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confPassword: "",
    },
    onSubmit: async (values) => {
      try {
        const res = await axios.post("http://localhost:5000/login", values);
        toast.success(res.data.msg, {
          position: toast.POSITION.TOP_CENTER
        });
      } catch (error) {
        toast.error(error.response, {
          position: toast.POSITION.TOP_LEFT
        });
      }
    },
  });
  return (
    <div className="flex flex-col md:flex-row justify-center p-2 w-full">
      <div className="border-red-100 p-4 bg-purple-600 w-full md:w-auto md:ml-4 mt-4 md:mt-0">
        <h1 className="text-white font-bold text-xl">
          LEARN FULLSTACK WITH US
        </h1>
        <img src={laptop} alt="Laptop" className="" />
        <div className="flex md:justify-center md:text-lg text-xs gap-2">
          {arr.map((list) => (
            <div key={list.text}>
              {list.icon}
              {list.text}
            </div>
          ))}
        </div>
      </div>
      <div className="md:p-8 p-4 w-full md:w-[500px]">
        <h1 className="font-bold text-2xl">Login</h1>
        <p>
          Don`t have an account?{" "}
          <span className="text-blue-400">Create Your Account</span>{" "}
        </p>
        <div className="py-6 flex flex-wrap">
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            id="email"
            className="border-b-2 outline-none md:my-6 w-full"
            placeholder="Username or Email"
          />
          <input
            type="text"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            id=""
            className="border-b-2 outline-none w-full"
            placeholder="Password"
          />
          <input
            type="text"
            name="confPassword"
            value={formik.values.confPassword}
            onChange={formik.handleChange}
            id=""
            className="border-b-2 outline-none w-full"
            placeholder="Confirm Password"
          />
        </div>
        <div className="flex justify-between md:text-lg text-xs">
          <input type="checkbox" name="" id="" />
          <p className="md:pr-12">Remember Me</p>
          <p>Forgot Password?</p>
        </div>
        <button
          type="submit"
          onClick={formik.handleSubmit}
          className=" bg-purple-500 p-2 px-4 my-4 rounded-full font-bold text-white"
        >
          Login
        </button>
        <ToastContainer />
        <div className="py-6">
          <p>Or Login With</p>
        </div>
      </div>
    </div>
  );
}

export default App;
