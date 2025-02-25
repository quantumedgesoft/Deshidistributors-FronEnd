import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

export default function VegetableSlidder() {
  const products = [
    {
      id: 1,
      category: "best",
      title: "Rice",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/rice.jpg",
    },
    {
      id: 2,
      category: "recent",
      title: "Daal",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Daal.jpeg",
    },
    {
      id: 3,
      category: "popular",
      title: "Flour",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Flour.jpeg",
    },
    {
      id: 4,
      category: "best",
      title: "Edible Oil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Edible Oil.jpg",
    },
    {
      id: 5,
      category: "recent",
      title: "Nuts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Nuts.jpg",
    },
    {
      id: 6,
      category: "popular",
      title: "Spices & Herbs",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Spices & Herbs.png",
    },
    {
      id: 7,
      category: "best",
      title: "Sugar",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Sugar.jpg",
    },
    {
      id: 8,
      category: "recent",
      title: "Salt",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Salt.png",
    },
    {
      id: 9,
      category: "popular",
      title: "Ghee",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Ghee.png",
    },
    {
      id: 10,
      category: "best",
      title: "Pickle",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Pickle.jpg",
    },
    {
      id: 11,
      category: "recent",
      title: "Soup",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Soup.jpg",
    },
    {
      id: 12,
      category: "popular",
      title: "Soup",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/img/products/Noodles.jpeg",
    },

    // {
    //   id: 13,
    //   category: "Noodles",
    //   title: "Chanachur",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Chanachur.png",
    // },
    // {
    //   id: 14,
    //   category: "Noodles",
    //   title: "Dates",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Dates.png",
    // },
    // {
    //   id: 15,
    //   category: "Noodles",
    //   title: "Biscuit",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Biscuit.jpg",
    // },
    // {
    //   id: 16,
    //   category: "Noodles",
    //   title: "Sauce",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Sauce.jpg",
    // },
    // {
    //   id: 17,
    //   category: "Noodles",
    //   title: "Honey",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Honey.png",
    // },
    // {
    //   id: 18,
    //   category: "Noodles",
    //   title: "Tea, Coffee, Milk Drinks",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Tea, Coffee, Milk Drinks.png",
    // },
    // {
    //   id: 19,
    //   category: "Noodles",
    //   title: "Candy",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Candy.jpg",
    // },
    // {
    //   id: 20,
    //   category: "Noodles",
    //   title: "Paan",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Paan.png",
    // },
    // {
    //   id: 21,
    //   category: "Noodles",
    //   title: "Healthcare & Beauty",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Healthcare & Beauty.jpg",
    // },
    // {
    //   id: 22,
    //   category: "Noodles",
    //   title: "Soap",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Soap.png",
    // },
    // {
    //   id: 23,
    //   category: "Noodles",
    //   title: "Miscellaneous",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
    //     img: "/img/products/Miscellaneous.jpg",
    // },
  ];

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
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border border-primary rounded position-relative vesitable-item">
              <div className="vesitable-img">
                <img
                  src={item.img}
                  className="img-fluid w-100 rounded-top"
                  style={{maxHeight: "250px", minHeight: "250px"}}
                  alt=""
                />
              </div>
              <div
                className="text-white bg-primary px-3 py-1 rounded position-absolute"
                style={{ top: "10px", right: "10px" }}
              >
                Comming...
              </div>
              <div className="p-4 rounded-bottom">
                <h4>{item.title}</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit sed do
                  eiusmod te incididunt
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
