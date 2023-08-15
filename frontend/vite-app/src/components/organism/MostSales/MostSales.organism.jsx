import FoodCard from "../../molecule/FoodCard/FoodCard.molecule";
import food1 from "../../../assets/Food1.png";
function MostSales() {
  const food = [
    {
      name: "Poutine",
      price: 61.0,
      rating: 5,
      pict: food1,
    },
    {
      name: "Chicken",
      price: 61.0,
      rating: 5,
      pict: food1,
    },
    {
      name: "Seafood",
      price: 61.0,
      rating: 5,
      pict: food1,
    },
  ];
  return (
    <section id="mostSales" className="py-10">
      <div className="md:px-16">
        <h1 className="text-success-10 font-normal text-4xl md:text-6xl">
          The Most Sales at Diverse Food Restaurants{" "}
        </h1>{" "}
        <div className="flex justify-between">
          <p>
            Lorem ipsum dolor sit amet, adipiscing elit.varius aliquam urna ut.
          </p>
          <p></p>
        </div>
        <div className="flex gap-6">
          {food.map((list) => (
            <FoodCard key={list.name} {...list} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default MostSales;
