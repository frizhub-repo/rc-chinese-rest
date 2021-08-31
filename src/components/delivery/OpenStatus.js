import React from "react";

const useStyle = () => ({
  container: {
    width: "100%",
    color: "white",
  },
  imageContainer: {
    background: "#280813",
    border: "2px solid black",
    borderRadius: "20px 0px 0px 0px",
  },
  infoContainer: {},
  info: {
    background: "#280813",
    padding: "5px",
    borderRadius: "0px 20px 0px 0px",
  },
  buttonContainer: {
    color: "#F49E0B",
    background: "white",
  },
});

export default function OpenStatus({ openNow }) {
  const styles = useStyle();

  return (
    <div style={styles.container} className="row">
      <div
        style={styles.imageContainer}
        className="col-3 m-0 d-flex align-items-center justify-content-center"
      >
        <img src="assets/delivery-man.png" width={80} />
      </div>
      <div style={styles.infoContainer} className="col-9 m-0">
        <div
          style={styles.info}
          className="row d-flex flex-column justify-content-center"
        >
          <h5>{openNow ? "Now Opened" : "Now Closed"}</h5>
          <h5>From 12:00 - To 15:30</h5>
        </div>
        <div
          style={styles.buttonContainer}
          className="row py-2 d-flex justify-content-center"
        >
          <h4>Click for Opening Hours</h4>
        </div>
      </div>
    </div>
  );
}
