import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import useDataFetcher from "../../utils/FetchDatas";

export default function BrandsSlider() {
  const { data } = useDataFetcher("/our-partner/");

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
            slidesPerView: 4,
            spaceBetween: 10,
          },
        }}
        navigation={false}
        modules={[Autoplay]}
        className="my-2"
      >
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="vesitable-item rounded position-relative overflow-hidden"
              style={{ maxHeight: "60px" }}
            >
              <div
                className="product-image"
                style={{
                  backgroundImage: `url(${item?.logo})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundOrigin: "center",
                  minHeight: "60px",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
