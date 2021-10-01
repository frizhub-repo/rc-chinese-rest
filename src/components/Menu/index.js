import { Backdrop, CircularProgress } from "@material-ui/core";
import { customerMenu } from "api/public";
import React from "react";
import Hero from "../Common/Hero";
import ItemsMenu from "../Common/ItemsMenu/ItemsMenu";
import ItemCarousel from "./ItemCarousel";
import { useHistory } from "react-router";

const styles = {
  reserve: {
    border: "5px solid #F49E0B",
    width: "300px",
    height: "300px",
    background: "white",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  buttonText: {
    color: "#F49E0B",
    fontSize: "20px",
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
};

export default function Menu() {
  const history = useHistory();

  const [specialMenu, setSpecialMenus] = React.useState([]);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    async function getRestaurantMenu() {
      setLoading(true);
      try {
        const res = await customerMenu();
        setSpecialMenus(res?.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getRestaurantMenu();
  }, []);
  return (
    <div>
      <section>
        <Hero />
      </section>
      <section className="row mt-5 mr-0">
        <div className="col-12 col-md-8 mb-5 mb-md-0 pl-0 pl-md-5">
          <ItemCarousel
            specialMenu={specialMenu}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          />
        </div>
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center">
          <div style={styles.reserve} onClick={() => history.push("tableRes")}>
            <img src="assets/reserve-table.png" alt="reserve-table" />
            <span style={styles.buttonText}>RESERVE A TABLE</span>
          </div>
        </div>
      </section>
      <section className="p-5">
        {specialMenu?.length > 0 && (
          <ItemsMenu selectedMenu={specialMenu?.[activeIndex]} />
        )}
      </section>
      <Backdrop style={styles.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
