import React, { useState } from "react";
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
};

export default function MenuContent({ items }) {
  return (
    <div style={styles.container}>
      <div>
        <MenuSelector />
      </div>
      <hr style={styles.divider} />
      <div style={styles.items}>
        <div className="row">
          {items?.length > 0 &&
            items.map((item) =>
              item?.products?.map((product) => (
                <div className="col-md-6 col-12">
                  <MenuItem product={product} />
                </div>
              ))
            )}
        </div>
      </div>
    </div>
  );
}
