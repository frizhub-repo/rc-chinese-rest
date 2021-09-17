import * as React from "react";
import OpenStatus from "./OpenStatus";
import PeopleStep from "./PeopleStep";
import Stepper from "./Stepper";
import TimeStep from "./TimeStep";
import classes from "./Styles/InfoBox.module.css";
import DiscountStep from "./DiscountStep";
import DateStep from "./DateStep";
import { getReservationOffers } from "api/public";
import { Skeleton } from "@material-ui/lab";

export default function InfoBox({ selectedReservationOffer }) {
  const [loading, setLoading] = React.useState(false);
  const [reserving, setReserving] = React.useState(false);
  const [isNextBtnDisabled, setIsNextBtnDisabled] = React.useState(true);
  const [active, setActive] = React.useState(0);
  const [parameters, setParameters] = React.useState({});
  const [offers, setOffers] = React.useState([]);
  const [reservationDetail, setReservationDetail] = React.useState({
    choosePeople: {
      1: [],
      2: [],
      3: [],
      4: [],
      5: [],
      6: [],
      7: [],
      8: [],
      9: [],
      10: [],
      11: [],
      12: [],
      13: [],
      14: [],
      15: [],
      16: [],
    },
  });

  React.useEffect(() => {
    setLoading(true);
    try {
      (async function () {
        const res = await getReservationOffers();
        setOffers(res?.data);
        setLoading(false);
      })();
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    if (parameters?.people !== undefined && active === 0)
      setIsNextBtnDisabled(false);
    else if (parameters?.date !== undefined && active === 1)
      setIsNextBtnDisabled(false);
    else if (parameters?.time !== undefined && active === 2)
      setIsNextBtnDisabled(false);
    else if (parameters?.discount !== undefined && active === 3)
      setIsNextBtnDisabled(false);
  }, [parameters, isNextBtnDisabled, active]);

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
            offers={offers}
            reservationDetail={reservationDetail}
            setReservationDetail={setReservationDetail}
            parameters={parameters}
            setParameters={setParameters}
            selectedReservationOffer={selectedReservationOffer}
          />
        );
      case 1:
        return (
          <DateStep
            offers={offers}
            parameters={parameters}
            setParameters={setParameters}
            reservationDetail={reservationDetail}
            setReservationDetail={setReservationDetail}
          />
        );
      case 2:
        return (
          <TimeStep
            offers={offers}
            parameters={parameters}
            setParameters={setParameters}
          />
        );
      case 3:
        return (
          <DiscountStep
            offers={offers}
            parameters={parameters}
            setParameters={setParameters}
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
        loading ? (
          <Skeleton
            variant="rect"
            height={350}
            className={classes.skeletonSpacing}
          />
        ) : (
          <div className={classes.reservingContainer}>
            {active !== 3 && (
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
            )}
            {getStep(active)}
          </div>
        )
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
