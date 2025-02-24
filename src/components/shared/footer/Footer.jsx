import React from "react";
import logo from '../../../assets/Images/deshidistributors_logo.png'
import { Link } from "react-router";
const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
      <div className="container py-5">
        <div
          className="pb-4 mb-4"
          style={{ borderBottom: "1px solid rgba(226, 175, 24, 0.5)" }}
        >
          <div className="row g-4">
            <div className="col-lg-3">
              <a href="#">
                  <img className="w-50" src={logo} alt="" />
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
                  style={{top: "0", right: "0"}}
                >
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="d-flex justify-content-end pt-3">
                <a
                  className="btn  btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  className="btn btn-outline-secondary me-2 btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  className="btn btn-outline-secondary btn-md-square rounded-circle"
                  href=""
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Why People Like us!</h4>
              <p className="mb-4">rusted quality, authentic products, and seamless service Deshi Distributors brings you the best of Asia with reliability and passion!
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Info</h4>
              <Link className="btn-link" to="">
                About Us
              </Link>
              <Link className="btn-link" to="">
                Privacy Policy
              </Link>
              <Link className="btn-link" to="">
                Terms & Condition
              </Link>
              <Link className="btn-link" to="">
                Return Policy
              </Link>
              <Link className="btn-link" to="">
                FAQs & Help
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Popular Service</h4>
              <Link className="btn-link" to="">
              Rice
              </Link>
              <Link className="btn-link" to="">
              Spices & Herbs
              </Link>
              <Link className="btn-link" to="">
              Tea, Coffee, Milk Drinks
              </Link>
              <Link className="btn-link" to="">
              Healthcare & Beauty
              </Link>
              <Link className="btn-link" to="">
              Miscellaneous
              </Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Contact</h4>
              <p>Address: 123 Street, New York</p>
              <p>Email:info@Deshidistributors.com</p>
              <p>Phone: +0123 4567 8910</p>
              <img src="img/payment.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
