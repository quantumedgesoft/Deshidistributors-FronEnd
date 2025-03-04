const Ads = () => {
  return (
    <div className="container my-5">
      <div className="video-container rounded overflow-hidden shadow-lg border p-2 shadow mx-auto">
        <video
          autoPlay
          loop
          muted
          className="w-100 h-100 rounded"
          style={{ maxWidth: "100vw" }}
        >
          <source src="/video/ads.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Ads;
