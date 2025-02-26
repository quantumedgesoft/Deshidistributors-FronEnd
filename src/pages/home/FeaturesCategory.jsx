const FeaturesCategory = () => {
  return (
    <div className="container-fluid featurs">
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="featurs-item  rounded bg-light p-4 text-center">
              <div className="featurs-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                <i className="fa fa-chart-simple fa-2x text-white"></i>
              </div>
              <div className="featurs-content text-left">
                <h6>Consumer Favourite</h6>
                <p className="mb-0">Consistently high quality</p>
                <p className="mb-0">Fresh and refreshing</p>
                <p className="mb-0">100% Naturals</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="featurs-item  rounded bg-light p-4 text-center">
              <div className="featurs-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                <i className="fa-solid fa-store fa-2x text-white"></i>
              </div>
              <div className="featurs-content text-left">
                <h6>Retail Convenience</h6>

                <p className="mb-0">A wide range of products</p>
                <p className="mb-0">Fresh produce regularly</p>
                <p className="mb-0">Best prices in the market</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <div className="featurs-item  rounded bg-light p-4 text-center">
              <div className="featurs-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                <i className="fa-solid fa-globe fa-2x text-white"></i>
              </div>
              <div className="featurs-content text-left">
                <h6>Global Exports</h6>
                <p className="mb-0">ISO 22000 certified</p>
                <p className="mb-0">Top notch Infrastructure</p>
                <p className="mb-0">50 Years of trust in every bag</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCategory;
