import {
  Box,
  Card,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { blueGrey } from "@mui/material/colors";
import "bootstrap/dist/css/bootstrap.min.css";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropDownButtonFilter from "./DropDownButtonFilter";

export default function FilterTextFeild(params) {
  const handleKeywordChange = (e) => {};
  return (
    <>
      <Card sx={{ borderRadius: "1rem", boxShadow: 0, marginTop: 3,paddingY:1 }}>

        <Box display={"flex"} justifyContent="center" gap={3} paddingX={2} sx={{backgroundColor:blueGrey[50],paddingY:2,marginX:17,marginY:1,borderRadius:'.5rem'}}>
          <TextField
            // style={{ width: "90%" }}
            fullWidth
            variant="outlined"
            //   value={keywords}
            // fullWidth
            type="search"
            placeholder="Filter your keywords here by typing or choosing one of the generated filter on the right"
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "white",
                },
              },
            }}
            onChange={handleKeywordChange}
            InputProps={{
              style: {
                borderRadius: "30px",
                backgroundColor: "white",
                borderColor: "white",
              },
              // notchedOutline: {
              //   borderWidth: "1px",
              //   borderColor: "white !important",
              // },
            }}
          />

          <DropDownButtonFilter></DropDownButtonFilter>
        </Box>{" "}
      </Card>
    </>
  );
}
