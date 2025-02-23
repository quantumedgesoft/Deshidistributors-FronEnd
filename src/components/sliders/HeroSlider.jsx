import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function HeroSlider() {
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="HeroSlider"
      >
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
      </Swiper>
    </>
  );
}
