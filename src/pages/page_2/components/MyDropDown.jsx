import React, { useState } from "react";
import { TextField, MenuItem, Typography, Box } from "@mui/material";

const MyDropDown = ({ items, selected, title }) => {
  const [value, setValue] = useState(selected);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box
      sx={{
        alignSelf: "stretch",
        display: "flex",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <Typography
        color={"black"}
        textAlign={"start"}
        paddingLeft={2}
        paddingBottom={1}
      >
        {title}
      </Typography>

      <Box
        sx={{
          width: "100%", // Set width to 100%
          bgcolor: "white",
          borderRadius: "50px",
          overflow: "hidden",
          alignSelf: "stretch",
          display: "flex",
        }}
      >
        <TextField
          select
          value={value}
          onChange={handleChange}
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white",
              },
              "&:hover fieldset": {
                borderColor: "transparent", // Hides the border on hover
              },
            },
            borderRadius: "50px", // Makes the TextField rounded
            bgcolor: "white", // Sets the background color to white
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "transparent", // Hides the border
            },
            "& .MuiSelect-select": {
              width: "100%",
              alignSelf: "stretch",
              paddingLeft: "16px", // Additional padding for the placeholder/select text
            },
            "& .MuiSelect-selectMenu": {
              textAlign: "start", // Aligns the selected text to the start
              width: "100%",
              alignSelf: "stretch",
              paddingLeft: "16px", // Add padding left to the selected text
            },
          }}
          InputProps={{
            className: "custom-select-input", // Add a custom class for more specific styling
          }}
        >
          {/* Selectable items */}
          {items.map((e) => (
            <MenuItem
              key={e}
              sx={{
                textAlign: "start",
                width: "100%",
                alignSelf: "stretch",
              }}
              value={e}
            >
              {e}
            </MenuItem>
          ))}
        </TextField>
        <style jsx>{`
          .custom-select-input {
            /* Add your custom styles here */
            min-height: 1.4375em;
            text-overflow: ellipsis;
            text-align: start;
            color: #9d9d9d; // Change the color to #9D9D9D
            padding-left: 20px;
          }
        `}</style>
      </Box>
    </Box>
  );
};

export default MyDropDown;
