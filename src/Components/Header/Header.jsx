import React from "react";
import "../Header/Header.css";

const Header = () => {
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
          <li className="list-items">Home</li>
          <li className="list-items">Contact Us</li>
          <li className="list-items">Login</li>
          <li className="list-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
