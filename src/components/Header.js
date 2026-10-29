import {LOGO_URL} from "../utils/constants";


const Header = () => (
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
  </div>
);

export default Header;