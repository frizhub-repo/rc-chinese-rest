import {
  makeStyles,
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from "@material-ui/core";
import SignaturesLogo from "../../images/SignaturesLogo.jpg";
import { useForm } from "react-hook-form";
import { customerSignIn } from "../../api/Auth";
import axiosIntance from "../../utils/axios-configure";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  logo: {
    display: "flex",
    justifyContent: "center",
    marginTop: "60px",
    marginBottom: "30px",
  },
  txtFieldSpacing: {
    marginTop: "35px",
  },
  keepMeSignedIn: {
    color: "#7DA7F4",
  },
  signInButton: {
    borderRadius: "35px",
    width: "100%",
    padding: "15px 20px",
    backgroundColor: "#FDBD00",
    color: "white",
    marginTop: "30px",
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
  helperText: {
    marginLeft: "15px",
    color: "red",
  },
}));

export default function SignIn({ setActiveStep }) {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const signinwithpayload = async (data) => {
    try {
      const res = await customerSignIn(data);
      if(res?.status === 200) {
        axiosIntance.defaults.headers.common["Authorization"] = res?.data?.token;
        localStorage.setItem("token", res?.data?.token);
        toast.success("You have been sign in successfully");
        history.push("/")
      }
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <Box>
      <Box className={classes.logo}>
        <img src={SignaturesLogo} width="50%" height="50%" />
      </Box>
      <form onSubmit={handleSubmit(signinwithpayload)}>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            placeholder="Email"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
            name="email"
            inputRef={register({
              required: "Email Address required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            error={errors?.email ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.email?.message}
          </FormHelperText>
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            placeholder="Password"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
            type="password"
            name="password"
            inputRef={register({
              required: "Password required",
              minLength: {
                value: 8,
                message: "Password must be 8 character",
              },
            })}
            error={errors?.password ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.password?.message}
          </FormHelperText>
        </Box>
        <FormControlLabel
          className={classes.keepMeSignedIn}
          control={
            <Checkbox className={classes.keepMeSignedIn} name="checkedB" />
          }
          label="Keep me Signed in"
        />
        <Button disableElevation className={classes.signInButton} type="submit">
          Log in
        </Button>
      </form>
      <Box className={classes.forgotPassword}>
        <Box className={classes.changeCursor}>Forgot Password?</Box>
        <Box className={classes.changeCursor} onClick={() => setActiveStep(1)}>
          Not a member? Sign Up
        </Box>
      </Box>
    </Box>
  );
}
