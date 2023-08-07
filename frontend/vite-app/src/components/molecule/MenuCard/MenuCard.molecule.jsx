/* eslint-disable react/prop-types */
function MenuCard({ price, name, pict }) {
  return (
    <div className="py-4">
      <img src={pict} alt="" />
      <p className="text-success-10 text-lg font-semibold">{name}</p>
      <p>${price}</p>
    </div>
  );
}

export default MenuCard;
