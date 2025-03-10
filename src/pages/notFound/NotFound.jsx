import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
    <PageRouteBanner PageName="Not-Found-404"/>
    <div className="container-fluid py-5" style={{marginTop: "120px"}}>
      <div className="container py-5 text-center">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
            <h1 className="display-1">404</h1>
            <h1 className="mb-4">Page Not Found</h1>
            <p className="mb-4">
              We&apos;re sorry, the page you have looked for does not exist on
              our website! Maybe go to our home page or try using a search?
            </p>
            <Link
              to="/"
              className="btn border-secondary rounded-pill py-3 px-5"
            >
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default NotFound;
