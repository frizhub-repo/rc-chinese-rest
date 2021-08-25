import React from "react";

const styles = {
  infoContainer: {
    margin: "10px",
  },
  heading: {
    textDecoration: "underline",
    color: "#F59E0B",
  },
};

export default function InfoContent() {
  return (
    <div>
      <div style={styles.infoContainer}>
        <h4 style={styles.heading}>Chef:</h4>
        <h4>Misha Sukays</h4>
      </div>
      <div style={styles.infoContainer}>
        <h4 style={styles.heading}>How to get to the restaurant:</h4>
        <h4>
          Viale S. Michele del Carso, 7, 20144, Milan, Italy, Restaurant Address
        </h4>
      </div>
      <div style={styles.infoContainer}>
        <h4 style={styles.heading}>Features:</h4>
        <h4>
          Faishonable, Return to the Restaurant, Return to the Restaurant -50%
        </h4>
      </div>
    </div>
  );
}
