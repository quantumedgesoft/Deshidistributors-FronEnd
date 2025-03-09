import { Link } from "react-router";
import useDataFetcher from "../../../utils/FetchDatas";
const Footer = () => {
  const endpoint = "/site-content/";
  const param = false;
  const { data } = useDataFetcher({ endpoint, param });

  return (
    <div
      className="container-fluid text-white-50 footer pt-5 mt-5"
      style={{ backgroundColor: "#000" }}
    >
      <div className="container py-5">
        <div
          className="pb-4 mb-4"
          style={{ borderBottom: "1px solid rgba(62, 62, 60, 0.5)" }}
        >
          <div className="row g-4">
            <div className="col-lg-3">
              <a href="#">
                <img className="w-50" src="/img/logo_light.png" alt="logo" />
              </a>
            </div>
            <div className="col-lg-6">
              <div className="position-relative mx-auto">
                <input
                  className="form-control border-0 w-100 py-3 px-4 rounded-pill"
                  type="number"
                  placeholder="Your Email"
                />
                <button
                  type="submit"
                  className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white"
                  style={{ top: "0", right: "0" }}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex justify-content-end pt-3">
                <Link
                  className="border border-primary btn-outline-primary me-2 btn-md-square rounded-circle"
                  to={data?.data?.linkedin}
                  target="_blank"
                >
                  <i className="fab fa-twitter"></i>
                </Link>

                <Link
                  className="border border-primary btn-outline-primary me-2 btn-md-square rounded-circle"
                  to={data?.data?.facebook}
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </Link>

                <Link
                  className="border border-primary btn-outline-primary me-2 btn-md-square rounded-circle"
                  to={data?.data?.youtube}
                  target="_blank"
                >
                  <i className="fab fa-youtube"></i>
                </Link>

                <Link
                  className="border border-primary btn-outline-primary btn-md-square rounded-circle"
                  to={data?.data?.linkedin}
                  target="_blank"
                >
                  <i className="fab fa-linkedin-in"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Why People Like us!</h4>
              <p className="mb-4">{data?.data?.company_details}</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Info</h4>
              <Link className="btn-link" to="/about">
                About Us
              </Link>
              <Link className="btn-link" to="/privacy-policy">
                Privacy Policy
              </Link>
              <Link className="btn-link" to="/terms-of-use">
                Terms & Condition
              </Link>
              <Link className="btn-link" to="/return-policy">
                Return Policy
              </Link>
              <Link className="btn-link" to="/faq">
                FAQs & Help
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Popular Service</h4>
              <Link className="btn-link" to="/products">
                Rice
              </Link>
              <Link className="btn-link" to="/products">
                Spices & Herbs
              </Link>
              <Link className="btn-link" to="/products">
                Tea, Coffee, Milk Drinks
              </Link>
              <Link className="btn-link" to="/products">
                Healthcare & Beauty
              </Link>
              <Link className="btn-link" to="/products">
                Miscellaneous
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Contact</h4>
              <p>Address: {data?.data?.address}</p>
              <p>Email: {data?.data?.email}</p>
              <p>Phone: {data?.data?.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
