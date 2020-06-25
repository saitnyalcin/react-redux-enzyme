import React from "react";
import logo from "../../logo.svg";

import "./style.scss";

const Header = () => {
  return (
    <header data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img data-test="logoImg" src={logo} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
