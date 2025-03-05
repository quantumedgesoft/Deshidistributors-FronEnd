import HeroSlider from "../../components/sliders/HeroSlider";
import useDataFetcher from "../../utils/FetchDatas";
const HeroSection = () => {
  const {data} = useDataFetcher("/site-content/");
  return (
    <section className="container-fluid py-5 mb- hero-header">
      <div className="container " style={{ padding: "20px 0px" }}>
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">
              {data?.data?.hero_h4_title}
            </h4>
            <h2 className="mb-5 display-3 text-primary">
            {data?.data?.hero_h1_title}
            </h2>
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
