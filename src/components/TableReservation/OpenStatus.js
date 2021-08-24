import React from "react";

const styles = {
  container: {
    width: "100%",
    color: "white",
  },
  imageContainer: {
    background: "#280813",
    borderRadius: "10px 0px 0px 10px",
  },
  infoContainer: {},
  info: {
    background: "#280813",
    borderRadius: "0px 10px 0px 0px",
  },
  buttonContainer: {
    color: "#F49E0B",
    background: "white",
    borderRadius: "0px 0px 10px 0px",
  },
};

export default function OpenStatus() {
  return (
    <div style={styles.container} className="row shadow-sm d-flex">
      <div
        style={styles.imageContainer}
        className="col-3 m-0 d-flex align-items-center justify-content-center align-self-stretch"
      >
        <img src="assets/clock.png" width={70} />
      </div>
      <div style={styles.infoContainer} className="col-9 m-0">
        <div style={styles.info} className="row py-2">
          <h5 className="col-12">Now Opened</h5>
          <h5 className="col-12">From 12:00 - To 15:30</h5>
        </div>
        <div
          style={styles.buttonContainer}
          className="py-2 row d-flex align-items-center justify-content-center"
        >
          <h4>Click for Opening Hours</h4>
        </div>
      </div>
    </div>
  );
}
