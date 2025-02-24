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
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 2,
      title: "Daal",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 3,
      title: "Flour",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 4,
      title: "Edible Oil",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 5,
      title: "Nuts",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 6,
      title: "Spices & Herbs",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 7,
      title: "Sugar",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 8,
      title: "Salt",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 9,
      title: "Ghee",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
    },
    {
      id: 10,
      title: "Pickle",
      img: "/src/assets/prodducts/IMG-20250220-WA0272.jpg",
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
            <div className="carousel-item active rounded">
              <img
                src={item.img}
                className="img-fluid w-100 h-100 bg-secondary rounded"
                alt="First slide"
              />
              <a
                href="#"
                className="btn px-4 py-2 text-white rounded bg-primary"
              >
                {item.title}
              </a>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className="carousel-item active rounded">
            <img
              src="/src/assets/img/hero-img-1.png"
              className="img-fluid w-100 h-100 bg-secondary rounded"
              alt="First slide"
            />
            <a href="#" className="btn px-4 py-2 text-white rounded">
              Dhaal
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-item active rounded">
            <img
              src="/src/assets/img/hero-img-1.png"
              className="img-fluid w-100 h-100 bg-secondary rounded"
              alt="First slide"
            />
            <a href="#" className="btn px-4 py-2 text-white rounded">
              Flour
            </a>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-item active rounded">
            <img
              src="/src/assets/img/hero-img-1.png"
              className="img-fluid w-100 h-100 bg-secondary rounded"
              alt="First slide"
            />
            <a href="#" className="btn px-4 py-2 text-white rounded">
              Fruites
            </a>
          </div>
        </SwiperSlide>
         */}
      </Swiper>
    </>
  );
}
