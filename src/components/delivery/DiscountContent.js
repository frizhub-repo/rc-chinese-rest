import { Backdrop, CircularProgress } from "@material-ui/core";
import { getHotDeals } from "api/public";
import React, { useState } from "react";
import CourseItem from "./CourseItem";
import CourseSelector from "./CourseSelector";
import DiscountGenre from "./DiscountGenre";

const styles = {
  container: {
    background: "#F49E0B",
    borderRadius: "0px 0px 20px 20px",
    padding: "10px 20px",
  },
  items: {
    maxHeight: "90vh",
    overflowY: "scroll",
    paddingLeft: "160px",
    paddingRight: "10px",
  },
  backdrop: {
    zIndex: 1,
    color: "#fff",
  },
  itemRoot: {
    width: "100%",
    marginTop: "10px",
  },
};

export default function DiscountContent() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [discountList, setDiscountList] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const getHotDealsFn = async () => {
    setLoading(true);
    try {
      const res = await getHotDeals();
      setDiscountList(res?.data);
      setLoading(false);
    } catch (error) {
      console.log({ error });
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getHotDealsFn();
  }, []);

  const handleChangeActiveStep = (value) => setActiveStep(value);
  return (
    <div style={styles.container}>
      <div>
        <DiscountGenre
          selected={activeStep}
          handleClick={handleChangeActiveStep}
        />

        <input placeholder="Search..." className="form-control" type="text" />
        <div>
          <CourseSelector />
        </div>
        <div style={styles.items} className="row my-4 custom-scroll-secondary">
          {activeStep === 0 &&
            discountList?.bundled?.length > 0 &&
            discountList?.bundled?.map(({ product, offer, size }) => (
              <div style={styles.itemRoot}>
                <CourseItem
                  item={product}
                  offer={offer}
                  size={size}
                  discountList={discountList}
                  setDiscountList={setDiscountList}
                />
              </div>
            ))}
          {activeStep === 1 &&
            discountList?.flat?.length > 0 &&
            discountList?.flat?.map(({ product, offer, size }) => (
              <div style={styles.itemRoot}>
                <CourseItem
                  item={product}
                  offer={offer}
                  size={size}
                  discountList={discountList}
                  setDiscountList={setDiscountList}
                />
              </div>
            ))}
          {activeStep === 2 &&
            discountList?.percentage?.length > 0 &&
            discountList?.percentage?.map(({ product, offer, size }) => (
              <div style={styles.itemRoot}>
                <CourseItem
                  item={product}
                  offer={offer}
                  size={size}
                  discountList={discountList}
                  setDiscountList={setDiscountList}
                />
              </div>
            ))}
        </div>
      </div>
      <Backdrop style={styles.backdrop} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
