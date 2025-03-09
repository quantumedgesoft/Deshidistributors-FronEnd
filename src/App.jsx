import PrimaryLayout from "./components/layout/PrimaryLayout";
import useDataFetcher from "./utils/FetchDatas";
import Loader from "./utils/loader/Loader";
import ScrollToTopButton from "./utils/ScrollToTopButton";
import WhatcAppBtn from "./utils/WhatcAppBtn";

const App = () => {
  const endpoint = "/product/products/";
  const param = false;
  const { isLoading } = useDataFetcher({endpoint, param});

  if (isLoading) {
    return (
      <div
        className="bg-white d-flex justify-content-center align-items-center"
        style={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100vw",
          height: "100%",
          zIndex: "9999",
        }}
      >
        <Loader />
      </div>
    );
  }

  return (
    <>
      <WhatcAppBtn />
      <ScrollToTopButton />
      <PrimaryLayout />
    </>
  );
};

export default App;
