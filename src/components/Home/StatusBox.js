import React from "react";

const styles = {
  container: {
    background: "#720403",
    borderRadius: "80px",
  },
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
  },
  corner: {
    background: "#F49E0B",
    padding: "20px",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "150px",
    height: "150px",
  },
  mainCorner: {
    borderRadius: "80px 0px 80px 0px",
  },
  axisCorner: {
    borderRadius: "0px 80px 0px 80px",
  },
  orderButton: {
    border: "2px solid #A6502C",
    color: "#A6502C",
    borderRadius: "20px",
    background: "#8E3635",
    padding: "5px",
    fontSize: "16px",
    width: "100%",
  },
  openHoursButton: {
    width: "100%",
    color: "#F49E0B",
    border: "2px solid #F49E0B",
    background: "white",
    borderRadius: "0px 0px 25px 25px",
    padding: "10px",
    fontSize: "16px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default function StatusBox({ placeData }) {
  return (
    <div
      style={styles.container}
      className="d-flex justify-content-center justify-content-sm-between my-3 my-lg-0"
    >
      <div className="d-none d-sm-flex flex-column justify-content-between align-items-start">
        <div
          style={{
            ...styles.corner,
            ...styles.mainCorner,
            marginBottom: "10px",
          }}
        >
          <p>Table Reservation</p>
          <img src="assets/reservation.png" width={50} />
          <p>
            <span>20</span> Sets Available
          </p>
        </div>
        <div style={{ ...styles.corner, ...styles.axisCorner }}>
          <p>Address</p>
          <img src="assets/map.png" width={50} />
          <p
            className="wrapTextIntoTwoLine"
            title={placeData?.formatted_address}
          >
            {placeData?.formatted_address}
          </p>
        </div>
      </div>
      <div style={styles.center}>
        <img className="my-2" src="assets/clock.png" width={80} />
        <div>
          <h6>
            {placeData?.opening_hours?.open_now ? "Now Open" : "Now Closed"}:
          </h6>
          <h6>From 19:00 - To 23:30</h6>
        </div>
        <button style={styles.orderButton} disabled>
          ORDER NOW
        </button>
        <button style={styles.openHoursButton}>
          <p>Click for Opening Hours</p>
          <img className="mt-1" src="assets/arrow-down.png" />
        </button>
      </div>
      <div className="d-none d-sm-flex flex-column justify-content-between align-items-start">
        <div
          style={{
            ...styles.corner,
            ...styles.axisCorner,
            marginBottom: "10px",
          }}
        >
          <p>Delivery</p>
          <img src="assets/delivery-man.png" width={50} />
          <p>
            Minium Order <span>15€</span>
          </p>
        </div>
        <div style={{ ...styles.corner, ...styles.mainCorner }}>
          <p>Reviews</p>
          <img src="assets/stars.png" width={50} />
          <p>
            <span>{placeData?.user_ratings_total}</span> Satisfied Clients
          </p>
        </div>
      </div>
    </div>
  );
}
