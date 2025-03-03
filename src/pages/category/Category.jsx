import { Link, useLocation } from "react-router";
import PageRouteBanner from "../../components/shared/pageRouteBanner/PageRouteBanner";
import { useEffect } from "react";

const Products = () => {
  const { pathname } = useLocation();

  const category = pathname?.split("/")[2];

  const products = [
    {
      id: 1,
      category: "best",
      title: "Rice",
      description:
        "Sourced from the finest fields, our rice offers a fragrant aroma and soft texture, perfect for any dish. Available in Basmati, Jasmine, and Sona Masoori varieties.",
      img: "/img/products/rice.jpg",
    },
    {
      id: 2,
      category: "recent",
      title: "Daal",
      description:
        "Our high-quality pulses are packed with protein and flavor, perfect for a variety of dishes. Available in lentils, chickpeas, and more, offering nutrition and taste in every bite.",
      img: "/img/products/Daal.jpeg",
    },
    {
      id: 3,
      category: "popular",
      title: "Flour",
      description:
        "Our flour is finely milled for superior texture and quality, perfect for baking, cooking, and making traditional dishes. Available in all-purpose, whole wheat, and specialty varieties.",
      img: "/img/products/Flour.jpeg",
    },
    {
      id: 4,
      category: "best",
      title: "Edible Oil",
      description:
        "Our edible oil is refined for purity and taste, ideal for cooking, frying, and enhancing your dishes. Available in various types like sunflower, mustard, and sesame.",
      img: "/img/products/Edible Oil.jpg",
    },
    {
      id: 5,
      category: "recent",
      title: "Nuts",
      description:
        "Our nuts are carefully selected for freshness and flavor, perfect for snacking or adding a crunch to your meals. Available in almonds, cashews, pistachios, and more.",
      img: "/img/products/Nuts.jpg",
    },
    {
      id: 6,
      category: "popular",
      title: "Spices & Herbs",
      description:
        "Our spices and herbs bring rich flavor and aroma to every dish. Sourced from the finest farms, perfect for enhancing your cooking with traditional and bold tastes.",
      img: "/img/products/Spices & Herbs.png",
    },
    {
      id: 7,
      category: "best",
      title: "Sugar",
      description:
        "Our sugar is refined to perfection, adding the perfect sweetness to your desserts, beverages, and everyday meals. Available in white, brown, and raw varieties.",
      img: "/img/products/Sugar.jpg",
    },
    {
      id: 8,
      category: "recent",
      title: "Salt",
      description:
        "Our salt is harvested for purity and flavor, perfect for seasoning your dishes. Available in fine, coarse, and Himalayan varieties to suit all your cooking needs.",
      img: "/img/products/Salt.png",
    },
    {
      id: 9,
      category: "popular",
      title: "Ghee",
      description:
        "Our ghee is rich, aromatic, and made from the finest butter, perfect for cooking, baking, or adding a traditional touch to your meals.",
      img: "/img/products/Ghee.png",
    },
    {
      id: 10,
      category: "best",
      title: "Pickle",
      description:
        "Our pickles are made from the finest ingredients, bursting with bold, tangy flavors. Perfect for adding a zesty kick to your meals. Available in various varieties like mango, lime, and mixed vegetables.",
      img: "/img/products/Pickle.jpg",
    },
    {
      id: 11,
      category: "recent",
      title: "Soup",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Soup.jpg",
    },
    {
      id: 12,
      category: "popular",
      title: "Soup",
      description:
        "Our soups are crafted with rich flavors and quality ingredients, perfect for a hearty meal or a light snack. Available in a variety of savory options to satisfy every taste.",
      img: "/img/products/Noodles.jpeg",
    },
  ];

  useEffect(() => {
    
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div>
      <PageRouteBanner PageName="Products" />

      <div className="container py-5">
        {/* Products Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-capitalize">{category}</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Our products are sourced from Bangladesh, India, China, and beyond.
            We provide the finest quality products at the best prices.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row g-4">
          <div className="col-lg-12">
            <div className="row g-4">
              {products.map((item) => (

                <Link to={`/product-details/${item.id}`} key={item.id} className="col-md-6 col-lg-4 col-xl-3">

                  <div
                    className="border border-primary rounded position-relative vesitable-item"
                    style={{ maxHeight: "450px", minHeight: "450px" }}
                  >
                    <div className="vesitable-img">
                      <img
                        src={item.img}
                        className="img-fluid w-100 rounded-top"
                        style={{ maxHeight: "250px", minHeight: "250px" }}
                        alt=""
                      />
                    </div>
                    <div
                      className="text-white bg-primary px-3 py-1 rounded position-absolute"
                      style={{ top: "10px", right: "10px" }}
                    >
                      Comming...
                    </div>
                    <div className="p-4 rounded-bottom">
                      <h4>{item.title}</h4>
                      <p>{item.description?.slice(0, 100)}...</p>
                    </div>
                  </div>

                </Link>

              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
