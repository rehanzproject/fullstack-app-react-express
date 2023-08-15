import RatingIcon from "../../atom/icons/RatingIcon";

function FoodCard({ name, price, pict, rating }) {
  const ratingIcons = Array.from({ length: rating }, (_, index) => (
    <RatingIcon key={index} />
  ));
  return (
    <div>
      <img src={pict} alt="" />
      <p className="text-success-10 text-xl font-semibold">{name}</p>
      <div className="flex">{ratingIcons}</div>
      <p>${price}</p>
    </div>
  );
}

export default FoodCard;
