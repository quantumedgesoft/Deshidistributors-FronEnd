import { Link } from "react-router"
import useDataFetcher from "../../utils/FetchDatas";

const Topbar = () => {
  const endpoint = "/site-content/";
  const param = false;

  const {data} = useDataFetcher({endpoint, param});
  return (
    <div className="container topbar bg-primary d-none d-lg-block">
          <div className="d-flex justify-content-between">
            <div className="top-info ps-2">
              <small className="me-3">
                <i className="fas fa-map-marker-alt me-2 text-white"></i>
                <Link to="/contact" className="text-white">
                {data?.data?.address}
                </Link>
              </small>
              <small className="me-3">
                <i className="fas fa-envelope me-2 text-white"></i>
                <Link to={`mailto:${data?.data?.email}`} className="text-white">
                  {data?.data?.email}
                </Link>
              </small>
            </div>
            <div className="top-link pe-2">
              <small className="me-3">
                <i className="fa-solid fa-phone-volume me-2 text-white"></i>
                <Link to={`tel:${data?.data?.phone}`} className="text-white">
                  <b>Call Us:</b> {data?.data?.phone}
                </Link>
              </small>
            </div>
          </div>
        </div>
  )
}

export default Topbar
