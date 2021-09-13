import React from "react";
import Hero from "../Common/Hero";
import Touch from "./Touch";

export default function index() {
  return (
    <div>
      <section>
        <Hero image="assets/contact-hero.png" />
      </section>
      <section>
        <Touch />
      </section>
    </div>
  );
}
