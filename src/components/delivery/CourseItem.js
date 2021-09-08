import { addItem, setTotal } from "actions";
import { useRestaurantContext } from "Context/restaurantContext";
import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { isEmpty } from "utils/common";
import messages from "utils/messages";
import classes from "./CourseItem.module.css";

const styles = {
  container: {
    background: "white",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "space-between",
  },
  iconContainer: {
    display: "inline-block",
    position: "relative",
  },
  icon: {
    borderRadius: "20px 0px 0px 0px",
    width: "100px",
    height: "100px",
  },
  price: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    background: "white",
    borderRadius: "15px 15px 0px 0px",
  },
  details: {
    color: "#280813",
    margin: "4px 2px",
  },
  counter: {
    color: "#280813",
    padding: "4px",
  },
  basketContainer: {
    border: "2px solid #CB0E0E",
    borderRadius: "0px 20px 0px 0px",
    display: "flex",
    alignItems: "center",
    padding: "0px 2px",
    cursor: "pointer",
  },
};

export default function CourseItem({
  item,
  size,
  offer,
  discountList,
  setDiscountList,
}) {
  const [price, setPrice] = React.useState(null);
  const [productSize, setProdctSize] = React.useState(null);
  const [quantity, setQuantity] = React.useState(1);
  const dispatch = useDispatch();
  const { customerData: { _id = "" } = {} } = useRestaurantContext();

  const calculateDiscountedPrice = () => {
    if (isEmpty(offer)) {
      setPrice(item?.sizes[0]?.price);
    } else {
      if (offer?.discountType === "flat") {
        setPrice(size?.price - offer?.discountPrice);
      } else if (offer?.discountType === "percentage") {
        setPrice(size?.price - (size?.price * offer?.discountPrice) / 100);
      } else {
        setPrice(size?.price);
      }
    }
  };

  const handleChangeProductSize = (sizeObj) => {
    if (isEmpty(offer)) {
      setPrice(0);
      setProdctSize(sizeObj);
      setPrice(sizeObj?.price);
    }
  };

  React.useEffect(() => {
    if (size) {
      calculateDiscountedPrice();
      setProdctSize(size);
    }
  }, [size]);

  const discountedPrice = price > 0 ? price : 0;

  const addToCart = () => {
    try {
      const isDiscount = isEmpty(offer) ? false : offer.discountType;
      isDiscount && validateOffer(offer);

      const payload = {
        product: item._id,
        name: item.title,
        price: discountedPrice,
        originalPrice: productSize?.price,
        size: productSize,
        isDiscount,
        quantity,
        offer,
        bundledProduct: offer?.bundledProduct ?? [],
      };
      dispatch(addItem(payload));
      dispatch(setTotal(discountedPrice * quantity));
      setQuantity(1);
    } catch (error) {
      if (error.message) {
        toast.error(error.message);
        return;
      }
      toast.error("Error while adding product");
    }
  };

  function validateOffer(offer) {
    if (!offer?.isActivated || offer.isDeleted) {
      throw Error(messages.notFound("Offer"));
    }
    if (offer.totalDiscount === 0) {
      throw Error(messages.total_Disocunt);
    }
    if (Date.now() > new Date(offer.endDate)) {
      throw Error(messages.offerExpire);
    }

    const value =
      offer?.discountType === "bundle" ? "bundled" : offer?.discountType;
    let updatedDiscountList = [];
    for (const discount of discountList[value]) {
      if (discount.offer._id === offer?._id) {
        let customerExist = false;
        const updateCustomerUsage = offer?.customerUsage?.map(
          ({ customer, usage }) => {
            if (customer === _id) {
              if (
                offer?.maxNoOfUsage === usage ||
                offer?.maxNoOfUsage < usage + quantity
              ) {
                throw Error(messages.maximumNoOfUsage);
              }
              customerExist = true;
              return { usage: usage + quantity, customer };
            } else {
              return { customer, usage };
            }
          }
        );
        if (!customerExist) {
          updateCustomerUsage.push({ customer: _id, usage: 1 });
        }

        updatedDiscountList.push({
          ...discount,
          offer: {
            ...discount.offer,
            customerUsage: updateCustomerUsage,
            totalDiscount: discount.offer.totalDiscount - 1,
          },
        });
      } else {
        updatedDiscountList.push(discount);
      }
    }
    setDiscountList({
      ...discountList,
      [value]: updatedDiscountList,
    });
  }

  const handleChangeDecrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleChangeIncrementQuantity = () => setQuantity((prev) => prev + 1);
  return (
    <div style={styles.container}>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <div style={styles.iconContainer}>
            <img
              style={styles.icon}
              src={process.env.REACT_APP_API_BASE_URL + "/" + item?.images?.[0]}
              alt="Item Image"
            />
            <h5 className="shadow-md" style={styles.price}>
              {isEmpty(offer) ? (
                <span>€{discountedPrice}</span>
              ) : offer?.discountType === "bundle" ? (
                <span>€{size?.price}</span>
              ) : (
                <div>
                  <span className={classes.priceTextDecoration}>
                    €{size?.price}
                  </span>
                  <span>€{discountedPrice}</span>
                </div>
              )}
            </h5>
          </div>
          <div>
            <img
              className={`shadow-md ${classes.vegan}`}
              src="assets/vegan.png"
            />
            <img
              className={`shadow-md ${classes.glutten_free}`}
              src="assets/glutten-free.png"
            />
            <img className={`shadow-md ${classes.hot}`} src="assets/hot.png" />
          </div>
        </div>

        <div style={styles.details}>
          <h5>{item?.title}</h5>
          <p>{item?.description}</p>
          <p>
            Allergeni:{" "}
            {item?.allergies?.map((allergy) => (
              <span>{allergy}, </span>
            ))}
          </p>
        </div>
        <div className="d-flex">
          <div className="d-flex flex-column">
            <h4
              onClick={handleChangeDecrementQuantity}
              className="shadow-md flex-1"
              style={{ ...styles.counter, cursor: "pointer" }}
            >
              -
            </h4>
            <h4 className="shadow-md flex-1" style={styles.counter}>
              {quantity}
            </h4>
            <h4
              onClick={handleChangeIncrementQuantity}
              className="shadow-md flex-1"
              style={{ ...styles.counter, cursor: "pointer" }}
            >
              +
            </h4>
          </div>
          <div onClick={addToCart} style={styles.basketContainer}>
            <img src="assets/shopping-basket.png" style={{ width: "50px" }} />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-stretch">
        {item?.sizes?.map((size) => (
          <p
            onClick={() => handleChangeProductSize(size)}
            className={`flex-1 shadow-lg ${classes.size_option} ${classes.first_option}`}
          >
            {size?.title}
          </p>
        ))}
      </div>
    </div>
  );
}
