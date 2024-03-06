import React from "react";
import { Button } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";

const ServiceButton = ({ selectedService, service, onClick }) => {
  const isSelected = selectedService === service;
  return (
    <Button
      sx={{
        width: 130,
        //  paddingY:2,
        borderTopLeftRadius: ".5rem",
        borderTopRightRadius: ".5rem",
        borderBottomColor: "transparent",
        backgroundColor: isSelected ? blueGrey[50] : "white",
        color: isSelected ? "black" : grey[500],
        fontSize: 18,
        fontWeight: isSelected ? "bold" : "",
        borderColor: isSelected ? blueGrey[50] : grey[200],
        "&:hover": {
          backgroundColor: isSelected ? blueGrey[50] : grey[100],
          borderColor: "#ffffff00",
        },
      }}
      variant={"outlined"}
      onClick={() => onClick(service)}
    >
      {service.toUpperCase()}
    </Button>
  );
};

export default ServiceButton;
