import React from "react";
import ROUTES from "../app/routes";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar"

function Header() {
    return (
      <header className="header">
        <div className="logo">
          <NavLink to={ROUTES.postListRoute()} >
            Peddit
            </NavLink>
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="user-menu">
          <button className="login-button">Login</button>
          <button className="signup-button">Sign Up</button>
          <button className="signup-button">Profile</button>
        </div>
      </header>
    );
  }
  
  export default Header;
