import React from "react";

const useStyles = () => ({
  container: {
    display: "flex",
    justifyContent: "space-around",
    color: "white",
  },
  headingContainer: {
    background: "#F49E0B",
    borderRadius: "70% / 100% 100% 0 0",
    fontSize: "24px",
    padding: "10px 0px 30px 0px",
    height: "90px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    background: "#280813",
    padding: "30px 40px",
    marginTop: "-30px",
  },
  middleContent: {
    borderLeft: "2px solid white",
    borderRight: "2px solid white",
  },
  emailBtn: {
    padding: "10px",
    color: "#636363",
    background: "white",
    borderRadius: "5px 5px 0px 0px",
    margin: "0px",
    minWidth: "200px",
  },
  subscribeBtn: {
    padding: "10px",
    background: "#F49E0B",
    borderRadius: "0px 0px 5px 5px",
    margin: "0px",
    minWidth: "200px",
  },
  divider: {
    background: "white",
    height: "2px",
    margin: "5px",
  },
  bottomContainer: {
    padding: "20px",
    color: "white",
    background: "#280813",
  },
  paragraph: {
    fontWeight: "normal",
  },
  allRights: {
    fontWeight: "normal",
    fontSize: "15px",
    display: "flex",
    textAlign: "left",
  },
});

export default function Footer() {
  const styles = useStyles();

  return (
    <div>
      <div style={styles.container}>
        <div className="flex-1 d-flex flex-column">
          <div style={styles.headingContainer} className="shadow-md">
            <p style={styles.paragraph}>CI CHO SAN</p>
          </div>
          <div
            style={styles.contentContainer}
            className="d-flex flex-column align-items-start flex-1"
          >
            <p style={styles.paragraph}>
              <span className="font-weight-bold">VAT: </span>651354613161355
            </p>
            <p style={styles.paragraph}>
              <span className="font-weight-bold">Registered Office: </span>Via
              ciccio gialli Milan Italy
            </p>
            <p style={styles.paragraph}>
              <span className="font-weight-bold">PEC: </span>starters@cafe.com
            </p>
          </div>
        </div>
        <div className="flex-1">
          <div style={styles.headingContainer} className="shadow-md">
            <p style={styles.paragraph}>NEWSLETTER</p>
          </div>
          <div style={{ ...styles.contentContainer, ...styles.middleContent }}>
            <p style={styles.paragraph}>
              Subscribe to get our amazing discounts and events!
            </p>
            <div className="d-flex flex-column align-items-center mt-3">
              <button style={styles.emailBtn}>Email</button>
              <button style={styles.subscribeBtn}>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex-1 d-flex flex-column">
          <div style={styles.headingContainer} className="shadow-md">
            <p style={styles.paragraph}>USEFUL LINKS</p>
          </div>
          <div style={styles.contentContainer} className="flex-1">
            <p style={styles.paragraph}>
              Cookie Policy
              <br />
              Terms & Conditions
            </p>
            <div className="d-flex justify-content-center mt-4">
              <a href="#" className="m-2">
                <img src="assets/facebook.png" width={30} />
              </a>
              <a href="#" className="m-2">
                <img src="assets/instagram.png" width={30} />
              </a>
              <a href="#" className="m-2">
                <img src="assets/my-business.png" width={30} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div style={styles.bottomContainer}>
        <hr style={styles.divider} />
        <small style={styles.allRights} className="font-italic">
          @2021 Restaurants Club. All Rights Reserved
        </small>
      </div>
    </div>
  );
}
