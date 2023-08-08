import { Link } from "react-router-dom";

function Diverse() {
    return (
      <div className="px-2 md:px-16 py-20 md:w-1/2">
        <h1 className="text-success-10 text-8xl font-bold">Diverse </h1>
        <h1 className="text-white text-5xl my-6">Restaurant</h1>
        <p className="text-white my-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis amet quae
          necessitatibus nisi est. Aliquid totam nemo perspiciatis nostrum fuga
          esse numquam ipsam tempore repellat necessitatibus, natus corrupti, et
          sapiente.
        </p>
        <Link to="/login" className="px-4  py-2 rounded-full text-white items-center bg-success-10 ">
          Order Now
        </Link >
      </div>
    );
  }
  
  export default Diverse;
  