import * as React from "react";
import Calendar from "react-calendar";
import classes from "./Styles/Step.module.css";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

function Discount({ total, isActive }) {
  return (
    <div
      className={`${classes.dateDiscount} ${
        isActive && classes.dateDiscount_active
      } shadow-md`}
    >
      <p>-20%</p>
    </div>
  );
}

export default function DateStep({ parameters, setParameters }) {
  function updateDate(e) {
    setParameters({ ...parameters, date: e });
  }

  function discountDisplay({ activeStartDate, date, view }) {
    if (true)
      return (
        <Discount isActive={date.getTime() === parameters?.date?.getTime()} />
      );
    return null;
  }

  return (
    <div>
      <div className={classes.container}>
        <Calendar
          onChange={updateDate}
          value={parameters?.date}
          showNeighboringMonth={false}
          prevLabel={"<"}
          nextLabel={">"}
          minDate={new Date()}
          tileContent={discountDisplay}
        />
      </div>
    </div>
  );
}
