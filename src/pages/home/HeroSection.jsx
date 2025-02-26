import HeroSlider from "../../components/sliders/HeroSlider";

const HeroSection = () => {
  return (
    <section className="container-fluid py-5 mb- hero-header">
      <div className="container " style={{ padding: "20px 0px" }}>
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">
              100% Authentic & Trussted Partner
            </h4>
            <h2 className="mb-5 display-3 text-primary">
              Wholesale Distributors of South Asian Food Products
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
