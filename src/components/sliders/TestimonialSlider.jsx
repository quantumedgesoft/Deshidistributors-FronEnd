import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import useDataFetcher from "../../utils/FetchDatas";

export default function TestimonialSlider() {
  const endpoint = "/our-testimonials/";
  const param = false;
  const { data } = useDataFetcher({ endpoint, param });

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
        }}
        className=""
      >
        {data?.map((review) => (
          <SwiperSlide key={review?.id}>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">{review?.review}</p>
                </div>
                <div className="d-flex flex-column flex-lg-row align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src={review?.picture}
                      className="img-fluid rounded"
                      alt=""
                    />
                  </div>

                  <div className="ms-4 d-block">
                    <h4 className="text-dark">{review?.name}</h4>
                    <p className="m-0 pb-3">{review?.designation}</p>
                    <div className="d-flex pe-5">
                      {[...Array(Number(review?.rating))].map((rating, i) => (
                        <i key={i} className="fas fa-star text-secondary"></i>
                      ))}

                      {[...Array(5 - Number(review?.rating))].map((_, i) => (
                        <i key={i} className="fas fa-star "></i>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
