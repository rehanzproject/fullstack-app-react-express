import TwoCircleIcon from "../../atom/icons/TwoCircleIcon";

function Fullstack() {
  return (
    <div className="md:flex sm:hidden relative hidden flex-1 justify-start h-screen items-center bg-[url('./assets/diverse.png')] bg-cover bg-center">
      <div className="px-24 text-white">
        <h1 className="font-bold text-3xl">Diverse Food</h1>
        <p className="py-4">The most popular restaurant in Indonesia</p>
        <button className="bg-blue-500 px-4 py-2 rounded-full">
          Read More
        </button>
      </div>
    </div>
  );
}

export default Fullstack;
