import { useState } from "react";
import useDataFetcher from "../../utils/FetchDatas";
import { Link } from "react-router";
import CardLoader from "../../utils/CardLoader";

const OurProduccts = () => {
  const endpoint = "/product/products/";
  const param = false;
  const [filter, setFilter] = useState("all");

  const { data, isLoading } = useDataFetcher({ endpoint, param });

  const menus = [
    {
      id: 1,
      title: "All Products",
      slug: "all",
    },
    {
      id: 2,
      title: "Popular",
      slug: "popular",
    },
    {
      id: 3,
      title: "Recent",
      slug: "recent",
    },
    {
      id: 4,
      title: "Best Sale",
      slug: "best sale",
    },
  ];

  const filtered = data?.filter((item) => {
    if (!item?.tags?.title) return false;

    const title = item.tags.title.toLowerCase();
    const filterValue = filter.toLowerCase();

    if (filterValue === "all") {
      return ["popular", "best sale", "recent"].includes(title);
    } else {
      return title === filterValue;
    }
  });

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
                    <a
                      onClick={() => setFilter(item.slug)}
                      className={`d-flex m-2 py-2 bg-light rounded-pill  ${
                        filter === item.slug ? "active" : ""
                      }`}
                      data-bs-toggle="pill"
                    >
                      <span className="text-dark" style={{ width: "130px" }}>
                        {item.title}
                      </span>
                    </a>
                  </li>
                ))}

                <li className="nav-item">
                  <Link
                    className="d-flex py-2 m-2 bg-light rounded-pill"
                    to="/products/all-products"
                  >
                    <span className="text-dark " style={{ width: "130px" }}>
                      See all
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="tab-content">
            <div id="tab-1" className="tab-pane fade show p-0 active">
              <div className="row g-4">
                <div className="col-lg-12">
                  <div className="row g-4">
                    {isLoading ? (
                      <CardLoader />
                    ) : (
                      filtered?.map((item) => (
                        <Link
                          to={`/product-details/${item?.id}`}
                          key={item.id}
                          className="col-md-6 col-lg-4 col-xl-3"
                        >
                          <div className="rounded position-relative fruite-item overflow-hidden border border-secondary">
                            <div className="fruite-img">
                              <img
                                src={item?.image}
                                className="img-fluid w-100 h-100 rounded-top"
                                style={{
                                  maxHeight: "280px",
                                  minHeight: "280px",
                                }}
                                alt=""
                              />
                            </div>

                            {item?.tags?.title && (
                              <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute text-capitalize"
                                style={{ top: "10px", left: "10px" }}
                              >
                                {item?.tags?.title}
                              </div>
                            )}

                            <div className="p-4 rounded-bottom">
                              <h5>{item?.title}</h5>
                            </div>
                          </div>
                        </Link>
                      ))
                    )}
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

export default OurProduccts;
