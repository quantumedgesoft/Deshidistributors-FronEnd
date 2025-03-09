import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router";
import useDataFetcher from "../../utils/FetchDatas";
import Loader from "../../utils/loader/Loader";
import RelatedProductSlider from "../../components/sliders/RelatedProductSlider";

const ProductDetails = () => {
  const { id } = useParams();
  const endpoint = `/product/products/${id}`;
  const param = false;
  const { data, isLoading } = useDataFetcher({ endpoint, param });
  const { data: siteContent } = useDataFetcher({
    endpoint: "/site-content/",
    param: false,
  });

  console.log(siteContent?.data?.facebook);

  if (isLoading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="ProductDetailsCont">
        <div className="row">
          {/* Product Images */}
          <div className="col-md-6 mb-4">
            <img
              src={data?.image}
              alt="Product"
              className="rounded mb-3 product-image border w-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Product Details */}
          <div className="col-md-6">
            <h2 className="mb-3 text-primary">{data?.title}</h2>

            <div className="mb-3">
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <span className="ms-2">
                {data?.rating} ({data?.total_review} reviews)
              </span>
            </div>
            <p className="mb-4">{data?.details}</p>
            <div className="mb-4 d-flex align-items-center gap-2">
              <h5>Quantity:</h5>
              <h6 className="d-flex align-items-center gap-4 text-primary">
                {data?.weight}
              </h6>
            </div>

            <div className="mt-4 h-100">
              <h5>Buy Now Online:</h5>

              <div className="availbleStore d-flex flex-column flex-lg-row align-items-center gap-3 gap-lg-5 overflow-hidden">
                <Link to="https://deshidistributors.com/">
                  <img
                    src="/img/deshidistributors_logo.png"
                    alt="Product"
                    className=""
                    style={{ maxWidth: "100px", height: "70px" }}
                  />
                </Link>

                <Link to={siteContent?.data?.facebook} target="_blank">
                  <img
                    src="/img/others/facebook.webp"
                    alt="Product"
                    className=""
                    style={{ maxWidth: "60px", height: "60px" }}
                  />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="my-5">
            <div className="d-flex justify-content-center align-items-center">
              <div className="bg-primary w-100" style={{ height: "2px" }}></div>
              <h2 className="mb-3 text-primary text-center py-5 w-100 fs-2">
                Related Products
              </h2>
              <div className="bg-primary w-100" style={{ height: "2px" }}></div>
            </div>
            <RelatedProductSlider slug={data?.category?.slug} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
