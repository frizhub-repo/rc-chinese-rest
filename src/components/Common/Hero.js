import React, { useEffect } from "react";

const styles = {
  container: {
    height: "80vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    background: "#280813",
    borderRadius: "50%",
    width: "350px",
    height: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

function Hero({ image }) {
  return (
    <div
      style={{
        ...styles.container,
        backgroundImage: `url(${image ?? "assets/default-hero.png"})`,
      }}
    >
      <div style={styles.logoContainer}>
        <img
          src="assets/chinese-lamp.png"
          width={200}
          style={{ margin: "20px" }}
        />
      </div>
    </div>
  );
}

export default Hero;
