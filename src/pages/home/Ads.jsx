import React from "react";

const Ads = () => {
  return (
    <div className="container my-5">
      <div className="video-container h-25 rounded overflow-hidden shadow-lg">
        <video autoPlay loop muted className="w-100">
          <source src="/video/ads.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Ads;
