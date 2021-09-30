import { useState } from "react";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { customerSignIn } from "../../api/Auth";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { useForm } from "react-hook-form";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axiosIntance from "../../utils/axios-configure";
import SocialAuth from "./SocialAuth";
import { CircularProgress } from "@material-ui/core";

import classes from "./Auth.module.css";
import { IconButton } from "rsuite";
import FieldError from "components/Common/FieldError";
import { EMAIL_REGEX } from "utils/types";

export default function SignIn({ setActiveStep, handleClickOpen }) {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [isPassVisible, setIsPassVisible] = useState(false);
  const { setToken, customerData } = useRestaurantContext();
  const { register, errors, handleSubmit } = useForm();
  const signinwithpayload = async (data) => {
    try {
      setLoading(true);
      const res = await customerSignIn(data);
      setLoading(false);

      if (res?.status === 200) {
        axiosIntance.defaults.headers.common["Authorization"] =
          res?.data?.token;
        localStorage.setItem("token", res?.data?.token);
        setToken(res?.data?.token);
        history.push("/");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Sign In</h1>
      </div>
      <div className={classes.inputContainer}>
        <form onSubmit={handleSubmit(signinwithpayload)}>
          <input
            name="email"
            className={classes.authInput}
            type="text"
            placeholder="Email"
            ref={register({
              required: "Email is required",
              pattern: EMAIL_REGEX,
            })}
          />
          {errors.email?.type === "pattern" && (
            <FieldError message={"Email is not valid"} />
          )}
          {errors?.email?.message && (
            <FieldError message={errors?.email?.message} />
          )}
          <div className={classes.passwordContainer}>
            <input
              name="password"
              className={classes.authInput}
              type={isPassVisible ? "text" : "password"}
              placeholder="Password"
              ref={register({ required: "Password is required" })}
            />
            <IconButton
              className={classes.iconContainer}
              onClick={() => setIsPassVisible((prev) => !prev)}
            >
              {isPassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
          {errors?.password?.message && (
            <FieldError message={errors?.password?.message} />
          )}
          <div className={classes.forgotPassContainer}>
            <button
              type="button"
              className={classes.forgotPass}
              onClick={() => history.push("forgotPassword")}
            >
              Forgot your password?
            </button>
          </div>
          <button type="submit" className={classes.submitBtn}>
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginRight: "8px" }}
              />
            )}
            Login
          </button>
        </form>
        <div className={classes.secondaryText}>
          <h4>or</h4>
        </div>
        <section>
          <SocialAuth />
        </section>
      </div>
      <div>
        <h5>You didn't Sign Up?</h5>
        <button
          className={classes.redirectBtn}
          onClick={() => history.push("signUp")}
        >
          Register Here
        </button>
      </div>
    </div>
  );
}
