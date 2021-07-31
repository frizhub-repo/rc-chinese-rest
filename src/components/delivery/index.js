import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import Control from "./Control";
import Product from "./Product";
import { getProductByCategory } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Box from "@material-ui/core/Box";
import Skeleton from "@material-ui/lab/Skeleton";
import CardContent from "@material-ui/core/CardContent";
import TimingsCard from "../Home/timingsCard";
import { useStyles } from "../Home/MainStyles";
import HeroCard from "../Home/HeroCard";
import HeroDelivery from "../Menu/Hero";

function Media() {
  return (
    <Box width={210} marginRight="20px" my={5}>
      <Skeleton variant="rect" width={210} height={150} />
      <Box pt={0.5}>
        <Skeleton />
        <Skeleton width="60%" />
      </Box>
    </Box>
  );
}

function Delivery() {
  const classes = useStyles();
  const [categoryIndex, setCategoryIndex] = useState(0);
  const disp = useDispatch();
  const { productByCategory } = useSelector((state) => state.productReducer);

  useEffect(() => {
    disp(getProductByCategory());
  }, []);

  return (
    <div>
      <Navbar selected={"Delivery"} />

      <HeroDelivery />

      <Footer />
    </div>
  );
}

export default Delivery;
