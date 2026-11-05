import {LOGO_URL} from "../utils/constants";
import { useEffect, useState } from "react";

const Header = () => {
  const [loginbtn,setLoginbtn]=useState("Login");
  return (
  <div className="header">
    <div className="logo-container">
      <img src={LOGO_URL} alt="LOGO"/>
    </div>
    <div className="nav-tools">
      <ul>
        <li>Home</li>
        <li>Discover Food</li>
        <li>About US</li>
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