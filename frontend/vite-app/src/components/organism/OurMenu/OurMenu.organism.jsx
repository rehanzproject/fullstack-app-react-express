import foodBurger from "../../../assets/burger1.png";
import MenuCard from "../../molecule/MenuCard/MenuCard.molecule";
function OurMenu() {
  const menuList = [
    {
      name: "Burger",
      price: 25,
      pict: foodBurger,
    },
    {
      name: "Burger",
      price: 55,
      pict: foodBurger,
    },
    {
      name: "Burger",
      price: 225,
      pict: foodBurger,
    },
    {
      name: "Burger",
      price: 235,
      pict: foodBurger,
    },
    {
      name: "Burger",
      price: 215,
      pict: foodBurger,
    },
    {
      name: "Burger",
      price: 625,
      pict: foodBurger,
    },
    {
      name: "Burger",
      price: 425,
      pict: foodBurger,
    },
    {
      name: "Burger",
      price: 121,
      pict: foodBurger,
    },
  ];
  return (
    <section id="menu">
      <div className="md:px-16">
        <h1 className="text-success-10 font-normal text-4xl md:text-6xl">
          Our Menu
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
          possimus provident molestias a similique? Distinctio accusamus
          eligendi quis fuga sed, eum sit facere? Optio ab eligendi aperiam nemo
          quisquam unde?
        </p>
        <div className="grid overflow-hidden grid-cols-2 lg:grid-cols-4">
          {menuList.map((list) => (
            <MenuCard key={list.price} {...list} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurMenu;
