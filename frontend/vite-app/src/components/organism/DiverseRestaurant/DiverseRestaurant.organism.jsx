import Navbar from "../Navbar/Navbar.organism";
import Diverse from "../../molecule/Diverse/Diverse.molecule";
import { motion } from "framer-motion";
function DiverseRestaurant() {
  return (
    <div
      className={`px-2 md:px-4 lg:px-16 relative h-screen bg-[url('./assets/diverse.png')] bg-cover`}
    >
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <Diverse />
      </motion.div>
    </div>
  );
}

export default DiverseRestaurant;
