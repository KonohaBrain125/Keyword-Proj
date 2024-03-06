import React from "react";
import { Badge, IconButton } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone"; // Ensure this import

// Correctly destructure props here
export default function AppbarBadgeIcon({ icon, bgColor ,number}) {
  return (
    // Added return statement 
        <IconButton
              size="large"

              aria-label="show 4 new mails"
              color="inherit"
            >
    <Badge
      badgeContent={number}
      sx={{
        "& .MuiBadge-badge": {
          color: "white",
          backgroundColor: bgColor, // Use bgColor directly
          fontSize: 12,
          height: 22,
          minWidth: 22, // Ensure badge width accommodates content
          borderRadius: "50%", // Makes the badge circular
        },
      }}
    >
      {icon}
    </Badge>
    </IconButton>
  );
}
