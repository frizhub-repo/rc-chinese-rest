import React from "react";

const useStyle = () => ({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    color: "white",
    marginBottom: "50px",
  },
  statusStyle: {
    color: "#B29051",
  },
});

export default function Status({ userTotalRating, rating }) {
  const styles = useStyle();

  return (
    <div style={styles.container}>
      <div>
        <img style={styles.logoStyle} src="assets/chinese-lamp.png" />
      </div>
      <div className="d-flex flex-column align-items-center">
        <h3>THE RESTAURANT GAINED A REPUTATION OF</h3>
        <div className="d-flex my-3 align-items-center">
          <img className="mr-5" src="assets/like.png" />
          <h5>
            <span style={styles.statusStyle}>{rating}</span>|5
          </h5>
        </div>
        <div className="d-flex align-items-center">
          <h5>WITH</h5>
          <img className="mx-4" src="assets/chat.png" />
          <h5>
            <span style={styles.statusStyle}>{userTotalRating}</span> REVIEWS
          </h5>
        </div>
      </div>
    </div>
  );
}
