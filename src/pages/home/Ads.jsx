import useDataFetcher from "./../../utils/FetchDatas";

const Ads = () => {
  const endpoint = "/site-content/";
  const param = false;
  const { data } = useDataFetcher({endpoint, param});

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
