import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
  const sliderContent = [
    {
      id: 1,
      title: "Spicy & Herbs",
      img: "/img/slider/Spices_Herbs.png",
    },
    {
      id: 2,
      title: "Tea, Coffee, Milk",
      img: "/img/slider/Tea_Coffee.png",
    },
    {
      id: 3,
      title: "Pickle",
      img: "/img/products/Pickle.jpg",
    },
    {
      id: 4,
      title: "Sauce",
      img: "/img/products/Sauce.jpg",
    },
    {
      id: 5,
      title: "Rice",
      img: "/img/products/rice.jpg",
    },
    {
      id: 6,
      title: "Edible Oil",
      img: "/img/slider/Edible_Oil.jpg",
    },
    // {
    //   id: 7,
    //   title: "Sugar",
    //   img: "/img/slider/slider7.jpg",
    // },
    // {
    //   id: 8,
    //   title: "Salt",
    //   img: "/img/slider/slider8.jpg",
    // },
    // {
    //   id: 9,
    //   title: "Ghee",
    //   img: "/img/slider/slider9.jpg",
    // },
    // {
    //   id: 10,
    //   title: "Pickle",
    //   img: "/img/slider/slider10.jpg",
    // },
  ];

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="HeroSlider"
      >
        {/* {sliderContent.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="active rounded overflow-hidden"
              style={{ maxHeight: "280px" }}
            >
              <img
                src={item.img}
                className="img-fluid w-100 h-100 bg-secondary rounded"
                alt="slide image"
              />

              <a
                href="#"
                className="btn px-4 py-1 text-white rounded fs-5"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translate: "-50% -50%",
                  background:
                    "linear-gradient(rgba(255, 181, 36, 0.7), rgba(255, 181, 36, 0.7))",
                }}
              >
                {item.title}
              </a>
            </div>
          </SwiperSlide>
        ))} */}
        {sliderContent.map((item) => (
  <SwiperSlide key={item.id}>
    <div
      className="active rounded overflow-hidden"
      style={{
        position: "relative",
        maxHeight: "280px",
        minHeight:"280px",
        backgroundImage: `url(${item.img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <a
        href="#"
        className="btn px-4 py-1 text-white rounded fs-5"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the button
          background: "linear-gradient(rgba(255, 181, 36, 0.7), rgba(255, 181, 36, 0.7))",
        }}
      >
        {item.title}
      </a>
    </div>
  </SwiperSlide>
))}

      </Swiper>
    </>
  );
}
