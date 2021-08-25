import React from "react";
import Hero from "../Common/Hero";
import InfoBox from "./InfoBox";
import MenuBox from "./MenuBox";
import Status from "./Status";
import TableCarousel from "./TableCarousel";

export default function TableReservation() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="d-flex flex-column-reverse flex-md-row row mt-5 mx-2">
        <div className="col-12 col-md-6 col-lg-7">
          <div className="row">
            <TableCarousel />
          </div>
          <div className="row">
            <MenuBox />
          </div>
          <div className="row">
            <Status />
          </div>
        </div>
        <div className="d-none d-lg-block col-1"></div>
        <div className="col-12 col-md-6 col-lg-4">
          <InfoBox />
        </div>
      </section>
    </div>
  );
}
