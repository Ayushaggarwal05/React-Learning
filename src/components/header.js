// Way to write a Named Import

import { LOGO_URL } from "../utilities/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";

const Header = () => {
  const [loginbtn, setloginbtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-lg bg-pink-100 m-1  h-[120px] sm:bg-yellow-50  lg:bg-green-100">
      <div className="logo-container   ">
        <img className="w-[170px] h-[120px] " src={LOGO_URL} />
      </div>
      <div className="flex  items-center ">
        <ul className=" flex p-4 m-4 ">
          <li className="px-4  text-lg ">
            Online Status : {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-4  text-lg ">
            <Link to="/">HOME </Link>
          </li>
          <li className="px-4  text-lg ">
            <Link to="/contact">CONTACT US</Link>
          </li>
          <li className="px-4  text-lg ">
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className="px-4  text-lg ">
            <Link to="/grocery">GROCERY</Link>
          </li>
          <li className="px-4  text-lg ">CART</li>
          <button
            className="login px-4  text-lg cursor-pointer"
            onClick={() => {
              loginbtn === "Login"
                ? setloginbtn("Logout")
                : setloginbtn("Login");
            }}>
            {loginbtn}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
