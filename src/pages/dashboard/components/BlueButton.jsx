import { Button } from "@mui/material";

export default function BlueButton({ text, onClick }) {
  return (
    <>
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
    </>
  );
}
