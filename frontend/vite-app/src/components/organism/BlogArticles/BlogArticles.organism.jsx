import ArticleCard from "../../molecule/ArticleCard/ArticleCard.molecule";
import food2 from "../../../assets/food2.png";
function BlogArticles() {
  const articleList = [
    {
      name: "Introducing Our New Seasonal Mecsnu",
      date: "30 August 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit in fringilla posuere libero. ",
      pict: food2,
    },
    {
      name: "Introducing Our New Seasonal Menu",
      date: "30 August 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit in fringilla posuere libero. ",
      pict: food2,
    },
    {
      name: "A Glimpse into the Culinar Innovations at Diverse Food ",
      date: "30 August 2023",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit in fringilla posuere libero. ",
      pict: food2,
    },
   
  ];
  return (
    <section id="blog">
      <div className="md:px-16">
        <h1 className="text-success-10 font-normal text-4xl md:text-6xl">
          Blog & Articles
        </h1>{" "}
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. In illo
          labore ratione repellendus vel deleniti esse minima maxime fugit
          soluta optio mollitia voluptatum, perferendis minus maiores earum
          asperiores quos eligendi.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {articleList.map((list) => (
            <ArticleCard key={list.name} {...list} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogArticles;
