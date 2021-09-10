import * as React from "react";
import OpenStatus from "./OpenStatus";
import PeopleStep from "./PeopleStep";
import Stepper from "./Stepper";
import TimeStep from "./TimeStep";
import classes from "./Styles/InfoBox.module.css";
import DiscountStep from "./DiscountStep";
import DateStep from "./DateStep";

export default function InfoBox() {
  const [reserving, setReserving] = React.useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = React.useState(true);
  const [active, setActive] = React.useState(0);
  const [reservationDetail, setReservationDetail] = React.useState({});

  React.useEffect(() => {
    if (reservationDetail?.people !== undefined && active === 0)
      setIsNextBtnDisabled(false);
    else if (reservationDetail?.date !== undefined && active === 1)
      setIsNextBtnDisabled(false);
    else if (reservationDetail?.time !== undefined && active === 2)
      setIsNextBtnDisabled(false);
    else if (reservationDetail?.discount !== undefined && active === 3)
      setIsNextBtnDisabled(false);
  }, [reservationDetail, isNextBtnDisabled, active]);

  function incrementActive() {
    if (active < 3) setActive(active + 1);
    // go for next procedure
    else {
    }
  }

  function getStep(active) {
    switch (active) {
      case 0:
        return (
          <PeopleStep
            detail={reservationDetail}
            setDetail={setReservationDetail}
          />
        );
      case 1:
        return (
          <DateStep
            detail={reservationDetail}
            setDetail={setReservationDetail}
          />
        );
      case 2:
        return (
          <TimeStep
            detail={reservationDetail}
            setDetail={setReservationDetail}
          />
        );
      case 3:
        return (
          <DiscountStep
            detail={reservationDetail}
            setDetail={setReservationDetail}
          />
        );
    }
  }

  return (
    <div className={`mb-5 ${classes.container}`}>
      <div className="d-flex shadow-sm">
        <div className={`${classes.reserveIconContainer} shadow-md`}>
          <img src="assets/reserve-table.png" width={60} height={60} />
        </div>
        {reserving ? (
          <div className="d-flex flex-column justify-content-between align-items-stretch flex-fill">
            <div className={classes.reservingTextContainer}>
              <h4>YOU'RE RESERVING A TABLE!</h4>
            </div>
            <div>
              <Stepper active={active} setActive={setActive} />
            </div>
          </div>
        ) : (
          <div
            className={`${classes.reserveTextContainer}
            d-flex justify-content-center align-items-center flex-fill`}
            onClick={() => setReserving(true)}
          >
            <h4>RESERVE A TABLE</h4>
          </div>
        )}
      </div>
      {reserving ? (
        <div className={classes.reservingContainer}>
          <button
            className={`${classes.reservingNextBtn} shadow-md`}
            onClick={() => {
              incrementActive();
              setIsNextBtnDisabled(true);
            }}
            disabled={isNextBtnDisabled}
          >
            Next
          </button>
          {getStep(active)}
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="mx-1 mt-2">
            <div className="d-flex justify-content-between my-3">
              <button className={`${classes.statusButton} flex-fill`}>
                <img className="mx-2" src="assets/like.png" width={40} />
                <h5 className="m-0">4|5</h5>
              </button>
              <button className={`${classes.statusButton} flex-fill`}>
                <img className="mx-2" src="assets/chat.png" width={40} />
                <h5 className="m-0">427</h5>
              </button>
              <button className={`${classes.statusButton} flex-fill`}>
                <img className="mx-2" src="assets/active-euro.png" width={40} />
                <img src="assets/passive-euro.png" width={40} />
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center mx-2">
            <OpenStatus />
          </div>
          <div>
            <h4 className="text-white mt-2 mx-2 font-italic">
              CI CHO SAN Piazza Mentana, 2, 50122 Firenze FI
            </h4>
          </div>
          <div className="m-2">
            <iframe
              className={`${classes.map} shadow-sm`}
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
