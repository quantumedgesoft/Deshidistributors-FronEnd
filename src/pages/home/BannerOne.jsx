import { Link } from "react-router";
import useDataFetcher from "../../utils/FetchDatas";

const BannerOne = () => {
  const endpoint = "/ads-banner/";
  const param = false;

  const { data } = useDataFetcher({ endpoint, param });

  return (
    <div className="container-fluid banner bg-secondary my-5">
      <div className="container py-5">
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3 text-white">{data?.data?.title}</h1>
              <p className="fw-normal display-3 text-dark mb-4">in Our Store</p>
              <p className="mb-4 text-dark">{data?.data?.description}</p>
              <Link
                to="/products"
                className="banner-btn btn border-2 border-white rounded-pill text-dark py-3 px-5"
              >
                More
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative">
              <img
                src={data?.data?.image}
                className="img-fluid w-100 h-100 rounded"
                style={{ maxHeight: "540px" }}
                alt=""
              />
              <div
                className="d-flex align-items-center justify-content-center bg-white rounded-circle position-absolute"
                style={{
                  width: "140px",
                  height: "140px",
                  top: "0px",
                  left: "0px",
                }}
              >
                <h1 style={{ fontSize: "90px" }}>{data?.data?.unit}</h1>
                <div className="d-flex flex-column">
                  <span className="h3 mb-0">{data?.data?.price}$</span>
                  <span className="h5 text-muted mb-0">kg</span>
                </div>
              </div>

              <div
                id="circleAnim"
                className="position-absolute"
                style={{
                  width: "140px",
                  height: "140px",
                  top: "0px",
                  left: "0px",
                  border: "10px dashed",
                  borderRadius: "50%",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
