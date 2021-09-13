import { Box } from "@material-ui/core";
import React, { useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Auth({ open = true, handleClickOpen }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div>
      <Box>
        {activeStep === 0 && (
          <SignIn
            setActiveStep={setActiveStep}
            handleClickOpen={handleClickOpen}
          />
        )}
        {activeStep === 1 && (
          <SignUp
            setActiveStep={setActiveStep}
            handleClickOpen={handleClickOpen}
          />
        )}
      </Box>
    </div>
  );
}

export default Auth;
