import { Brush, Settings } from "@mui/icons-material";
import { Box, Card, IconButton, Typography } from "@mui/material";
import { blue, green, grey, orange } from "@mui/material/colors";
import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import BlueButton from "./components/BlueButton";
import BlueButtonsRow from "./components/BlueButtonsRow";
import DashboardTextCard from "./components/DashboardTextCard";
import FilterTextFeild from "./components/FilterTextFeild";
import KeywordsManager from "./components/KewordsManger";
import SearchWebsites from "./components/SearchWebsites";
import SettingsBrushCol from "./components/SettingsBrushCol";

export default function DashboardFirstPage() {
  return (
    <>
      <Box>
        <DashboardTextCard></DashboardTextCard>
        <SearchWebsites></SearchWebsites>
        <FilterTextFeild></FilterTextFeild>

        <KeywordsManager></KeywordsManager>
       {/* <SettingsBrushCol></SettingsBrushCol> */}
            </Box>
    </>
  );
}
