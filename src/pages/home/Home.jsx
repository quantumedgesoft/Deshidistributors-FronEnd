import BrandsSlider from "../../components/sliders/BrandsSlider";
import Ads from "./Ads";
import BannerOne from "./BannerOne";
import DiscountDisplay from "./DiscountDisplay";
import FactsSection from "./FactsSection";
import FeaturesCategory from "./FeaturesCategory";
import HeroSection from "./HeroSection";
import OurProduccts from "./OurProducts";
import Testimonial from "./Testimonial";
import UpcommingProducts from "./UpcommingProducts";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BrandsSlider />
      <Ads />
      <FeaturesCategory />
      <OurProduccts />
      <DiscountDisplay />
      <UpcommingProducts />
      <BannerOne />
      <WhyChooseUs />
      <FactsSection />
      <Testimonial />
    </div>
  );
};

export default Home;
