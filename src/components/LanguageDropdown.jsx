import React, { useState } from "react";
import { Select, MenuItem, Box } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PolandFlag from "../flags_icon/poland_flag.png";
import EnglandFlag from "../flags_icon/england_flag.png";
const languageOptions = [
  {
    code: "EN",
    name: "English",
    flagUrl: EnglandFlag, // Assuming this is in the public/flags_icon directory
  },
  {
    code: "PO",
    name: "Poland",
    flagUrl: PolandFlag, // Make sure the file extension is correct
  },
  // ... Add more languages here
];

export default function LanguageDropdown() {
  const [selectedLanguage, setSelectedLanguage] = useState(
    languageOptions[0].code
  );

  const handleChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <Select
        value={selectedLanguage}
        onChange={handleChange}
        IconComponent={KeyboardArrowDownIcon}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
        sx={{
          "& .MuiSelect-select": {
            padding: "8px",
            display: "flex",
            alignItems: "center",
            "&:focus": {
              backgroundColor: "transparent",
            },
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
        }}
      >
        {languageOptions.map((option) => (
          <MenuItem key={option.code} value={option.code}>
            <Box sx={{ display: "flex", alignItems: "center" }}>

              {console.log(option.flagUrl)}
              <Box
                component="img"
                sx={{ width: 24, height: "auto", marginRight: 1 }}
                src={option.flagUrl}
                alt={option.name}
              />
              {option.name}
            </Box>
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
