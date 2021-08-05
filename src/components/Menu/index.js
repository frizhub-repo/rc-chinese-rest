import React from "react";
import Navbar from "../Navbar";
import Footer from "../../Footer";
import HeroCard from "../Home/HeroCard";
import { useStyles } from "../Home/MainStyles";
import reservationBook from "../../images/reservationBook.png";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import TimingsCard from "../Home/timingsCard";
import CardMenu from "../Home/cardMenu";
import foodImg from '../../images/foodimage.jpg';

function Menu() {
  const classes = useStyles();
  return (
    <div>
      <Navbar selected="Menu" />
      <div
        className="mt-0 flex pl-36 items-center  h-96 justify-content-center"
        style={{
          background:
            "url(https://images.unsplash.com/photo-1452967712862-0cca1839ff27?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80) center center",
        }}
      >
        <HeroCard />
      </div>
        <div className = {classes.flexing}>
        <div className = {classes.imgCircleCardDiv}>
          <div className = {classes.imgCircleCard}>
            <img src = {foodImg} className = {classes.imgCircle}/>
            <div className = {classes.line}></div> 
          </div>
          </div>
          
        <div className={classes.whiteCircle}>
        <img className={classes.wImg} src={reservationBook} />
        <p>RESERVE A TABLE</p>
      </div>
         
        </div>
      
      <div className={classes.tableReserve2}>
        <div>
          <TimingsCard
            id="3"
            open="true"
            textForOpen="LUNCH MENU"
            styles={`${classes.root5} ${classes.extraStyleForC7}`}
            textStyles={classes.textStyles}
          />
        </div>
        <Card className={`${classes.root5} ${classes.extraStyleForC8}`}>
          <CardContent>
            <CardMenu />
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
