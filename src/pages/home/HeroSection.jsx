import HeroSlider from "../../components/sliders/HeroSlider";

const HeroSection = () => {
  return (
    <section className="container-fluid py- mb- hero-header">
      <div className="container " style={{ padding: "20px 0px" }}>
        <div className="row g-5 align-items-center">
          <div className="col-md-12 col-lg-7">
            <h4 className="mb-3 text-secondary">
              100% Authentic & Trussted Partner
            </h4>
            <h1 className="mb-5 display-3" style={{ color: "orange" }}>
              Wholesale Distributors of South Asian Food Products
            </h1>
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
