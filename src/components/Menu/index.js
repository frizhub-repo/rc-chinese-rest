import React from "react";
import Hero from "../Common/Hero";
import ItemsMenu from "../Common/ItemsMenu/ItemsMenu";

const styles = {
  reserve: {
    cursor: "pointer",
    borderRadius: "50%",
  },
};

export default function Menu() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="row">
        <div className="col-12 col-md-6"></div>
        <div className="col-12 col-md-6 d-flex justify-content-center">
          <img
            style={styles.reserve}
            className="shadow-lg"
            src="assets/reserve-option.png"
          />
        </div>
      </section>
      <section className="p-5">
        <ItemsMenu />
      </section>
    </div>
  );
}
