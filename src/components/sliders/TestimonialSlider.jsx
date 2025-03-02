import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
export default function TestimonialSlider() {
  const CustomerReview = [
    {
      id: 1,
      name: "Harpoon Load",
      Profession: "Employee",
      ImageUrl: "/src/assets/img/testimonial-1.jpg",
      reviewText:
        "Excellent quality products! The packaging was great, and the delivery was fast. Highly recommend!",
      rating: 5,
    },
    {
      id: 2,
      name: "MOHAMMAD ALAMGIR KABIR",
      Profession: "Cofounder",
      ImageUrl: '/img/owners/MOHAMMAD ALAMGIR KABIR_ Cofounder.jpeg',
      reviewText:
        "Great experience! The quality of service was top-notch. Highly recommended!",
      rating: 4,
    },
    {
      id: 3,
      name: "md kamruzzamann",
      Profession: "CEO_Cofounder",
      ImageUrl: '/img/owners/mdkamruzzamann.jpeg',
      reviewText:
        "Fantastic work! Really satisfied with the professionalism and expertise.",
      rating: 3,
    },
    {
      id: 3,
      name: "Mohammed Abdur Rahman",
      Profession: "President_Cofounder",
      ImageUrl: '/img/owners/Mohammed Abdur Rahman_ Vice President_Cofounder.jpeg',
      reviewText:
        "Good product, but shipping took a little longer than expected. Still, very satisfied!",
      rating: 2,
    },
    {
      id: 3,
      name: "Iftekhairul Alam",
      Profession: "Cofounder",
      ImageUrl: '/img/owners/Iftekhairul Alam_ Cofounder.jpeg',
      reviewText:
        "Loved the pistachios! Very fresh and tasty. Just wish there were more discounts.",
      rating: 3,
    },
    {
      id: 3,
      name: "No name",
      Profession: "President_Cofounder",
      ImageUrl: "/src/assets/img/avatar.jpg",
      reviewText:
        "Good product, but shipping took a little longer than expected. Still, very satisfied!",
      rating: 1
    },
  ];

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
        {CustomerReview.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="testimonial-item img-border-radius bg-light rounded p-4">
              <div className="position-relative">
                <i
                  className="fa fa-quote-right fa-2x text-secondary position-absolute"
                  style={{ bottom: "30px", right: "0" }}
                ></i>
                <div className="mb-4 pb-4 border-bottom border-secondary">
                  <p className="mb-0">{review.reviewText}</p>
                </div>
                <div className="d-flex align-items-center flex-nowrap">
                  <div className="bg-secondary rounded">
                    <img
                      src={review.ImageUrl}
                      className="img-fluid rounded"
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>
                  <div className="ms-4 d-block">
                    <h4 className="text-dark">{review.name}</h4>
                    <p className="m-0 pb-3">{review.Profession}</p>
                    <div className="d-flex pe-5">
                      {[...Array(review.rating)].map((_, i) => (
                        <i key={i} className="fas fa-star text-secondary"></i>
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
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
