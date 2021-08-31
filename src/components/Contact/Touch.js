import { useRestaurantContext } from "Context/restaurantContext";
import React from "react";
import ContactForm from "./ContactForm";
import classes from "./contactForm.module.css";

const useStyle = () => ({
  container: {
    marginTop: "80px",
    background: "#1A1B20",
    padding: "20px",
  },
  innerContainer: {
    borderRadius: "30px",
    background: "#280813",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    color: "white",
    padding: "10px 0px",
  },
  formContainer: {
    borderRadius: "0px 0px 30px 30px",
    padding: "20px",
    background: "white",
    width: "100%",
  },
  contactDetail: {
    width: "100%",
    margin: "20px 0px",
    padding: "20px 30px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default function Touch() {
  const styles = useStyle();
  const {
    restaurant: { placeData },
  } = useRestaurantContext();
  console.log("placeData :>> ", placeData);
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <h1 style={styles.header}>Keep in touch with us</h1>
        <div style={styles.formContainer} className="row">
          <div className="col-sm-12 col-lg-6">
            <ContactForm />
          </div>
          <div className="col-sm-12 col-lg-6">
            <div>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
                className={classes.iframe}
              ></iframe>
              <div className={classes.shadow} style={styles.contactDetail}>
                <p>
                  <span className={classes.title}>Address: </span>
                  {placeData?.formatted_address}
                </p>
                <p>
                  <span className={classes.title}>Email: </span>
                  starters@cafe.com
                </p>
                <p>
                  <span className={classes.title}>Phone: </span>
                  {placeData?.formatted_phone_number}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
