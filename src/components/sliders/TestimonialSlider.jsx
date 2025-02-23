import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function TestimonialSlidder() {


  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={2}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={false}
        navigation={false}
        modules={[Autoplay]}
        className=""
      >
        <SwiperSlide>
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i
                className="fa fa-quote-right fa-2x text-secondary position-absolute"
                style={{ bottom: "30px", right: "0" }}
              ></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industry&apos;s standard dummy text ever since the
                  1500s,
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img
                    src="/src/assets/img/testimonial-1.jpg"
                    className="img-fluid rounded"
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                  />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i
                className="fa fa-quote-right fa-2x text-secondary position-absolute"
                style={{ bottom: "30px", right: "0" }}
              ></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industry&apos;s standard dummy text ever since the
                  1500s,
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img
                    src="/src/assets/img/testimonial-1.jpg"
                    className="img-fluid rounded"
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                  />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="testimonial-item img-border-radius bg-light rounded p-4">
            <div className="position-relative">
              <i
                className="fa fa-quote-right fa-2x text-secondary position-absolute"
                style={{ bottom: "30px", right: "0" }}
              ></i>
              <div className="mb-4 pb-4 border-bottom border-secondary">
                <p className="mb-0">
                  Lorem Ipsum is simply dummy text of the printing Ipsum has
                  been the industry&apos;s standard dummy text ever since the
                  1500s,
                </p>
              </div>
              <div className="d-flex align-items-center flex-nowrap">
                <div className="bg-secondary rounded">
                  <img
                    src="/src/assets/img/testimonial-1.jpg"
                    className="img-fluid rounded"
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                  />
                </div>
                <div className="ms-4 d-block">
                  <h4 className="text-dark">Client Name</h4>
                  <p className="m-0 pb-3">Profession</p>
                  <div className="d-flex pe-5">
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                    <i className="fas fa-star text-primary"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
