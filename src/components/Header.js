import React from "react";
import treeboLogo from "../images/treebo-logo.png";
import "../styles/Header.scss";
import {Link} from "react-router";

const Header = () => {
    return <div className="header-container">
        <div>
            <Link to={"/"}><img src={treeboLogo} alt={"Treebo"} className="treebo-logo"/></Link>
        </div>
        <div className="login-container">Login</div>
    </div>
}

export default Header;