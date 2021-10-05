import * as React from "react";

const useDateStep = ({
  offers,
  selectedReservationOffer,
  setReservationDetail,
}) => {
  React.useEffect(() => {
    if (Object.entries(selectedReservationOffer).length > 0) {
      let days = [];
      for (
        let d = new Date(selectedReservationOffer?.startDate);
        new Date(d.toLocaleDateString()) <=
        new Date(
          new Date(selectedReservationOffer?.endDate).toLocaleDateString()
        );
        d.setDate(d.getDate() + 1)
      ) {
        const index = days.findIndex(
          (value) => value.day === d.toLocaleDateString()
        );
        index === -1
          ? days.push({
              day: d.toLocaleDateString(),
              offers: [selectedReservationOffer],
            })
          : (days[index] = {
              day: d.toLocaleDateString(),
              offers: [selectedReservationOffer],
            });
      }
      setReservationDetail((prevState) => ({ ...prevState, days }));
    } else {
      let days = [];
      for (const offer of offers) {
        if (new Date(offer?.endDate) >= new Date()) {
          for (
            let d = new Date(offer?.startDate);
            new Date(d.toLocaleDateString()) <=
            new Date(new Date(offer?.endDate).toLocaleDateString());
            d.setDate(d.getDate() + 1)
          ) {
            const index = days.findIndex(
              (value) => value.day === d.toLocaleDateString()
            );
            index === -1
              ? days.push({ day: d.toLocaleDateString(), offers: [offer] })
              : (days[index] = {
                  day: d.toLocaleDateString(),
                  offers: [...days[index].offers, offer],
                });
          }
        }
      }
      setReservationDetail((prevState) => ({ ...prevState, days }));
    }
  }, [selectedReservationOffer, offers]);
};

export default useDateStep;
