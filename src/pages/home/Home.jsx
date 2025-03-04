import BrandsSlider from "../../components/sliders/BrandsSlider";
import Ads from "./Ads";
import BannerOne from "./BannerOne";
import FactsSection from "./FactsSection";
import FeaturesCategory from "./FeaturesCategory";
import FeaturesFruitsDisplay from "./FeaturesFruitsDisplay";
import FeaturesVegetablesDisplay from "./FeaturesVegetablesDisplay";
import HeroSection from "./HeroSection";
import OurProduccts from "./OurProducts";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <BrandsSlider />
      <Ads />
      <FeaturesCategory />
      <OurProduccts />
      <FeaturesFruitsDisplay />
      <FeaturesVegetablesDisplay />
      <BannerOne />
      <WhyChooseUs />
      <FactsSection />
      <Testimonial />
    </div>
  );
};

export default Home;
