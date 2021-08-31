import React from "react";

const styles = {
  container: {
    background: "#1A1B20",
    padding: "40px 0px",
  },
  map: {
    borderRadius: "20px",
    width: "100%",
    height: "60vh",
  },
};

export default function Map() {
  return (
    <div style={styles.container}>
      <iframe
        style={styles.map}
        className=" w-full h-full object-cover "
        frameBorder="0"
        title="map"
        marginHeight="0"
        marginWidth="0"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      ></iframe>
    </div>
  );
}
