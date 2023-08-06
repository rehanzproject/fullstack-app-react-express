import laptop from "../../../assets/lepi.png"
import BookIcon from "../../atom/icons/BookIcon";
import BrainIcon from "../../atom/icons/BrainIcon";
import BagIcon from "../../atom/icons/BagIcon";
function Fullstack() {
    const arr = [
        {
          icon: <BookIcon />,
          text: "Learn to Code",
        },
        {
          icon: <BrainIcon />,
          text: "Gain a new Skill",
        },
        {
          icon: <BagIcon />,
          text: "Get a new Job",
        },
      ];
  return (
    <div className="border-red-100 bg-purple-600 w-auto md:w-1/2 mt-4 md:mt-0 p-4">
    <h1 className="text-white font-bold text-3xl pl-4">
      LEARN FULLSTACK WITH US
    </h1>
    <img src={laptop} alt="Laptop" className="w-full" />
    <div className="flex justify-center md:text-sm text-xs gap-8 text-white">
      {arr.map((list) => (
        <div key={list.text} className="px-4 w-1/2">
          <div className="flex justify-center">{list.icon}</div>
          <p className="text-center">{list.text}</p>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Fullstack