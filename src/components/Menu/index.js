import React from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import Body from "./Body";
import HeroDelivery from "./Hero";

function Menu() {
  return (
    <div>
      <Navbar selected="Menu" />
      <HeroDelivery />

      <Footer />
    </div>
  );
}

export default Menu;
