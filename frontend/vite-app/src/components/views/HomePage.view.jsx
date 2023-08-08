import BeginningRestaurant from "../organism/BeginningRestaurant/BeginningRestaurant.organism";
import BlogArticles from "../organism/BlogArticles/BlogArticles.organism";
import DiverseRestaurant from "../organism/DiverseRestaurant/DiverseRestaurant.organism";
import Footer from "../organism/Footer/Footer.organism";
import MostSales from "../organism/MostSales/MostSales.organism";
import OurMenu from "../organism/OurMenu/OurMenu.organism";
import Subscribe from "../organism/Subscribe/Subscribe.organism";
import WhatTheyAreSaying from "../organism/WhatTheyAreSaying/WhatTheyAreSaying.organism";

function HomePage() {
  return (
    <div>
      <DiverseRestaurant />
      <div className="bg-gray-100 md:pl-12 md:py-1">
        <BeginningRestaurant />
        <MostSales />
        <OurMenu />
        <WhatTheyAreSaying />
        <BlogArticles />
      </div>
      <Subscribe />
      <Footer />
    </div>
  );
}

export default HomePage;
