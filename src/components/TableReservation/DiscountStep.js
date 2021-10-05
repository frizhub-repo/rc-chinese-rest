import { CircularProgress } from "@material-ui/core";
import { reserveTable } from "api/customers";
import { useRestaurantContext } from "Context/restaurantContext";
import * as React from "react";
import { toast } from "react-toastify";
import classes from "./Styles/Step.module.css";
import { useHistory } from "react-router";

function DiscountCard({ content, isActive, handleClick }) {
  return (
    <div className={classes.detailsCardContainer} onClick={handleClick}>
      <div className={classes.detailsCardContentContainer}>
        <div className={classes.detailsCardHeaderContainer}>
          {content?.discountPrice && (
            <div className={classes.detailsCardNameContainer}>
              <h5 className={classes.headingH5}>-{content?.discountPrice}%</h5>
            </div>
          )}
          <h5 className={classes.headingH5}>{content?.title}</h5>
        </div>
        <div>
          <p className={classes.description}>{content?.description}</p>
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
  selectedReservationOffer,
  specialMenu,
  setActive,
}) {
  const [chooseOffer, setChooseOffer] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const { token } = useRestaurantContext();
  const history = useHistory();

  React.useEffect(() => {
    if (Object.entries(selectedReservationOffer).length > 0) {
      setChooseOffer([selectedReservationOffer]);
    } else {
      for (const offer of offers) {
        let numPeople = parseInt(parameters?.people?.count);
        const isPeopleExist =
          offer?.numberOfPeople?.includes(numPeople) ||
          (offer?.peopleGreaterThanSix && numPeople >= 6);
        let isDateExist = false;
        for (
          let date = new Date(offer?.startDate);
          new Date(date.toLocaleDateString()) <=
          new Date(new Date(offer?.endDate).toLocaleDateString());
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
        // Set offers based on offers
        if (offer?.discountType === "bundle" && isDateExist) {
          setChooseOffer((prevOffer) => [...prevOffer, offer]);
        }
        if (
          offer?.discountType === "group" &&
          isPeopleExist &&
          isDateExist &&
          isSlotExist
        ) {
          setChooseOffer((prevOffer) => [...prevOffer, offer]);
        }
        if (offer?.discountType === "hourly" && isDateExist && isSlotExist) {
          setChooseOffer((prevOffer) => [...prevOffer, offer]);
        }
      }
    }
  }, [selectedReservationOffer, offers]);

  const noDiscount = {
    title: "Don’t use any discounts",
    description: "No one Discounts will be used with this order",
  };

  function updateDiscount(discount) {
    setParameters({ ...parameters, discount });
  }

  function updateSpecialMenu(menu) {
    if (parameters?.menu === menu) {
      setParameters({ ...parameters, menu: null });
    } else {
      setParameters({ ...parameters, menu });
    }
  }

  const createReservation = async () => {
    setLoading(true);
    try {
      if (!token) {
        toast.info("Please login first");
        history.push("/signIn");
      } else if (!parameters?.discount) {
        toast.error("Please choose discount");
      } else {
        const payload = {
          startTime: parameters?.date?.value,
          numberOfPeople: parseInt(parameters?.people?.count),
          timeSlot: parameters?.time?.slot,
          services: parameters?.time?.name,
          offer: parameters?.discount === -1 ? null : parameters?.discount,
          specialMenu: parameters?.menu,
        };
        await reserveTable(payload);
        toast.success("Reservation created successfully");
        setParameters({});
        setActive(0);
      }
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
                isActive={discount?._id === parameters?.discount}
                handleClick={() => updateDiscount(discount?._id)}
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
        {specialMenu?.length > 0 && (
          <>
            <h3 className={classes.header}>Choose a Special Menu</h3>
            <div className={`custom-scroll-secondary`}>
              <div className="mx-2">
                {specialMenu?.map((menu) => (
                  <DiscountCard
                    content={menu}
                    isActive={parameters?.menu === menu?._id}
                    handleClick={() => updateSpecialMenu(menu?._id)}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <div className={classes.createReservationBtnRoot}>
        <button
          style={{ outline: "none" }}
          className={classes.createReservationBtn}
          onClick={createReservation}
          disabled={loading}
        >
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
