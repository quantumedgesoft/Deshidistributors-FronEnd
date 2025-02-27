const FeaturesCategory = () => {
  const fetureOverviw = [
    {
      id: 1,
      icon: "fa-chart-simple",
      title: "Consumer Favourite",
      content: [
        "Consistently high quality",
        "Fresh and refreshing",
        "100% Naturals",
      ],
    },
    {
      id: 2,
      icon: "fa-store",
      title: "Retail Convenience",
      content: [
        "A wide range of products",
        "Fresh produce regularly",
        "Best prices in the market",
      ],
    },
    {
      id: 3,
      icon: "fa-globe",
      title: "Global Exports",
      content: [
        "ISO 22000 certified",
        "Top notch Infrastructure",
        "50 Years of trust in every bag",
      ],
    },
  ];

  return (
    <div className="container-fluid featurs">
      <div className="container py-5">
        <div className="row g-4">
          {fetureOverviw.map((featureReview) => (
            <div key={featureReview.id} className="col-md-6 col-lg-4">
              <div className="featurs-item rounded bg-light p-4 text-center">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                  <i className={`fa ${featureReview.icon} fa-2x text-white`}></i>
                </div>
                <div className="featurs-content text-left">
                  <h6>{featureReview.title}</h6>
                  {featureReview.content.map((point, index) => (
                    <p key={index} className="mb-0">{point}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCategory;