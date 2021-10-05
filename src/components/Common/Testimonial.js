import React, { useState } from "react";
import { Carousel } from "react-bootstrap";

const useStyle = () => ({
  carouselItem: {
    width: "350px",
    height: "350px",
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

  return (
    <div className="d-flex justify-content-center w-100">
      <Carousel interval={1000} indicators={false}>
        {reviews?.map((review, index) => {
          return (
            <Carousel.Item
              key={index}
              interval={500}
              style={styles.carouselItem}
            >
              <div style={styles.carouselContent}>
                <img
                  src={review.profile_photo_url}
                  className="mb-3"
                  width={100}
                  alt=""
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
    </div>
  );
}
