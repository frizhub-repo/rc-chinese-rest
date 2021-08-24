import React from "react";
import cost from "../../images/cost.png";
import { useStyles } from "./MainStyles";
function Section4() {
  const classes = useStyles();
  return (
    <section className="flex py-20  w-full ">
      <div className="flex-grow-1 w-5/6 h-full ml-12 mt-2">
        <div className="h-24 flex justify-content-around">
          <div className={`${classes.section4Styles}`}>
            <p className=" text-white text-center text-sm">Address</p>
            <img
              className="object-contain mt-2 w-full h-16 "
              src="assets/map.png"
            />

            <p className=" text-white text-center mt-2 text-sm">
              Via Cristoforo Colombo,44
            </p>
          </div>

          <div className={` ${classes.section4Styles}`}>
            <p className=" text-white text-center text-sm">Delivery</p>
            <img
              className="h-16 object-contain  w-full"
              src="assets/delivery-man.png"
            />

            <p className=" text-white text-center mt-2 text-sm">
              Minimum Order 15$
            </p>
          </div>

          <div className={`${classes.section4Styles}`}>
            <p className=" text-white text-center text-sm">Delivery Fee</p>
            <img className="object-contain  w-full h-16 " src={cost} />
            <p className=" text-white text-center mt-2 text-sm">
              Minimum Order 15$
            </p>
          </div>
          <div className={` ${classes.section4Styles}`}>
            <p className=" text-white text-center text-sm">Reviews</p>
            <img
              className="object-contain  w-full h-16"
              src="assets/stars.png"
            />
            <p className=" text-white text-center mt-2 text-sm">
              22 Satisfid clients
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
