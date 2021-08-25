import React from "react";
import OpenStatus from "./OpenStatus";

const styles = {
  container: {
    width: "100%",
    background: "#F49E0B",
    borderRadius: "30px",
    paddingBottom: "20px",
  },
  reserveIconContainer: {
    borderRadius: "30px 0px 0px 0px",
    background: "#F49E0B",
    padding: "20px",
  },
  reserveTextContainer: {
    color: "white",
    background: "#280813",
    borderRadius: "0px 30px 0px 0px",
  },
  statusButton: {
    background: "rgba(255, 255, 255, 0.7)",
    padding: "3px 8px",
    margin: "0px 5px",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  map: {
    borderRadius: "10px",
    height: "30vh",
    width: "100%",
  },
};

export default function InfoBox() {
  return (
    <div className="mt-3 mt-lg-0" style={styles.container}>
      <div className="d-flex shadow-sm">
        <div style={styles.reserveIconContainer}>
          <img src="assets/reserve-table.png" width={80} />
        </div>
        <div
          style={styles.reserveTextContainer}
          className="d-flex justify-content-center align-items-center flex-fill"
        >
          <h4>RESERVE A TABLE</h4>
        </div>
      </div>
      <div className="mx-1">
        <div className="d-flex justify-content-between my-3">
          <button className="flex-fill" style={styles.statusButton}>
            <img className="mx-2" src="assets/like.png" width={40} />
            <h5 className="m-0">4|5</h5>
          </button>
          <button className="flex-fill" style={styles.statusButton}>
            <img className="mx-2" src="assets/chat.png" width={40} />
            <h5 className="m-0">427</h5>
          </button>
          <button className="flex-fill" style={styles.statusButton}>
            <img className="mx-2" src="assets/active-euro.png" width={40} />
            <img src="assets/passive-euro.png" width={40} />
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-center mx-2">
        <OpenStatus />
      </div>
      <div>
        <h4 className="text-white mt-2 mx-2 font-italic">
          CI CHO SAN Piazza Mentana, 2, 50122 Firenze FI
        </h4>
      </div>
      <div className="m-2">
        <iframe
          style={styles.map}
          className="shadow-sm"
          frameBorder="0"
          title="map"
          marginHeight="0"
          marginWidth="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        ></iframe>
      </div>
    </div>
  );
}
