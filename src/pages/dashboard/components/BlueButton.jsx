import { Box, Button } from "@mui/material";
import undoIcon from "../../../checkbox_icons/undo.png";

export default function BlueButton({ text, onClick }) {
  return (
    <>
      {text === "UNDO" ? (
        <Button
          variant="contained"
          onClick={onClick}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            marginX: 1,
            bgcolor: "#0D4BC1",
            color: "white",
            paddingX: 1,
            paddingLeft: 7,
            paddingY: 1,
            borderRadius: "2rem",
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
              display: "flex",
            }}
          >
            {text}
            {text === "UNDO" && (
              <img
                style={{ marginLeft: 20, marginBottom: 5, marginRight: 3 }}
                src={undoIcon}
                height={15}
                width={15}
                alt="undoIcon"
              />
            )}
          </Box>
        </Button>
      ) : (
        <Button
          variant="contained"
          onClick={onClick}
          sx={{
            marginX: 1,
            bgcolor: "#0D4BC1",
            color: "white",
            paddingX: 5,
            paddingY: 1,
            borderRadius: "2rem",
          }}
        >
          {text}
        </Button>
      )}
    </>
  );
}
