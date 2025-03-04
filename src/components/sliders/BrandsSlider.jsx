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
      img: "/img/brands/hawor.jpg",
    },
    {
      id: 2,
      category: "recent",
      title: "Daal",
      description:
        "Our high-quality pulses are packed with protein and flavor, perfect for a variety of dishes. Available in lentils, chickpeas, and more, offering nutrition and taste in every bite.",
      img: "/img/brands/krishok.jpg",
    },
    {
      id: 3,
      category: "popular",
      title: "Flour",
      description:
        "Our flour is finely milled for superior texture and quality, perfect for baking, cooking, and making traditional dishes. Available in all-purpose, whole wheat, and specialty varieties.",
      img: "/img/brands/shahi.jpg",
    },
    {
      id: 4,
      category: "best",
      title: "Edible Oil",
      description:
        "Our edible oil is refined for purity and taste, ideal for cooking, frying, and enhancing your dishes. Available in various types like sunflower, mustard, and sesame.",
      img: "/img/brands/shera.jpg",
    },
    {
      id: 5,
      category: "best",
      title: "Rice",
      description:
        "Sourced from the finest fields, our rice offers a fragrant aroma and soft texture, perfect for any dish. Available in Basmati, Jasmine, and Sona Masoori varieties.",
      img: "/img/brands/ck.jpg",
    },
    {
      id: 6,
      category: "recent",
      title: "Daal",
      description:
        "Our high-quality pulses are packed with protein and flavor, perfect for a variety of dishes. Available in lentils, chickpeas, and more, offering nutrition and taste in every bite.",
      img: "/img/brands/krishok.jpg",
    },
    {
      id: 7,
      category: "popular",
      title: "Flour",
      description:
        "Our flour is finely milled for superior texture and quality, perfect for baking, cooking, and making traditional dishes. Available in all-purpose, whole wheat, and specialty varieties.",
      img: "/img/brands/shahi.jpg",
    },
    {
      id: 8,
      category: "best",
      title: "Edible Oil",
      description:
        "Our edible oil is refined for purity and taste, ideal for cooking, frying, and enhancing your dishes. Available in various types like sunflower, mustard, and sesame.",
      img: "/img/brands/shera.jpg",
    },
  ];

  return (
    <div className="container my-5">
      <h1>Our Partners</h1>
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
        className="my-2"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="vesitable-item rounded position-relative overflow-hidden"
              style={{ maxHeight: "140px" }}
            >
              <div
                className="product-image"
                style={{
                  backgroundImage: `url(${item.img})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundOrigin: "center",
                  minHeight: "120px",
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
