import React, { useState } from "react";
import { makeStyles, Box } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogContent from "@material-ui/core/DialogContent";
import bg from "../../images/bg.jpeg";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "40px 30px",
  },
  bgImg: {
    background: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function Auth() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      <Dialog
        // maxWidth="xs"
        scroll="body"
        aria-labelledby="customized-dialog-title"
        open={true}
        className={`${classes.bgImg} customDesign`}
      >
        <DialogContent dividers>
          <Box className={classes.root}>
            {activeStep === 0 && <SignIn setActiveStep={setActiveStep} />}
            {activeStep === 1 && <SignUp setActiveStep={setActiveStep} />}
          </Box>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Auth;
