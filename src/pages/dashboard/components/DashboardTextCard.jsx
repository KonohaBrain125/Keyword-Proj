import { Card, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";

export const DashboardTextCard = () => {
  return (
    <>
      {" "}
      <Card sx={{ borderRadius: "1rem", boxShadow: 0 }}>
        <Box paddingY={5}>
          <Typography variant="h5" fontWeight={"bold"} paddingX={10}>
            Free, Award-winning keyword Research Tool - designed to work with
            ‘The Logic Digital Marketing Methodology’
          </Typography>
          <Typography paddingX={5} sx={{ color: grey[500], paddingY: 3 }}>
            We urge you to watch the video as there are a number of features
            that are unique to this tool and that are NOT obvious - failure to
            watch will result in missed opportunities.
          </Typography>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer "
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="h6"
              color="#1D00FF"
              fontWeight={"medium"}
              paddingX={5}
            >
              Watch the video: The secret of Teaching Yourself Keyword
              Research with NO PRIOR KNOWLEDGE
            </Typography>
          </a>{" "}
        </Box>
      </Card>
    </>
  );
};