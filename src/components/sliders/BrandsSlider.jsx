import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import useDataFetcher from "../../utils/FetchDatas";

export default function BrandsSlider() {
  const { data, isLoading } = useDataFetcher("/our-partner/");

  if (isLoading) {
    return (
      <div
        className="d-flex gap-5 container my-5"
        style={{ maxHeight: "120px", paddingTop:"70px" }}
      >
        <div
          className="BrandsSlider w-100"
          style={{ height: "120px", background: "#888585" }}
        >
          1
        </div>
        <div
          className="BrandsSlider w-100"
          style={{ height: "120px", background: "#888585" }}
        >
          1
        </div>
        <div
          className="BrandsSlider w-100"
          style={{ height: "120px", background: "#888585" }}
        >
          1
        </div>
        <div
          className="BrandsSlider w-100"
          style={{ height: "120px", background: "#888585" }}
        >
          1
        </div>
      </div>
    );
  }

  return (
    <div className="container my-5">
      <h1>Brands</h1>
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
        {data?.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="BrandsSliderCont rounded position-relative overflow-hidden"
              style={{ maxHeight: "120px" }}
            >
              <div
                className="BrandsSlider"
                style={{
                  backgroundImage: `url(${item?.logo})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundOrigin: "center",
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
