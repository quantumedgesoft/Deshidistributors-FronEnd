import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
  const sliderContent = [
    {
      id: 1,
      title: "Rice",
      img: "/img/slider/slider1.jpg",
    },
    {
      id: 2,
      title: "Daal",
      img: "/img/slider/slider2.jpg",
    },
    {
      id: 3,
      title: "Flour",
      img: "/img/slider/slider3.jpg",
    },
    {
      id: 4,
      title: "Edible Oil",
      img: "/img/slider/slider4.jpg",
    },
    {
      id: 5,
      title: "Nuts",
      img: "/img/slider/slider5.jpg",
    },
    {
      id: 6,
      title: "Spices & Herbs",
      img: "/img/slider/slider6.jpg",
    },
    {
      id: 7,
      title: "Sugar",
      img: "/img/slider/slider7.jpg",
    },
    {
      id: 8,
      title: "Salt",
      img: "/img/slider/slider8.jpg",
    },
    {
      id: 9,
      title: "Ghee",
      img: "/img/slider/slider9.jpg",
    },
    {
      id: 10,
      title: "Pickle",
      img: "/img/slider/slider10.jpg",
    },
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
        {sliderContent.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="active rounded overflow-hidden"
              style={{ maxHeight: "280px" }}
            >
              <img
                src={item.img}
                className="img-fluid w-100 h-100 bg-secondary rounded"
                alt="First slide"
              />
              <a
                href="#"
                className="btn px-4 py-2 text-white rounded bg-primary"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  translate: "-50% -50%",
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
