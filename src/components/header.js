// Way to write a Named Import

import { LOGO_URL } from "../utilities/constants";
import { useState } from "react";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>HOME </li>
          <li>CONTACT US</li>
          <li>ABOUT US</li>
          <li>CART</li>
          <button
            className="login"
            onClick={() => {
              loginbtn === "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login");
            }}>
            {loginbtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
