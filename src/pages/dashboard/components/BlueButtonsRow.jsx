import { Box } from "@mui/system";
import BlueButton from "./BlueButton";

export default function BlueButtonsRow({
  sendSearchClick,
  exportPositiveonClick,
  exportNegativeonClick,
  exportBoth,
  undoClick,
}) {
  return (
    <>
      <Box
        sx={{
          paddingX: 0,
          paddingY: 4,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <BlueButton
          onClick={sendSearchClick}
          text={"SEND TO SEARCH VOLUME"}
        ></BlueButton>
        <BlueButton
          onClick={exportPositiveonClick}
          text={"EXPORT POSITIVE"}
          // Add margin between buttons
        ></BlueButton>
        <BlueButton
          onClick={exportNegativeonClick}
          text={"EXPORT NEGATIVE"}
          // Add margin between buttons
        ></BlueButton>
        <BlueButton
          onClick={exportBoth}
          text={"EXPORT BOTH COLUMNS"}
          // Add margin between buttons
        ></BlueButton>
        <BlueButton onClick={undoClick} text={"UNDO"}></BlueButton>
      </Box>
    </>
  );
}
