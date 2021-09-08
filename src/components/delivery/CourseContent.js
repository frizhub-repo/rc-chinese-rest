import MenuSelector from "components/Common/ItemsMenu/MenuSelector";
import React, { useState } from "react";
import CourseItem from "./CourseItem";
import CourseSelector from "./CourseSelector";

const styles = {
  container: {
    background: "#F49E0B",
    borderRadius: "0px 0px 20px 20px",
    padding: "10px 20px",
  },
  items: {
    maxHeight: "55vh",
    overflowY: "scroll",
  },
  menuSelectorPadding: {
    padding: "20px 10px",
  },
};

export default function CourseContent({ selectedMenu }) {
  const [activeSection, setActiveSection] = useState(0);

  const handleChangeSectionIndex = (index) => setActiveSection(index);

  return (
    <div style={styles.container}>
      <div>
        <input
          placeholder="Search..."
          className="form-control mt-2"
          type="text"
        />
        <div style={styles.menuSelectorPadding}>
          {selectedMenu?.length > 0 && (
            <MenuSelector
              selectedMenu={selectedMenu}
              activeSection={activeSection}
              handleChangeSectionIndex={handleChangeSectionIndex}
            />
          )}
        </div>
        {selectedMenu?.length > 0 ? (
          <div
            style={styles.items}
            className="row my-4 custom-scroll-secondary"
          >
            {selectedMenu?.[activeSection]?.products?.map((item) => (
              <div className="col-12 col-md-6 mb-3">
                <CourseItem item={item} size={item?.sizes[0]} />
              </div>
            ))}
          </div>
        ) : (
          <span>These sections don't have any products!</span>
        )}
      </div>
    </div>
  );
}
