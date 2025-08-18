import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [login, setlogin] = useState("Login");

  const loginLogout = () => {
    if (login === "Login") {
      setlogin("Logout");
    } else {
      setlogin("Login");
    }
  };

  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src={LOGO_URL} alt='Logo' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About US</Link>
          </li>
          <li>
            <Link to='/contact'>Contact US</Link>
          </li>
          <li>Cart</li>
          <button className='log-btn' onClick={() => loginLogout()}>
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
