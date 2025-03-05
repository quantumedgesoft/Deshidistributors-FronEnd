import React from "react";
import useDataFetcher from "./../../utils/FetchDatas";
const Ads = () => {
  const { data } = useDataFetcher("/site-content/");
  return (
    <div className="container my-5">
      <div className="video-container rounded overflow-hidden shadow-lg border p-2 shadow mx-auto">
        {data?.data?.video_content ? (
          <video autoPlay loop muted className="w-100 h-100 rounded">
            <source src={data?.data?.video_content} type="video/mp4" />
          </video>
        ) : (
          <p>Loading video...</p>
        )}
      </div>
    </div>
  );
};

export default Ads;
