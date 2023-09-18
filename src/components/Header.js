import React from "react";
import ROUTES from "../app/routes";
import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import { AiOutlineReddit } from 'react-icons/ai';
function Header() {
    return (
      <header className="header">
        <div className="logo">
          <NavLink to={ROUTES.postListRoute()} >
            <AiOutlineReddit /> Peddit
            </NavLink>
        </div>
          <SearchBar className="searchBar" />
      </header>
    );
  }
  
  export default Header;
