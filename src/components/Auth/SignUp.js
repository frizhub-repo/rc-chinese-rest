import { makeStyles, Box, Button, TextField } from "@material-ui/core";
import SignaturesLogo from "../../images/SignaturesLogo.jpg";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    justifyContent: "center",
  },
  txtFieldSpacing: {
    marginTop: "30px",
  },
  signUpButton: {
    borderRadius: "35px",
    width: "100%",
    padding: "15px 20px",
    backgroundColor: "#FDBD00",
    color: "white",
    marginTop: "15px",
    fontSize: "22px",
    "&:hover": {
      backgroundColor: "#FDBD00",
      color: "white",
    },
  },
  forgotPassword: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "20px",
    fontSize: "12px",
    color: "#7DA7F4",
  },
  changeCursor: {
    cursor: "pointer",
  },
}));

export default function SignUp({ setActiveStep }) {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.logo}>
        <img src={SignaturesLogo} width="50%" height="50%" />
      </Box>
      <Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            id="email"
            name="email"
            placeholder="Email"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
          />
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            id="password"
            name="password"
            placeholder="Password"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
          />
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            id="password"
            name="password"
            placeholder="Password"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
          />
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            id="password"
            name="password"
            placeholder="Password"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
          />
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            id="password"
            name="password"
            placeholder="Password"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
          />
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            id="password"
            name="password"
            placeholder="Password"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
          />
        </Box>
      </Box>
      <Box>
        <Button disableElevation className={classes.signUpButton} type="submit">
          Sign Up
        </Button>
      </Box>
      <Box className={classes.forgotPassword}>
        <Box className={classes.changeCursor}></Box>
        <Box className={classes.changeCursor} onClick={() => setActiveStep(0)}>
          Already Member Login
        </Box>
      </Box>
    </Box>
  );
}
