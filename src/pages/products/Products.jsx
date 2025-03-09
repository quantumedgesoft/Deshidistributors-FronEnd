import { Link, useLocation } from "react-router";
import PageRouteBanner from "../../components/shared/pageRouteBanner/PageRouteBanner";
import { useEffect } from "react";
import useDataFetcher from "../../utils/FetchDatas";
import CardLoader from "../../utils/CardLoader";

const Products = () => {
  const { pathname } = useLocation();
  const endpoint = "/product/products/";
  const param = true;
  const { data, isLoading } = useDataFetcher({ endpoint, param });
  const category = pathname?.split("/")[2];

  const filteredProducts = data?.resulths?.filter(
    (item) =>
      item?.category?.title?.toLowerCase().replace(/\s+/g, "_") ===
      category?.toLowerCase().replace(/\s+/g, "_")
  );
  const currentProducts =
    category === "all-products" ? data?.resulths : filteredProducts;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div>
      <PageRouteBanner PageName="Products" />

      <div className="container py-5">
        {/* Products Section */}
        <div className="text-center mb-5">
          <h1 className="display-5 fw-bold text-capitalize">{category}</h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Our products are sourced from Bangladesh, India, China, and beyond.
            We provide the finest quality products at the best prices.
          </p>
        </div>
      </div>

      <div className="container fruite pb-5">
        {currentProducts?.length > 0 ? (
          <div className="tab-class">
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {isLoading ? (
                        <CardLoader />
                      ) : (
                        currentProducts?.map((item) => (
                          <Link
                            to={`/product-details/${item.id}`}
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

                              <div
                                className="text-white bg-primary px-3 py-1 rounded position-absolute text-capitalize"
                                style={{ top: "10px", left: "10px" }}
                              >
                                {item?.category?.title}
                              </div>

                              <div className="p-4 rounded-bottom">
                                <h4>{item?.title}</h4>
                                <p className="text-dark">
                                  {item?.short_description?.slice(0, 100)}...
                                </p>
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
        ) : (
          <p className="text-center">
            There is no product for{" "}
            <span className="fw-bold fs-4">{category}</span> right now!
          </p>
        )}
      </div>
    </div>
  );
};

export default Products;
