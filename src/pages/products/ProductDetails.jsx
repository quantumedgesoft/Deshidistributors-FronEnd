import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "react-router";
import useDataFetcher from "../../utils/FetchDatas";
import Loader from "../../utils/loader/Loader";
import RelatedProductSlider from "../../components/sliders/RelatedProductSlider";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useDataFetcher(`/product/products/${id}`);

  console.log(data);

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
              className="img-fluid rounded mb-3 w-100 product-image"
              id="mainImage"
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
              <span className="ms-2">4.5 (120 reviews)</span>
            </div>
            <p className="mb-4">{data?.details}</p>
            <div className="mb-4 d-flex align-items-center gap-2">
              <h5>Size:</h5>
              <h6 className="d-flex align-items-center gap-4 text-primary">
                1kg, 2kg, 5kg
              </h6>
            </div>

            <div className="mt-4 h-100">
              <h5>Buy Now Online:</h5>

              <div className="availbleStore d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-4 overflow-hidden">
                <img
                  src="https://sarojagro.com/wp-content/uploads/2020/08/Amazon-Logo.jpg"
                  alt="Product"
                  className=""
                  style={{ maxWidth: "120px", height: "100%" }}
                />
                <img
                  src="https://sarojagro.com/wp-content/uploads/2020/08/Flipkart-Logo.jpg"
                  alt="Product"
                  className=""
                  style={{ maxWidth: "120px", height: "100%" }}
                />
                <img
                  src="https://sarojagro.com/wp-content/uploads/2020/08/Alibaba-Logo.jpg"
                  alt="Product"
                  className=""
                  style={{ maxWidth: "120px", height: "100%" }}
                />
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
            <RelatedProductSlider slug={data?.category?.slug}/>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
