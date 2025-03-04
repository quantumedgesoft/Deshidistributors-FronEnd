import { Link } from "react-router";
import useDataFetcher from "../../utils/FetchDatas";

const DiscountDisplay = () => {
  const { data } = useDataFetcher("/discount-cards/");

  return (
    <div className="container-flui service py-5">
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-6 col-lg-4">
            <Link to="/products">
              <div className="service-item bg-secondary rounded border border-secondary">
                <img
                  src={data[0]?.image}
                  className="img-fluid rounded-top w-100"
                  style={{ maxHeight: "325px" }}
                  alt=""
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-primary text-center p-4 rounded">
                    <h5 className="text-white">{data[0]?.title}</h5>
                    <h3 className="mb-0">{data[0]?.offer}</h3>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="#">
              <div className="service-item bg-dark rounded border border-dark">
                <img
                  src={data[1]?.image}
                  className="img-fluid rounded-top w-100"
                  style={{ maxHeight: "325px" }}
                  alt=""
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-light text-center p-4 rounded">
                    <h5 className="text-primary">{data[1]?.title}</h5>
                    <h3 className="mb-0">{data[1]?.offer}</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="col-md-6 col-lg-4">
            <a href="#">
              <div className="service-item bg-primary rounded border border-primary">
                <img
                  src={data[2]?.image}
                  className="img-fluid rounded-top w-100"
                  style={{ maxHeight: "325px", minHeight: "325px" }}
                  alt=""
                />
                <div className="px-4 rounded-bottom">
                  <div className="service-content bg-secondary text-center p-4 rounded">
                    <h5 className="text-white">{data[2]?.title}</h5>
                    <h3 className="mb-0">{data[0]?.offer}</h3>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountDisplay;
