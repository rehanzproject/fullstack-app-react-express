import pict1 from "../../../assets/pict1.png";
import TestiCard from "../../molecule/TestiCard/TestiCard.molecule";
function WhatTheyAreSaying() {
  return (
    <section>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-success-10 font-normal text-4xl md:text-6xl">
          What They Are Saying
        </h1>{" "}
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas
          molestiae voluptatibus quasi reprehenderit omnis, enim dolores ipsum.
          Nobis et, quas id aliquid tenetur, doloremque explicabo a itaque non
          exercitationem consequatur!
        </p>
    <TestiCard />
      </div>
    </section>
  );
}

export default WhatTheyAreSaying;
