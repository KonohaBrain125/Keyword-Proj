import { Box, Card, TextField, Typography ,Button} from "@mui/material";
import MyDropDown from "./MyDropDown";
export default function MetricComponent() {
  return (
    <>
      <Card sx={{ borderRadius: "1rem", boxShadow: 0, marginY: 4 }}>
        <Box
          paddingY={5}
          flexDirection={{ xs: "column", md: "row" }} // Make it column on small screens and row on medium and larger screens
          paddingX={5}
        >
          <Box
            display={"flex"}
            paddingX={3}
            paddingY={3}
            justifyContent="center"
            gap={2}
            sx={{
              color: "#F1F3F6",
              backgroundColor: "#F1F3F6",
              borderRadius: ".7rem",
            }}
          >
              <MyDropDown
                title={"Metric languages"}
                items={["English", "Arabic", "Poland"]}
                selected={"English"}
              ></MyDropDown>

              <MyDropDown
                title={"Metric currencies"}
                items={["British Pound", "English Pound"]}
                selected={"British Pound"}
              ></MyDropDown>

              <MyDropDown
                title={"Metric network"}
                items={["Google and Search Partner’s"]}
                selected={"Google and Search Partner’s"}
              ></MyDropDown>

              <Button
                variant="contained"
                sx={{
                  bgcolor: "orangered",
                  paddingY: 0,
                  marginTop: 4,
                //   height: "60%",
                  paddingX: 10,
                  borderRadius: "2rem",
                }}
              >
                SEARCH
              </Button>
            </Box>
          </Box>
              </Card>
    </>
  );
}
