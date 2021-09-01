import React from "react";

const styles = {
  container: {
    background: "#280813",
    width: "400px",
    height: "400px",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "start",
    padding: "20px",
    color: "white",
    position: "relative",
    marginBottom: "50px",
  },
  highlight: {
    color: "#F49E0B",
  },
  imageContainer: {},
  image: {
    borderRadius: "50%",
  },
  review: {
    width: "100%",
    position: "absolute",
    right: 40,
    top: 100,
    display: "inline-block",
  },
  divider: {
    width: "100%",
    height: "2px",
    background: "#F49E0B",
    border: "0px",
  },
};

export default function Review({
  author_name,
  profile_photo_url,
  text,
  rating,
}) {
  return (
    <div style={styles.container}>
      <div style={styles.review} className="d-flex flex-column align-items-end">
        <h5 style={styles.highlight} className="d-inline">
          VOTED
        </h5>
        <div className="d-flex">
          <img className="mr-2" src="assets/like.png" />
          <h5>
            <span style={styles.highlight}>{rating}</span>|5
          </h5>
        </div>
      </div>
      <div style={styles.imageContainer}>
        <img style={styles.image} src={profile_photo_url} />
      </div>
      <hr style={styles.divider} />
      <p>‘’{text}’’</p>
      <p className="italic">-{author_name}-</p>
    </div>
  );
}
