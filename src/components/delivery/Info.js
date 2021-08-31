import React from "react";

const styles = {
  container: {},
  itemContainer: {
    color: "white",
    background: "#F49E0B",
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    padding: "5px",
  },
};

export default function Info({ restaurant, placeData }) {
  return (
    <div className="row p-5 d-flex flex-column flex-sm-row justify-content-between align-items-center">
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={styles.itemContainer}
      >
        <h4>Access123</h4>
        <img src="assets/map.png" width={50} />
        <h4>{placeData?.formatted_address || restaurant?.address}</h4>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center mt-2 mt-sm-0"
        style={styles.itemContainer}
      >
        <h4>Delivery</h4>
        <img src="assets/delivery-man.png" width={50} />
        <h4>Minimum Order 15€</h4>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center mt-2 mt-md-0"
        style={styles.itemContainer}
      >
        <h4>Delivery fees</h4>
        <img src="assets/cost.png" width={50} />
        <h4>Minimum Order 15€</h4>
      </div>
      <div
        className="d-flex flex-column justify-content-center align-items-center mt-2 mt-lg-0"
        style={styles.itemContainer}
      >
        <h4>Reviews</h4>
        <img src="assets/stars.png" width={50} />
        <h4>{placeData?.user_ratings_total} Satisfied Clients</h4>
      </div>
    </div>
  );
}
