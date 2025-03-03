import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import axios from "axios";

export default function HeroSlider() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const API_URL = import.meta.env.VITE_API_URL;
    axios
      .get(`${API_URL}/sliders/`)
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching slider data:", error);
      });
  }, []);

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
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
      {data.map((item) => (
          <SwiperSlide key={item.id}>
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
          </SwiperSlide>
        ))}
      )
    </Swiper>
  );
}
