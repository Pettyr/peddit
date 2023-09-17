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
      </header>
    );
  }
  
  export default Header;
