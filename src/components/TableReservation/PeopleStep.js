import * as React from "react";
import { getMaxValue } from "utils/common";
import classes from "./Styles/Step.module.css";

function Discount({ offers, isActive }) {
  const maxOffer = getMaxValue(offers, "discountPrice");
  return (
    <>
      {maxOffer?.count > 0 && (
        <div
          className={`${classes.discountContainer} ${
            isActive && classes.active_discount
          } shadow-md`}
        >
          <p>-{maxOffer?.count}%</p>
        </div>
      )}
    </>
  );
}

export default function PeopleStep({
  reservationDetail,
  parameters,
  setParameters,
  offers,
  setReservationDetail,
  selectedReservationOffer,
}) {
  React.useEffect(() => {
    if (Object.entries(selectedReservationOffer).length > 0) {
      const peopleOffer = { ...reservationDetail?.choosePeople };
      for (const [count, offer] of Object.entries(peopleOffer)) {
        if (selectedReservationOffer?.peopleGreaterThanSix && count >= 6) {
          peopleOffer[count] = [selectedReservationOffer];
        } else {
          peopleOffer[count] = [];
        }
      }
      selectedReservationOffer?.numberOfPeople.forEach((count) => {
        peopleOffer[count] = [selectedReservationOffer];
      });
      setReservationDetail({
        ...reservationDetail,
        choosePeople: peopleOffer,
      });
    } else {
      const peopleOffer = { ...reservationDetail?.choosePeople };
      for (const offer of offers) {
        if (offer?.peopleGreaterThanSix) {
          for (
            let index = 6;
            index <= Object.entries(reservationDetail?.choosePeople)?.length;
            index++
          ) {
            peopleOffer[index] = [...peopleOffer[index], offer];
          }
        }
        offer?.numberOfPeople.forEach((count) => {
          peopleOffer[count] = [...peopleOffer[count], offer];
        });
      }
      setReservationDetail({
        ...reservationDetail,
        choosePeople: peopleOffer,
      });
    }
  }, [selectedReservationOffer]);
  function updatePeople({ count, value }) {
    const maxOffer = getMaxValue(value, "discountPrice");
    setParameters({
      ...parameters,
      people: { count, offer: maxOffer?.obj },
    });
  }

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Choose number of People</h3>
      <div className={`${classes.contentContainer} custom-scroll-secondary`}>
        <div className="row mx-2">
          {Object.entries(reservationDetail?.choosePeople)?.map(
            ([count, value], index) => (
              <div key={index} className="col-4 my-2">
                <div
                  className={`${classes.item} ${
                    parameters?.people?.count === count && classes.active_item
                  } shadow-md`}
                  onClick={() => updatePeople({ count, value })}
                >
                  <h4 className={classes.countHeader}>{count}</h4>
                  <Discount
                    isActive={parameters?.people?.count === count}
                    offers={value}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
