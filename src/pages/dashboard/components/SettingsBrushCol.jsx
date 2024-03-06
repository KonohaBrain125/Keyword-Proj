import { Box, IconButton } from "@mui/material";
import { Settings, Brush } from "@mui/icons-material";
import { green, orange } from "@mui/material/colors";

const SettingsBrushCol = () => {
  return (
    <Box
      sx={{
        // width: '4%',
        display: "flex",
        flexDirection: "column",
        gap:2
        , position: 'fixed',
  bottom: '50%',
  right: 10,
      }}
    >
      <IconButton
        variant="contained"
        sx={{
          padding: 2,
          "&:hover": {
            backgroundColor: green[300],
          },
          backgroundColor: green[400],
        }}
      >
        <Settings
          sx={{
            color: "white",
          }}
        />
      </IconButton>

      <IconButton
        variant="contained"
        sx={{
          padding: 2,
          "&:hover": {
            backgroundColor: orange[300],
          },
          backgroundColor: orange[400],
        }}
      >
        <Brush
          sx={{
            color: "white",
          }}
        />
      </IconButton>
    </Box>
  );
};

export default SettingsBrushCol;
