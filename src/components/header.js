// Way to write a Named Import

import { LOGO_URL } from "../utilities/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">HOME </Link>
          </li>
          <li>
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li>
            <Link to="/about">ABOUT US</Link>
          </li>
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
