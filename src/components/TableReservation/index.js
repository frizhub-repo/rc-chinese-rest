import React from "react";
import Hero from "../Common/Hero";
import InfoBox from "./InfoBox";
import TableCarousel from "./TableCarousel";

export default function TableReservation() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="row mt-5 mx-2">
        <div className="col-12 col-md-6 col-lg-7">
          <TableCarousel />
        </div>
        <div className="col-12 col-md-6 offset-1 col-lg-4">
          <InfoBox />
        </div>
      </section>
    </div>
  );
}
