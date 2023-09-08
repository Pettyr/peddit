import React from "react";
import ROUTES from "../app/routes";
import { NavLink } from "react-router-dom";

export default function Header () {

    return (
        <ul>
        <li>
            <NavLink to={ROUTES.postListRoute()} >
            Peddit
            </NavLink>
        </li>
        <li>
            SearchBar
        </li>
        <li>
            User
        </li>
        </ul>
    )
}