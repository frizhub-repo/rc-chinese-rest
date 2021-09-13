import * as React from "react";
import Calendar from "react-calendar";
import classes from "./Styles/Step.module.css";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";

function Discount({ total, isActive, offers }) {
  console.log("Get max value");
  return (
    <div
      className={`${classes.dateDiscount} ${
        isActive && classes.dateDiscount_active
      } shadow-md`}
    >
      {total > 0 && <p>-{total}%</p>}
    </div>
  );
}

const today = new Date();

export default function DateStep({
  offers,
  parameters,
  setParameters,
  reservationDetail,
  setReservationDetail,
}) {
  React.useEffect(() => {
    let days = [];
    for (const offer of offers) {
      for (
        let d = new Date(offer?.startDate);
        d <= new Date(offer?.endDate);
        d.setDate(d.getDate() + 1)
      ) {
        const index = days.findIndex(
          (value) =>
            new Date(value.day).toLocaleDateString() ===
            new Date(d).toLocaleDateString()
        );
        index === -1
          ? days.push({ day: d, offers: [offer] })
          : (days[index].offers = [...days[index].offers, offer]);
      }
    }
    setReservationDetail({ ...reservationDetail, days });
  }, [offers]);

  function updateDate(e) {
    setParameters({ ...parameters, date: e });
  }

  function discountDisplay({ activeStartDate, date, view }) {
    if (reservationDetail?.days?.length > 0) {
      const reserDetail = reservationDetail?.days?.sort(
        (a, b) => a.day - b.day
      );
      const dateIndex = reserDetail?.findIndex(
        (value) =>
          new Date(value?.day).toLocaleDateString() ===
          new Date(date).toLocaleDateString()
      );

      if (dateIndex > -1)
        return (
          <Discount
            total={Math.max.apply(
              null,
              reserDetail?.[dateIndex]?.offers?.map(
                (item) => item?.discountPrice
              )
            )}
            isActive={date.getTime() === parameters?.date?.getTime()}
            offers={reserDetail?.[dateIndex]?.offers}
          />
        );
    }
  }

  function tileClassName({ date }) {
    const yesterday = new Date();
    yesterday.setDate(new Date().getDate() - 1);

    if (date.getTime() < yesterday.getTime()) {
      return classes.disableTitle;
    }
  }

  return (
    <div>
      <div className={classes.container}>
        <Calendar
          onChange={updateDate}
          value={parameters?.date}
          showNeighboringMonth={false}
          prevLabel={<span className={classes.calenderArrow}>{"<"}</span>}
          nextLabel={<span className={classes.calenderArrow}>{">"}</span>}
          minDate={today}
          tileClassName={tileClassName}
          tileContent={discountDisplay}
        />
      </div>
    </div>
  );
}
