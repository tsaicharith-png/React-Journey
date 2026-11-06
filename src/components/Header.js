import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [loginbtn,setLoginbtn]=useState("Login");
  return (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} alt="LOGO"/>
    </div>
    <div className="nav-tools">
      <ul>
        <li><Link to={"/"}>Home</Link></li>
        <li>Discover Food</li>
        <li> <Link to={"/about"}>About US</Link></li>
        <li> <Link to={"/contact"}>Contact US</Link></li>
        <li>Cart</li>
      </ul>
    </div>
    <button className="Login-btn" onClick={()=>
      {loginbtn==="Login"?setLoginbtn("Logout"):setLoginbtn("Login");}
    }>
    {loginbtn}</button>
  </div>
  );
};

export default Header;