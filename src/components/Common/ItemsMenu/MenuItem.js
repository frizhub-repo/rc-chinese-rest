import React from "react";
import classes from "./MenuItem.module.css";

const styles = {
  itemImage: {
    borderRadius: "10px",
    width: "130px",
    height: "130px",
  },
  imageContainer: {
    borderRadius: "10px",
    border: "1px solid rgba(0, 0, 0, 0.4)",
  },
};

export default function MenuItem({ product }) {
  return (
    <div className="d-flex justify-content-center mb-3">
      <div
        className="d-sm-flex d-md-none d-lg-flex flex-column align-items-center d-none"
        style={styles.imageContainer}
      >
        <img
          style={styles.itemImage}
          src={`${process.env.REACT_APP_API_BASE_URL}/${product?.images[0]}`}
          alt="Item"
        />
        <div
          className={`d-flex justify-content-between ${classes.properties_container}`}
        >
          <img
            className={`flex-1 ${classes.property} ${
              !product?.foodType?.vegan && classes.not_property
            }`}
            src="assets/vegan.png"
            alt="Vegan"
          />
          <img
            className={`flex-1 ${classes.property} ${
              !product?.foodType?.glutenFree && classes.not_property
            }`}
            src="assets/glutten-free.png"
            alt="Glutten"
          />{" "}
          <img
            className={`flex-1 ${classes.property} ${
              !product?.foodType?.spicy && classes.not_property
            }`}
            src="assets/hot.png"
            alt="Spicy"
          />
        </div>
      </div>
      <div className={`mr-2 my-2 my-lg-0 ${classes.details}`}>
        <div className="d-flex justify-content-between">
          <h4>{product?.title}</h4>
          <h4>{product?.sizes?.price}</h4>
        </div>
        <div className={`d-flex ${classes.alignLeft}`}>
          <p
            className="wrapTextIntoTwoLine"
            title={product?.ingredients.map((i) => i)}
          >
            <span className="font-weight-bold">Ingredients: </span>
            {product?.ingredients.map((i) => `${i}, `)}
          </p>
        </div>
        <div className={`d-flex ${classes.alignLeft}`}>
          <p
            className="wrapTextIntoTwoLine"
            title={product?.allergies.map((i) => i)}
          >
            <span className="font-weight-bold">Allergeni: </span>
            {product?.allergies.map((i) => `${i}, `)}
          </p>
        </div>
      </div>
    </div>
  );
}
