import { CircularProgress } from "@material-ui/core";
import { reserveTable } from "api/customers";
import { useRestaurantContext } from "Context/restaurantContext";
import * as React from "react";
import { toast } from "react-toastify";
import classes from "./Styles/Step.module.css";

function DiscountCard({ content, isActive, handleClick }) {
  return (
    <div className={classes.detailsCardContainer} onClick={handleClick}>
      <div className={classes.detailsCardContentContainer}>
        <div className={classes.detailsCardHeaderContainer}>
          {content?.discountPrice && (
            <div className={classes.detailsCardNameContainer}>
              <h5>-{content?.discountPrice}%</h5>
            </div>
          )}
          <h5 className={classes.detailsCardHeader}>{content?.title}</h5>
        </div>
        <div>
          <p>{content?.description}</p>
        </div>
      </div>
      <div
        className={`${classes.detailsCardSelector} ${
          isActive && classes.detailsCardSelector_active
        } shadow-md`}
      ></div>
    </div>
  );
}

export default function DiscountStep({
  offers,
  parameters,
  setParameters,
  chooseOffer,
  setChooseOffer,
}) {
  const [loading, setLoading] = React.useState(false);
  const { token } = useRestaurantContext();

  React.useEffect(() => {
    for (const offer of offers) {
      let numPeople = parseInt(parameters?.people?.count);
      const isPeopleExist =
        offer?.numberOfPeople?.includes(numPeople) ||
        (offer?.peopleGreaterThanSix && numPeople >= 6);
      let isDateExist = false;
      for (
        let date = new Date(offer?.startDate);
        date <= new Date(offer?.endDate);
        date.setDate(date.getDate() + 1)
      ) {
        if (
          new Date(date).toLocaleDateString() ===
          new Date(parameters?.date?.value).toLocaleDateString()
        ) {
          isDateExist = true;
        }
      }
      let isSlotExist = false;
      if (
        offer?.hourlyTimeSlots?.includes(parameters?.time?.slot) ||
        (parameters?.time?.slot >= offer?.groupTimeSlot?.startHour &&
          parameters?.time?.slot <= offer?.groupTimeSlot?.endHour)
      ) {
        isSlotExist = true;
      }
      if (isPeopleExist && isDateExist && isSlotExist) {
        setChooseOffer((prevOffer) => [...prevOffer, offer]);
      }
    }
  }, []);

  const noDiscount = {
    title: "Don’t use any discounts",
    description: "No one Discounts will be used with this order",
  };

  function updateDiscount(discount) {
    setParameters({ ...parameters, discount });
  }

  const createReservation = async () => {
    setLoading(true);
    try {
      if (!token) {
        toast.info("Please login first");
        return;
      }
      if (!parameters?.discount) {
        toast.error("Please choose discount");
        return;
      }
      const payload = {
        startTime: parameters?.date?.value,
        numberOfPeople: parseInt(parameters?.people?.count),
        timeSlot: parameters?.time?.slot,
        services: parameters?.time?.name,
        offer: parameters?.discount === -1 ? null : parameters?.discount,
      };
      const res = await reserveTable(payload);
      toast.success("Reservation created successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Error while creating offer");
      console.log({ error });
      setLoading(false);
    }
  };

  return (
    <div className={classes.container}>
      <h3 className={classes.header}>Choose a Discount</h3>
      <div className={`${classes.contentContainer} custom-scroll-secondary`}>
        <div className="mx-2">
          {chooseOffer?.length > 0 &&
            chooseOffer.map((discount, index) => (
              <DiscountCard
                content={discount}
                isActive={discount?._id === parameters?.discount?._id}
                handleClick={() => updateDiscount(discount)}
              />
            ))}
          {chooseOffer?.length > 0 && (
            <h5 className={classes.secondaryHeader}>Or:</h5>
          )}
          <div className="mt-2"></div>
          <DiscountCard
            content={noDiscount}
            isActive={parameters?.discount === -1}
            handleClick={() => updateDiscount(-1)}
          />
        </div>
      </div>
      <div
        className={classes.createReservationBtnRoot}
        onClick={createReservation}
      >
        <button className={classes.createReservationBtn}>
          {loading && (
            <CircularProgress
              color="inherit"
              size={20}
              style={{ marginRight: "8px" }}
            />
          )}
          Create Reservation
        </button>
      </div>
    </div>
  );
}
