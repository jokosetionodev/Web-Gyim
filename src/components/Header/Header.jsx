import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="Logo" />

      {menuOpened === false && mobile === true ? (
        <div>
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>Home</li>
          <li>Programs</li>
          <li>Why us</li>
          <li>Plans</li>
          <li>Testimonials</li>
        </ul>
      )}
    </div>
  );
};

export default Header;
