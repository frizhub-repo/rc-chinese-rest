import ActionBox from "./ActionBox/ActionBox";
import * as React from "react";
import Account from "./Menus/Account";
import Customization from "./Menus/Customization";
import Setting from "./Menus/Setting";
import MenuSelector from "./MenuSelector/MenuSelector";
import classes from "./Styles.module.css";
import OrderHistory from "./Menus/OrderHistory";

export default function Settings() {
  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div className={classes.root}>
      <section>
        <MenuSelector activeStep={activeStep} setActiveStep={setActiveStep} />
      </section>
      <section className={classes.contentContainer}>
        {activeStep === 0 && <Account />}
        {activeStep === 1 && <OrderHistory />}
        {activeStep === 2 && <Customization />}
        {activeStep === 3 && <Setting />}
        <section>
          <div className={classes.secondaryColumn}>
            <p className={classes.message}>Ciao, Vergingetorige!</p>
            {activeStep === 1 && <ActionBox />}
          </div>
        </section>
      </section>
    </div>
  );
}
