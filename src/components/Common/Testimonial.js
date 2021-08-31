import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const useStyle = () => ({
  carouselItem: {
    background: "#F49E0B",
    borderRadius: "50%",
  },
  carouselContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "white",
    minHeight: "50vh",
  },
  carouselMessage: {
    width: "70%",
  },
});

export default function Testimonial({ reviews }) {
  const styles = useStyle();
  const [testimonials, setTestimonials] = useState([
    {
      img: "assets/testimonial-client.png",
      content:
        "Birre ottime e panini buoni nel pane e nella farcitura, carne scelta. Locale informale e caldo. Ragazzi preparati e gentili. Patatine buone servite con più salse. Buoni i gelati e i sorbettie buono il soufflé al cioccolato. Da provare indubbiamente",
      author: "Giulia",
    },
    {
      img: "assets/testimonial-client.png",
      content:
        "Birre ottime e panini buoni nel pane e nella farcitura, carne scelta. Locale informale e caldo. Ragazzi preparati e gentili. Patatine buone servite con più salse. Buoni i gelati e i sorbettie buono il soufflé al cioccolato. Da provare indubbiamente",
      author: "Giulia",
    },
  ]);

  return (
    <Carousel interval={1000} indicators={false}>
      {reviews.map((review) => {
        return (
          <Carousel.Item style={styles.carouselItem}>
            <div style={styles.carouselContent}>
              <img
                src={review.profile_photo_url}
                className="mb-3"
                width={100}
              />
              <p style={styles.carouselMessage}>‘’{review.text}’’</p>
            </div>
            <Carousel.Caption>
              <p>-{review.author_name}-</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
