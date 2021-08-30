import React from "react";
import Hero from "../Common/Hero";
import ActionBox from "./ActionBox";
import Course from "./Course";
import Info from "./Info";

export default function Delivery() {
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section>
        <Info />
      </section>
      <section className="row px-3 d-flex flex-column-reverse flex-lg-row pb-5">
        <div className="col-12 col-lg-8 mt-4 mt-lg-0">
          <Course />
        </div>
        <div className="col-12 col-lg-4">
          <ActionBox />
        </div>
      </section>
    </div>
  );
}
