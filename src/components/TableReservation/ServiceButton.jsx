import React from "react";
import { Box } from "@material-ui/core";

const ServiceButton = ({ services, setServices, data, text }) => {
  return (
    <Box width="50%" pr="20px" mt="20px">
      <button
        className={`text-gray-500 font-weight-light text-xs   border border-gray-500  `}
        onClick={(e) => {
          e.preventDefault();
          setServices(data);
        }}
        style={{
          backgroundColor: services === data && "#ffc107",
          color: services === data ? "#fff" : "#000",
          width: "100%",
          padding: "20px 20px 20px 20px",
          borderRadius: "1rem",
          // marginTop: "20px",
          // paddingRight: "20px",
        }}
      >
        {text}
      </button>
    </Box>
  );
};

export default ServiceButton;
