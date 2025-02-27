import { Link } from "react-router"

const Topbar = () => {
  const topData = {
    location: "Jamaica, NY, United States, New York",
    email: "mydeshiny@gmail.com",
    phone: "+1 718-291-1205"
  };
  return (
    <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-white"></i>
                <Link to="/contact" className="text-white">
                {topData.location}
                </Link>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-white"></i>
                <Link to={`mailto:${topData.email}`} className="text-white">
                  {topData.email}
                </Link>
              </small>
            </div>
            <div className="top-link pe-2">
              <small className="me-3">
                <i className="fa-solid fa-phone-volume me-2 text-white"></i>
                <Link to={`tel:${topData.phone}`} className="text-white">
                  <b>Call Us:</b> {topData.phone}
                </Link>
              </small>
            </div>
          </div>
        </div>
  )
}

export default Topbar
