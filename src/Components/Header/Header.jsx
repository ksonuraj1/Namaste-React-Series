import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const buttonName = "Login";
  const [loginText, setLoginText] = useState(buttonName);

  const handleLoginClick = () => {
    loginText == "Login" ? setLoginText("Logout") : setLoginText("Login");
  };

  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ843YCK9VMKjh4lPuh7SPWbMhNB9k8m5vAoaj8Oes&s"
          alt="food-logo"
          width={90}
        />
      </div>
      <div className="nav-items">
        <ul className="list">
          <li className="list-items">
            <Link to="/">Home</Link>
          </li>
          <li className="list-items">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="list-items">Cart</li>
          <button className="login-button" onClick={handleLoginClick}>
            {loginText}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
