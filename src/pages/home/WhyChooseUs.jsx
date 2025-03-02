const WhyChooseUs = () => {
  const datas = [
    {
      id: 1,
      title: "Locally secured",
      des: "to empower and encourage our local farmers",
      icon: (
        <i
          aria-hidden="true"
          className="fas fa-map-marker-alt"
          style={{ color: "white", fontSize: "50px" }}
        ></i>
      ),
      bg: "'/img/icons/locationBg.svg'",
      color: "#e4d98b",
    },
    {
      id: 2,
      title: "100% Natural",
      des: "because we aim to provide pesticide-free food​",
      icon: (
        <i
          aria-hidden="true"
          className="fas fa-map-marker-alt"
          style={{ color: "white", fontSize: "50px" }}
        ></i>
      ),
      bg: "'/img/icons/locationBg.svg'",
      color: "#e4d98b",
    },
    {
      id: 3,
      title: "28 Quality Check Points",
      des: "to ensure perfect texture, colour and taste​",
      icon: (
        <i
          aria-hidden="true"
          className="fas fa-map-marker-alt"
          style={{ color: "white", fontSize: "50px" }}
        ></i>
      ),
      bg: "'/img/icons/locationBg.svg'",
      color: "#e4d98b",
    },
    {
      id: 4,
      title: "Carefully chosen",
      des: "to ensure you&apos;re getting only the best​",
      icon: (
        <i
          aria-hidden="true"
          className="fas fa-map-marker-alt"
          style={{ color: "white", fontSize: "50px" }}
        ></i>
      ),
      bg: "'/img/icons/locationBg.svg'",
      color: "#e4d98b",
    },
    {
      id: 5,
      title: "4 Step Cleaning",
      des: "to ensure that your food is cleaned to perfection​",
      icon: (
        <i
          aria-hidden="true"
          className="fas fa-map-marker-alt"
          style={{ color: "white", fontSize: "50px" }}
        ></i>
      ),
      bg: "'/img/icons/locationBg.svg'",
      color: "#e4d98b",
    },
    {
      id: 6,
      title: "Application of GMP",
      des: "to ensure you&apos;re getting highest quality food",
      icon: (
        <i
          aria-hidden="true"
          className="fas fa-map-marker-alt"
          style={{ color: "white", fontSize: "50px" }}
        ></i>
      ),
      bg: "'/img/icons/locationBg.svg'",
      color: "#e4d98b",
    },
  ];

  return (
    <div className="container-fluid p-5">
      <div className="my-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-primary">Why Choose Us</h1>

        <div className="WhyChooseUsContainer d-flex flex-column flex-lg-row align-items-center gap-5 justify-content-between my-4">

          <div className="LeftContent">
            {datas.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="d-flex align-items-center gap-3 border "
              >
                <div className="border position-relative">

                <div className="choose-item">
                  <i aria-hidden="true" className="fas fa-map-marker-alt icon1"></i>
                </div>
                  <i aria-hidden="true" className="fas fa-map-marker-alt icon2 position-absolute fs-1" style={{left: "50%", top:"50%", translate:" -50% -50%"}}></i>
                </div>

                <div>
                  <h4 className="fw-bold p-0 m-0 text-primary">{item.title}</h4>
                  <p>{item.des}</p>
                </div>


              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="centerImg d-flex justify-content-center align-items-center">
            <img src="/img/others/about_img.webp" alt="" />
          </div>

          {/* Right Content */}
          <div className="LeftContent d-flex flex-column align-items-center gap-3">
            {datas.slice(3, 6).map((item) => (
              <div key={item.id} className="d-flex align-items-center gap-3">
                <div className="choose-item">
                  <i aria-hidden="true" className="fas fa-map-marker-alt"></i>
                </div>

                <div>
                  <h4 className="fw-bold p-0 m-0 text-primary">{item.title}</h4>
                  <p>{item.des}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
