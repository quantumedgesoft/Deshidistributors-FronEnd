import HeroSlider from "../../components/sliders/HeroSlider";
import useDataFetcher from "../../utils/FetchDatas";
const HeroSection = () => {
  const endpoint = "/site-content/";
  const param = false;
  const { data, isLoading } = useDataFetcher({endpoint, param});

  return (
    <section className="container-fluid py-5 mb- hero-header">
      <div className="container " style={{ padding: "20px 0px" }}>
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            {!isLoading ? (
              <h4 className="mb-3 text-secondary">
                {data?.data?.hero_h4_title}
              </h4>
            ) : (
              <h4 className="mb-3" style={{ color: "#888585" }}>
                100% Authentic & Trussted Partner
              </h4>
            )}

            {!isLoading ? (
              <h2 className="mb-5 display-3 text-primary">
                {data?.data?.hero_h1_title}
              </h2>
            ) : (
              <>
                <h2 className="display-3" style={{ color: "#888585" }}>Wholesale Distributors</h2>
                <h2 className="display-3" style={{ color: "#888585" }}>of South Asian</h2>
                <h2 className="display-3" style={{ color: "#888585" }}>Food Products</h2>
              </>
            )}
          </div>
          <div className="col-md-12 col-lg-5">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
