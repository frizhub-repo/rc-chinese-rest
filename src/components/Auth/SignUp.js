import {
  makeStyles,
  Box,
  Button,
  TextField,
  FormHelperText,
} from "@material-ui/core";
import SignaturesLogo from "../../images/SignaturesLogo.jpg";
import { useForm } from "react-hook-form";
import { customerSignUp } from "../../api/Auth";
import axiosIntance from "../../utils/axios-configure";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

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
  helperText: {
    marginLeft: "15px",
    color: "red",
  },
}));

export default function SignUp({ setActiveStep }) {
  const classes = useStyles();
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const signUpwithpayload = async (data) => {
    try {
      const res = await customerSignUp(data);
      if(res?.status === 200) {
        axiosIntance.defaults.headers.common["Authorization"] = res?.data?.token;
        localStorage.setItem("token", res?.data?.token);
        toast.success("You have been sign up successfully");
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
      <form onSubmit={handleSubmit(signUpwithpayload)}>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            name="email"
            placeholder="Email"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
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
            name="phoneNumber"
            placeholder="Phone Number"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
            inputRef={register({
              required: "Phone Number required",
            })}
            error={errors?.phoneNumber ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.phoneNumber?.message}
          </FormHelperText>
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            name="firstName"
            placeholder="First Name"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
            inputRef={register({
              required: "First Name required",
            })}
            error={errors?.firstName ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.firstName?.message}
          </FormHelperText>
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            name="lastName"
            placeholder="Last Name"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
            inputRef={register({
              required: "Last Name required",
            })}
            error={errors?.lastName ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.lastName?.message}
          </FormHelperText>
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            name="address"
            placeholder="Address"
            fullWidth
            variant="outlined"
            className={`my_custom_text_field`}
            inputRef={register({
              required: "Address required",
            })}
            error={errors?.address ? true : false}
          />
          <FormHelperText className={classes.helperText}>
            {errors?.address?.message}
          </FormHelperText>
        </Box>
        <Box className={classes.txtFieldSpacing}>
          <TextField
            name="password"
            placeholder="Password"
            fullWidth
            type="password"
            variant="outlined"
            className={`my_custom_text_field`}
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
        <Button disableElevation className={classes.signUpButton} type="submit">
          Sign Up
        </Button>
      </form>
      <Box className={classes.forgotPassword}>
        <Box className={classes.changeCursor}></Box>
        <Box className={classes.changeCursor} onClick={() => setActiveStep(0)}>
          Already Member Login
        </Box>
      </Box>
    </Box>
  );
}
