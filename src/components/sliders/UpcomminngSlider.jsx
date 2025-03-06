import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import useDataFetcher from "../../utils/FetchDatas";
import CardLoader from "../../utils/CardLoader";

export default function UpcommingSlider() {
  const { data, isLoading } = useDataFetcher("/product/products/");
  console.log(data)

  const filterted = data?.filter((item) => item?.product_type === "Upcomming");

  if (isLoading) {
    return <CardLoader />;
  }

  return (
    <>
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
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
        className=""
      >
        {filterted?.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className="border border-primary rounded position-relative vesitable-item"
              style={{ maxHeight: "400px", minHeight: "400px" }}
            >
              <div className="vesitable-img">
                <img
                  src={item?.image}
                  className="img-fluid w-100 rounded-top"
                  style={{ maxHeight: "250px", minHeight: "250px" }}
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                {item?.product_type}
              </div>
              <div className="p-4 rounded-bottom">
                <h4>{item?.title}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
