import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const styles = {
  container: {
    background: "#280813",
    borderRadius: "30px 30px 0px 0px",
  },
  header: {
    padding: "10px 0px",
    color: "white",
  },
};

export default function TableCarousel() {
  const [images, setImages] = useState([
    "assets/table-carousel.png",
    "assets/table-carousel.png",
    "assets/table-carousel.png",
  ]);

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Reserve one of our Table</h1>
      <Carousel>
        {images.map((image) => (
          <Carousel.Item>
            <img src={image} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
