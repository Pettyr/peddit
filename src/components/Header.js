import React from "react";
import ROUTES from "../app/routes";
import { NavLink } from "react-router-dom";

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <NavLink to={ROUTES.postListRoute()} >
            Peddit
            </NavLink>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search Peddit" />
          <button>Search</button>
        </div>
        <div className="user-menu">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
          <NavLink to={ROUTES.userProfileRoute()} > 
          <button className="signup-button">Profile</button>
          </NavLink>
        </div>
      </header>
    );
  }
  
  export default Header;
