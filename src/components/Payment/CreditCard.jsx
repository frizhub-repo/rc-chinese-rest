import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";
import { Box, Card, Button, CircularProgress, Select } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { useRestaurantContext } from "../../Context/restaurantContext";
import TextField from "@material-ui/core/TextField";
import { addAddress } from "../../actions/customers";
import { useDispatch } from "react-redux";
import { addDeliveryAddress } from "../../api/customers";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import Checkbox from "@material-ui/core/Checkbox";

import { YellowCheckBox } from "../CustomComponents/StyledComponents";
import { CheckBoxOutlineBlank } from "@material-ui/icons";
import CheckBoxIcon from "@material-ui/icons/CheckBox";

const useStyles = makeStyles({
  container: {
    width: "50%",
  },
  title: {
    fontWeight: "600",
    fontSize: "20px",
  },
  formContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    padding: "80px 100px 80px 100px",
    borderRadius: "25px",
    border: "1px solid rgba(0,0,0,0.5)",
  },
  btn: {
    borderRadius: "35px",
    width: "200px",
    // padding: "15px 20px",
    backgroundColor: "#FDBD00",
    color: "white",
    marginTop: "30px",
    fontSize: "22px",
    "&:hover": {
      backgroundColor: "#FDBD00",
      color: "white",
    },
    height: "60px",
    textTransform: "capitalize",
  },
});

const CashOnDelivery = () => {
  const [checked, setChecked] = React.useState(true);
  const handleCheckBoxChange = (event) => {
    setChecked(event.target.checked);
  };
  const { register, handleSubmit, errors, control } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const addAddressHandler = async (data) => {
    try {
      debugger;
      setLoading(true);
      await addDeliveryAddress(data);
      dispatch(addAddress(data));
      setLoading(false);
      history.push("/deliveryTime");
      toast.success("Address Added Successfully!");
    } catch (error) {
      setLoading(false);
      console.log({ error });
    }
  };

  const classes = useStyles();
  return (
    <Box className={classes.container} mt="30px">
      <form onSubmit={handleSubmit(addAddressHandler)}>
        <Card className={classes.formContainer}>
          <TextField
            id="outlined-basic"
            label="Credit Card Number"
            name="creditCardNo"
            variant="outlined"
            className={`my_custom_text_field`}
            inputRef={register({
              required: "Credit Card Number Required",
            })}
            error={errors.creditCardNo ? true : false}
            helperText={errors?.creditCardNo?.message}
            style={{ marginBottom: "20px" }}
          />
          <Box display="flex" mb="20px" alignItems="center">
            <label style={{ width: "30%", textAlign: "center" }}>
              Expiration Date
            </label>
            <TextField
              id="outlined-basic"
              label="MM"
              name="month"
              variant="outlined"
              className={`my_custom_text_field`}
              inputRef={register({
                required: "Month Required",
              })}
              error={errors.month ? true : false}
              helperText={errors?.month?.message}
              style={{ marginRight: "20px", width: "35%" }}
            />
            <TextField
              id="outlined-basic"
              label="YY"
              name="year"
              variant="outlined"
              className={`my_custom_text_field`}
              inputRef={register({
                required: "Year Required",
              })}
              error={errors.year ? true : false}
              helperText={errors?.year?.message}
              style={{ width: "35%" }}
            />
          </Box>
          <Box display="flex" flexDirection="column" mb="20px">
            <TextField
              id="outlined-basic"
              label="Security Key"
              name="securityKey"
              variant="outlined"
              className={`my_custom_text_field`}
              inputRef={register({
                required: "Security Key Required",
              })}
              error={errors.securityKey ? true : false}
              helperText={errors?.securityKey?.message}
            />
            <Box
              style={{
                fontSize: "12px",
                textAlign: "end",
                color: "rgba(43, 121, 255)",
              }}
              mt="6px"
            >
              The 3 digit number on the back of the card
            </Box>
          </Box>

          <TextField
            id="outlined-basic"
            label="First Name"
            name="firstName"
            variant="outlined"
            className={`my_custom_text_field`}
            inputRef={register({
              required: "First Name  Required",
            })}
            error={errors.firstName ? true : false}
            helperText={errors?.firstName?.message}
            style={{ marginBottom: "20px" }}
          />
          <TextField
            id="outlined-basic"
            label="Sir Name"
            name="sirName"
            variant="outlined"
            className={`my_custom_text_field`}
            inputRef={register({
              required: "Sir Name  Required",
            })}
            error={errors.sirName ? true : false}
            helperText={errors?.sirName?.message}
            style={{ marginBottom: "20px" }}
          />
          <Box
            display="flex"
            flexDirection="column"
            style={{ fontSize: "10px" }}
          >
            <Box display="flex">
              {/* <Checkbox checked={checked} onChange={handleCheckBoxChange} /> */}
              <YellowCheckBox
                color="primary"
                size="small"
                id="probono"
                icon={
                  <CheckBoxOutlineBlank
                    style={{ color: "#FFCC00", fontSize: 16 }}
                  />
                }
                checkedIcon={<CheckBoxIcon style={{ fontSize: 16 }} />}
                style={{ width: 0, height: 24, marginRight: "6px" }}
                checked={checked}
                onChange={handleCheckBoxChange}
              />
              <label>
                Billing Address: WEST GARDA HOTEL, Via Paris, Padenghe sul
                Garda, Province of Brescia, Italy{" "}
              </label>
            </Box>
            <label>(Uncheck this box to change the delivery address)</label>
          </Box>
        </Card>
        <Box display="flex" justifyContent="flex-end">
          <Button type="submit" className={classes.btn}>
            {loading && (
              <CircularProgress
                color="inherit"
                size={20}
                style={{ marginRight: "8px" }}
              />
            )}
            Proceed
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default CashOnDelivery;
