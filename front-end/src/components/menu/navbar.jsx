import React from 'react';
import { NavLink } from 'react-router-dom';
import "../../css/navbar.css"
// import logo from "../../assets/pinterest-logo.png";
import searchIcon from "../../assets/search-icon.png";

export const Navbar = () => {
  return(
    <nav>
      <div className="logo-container">
        {/* <img className="logo" src={logo} alt="" /> */}
        <i className="fab fa-pinterest logo fa-2x"></i>
      </div>
      <div className="search-box">
        <div className="icon-container">
          <img className="search-icon" src={searchIcon} alt="" />
        </div>
        <form>
          <input className="search-input" type="text" placeholder="Search"/>
        </form>
      </div>
      <div className="linksContainer">
        <ul>
          <li><NavLink to={"/"} className="navlink">Home</NavLink></li>
          <li><NavLink to={"/user"} className="navlink">Username</NavLink></li>
          <li><NavLink to={"/logout"} className="navlink">Log out</NavLink></li>
        </ul>
      </div>
      <div className="icons">
        <i className="fas fa-comment-dots fa-lg comments"></i>
        <i className="fas fa-bell fa-lg bell"></i>
        <i className="fas fa-ellipsis-h fa-lg"></i>
        </div>
    </nav>
  )
};

