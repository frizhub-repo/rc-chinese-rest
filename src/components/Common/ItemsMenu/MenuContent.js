import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import MenuSelector from "./MenuSelector";

const styles = {
  container: {
    background: "white",
  },
  divider: {
    height: "2px",
    background: "#280813",
    border: "none",
  },
  items: {
    padding: "0px 20px",
    maxHeight: "60vh",
    overflowY: "scroll",
  },
  noProduct: {
    textAlign: "center",
    width: "100%",
    fontSize: "20px",
    padding: "10px 0",
  },
  selectorContainer: {
    padding: "20px 40px",
  },
};

export default function MenuContent({ items }) {
  const [activeSection, setActiveSection] = useState(0);

  const handleChangeSectionIndex = (index) => setActiveSection(index);

  return (
    <div style={styles.container}>
      <div style={styles.selectorContainer}>
        <MenuSelector
          selectedMenu={items}
          activeSection={activeSection}
          handleChangeSectionIndex={handleChangeSectionIndex}
        />
      </div>
      <hr style={styles.divider} />
      <div style={styles.items} className="custom-scroll">
        <div className="row px-5">
          {items?.length > 0 && items?.[activeSection]?.products?.length > 0 ? (
            items?.[activeSection]?.products?.map((product) => (
              <div className="col-md-6 col-12 d-flex justfiy-content-start mb-3">
                <MenuItem product={product} />
              </div>
            ))
          ) : (
            <span style={styles.noProduct}>
              This menu don't have any product
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
