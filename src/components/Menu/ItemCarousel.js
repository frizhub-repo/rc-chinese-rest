import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const useStyles = () => ({
  itemContainer: {
    width: "300px",
    height: "300px",
    cursor: "pointer",
    borderRadius: "50%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    position: "relative",
  },
  selectedContent: {
    position: "absolute",
    bottom: -10,
    background: "#F49E0B",
    color: "white",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "5px solid white",
  },
  content: {
    position: "absolute",
    bottom: -10,
    background: "#280813",
    color: "#F49E0B",
    left: 0,
    right: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "5px solid #F49E0B",
  },
});

export default function ItemCarousel() {
  const styles = useStyles();
  const [selected, setSelected] = useState(0);
  const [items, setItems] = useState([
    { img: "assets/dessert-placeholder.jpg", type: "lunch", price: 20 },
    { img: "assets/dessert-placeholder.jpg", type: "lunch", price: 20 },
    { img: "assets/dessert-placeholder.jpg", type: "lunch", price: 20 },
    { img: "assets/dessert-placeholder.jpg", type: "lunch", price: 20 },
    { img: "assets/dessert-placeholder.jpg", type: "lunch", price: 20 },
  ]);

  return (
    <Carousel
      responsive={{
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 3,
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2,
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
        },
      }}
      autoplay={false}
      swipeable={false}
      showDots={false}
    >
      {items.map((item, index) => (
        <div onClick={(e) => setSelected(index)} style={styles.itemContainer}>
          <img src={item.img} width={300} />
          <div
            style={index === selected ? styles.selectedContent : styles.content}
          >
            <h4>{item.type.toUpperCase()}</h4>
            <img src="assets/restaurant.png" />
            <h4>{item.price}</h4>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
