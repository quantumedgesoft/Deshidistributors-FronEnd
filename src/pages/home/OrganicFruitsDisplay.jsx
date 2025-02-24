import { useState } from "react";

const OrganicFruitsDisplay = () => {
  const [filter, setFilter] = useState("all");

  const products = [
    {
      id: 1,
      category: "fruits",
      title: "Grapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/src/assets/img/fruite-item-5.jpg",
    },
    {
      id: 2,
      category: "vegetables",
      title: "Raspberries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/src/assets/img/fruite-item-2.jpg",
    },
    {
      id: 3,
      category: "bread",
      title: "Apricots",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/src/assets/img/fruite-item-4.jpg",
    },
    {
      id: 4,
      category: "meat",
      title: "Banana",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/src/assets/img/fruite-item-3.jpg",
    },
    {
      id: 5,
      category: "fruits",
      title: "Oranges",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/src/assets/img/fruite-item-1.jpg",
    },
    {
      id: 6,
      category: "vegetables",
      title: "Raspberries",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/src/assets/img/fruite-item-2.jpg",
    },
    {
      id: 7,
      category: "fruits",
      title: "Grapes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/src/assets/img/fruite-item-5.jpg",
    },
    {
      id: 8,
      category: "bread",
      title: "Apricots",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod te incididunt",
      img: "/src/assets/img/fruite-item-4.jpg",
    },
  ];

  const menus = [
    {
      id: 1,
      title: "All Products",
      slug: "all"
    },
    {
      id: 2,
      title: "Vegetables",
      slug: "vegetables"
    },
    {
      id: 3,
      title: "Fruits",
      slug: "fruits"
    },
    {
      id: 4,
      title: "Breads",
      slug: "bread"
    },
    {
      id: 5,
      title: "Meat",
      slug: "meat"
    },
  ];

  const filterted = products.filter(item => item.category === filter);

  const filteredProducts = filter === "all" ? products : filterted;

  return (
    <div className="container-fluid fruite py-5">
      <div className="container py-5">
        <div className="tab-class text-center">
          <div className="row g-4">
            <div className="col-lg-4 text-start">
              <h1>Our Organic Products</h1>
            </div>

            <div className="col-lg-8 text-end">
              <ul className="nav nav-pills d-inline-flex text-center mb-5">
                {menus.map((item) => (
                  <li key={item.id} className="nav-item">
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

                {/* <li className="nav-item">
                  <button
                    className="d-flex py-2 m-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-2"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Vegetables
                    </span>
                  </button>
                </li> */}

                {/*  <li className="nav-item">
                  <button
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-3"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Fruits
                    </span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-4"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Bread
                    </span>
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    className="d-flex m-2 py-2 bg-light rounded-pill"
                    data-bs-toggle="pill"
                    href="#tab-5"
                  >
                    <span className="text-dark" style={{ width: "130px" }}>
                      Meat
                    </span>
                  </button>
                </li>
                 */}
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
                        <div className="rounded position-relative fruite-item">
                          <div className="fruite-img">
                            <img
                              src={item.img}
                              className="img-fluid w-100 rounded-top"
                              alt=""
                            />
                          </div>
                          <div
                            className="text-white bg-primary px-3 py-1 rounded position-absolute"
                            style={{ top: "10px", left: "10px" }}
                          >
                            {item.category}
                          </div>
                          <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-2" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-3" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-1.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Oranges</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-6.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Apple</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-4" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-5.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Grapes</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-4.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Apricots</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab-5" className="tab-pane fade show p-0">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-3.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Banana</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-2.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Raspberries</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-3">
                      <div className="rounded position-relative fruite-item">
                        <div className="fruite-img">
                          <img
                            src="/src/assets/img/fruite-item-1.jpg"
                            className="img-fluid w-100 rounded-top"
                            alt=""
                          />
                        </div>
                        <div
                          className="text-white bg-secondary px-3 py-1 rounded position-absolute"
                          style={{ top: "10px", left: "10px" }}
                        >
                          Fruits
                        </div>
                        <div className="p-4 border border-secondary border-top-0 rounded-bottom">
                          <h4>Oranges</h4>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit sed do eiusmod te incididunt
                          </p>
                          {/* <div className="d-flex justify-content-between flex-lg-wrap">
                            <p className="text-dark fs-5 fw-bold mb-0">
                              $4.99 / kg
                            </p>
                          </div> */}
                        </div>
                      </div>
                    </div>
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
