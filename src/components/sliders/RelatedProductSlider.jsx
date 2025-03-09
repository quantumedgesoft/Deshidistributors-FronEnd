/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import useDataFetcher from "../../utils/FetchDatas";
import { useEffect } from "react";
import { Link, useLocation } from "react-router";

export default function RelatedProductSlider({ slug }) {
  const endpoint = "/product/products/";
  const param = false;
  const { pathname } = useLocation();

  const { data } = useDataFetcher({ endpoint, param });
  const filterted = data?.filter((item) => item?.category?.slug === slug);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  if (filterted?.length <= 0) {
    return <p className="text-center">No related products</p>;
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
            <Link to={`/product-details/${item?.id}`}>
              <div
                className="border border-primary rounded position-relative vesitable-item"
                style={{ maxHeight: "450px", minHeight: "450px" }}
              >
                <div className="vesitable-img">
                  <img
                    src={item?.image}
                    className="img-fluid w-100 rounded-top"
                    style={{ maxHeight: "250px", minHeight: "250px" }}
                    alt=""
                  />
                </div>
                <div className="p-4 rounded-bottom">
                  <h5>{item?.title}</h5>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
