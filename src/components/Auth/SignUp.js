import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { customerSignUp } from "../../api/Auth";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { IconButton } from "rsuite";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axiosIntance from "../../utils/axios-configure";
import classes from "./Auth.module.css";
import SocialAuth from "./SocialAuth";
import FieldError from "components/Common/FieldError";

export default function SignUp({ setActiveStep, handleClickOpen }) {
  const history = useHistory();
  const { register, handleSubmit, errors, watch } = useForm();
  const [loading, setLoading] = useState(false);
  const { setToken, customerData } = useRestaurantContext();
  const [isPassVisible, setIsPassVisible] = React.useState(false);
  const [isRePassVisible, setIsRePassVisible] = React.useState(false);

  const signUpwithpayload = async (data) => {
    try {
      setLoading(true);
      const res = await customerSignUp(data);
      setLoading(false);

      if (res?.status === 200) {
        axiosIntance.defaults.headers.common["Authorization"] =
          res?.data?.token;
        localStorage.setItem("token", res?.data?.token);
        setToken(res?.data?.token);
        toast.success("Registration successful!");
        // history.push("/deliveryAddress");
        if (window.localStorage.getItem("redirectToOrder")) {
          window.localStorage.removeItem("redirectToOrder");
          customerData?.addresses?.length
            ? history.push("/deliveryAddress")
            : history.push("/deliveryAddress");
        } else {
          handleClickOpen();
          history.push("/");
        }
      }
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <div className={classes.root}>
      <div>
        <h1 className={classes.header}>Sign Up</h1>
      </div>
      <div className={classes.inputContainer}>
        <form onSubmit={handleSubmit(e => e.preventDefault())}>
          <input
            name="firstName"
            className={classes.authInput}
            type="text"
            placeholder="First Name"
            ref={register({ required: "First Name is required" })}
          />
          {errors?.firstName?.message && <FieldError message={errors?.firstName?.message} />}
          <input
            name="lastName"
            className={classes.authInput}
            type="text"
            placeholder="Last Name"
            ref={register({ required: "Last Name is required" })}
          />
          {errors?.lastName?.message && <FieldError message={errors?.lastName?.message} />}
          <input
            name="phone"
            className={classes.authInput}
            type="text"
            placeholder="Phone Number"
            ref={register({ required: "Phone number is required" })}
          />
          {errors?.phone?.message && <FieldError message={errors?.phone?.message} />}
          <input
            name="email"
            className={classes.authInput}
            type="text"
            placeholder="Email"
            ref={register({ required: "Email is required" })}
          />
          {errors?.email?.message && <FieldError message={errors?.email?.message} />}
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
          {errors?.password?.message && <FieldError message={errors?.password?.message} />}
          <div className={classes.passwordContainer}>
            <input
              name="rePassword"
              className={classes.authInput}
              type={isRePassVisible ? "text" : "password"}
              placeholder="Confirm Password"
              ref={register({
                required: "Please re-type your password", validate: (value) =>
                  value === watch("password") || "Password does not match"
              })}
            />
            <IconButton
              className={classes.iconContainer}
              onClick={() => setIsRePassVisible((prev) => !prev)}
            >
              {isRePassVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </div>
          {errors?.rePassword?.message && <FieldError message={errors?.rePassword?.message} />}
          <div style={{ marginBottom: "20px" }}></div>
          <button type="submit" className={classes.submitBtn}>
            Sign Up
          </button>
        </form>
        <div className={classes.secondaryText}>
          <h4>or</h4>
        </div>
        <section>
          <SocialAuth />
        </section>
      </div>
      <div style={{ marginBottom: "10px" }}>
        <h5>If you're already Signed Up</h5>
        <button
          className={classes.redirectBtn}
          onClick={() => history.push("signIn")}
        >
          Click Here
        </button>
      </div>
    </div>
  );
}
