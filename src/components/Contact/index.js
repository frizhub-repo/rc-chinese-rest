import React from "react";
import Hero from "../Common/Hero";
import Touch from "./Touch";

export default function Index() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
