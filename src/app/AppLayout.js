import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header"
export default function AppLayout() {
    return (
        <div>
            <nav>
                <Header />
            </nav>
            <Outlet/>
        </div>
    );
}
