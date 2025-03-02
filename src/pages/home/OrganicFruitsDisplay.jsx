import { useState } from "react";

const OrganicFruitsDisplay = () => {
  const [filter, setFilter] = useState("all");

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

  const menus = [
    {
      id: 1,
      title: "All Products",
      slug: "all"
    },
    {
      id: 2,
      title: "Popular",
      slug: "popular"
    },
    {
      id: 3,
      title: "Recent",
      slug: "recent"
    },
    {
      id: 4,
      title: "Best Sale",
      slug: "best"
    },

  ];

  const filterted = products.filter(item => item.category === filter);

  const filteredProducts = filter === "all" ? products : filterted;

  return (
    <div className="container-flui fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Products</h1>
            </div>

            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                {menus.map((item) => (
                  <li key={item.id} className="nav-item cursor-pointer">
                    <a onClick={()=>setFilter(item.slug)}
                      className={`d-flex m-2 py-2 bg-light rounded-pill  ${filter === item.slug ? "active" : ""}`}
                      data-bs-toggle="pill"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}

                <li className="nav-item">
                  <a
                    className="d-flex py-2 m-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    <span className="text-dark " style={{ width: "130px" }}>
                      See all
                    </span>
                  </a>
                </li>

              </ul>
            </div>
          </div>

          <div className="tab-content">

            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {filteredProducts.map((item) => (
                      <div key={item.id} className="col-md-6 col-lg-4 col-xl-3">
                        <div className="rounded position-relative fruite-item overflow-hidden border border-secondary">

                          <div className="fruite-img">
                            <img
                              src={item.img}
                              className="img-fluid w-100 h-100 rounded-top"
                              style={{maxHeight: "280px", minHeight:"280px" }}
                              alt=""
                              
                            />
                          </div>

                          <div
                            className="text-white bg-primary px-3 py-1 rounded position-absolute text-capitalize"
                            style={{ top: "10px", left: "10px" }}
                          >
                            {item.category}
                          </div>

                          <div className="p-4 rounded-bottom">
                            <h4>{item.title}</h4>
                            {/* <p>{item.description}</p> */}
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganicFruitsDisplay;
