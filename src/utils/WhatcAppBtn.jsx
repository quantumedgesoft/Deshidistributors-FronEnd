import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

function WhatcAppBtn() {
  return (
    <>
      <Link to="https://web.whatsapp.com/" target="_blank">
        <button className="WhatcAppBtn">
          <FaWhatsapp />
        </button>      
      </Link>
    </>
  );
}

export default WhatcAppBtn;
