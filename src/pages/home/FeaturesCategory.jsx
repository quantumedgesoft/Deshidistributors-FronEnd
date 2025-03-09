import useDataFetcher from "../../utils/FetchDatas";

const FeaturesCategory = () => {
  const endpoint = "/cards-01/";
  const param = false;
  const { data } = useDataFetcher({ endpoint, param });

  return (
    <div className="container-flui featurs">
      <div className="container py-5">
        <div className="row g-4">
          {data?.map((featureReview) => (
            <div key={featureReview?.id} className="col-md-6 col-lg-4">
              <div className="featurs-item rounded bg-light p-4 text-center">
                <div className="featurs-icon btn-square rounded-circle bg-secondary mb-4 mx-auto">
                  <i
                    className={`fa ${featureReview?.icon} fa-2x text-white`}
                  ></i>
                </div>
                <div className="featurs-content text-left">
                  <h6>{featureReview?.title}</h6>

                  <p className="mb-0">
                    {featureReview?.description?.split("-")}
                  </p>
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
