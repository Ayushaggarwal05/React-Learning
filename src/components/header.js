// Way to write a Named Import

import {LOGO_URL} from "../utilities/constants"



const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img  className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>HOME</li>
                    <li>CONTACT US</li>
                    <li>ABOUT US</li>
                    <li>CART</li>
                </ul>
            </div>
        </div>
    );

};


export default Header;