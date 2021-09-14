import * as React from "react";
import Calendar from "react-calendar";
import classes from "./Styles/Step.module.css";
import { NavigateNext, NavigateBefore } from "@material-ui/icons";
import { getMaxValue } from "utils/common";

function Discount({ isActive, offers }) {
  const maxOffer = getMaxValue(offers, "discountPrice");

  return (
    <div
      className={`${classes.dateDiscount} ${
        isActive && classes.dateDiscount_active
      } shadow-md`}
    >
      {maxOffer?.count > 0 && <p>-{maxOffer?.count}%</p>}
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
    if (reservationDetail?.days?.length > 0) {
      const reserDetail = reservationDetail?.days?.sort(
        (a, b) => a.day - b.day
      );
      const dateIndex = reserDetail?.findIndex(
        (value) =>
          new Date(value?.day).toLocaleDateString() ===
          new Date(e).toLocaleDateString()
      );
      const maxOffer = getMaxValue(
        reserDetail?.[dateIndex]?.offers,
        "discountPrice"
      );
      setParameters({
        ...parameters,
        date: { value: e, offer: maxOffer?.obj },
      });
    }
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
            isActive={date.getTime() === parameters?.date?.value?.getTime()}
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
          value={parameters?.date?.value}
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
