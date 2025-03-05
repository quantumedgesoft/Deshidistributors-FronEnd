import PrimaryLayout from "./components/layout/PrimaryLayout";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import WhatcAppBtn from "./utils/WhatcAppBtn";

const App = () => {
  return (
    <>
      <WhatcAppBtn />
      <ScrollToTopButton />
      <PrimaryLayout />;
    </>
  );
};

export default App;
