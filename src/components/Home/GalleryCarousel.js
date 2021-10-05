import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const styles = {
  carousel: {
    width: "70%",
  },
  img: {
    borderRadius: "50%",
  },
};

export default function GalleryCarousel() {
  const [images, setImages] = useState([
    "assets/dine.png",
    "assets/dine.png",
    "assets/dine.png",
  ]);

  return (
    <Carousel style={styles.carousel}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img style={styles.img} src={image} alt="" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
