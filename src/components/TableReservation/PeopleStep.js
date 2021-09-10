import * as React from "react";
import classes from "./Styles/Step.module.css";

function Discount({ total, isActive }) {
  return (
    <div
      className={`${classes.discountContainer} ${
        isActive && classes.active_discount
      } shadow-md`}
    >
      <p>-{total}%</p>
    </div>
  );
}

export default function PeopleStep({ discounts, detail, setDetail }) {
  function updatePeople(id) {
    setDetail({ ...detail, people: id });
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Choose number of People</h3>
      <div className={`${classes.contentContainer} custom-scroll-secondary`}>
        <div className="row mx-2">
          {Array(25)
            .fill()
            .map((_, index) => (
              <div key={index} className="col-4 my-2">
                <div
                  className={`${classes.item} ${
                    detail?.people === index + 1 && classes.active_item
                  } shadow-md`}
                  onClick={() => updatePeople(index + 1)}
                >
                  <h4>{index + 1}</h4>
                  <Discount
                    isActive={detail?.people === index + 1}
                    total={"20"}
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
