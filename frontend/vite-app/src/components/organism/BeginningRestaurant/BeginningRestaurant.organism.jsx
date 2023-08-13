import burger from "../../../assets/burger.png";
import Beginning from "../../molecule/Beginning/Beginning.molecule";
function BeginningRestaurant() {
  return (
    <section id="beginning" className="py-10 md:flex justify-center gap-20">
      <img src={burger} alt="Burger Image" className="h-2/3 w-full md:w-1/3" />
      <Beginning />
    </section>
  );
}

export default BeginningRestaurant;
