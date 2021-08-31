import { Backdrop, CircularProgress } from "@material-ui/core";
import { getDeliverableMenus } from "api/customers";
import React from "react";
import CourseContent from "./CourseContent";
import DiscountContent from "./DiscountContent";
import MenuType from "./MenuType";

const styles = {
  container: {
    position: "relative",
  },
  header: {
    background: "#280313",
    color: "white",
    borderRadius: "20px 20px 0px 0px",
    padding: "10px 0px",
  },
  menuTypeContainer: {
    position: "absolute",
    top: "50%",
    translate: "transformX(-50%)",
    zIndex: "10",
    left: -15,
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
};

export default function Course() {
  const [menus, setMenus] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [menuSelected, setMenuSelected] = React.useState(1);

  function handleClickOption(value) {
    setMenuSelected(value);
  }

  const fetchDeliverableMenus = async () => {
    try {
      setLoading(true);
      const res = await getDeliverableMenus();
      setMenus(res?.data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchDeliverableMenus();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.menuTypeContainer}>
        <MenuType
          menus={menus}
          selected={menuSelected}
          handleClick={handleClickOption}
        />
      </div>
      <div style={styles.header}>
        <h2>DEVLIVERY COURSE</h2>
      </div>
      {menuSelected === 0 ? (
        <DiscountContent />
      ) : (
        <CourseContent selectedMenu={menus[menuSelected - 1]?.items} />
      )}
      <Backdrop style={styles.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
