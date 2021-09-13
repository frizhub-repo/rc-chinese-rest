import * as React from "react";
import classes from "./Styles/Step.module.css";

function Discount({ total, isActive }) {
  return (
    <>
      {total > 0 && (
        <div
          className={`${classes.discountContainer} ${
            isActive && classes.active_discount
          } shadow-md`}
        >
          <p>-{total}%</p>
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
}) {
  React.useEffect(() => {
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
  }, []);
  function updatePeople(id) {
    setParameters({ ...parameters, people: id });
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
                    parameters?.people === count && classes.active_item
                  } shadow-md`}
                  onClick={() => updatePeople(count)}
                >
                  <h4>{count}</h4>
                  <Discount
                    isActive={parameters?.people === count}
                    total={Math.max.apply(
                      null,
                      value.map((item) => item.discountPrice)
                    )}
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
