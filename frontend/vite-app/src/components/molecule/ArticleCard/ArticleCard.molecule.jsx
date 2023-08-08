function ArticleCard({ pict, name, desc, date }) {
  return (
    <div className="text-sm md:text-lg">
      <img src={pict} alt="" />
      <p className="md:text-sm">{date}</p>
      <p className="text-success-10 font-semibold">{name}</p>
      <p className="text-sm">{desc}</p>
    </div>
  );
}

export default ArticleCard;
