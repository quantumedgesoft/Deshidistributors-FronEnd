import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function VegetableSlidder() {
  
  // const dataas = [
  //   {
  //     id: 1,
  //     label: "Vegetable",
  //     img: "/src/assets/img/vegetable-item-6.jpg",
  //     title: "Vegetable",
  //     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
  //   },
  //   {
  //     id: 2,
  //     label: "Vegetable",
  //     img: "/src/assets/img/vegetable-item-6.jpg",
  //     title: "Vegetable",
  //     des: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt"
  //   },

  // ]

  return (
    <>
      <Swiper
        spaceBetween={30}
        slidesPerView={4}
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
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-6.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-1.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$4.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-3.png"
                className="img-fluid w-100 rounded-top bg-light"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Banana</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-4.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Bell Papper</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Potatoes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-6.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-5.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Potatoes</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="border border-primary rounded position-relative vesitable-item">
            <div className="vesitable-img">
              <img
                src="/src/assets/img/vegetable-item-6.jpg"
                className="img-fluid w-100 rounded-top"
                alt=""
              />
            </div>
            <div
              className="text-white bg-primary px-3 py-1 rounded position-absolute"
              style={{ top: "10px", right: "10px" }}
            >
              Vegetable
            </div>
            <div className="p-4 rounded-bottom">
              <h4>Parsely</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                eiusmod te incididunt
              </p>
              <div className="d-flex justify-content-between flex-lg-wrap">
                <p className="text-dark fs-5 fw-bold mb-0">$7.99 / kg</p>
                <a
                  href="#"
                  className="btn border border-secondary rounded-pill px-3 text-primary"
                >
                  <i className="fa fa-shopping-bag me-2 text-primary"></i> Add
                  to cart
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
