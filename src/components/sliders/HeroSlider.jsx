import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import useDataFetcher from "../../utils/FetchDatas";

export default function HeroSlider() {
  const { data, isLoading } = useDataFetcher("/sliders/");
  if (isLoading) {
    return (
      <div
        className="rounded"
        style={{ height: "280px", backgroundColor: "gray" }}
      ></div>
    );
  }

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      F
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
      {data?.map((item) => (
        <SwiperSlide key={item?.id}>
          {
            <div
              className="active rounded overflow-hidden"
              style={{
                position: "relative",
                maxHeight: "280px",
                minHeight: "280px",
                backgroundImage: `url(${item.image})`,
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
                  transform: "translate(-50%, -50%)",
                  background:
                    "linear-gradient(rgba(255, 181, 36, 0.7), rgba(255, 181, 36, 0.7))",
                }}
              >
                {item.name}
              </a>
            </div>
          }
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
