import React from "react";
import airbnblogo from "../img/Airbnb-icon.png"

export default function Navbar(){
    return(
        <nav className="navbar">
            <img className="nav--logo" src={airbnblogo} alt=""/>
        </nav>
    )
}