import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function BrandsSlider() {
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

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={false}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        navigation={false}
        modules={[Autoplay]}
        className="my-4"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="vesitable-item border border-primary rounded position-relative overflow-hidden"
              style={{ maxHeight: "200px" }}
            >
              <div
                className="product-image"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundOrigin: "center",
                  minHeight: "150px",
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
