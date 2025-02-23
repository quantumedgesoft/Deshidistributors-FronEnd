import FeaturesCategory from "./FeaturesCategory";
import FeaturesCategoryDisplay from "./FeaturesCategoryDisplay";
import HeroSection from "./HeroSection";
import OrganicFruitsDisplay from "./OrganicFruitsDisplay";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesCategory />
      <OrganicFruitsDisplay />
      <FeaturesCategoryDisplay />
    </div>
  );
};

export default Home;
