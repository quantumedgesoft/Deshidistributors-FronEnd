import { Link } from "react-router"

const Topbar = () => {
  return (
    <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-white"></i>
                <Link to="/contact" className="text-white">
                  123 Street, New York
                </Link>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-white"></i>
                <a href="#" className="text-white">
                  info@Deshidistributors.com
                </a>
              </small>
            </div>
            <div className="top-link pe-2">
              <Link to="/privacy-Policy" className="text-white">
                <small className="text-white mx-2">Privacy Policy</small>/
              </Link>
              <Link to="/terms-of-use" className="text-white">
                <small className="text-white mx-2">Terms of Use</small>/
              </Link>
              <Link href="/" className="text-white">
                <small className="text-white ms-2">Organic</small>
              </Link>
            </div>
          </div>
        </div>
  )
}

export default Topbar
