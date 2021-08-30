import React from "react";
import { isEmpty } from "utils/common";
import classes from "./CourseItem.module.css";

const styles = {
  container: {
    background: "white",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
  },
  iconContainer: {
    display: "inline-block",
    position: "relative",
  },
  icon: {
    borderRadius: "20px 0px 0px 0px",
  },
  price: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    background: "white",
    borderRadius: "15px 15px 0px 0px",
  },
  details: {
    color: "#280813",
    margin: "0px 2px",
  },
  counter: {
    color: "#280813",
    padding: "4px",
  },
  basketContainer: {
    border: "2px solid #CB0E0E",
    borderRadius: "0px 20px 0px 0px",
    display: "flex",
    alignItems: "center",
    padding: "0px 2px",
    cursor: "pointer",
  },
};

export default function CourseItem({ item, size, offer }) {
  const [price, setPrice] = React.useState(null);
  const [productSize, setProdctSize] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);

  const calculateDiscountedPrice = () => {
    if (isEmpty(offer)) {
      setPrice(item?.sizes[0]?.price);
    } else {
      if (offer?.discountType === "flat") {
        setPrice(size?.price - offer?.discountPrice);
      } else if (offer?.discountType === "percentage") {
        setPrice(size?.price - (size?.price * offer?.discountPrice) / 100);
      } else {
        setPrice(size?.price);
      }
    }
  };

  const handleChangeProductSize = (sizeObj) => {
    if (isEmpty(offer)) {
      setProdctSize(sizeObj);
      setPrice(sizeObj?.price);
    }
  };

  React.useEffect(() => {
    if (size) {
      calculateDiscountedPrice();
      setProdctSize(size);
    }
  }, [size]);

  const addToCart = () => {
    console.log({
      product: item._id,
      name: item.title,
      price,
      originalPrice: price,
      quantity,
    });
  };

  const handleChangeDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleChangeIncrementQuantity = () => setQuantity((prev) => prev + 1);
  return (
    <div style={styles.container}>
      <div className="d-flex">
        <div style={styles.iconContainer}>
          <img style={styles.icon} src={item?.images?.[0]} />
          <h5 className="shadow-md" style={styles.price}>
            {price}€
          </h5>
        </div>
        <div>
          <img
            className={`shadow-md ${classes.vegan}`}
            src="assets/vegan.png"
          />
          <img
            className={`shadow-md ${classes.glutten_free}`}
            src="assets/glutten-free.png"
          />
          <img className={`shadow-md ${classes.hot}`} src="assets/hot.png" />
        </div>
        <div style={styles.details}>
          <h5>{item?.title}</h5>
          <p>{item?.description}</p>
          <p>
            Allergeni:{" "}
            {item?.allergies?.map((allergy) => (
              <span>{allergy}, </span>
            ))}
          </p>
        </div>
        <div className="d-flex flex-column">
          <h4
            onClick={handleChangeDecrementQuantity}
            className="shadow-md flex-1"
            style={{ ...styles.counter, cursor: "pointer" }}
          >
            -
          </h4>
          <h4 className="shadow-md flex-1" style={styles.counter}>
            {quantity}
          </h4>
          <h4
            onClick={handleChangeIncrementQuantity}
            className="shadow-md flex-1"
            style={{ ...styles.counter, cursor: "pointer" }}
          >
            +
          </h4>
        </div>
        <div onClick={addToCart} style={styles.basketContainer}>
          <img src="assets/shopping-basket.png" width={40} />
        </div>
      </div>
      <div className="d-flex align-items-stretch">
        {item?.sizes?.map((size) => (
          <p
            onClick={() => handleChangeProductSize(size)}
            className={`flex-1 shadow-lg ${classes.size_option} ${classes.first_option}`}
          >
            {size?.title}
          </p>
        ))}
      </div>
    </div>
  );
}
