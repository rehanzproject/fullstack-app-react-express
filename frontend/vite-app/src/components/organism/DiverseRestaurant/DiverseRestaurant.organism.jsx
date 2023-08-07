import Navbar from "../Navbar/Navbar.organism";
import Diverse from "../../molecule/Diverse/Diverse.molecule";

function DiverseRestaurant() {
  return (
    <div
      className={`relative h-screen bg-[url('./assets/diverse.png')] bg-cover`}
    >
      <Navbar />
      <Diverse />
    </div>
  );
}

export default DiverseRestaurant;
