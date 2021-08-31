import React from "react";
import Hero from "../Common/Hero";
import ItemsMenu from "../Common/ItemsMenu/ItemsMenu";
import ItemCarousel from "./ItemCarousel";

const styles = {
  reserve: {
    border: "5px solid #F49E0B",
    width: "300px",
    height: "300px",
    background: "white",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#F49E0B",
    fontSize: "20px",
  },
};

export default function Menu() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="row mt-5">
        <div className="col-12 col-md-7 mb-5 mb-md-0 px-2 px-md-5">
          <ItemCarousel />
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center">
          <div style={styles.reserve}>
            <img src="assets/reserve-table.png" />
            <a style={styles.buttonText}>RESERVE A TABLE</a>
          </div>
        </div>
      </section>
      <section className="p-5">
        <ItemsMenu />
      </section>
    </div>
  );
}
