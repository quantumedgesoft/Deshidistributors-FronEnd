import { FaHandsHolding, FaLocationDot } from "react-icons/fa6";
import { ImCheckmark } from "react-icons/im";
import { MdOutlineCleanHands } from "react-icons/md";
import { PiCertificate, PiLeafDuotone } from "react-icons/pi";

const WhyChooseUs = () => {
  const datas = [
    {
      id: 1,
      title: "Locally secured",
      des: "to empower and encourage our local farmers",
      icon: <FaLocationDot />,
      bg: "/img/icons/bg3.svg",
      color: "#e4d98b",
    },
    {
      id: 2,
      title: "100% Natural",
      des: "because we aim to provide pesticide-free food​",
      icon: <PiLeafDuotone />,
      bg: "/img/icons/bg.svg",
      color: "#e4d98b",
    },
    {
      id: 3,
      title: "28 Quality Check Points",
      des: "to ensure perfect texture, colour and taste​",
      icon: <ImCheckmark />,
      bg: "/img/icons/bg2.svg",
      color: "#e4d98b",
    },
    {
      id: 4,
      title: "Carefully chosen",
      des: "to ensure you&apos;re getting only the best​",
      icon: <FaHandsHolding />,
      bg: "/img/icons/bg4.svg",
      color: "#e4d98b",
    },
    {
      id: 5,
      title: "4 Step Cleaning",
      des: "to ensure that your food is cleaned to perfection​",
      icon: <MdOutlineCleanHands />,
      bg: "/img/icons/bg5.svg",
      color: "#e4d98b",
    },
    {
      id: 6,
      title: "Application of GMP",
      des: "to ensure you&apos;re getting highest quality food",
      icon: <PiCertificate />,
      bg: "/img/icons/bg6.svg",
      color: "#e4d98b",
    },
  ];

  return (
    <div className="container p-5">
      <div className="my-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-primary">Why Choose Us</h1>

        <div className="WhyChooseUsContainer d-flex flex-column flex-lg-row align-items-center gap-5 justify-content-between my-4">
          <div className="LeftContent">
            {datas.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="d-flex flex-column text-center text-xl-left flex-xl-row align-items-center gap-3"
              >
                <div className="position-relative">
                  <span className="icon2">{item.icon}</span>
                  <div
                    className="choose-item"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <span className="icon1">{item.icon}</span>
                  </div>
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
          <div className="LeftContent">
            {datas.slice(3, 6).map((item) => (
              <div
                key={item.id}
                className="d-flex flex-column text-center text-xl-left flex-xl-row align-items-center gap-3"
              >
                <div className="position-relative">
                  <span className="icon2">{item.icon}</span>
                  <div
                    className="choose-item"
                    style={{ backgroundImage: `url(${item.bg})` }}
                  >
                    <span className="icon1">{item.icon}</span>
                  </div>
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
