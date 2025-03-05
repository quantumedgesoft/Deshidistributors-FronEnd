import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router";

function WhatcAppBtn() {
  return (
    <div>
      <Link to="https://web.whatsapp.com/" target="_blank">
        <button className="WhatcAppBtn">
          <FaWhatsapp />
        </button>      
      </Link>
    </div>
  );
}

export default WhatcAppBtn;
