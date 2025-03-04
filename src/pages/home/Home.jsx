import BrandsSlider from "../../components/sliders/BrandsSlider";
import Ads from "./Ads";
import BannerOne from "./BannerOne";
import FactsSection from "./FactsSection";
import FeaturesCategory from "./FeaturesCategory";
import FeaturesFruitsDisplay from "./FeaturesFruitsDisplay";
import FeaturesVegetablesDisplay from "./FeaturesVegetablesDisplay";
import HeroSection from "./HeroSection";
import OrganicFruitsDisplay from "./OrganicFruitsDisplay";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BrandsSlider />
      <FeaturesCategory />
      <OrganicFruitsDisplay />
      <FeaturesFruitsDisplay />
      <FeaturesVegetablesDisplay />
      <BannerOne />
      <WhyChooseUs />
      <Ads />
      <FactsSection />
      <Testimonial />
    </div>
  );
};

export default Home;
