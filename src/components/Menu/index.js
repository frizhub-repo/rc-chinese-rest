import React from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import Body from "./Body";
import Hero from "./Hero";

function Menu() {
    return(
        <div>
            <Navbar selected='Menu'/>
            <Hero/>
            <Body/>

            <Footer/>
        </div>
    )
}

export default Menu
