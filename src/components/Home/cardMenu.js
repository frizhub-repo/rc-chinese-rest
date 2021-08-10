import React from "react";
import course1 from "../../images/course1.png";
import course2 from "../../images/course2.png";
import course3 from "../../images/course3.png";
import course4 from "../../images/course4.png";
import productImage from "../../images/productImg.jpeg";
import gluten from "../../images/gluten.png";
import hot from "../../images/hot.png";
import vegan from "../../images/vegan.png";
import { useStyles } from "./MainStyles";
function CardMenu() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.roundCoursesCards}>
        <div className={classes.cardCourseStyles}>
          <p>First Course</p>{" "}
          <img src={course1} className={classes.chinaDImage} />
        </div>
        <div className={classes.cardCourseStyles}>
          <p>Second Course</p>{" "}
          <img src={course2} className={classes.chinaDImage} />
        </div>
        <div className={classes.cardCourseStyles}>
          <p>Desserts</p> <img src={course3} className={classes.chinaDImage} />
        </div>
        <div className={classes.cardCourseStyles}>
          <p>Drinks</p> <img src={course4} className={classes.chinaDImage} />
        </div>
      </div>
      <div className={classes.blackLine}></div>
      <div className={classes.extraCardDiv}>
        <div className={classes.extraInnerCardDiv}>
          <div className={classes.extraCard}>
            <img src={productImage} className={classes.homeMenuCardImg} />
            <div className={classes.tIconsDiv}>
              <img src={vegan} className={classes.tIcons} />
              <img src={gluten} className={classes.tIcons} />
              <img src={hot} className={classes.tIcons} />
            </div>
          </div>
          <div className={classes.textAlignClass}>
            <p>SPAGHETTI ALLA PUTTANESCA.....................5€</p>
            <p>Ingredienti: Pasta di Grano, Sugo di Pomodoro, Peperoncino</p>
            <p>Allergeni: Farina</p>
          </div>
          <div className={classes.extraCard}>
            <img src={productImage} className={classes.homeMenuCardImg} />
            <div className={classes.tIconsDiv}>
              <img src={vegan} className={classes.tIcons} />
              <img src={gluten} className={classes.tIcons} />
              <img src={hot} className={classes.tIcons} />
            </div>
          </div>
          <div className={classes.textAlignClass}>
            <p>SPAGHETTI ALLA PUTTANESCA.....................5€</p>
            <p>Ingredienti: Pasta di Grano, Sugo di Pomodoro, Peperoncino</p>
            <p>Allergeni: Farina</p>
          </div>
        </div>

        <div className={classes.extraInnerCardDiv}>
          <div className={classes.extraCard}>
            <img src={productImage} className={classes.homeMenuCardImg} />
            <div className={classes.tIconsDiv}>
              <img src={vegan} className={classes.tIcons} />
              <img src={gluten} className={classes.tIcons} />
              <img src={hot} className={classes.tIcons} />
            </div>
          </div>
          <div className={classes.textAlignClass}>
            <p>SPAGHETTI ALLA PUTTANESCA.....................5€</p>
            <p>Ingredienti: Pasta di Grano, Sugo di Pomodoro, Peperoncino</p>
            <p>Allergeni: Farina</p>
          </div>
          <div className={classes.extraCard}>
            <img src={productImage} className={classes.homeMenuCardImg} />
            <div className={classes.tIconsDiv}>
              <img src={vegan} className={classes.tIcons} />
              <img src={gluten} className={classes.tIcons} />
              <img src={hot} className={classes.tIcons} />
            </div>
          </div>
          <div className={classes.textAlignClass}>
            <p>SPAGHETTI ALLA PUTTANESCA.....................5€</p>
            <p>Ingredienti: Pasta di Grano, Sugo di Pomodoro, Peperoncino</p>
            <p>Allergeni: Farina</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardMenu;
