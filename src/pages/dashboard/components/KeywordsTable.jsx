import React, { useState } from "react";
import {
  Box,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
// import CheckedIcon from '../../../checkbox_icons/checked.png';
// import UnCheckedIcon from '../../../checkbox_icons/unchecked.png';

// import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
// import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import SortIcon from "../../../checkbox_icons/sort_icon.png";
import { KeywordsEvent } from "./KeywordsEvent";
const KeywordsTable = ({ keywords, onCheckboxChange, title, setKeywords, handleEvent }) => {
  const [sortDirection, setSortDirection] = useState(true);

  const sortKeywords = (sortDirection) => {
    const collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: "base",
    });
    
    const sortedKeywords = [...keywords].sort((a, b) => {
      return collator.compare(a.label, b.label);
    });

    if (sortDirection) {
      setKeywords(sortedKeywords);
    } else {
      setKeywords(sortedKeywords.reverse());
    }
  };

  const handleSetSort = () => {
    setSortDirection(value => !value);
    sortKeywords(sortDirection)
  }

  const checkedKeyWordsLen = keywords.filter((e) => e.isChecked).length;

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "2rem",
        tableContainer: {
          boxShadow: "none",
        },
      }}
    >
      <Table sx={{ minWidth: 450 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell
              colSpan={2}
              sx={{
                borderBottomWidth: 1, // Set the width of the bottom border
                borderBottomStyle: "solid", // Ensure it's a solid line
              }}
            >
              <Box
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
              >
                <Typography
                  variant="h5"
                  color={"#7E8083"}
                  sx={{ textAlign: "center", width: "100%" }}
                >
                  {`${checkedKeyWordsLen}/${keywords.length}`} &nbsp; {title}
                </Typography>
                <IconButton onClick={handleSetSort}>
                  {/* {sortDirection === "asc" ? (
                    <ArrowDownwardIcon />
                  ) : (
                    <ArrowUpwardIcon />
                  )} */}
                  <img src={SortIcon} height={20} width={20} alt="Sort Icon" />
                </IconButton>
              </Box>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {keywords.map((keyword) => (
            <TableRow
              key={keyword.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                sx={{
                  justifyContent: "center",
                  alignContent: "center",
                  width: "90%",
                  position: "relative", // Ensure relative positioning for the pseudo-element
                  paddingRight: 0, // Remove default padding
                }}
              >
                <Typography variant="h6" color={"#9D9D9D"}>
                  <KeywordsEvent keywords={keyword.label} handleEvent={handleEvent} />
                </Typography>
              </TableCell>
              <TableCell align="right" sx={{ width: "10%" }}>
                <Checkbox
                  // icon={<img height={30} width={30} src={UnCheckedIcon}></img>}
                  // checkedIcon={
                  //   <img height={30} width={30} src={CheckedIcon}></img>
                  // }
                  checked={keyword.isChecked}
                  onChange={() => onCheckboxChange(keyword.id)}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default KeywordsTable;
