import React from "react";
import { Box, Button, Card, CircularProgress } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import { makeStyles } from "@material-ui/styles";
import { useRestaurantContext } from "../../Context/restaurantContext";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOrderAddress } from "../../actions";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  title: {
    fontWeight: "600",
    fontSize: "20px",
  },
  formContainer: {
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    padding: "30px 35px",
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
  //   addAddressBtn: {
  //     height: "40px",
  //     border: "1px solid rgba(16, 185, 129)",
  //     marginTop: "20px",
  //     "&:hover": {
  //       border: "1px solid rgba(16, 185, 129)",
  //     },
  //     color: "rgba(16, 185, 129)",
  //     textTransform: "capitalize",
  //     padding: "20px 50px 20px 50px",
  //   },
  link: {
    marginTop: "50px",
    marginLeft: "10px",
  },
});

const ChooseAddress = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [value, setValue] = React.useState(-1);
  const [isErr, setIsErr] = React.useState(false);

  const handleChange = (event) => {
    debugger;
    setIsErr(false);
    setValue(event.target.value);
  };
  const getCompleteAddress = (address) => {
    debugger;
    return `${address?.addressLine1} , ${address?.zipOrPostalCode} , 
      ${address?.city} , ${address?.stateOrProvince} , ${address?.country}`;
  };
  const { customerData } = useRestaurantContext();

  const handleSubmit = () => {
    if (value > -1) {
      dispatch(addOrderAddress(customerData.addresses[parseInt(value)]));
      history.push("/deliveryTime");
    } else {
      setIsErr(true);
    }
  };

  return (
    <Box>
      <label className={classes.title}>Choose your Address</label>
      <Card className={classes.formContainer}>
        <RadioGroup
          value={value}
          onChange={handleChange}
          style={{ marginBottom: "10px" }}
        >
          {customerData?.addresses?.length
            ? customerData?.addresses?.map((address, index) => (
                <FormControlLabel
                  value={index.toString()}
                  control={<Radio />}
                  label={getCompleteAddress(address)}
                  key={index}
                />
              ))
            : null}
        </RadioGroup>
        {isErr && (
          <label style={{ color: "#f44336", fontSize: "0.75rem" }}>
            Please select one option
          </label>
        )}
      </Card>
      <Box display="flex" justifyContent="space-between">
        <Link to="/deliveryAddress" className={classes.link}>
          Add Delivery Address
        </Link>
        <Button onClick={handleSubmit} className={classes.btn}>
          Continue
        </Button>
      </Box>
    </Box>
  );
};

export default ChooseAddress;
