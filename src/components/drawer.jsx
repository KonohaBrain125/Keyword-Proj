import * as React from "react";
import { createMuiTheme, styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MyAppBar from "./appBar";
import { BrowserRouter as Router, Routes, Route, Link ,useLocation} from "react-router-dom";

import HomeIcon from "@mui/icons-material/Home";

import { Avatar } from "@mui/material";
import MyPages from "./sidebar_elements";
import { blue, blueGrey } from "@mui/material/colors";
// import { MyPages } from "../App";

const drawerWidth = 300;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer({ body }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

let location=useLocation();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MyAppBar open={open} handleDrawerOpen={handleDrawerOpen}></MyAppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? <ChevronRightIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* <div style={{ paddingTop: 10 }}>
          <Avatar
            sx={{
              transition: "0.25s",
              mx: "auto",
              border: "3px solid grey",
            }}
            style={{ height: open ? 100 : 50, width: open ? 100 : 50 }}
            alt="Cindy Baker"
            src="/static/images/avatar/3.jpg"
          />
          <Typography
            fontSize={25}
            style={{ transition: "0.25s" }}
            paddingTop={1}
            align="center"
          >
            {open ? "Cindyy" : ""}
          </Typography>
          <Typography
            style={{ transition: "0.25s", color: theme.palette.info.main }}
            align="center"
          >
            {open ? "admin" : ""}
          </Typography>
        </div> */}

        <Divider />
        <List sx={{ paddingTop: 8 }}>
          {MyPages.Icons1.map(({ text, icon: IconComponent, path }, index) => (
            <Link
              to={path}
              style={{ textDecoration: "none", color: "inherit" }}
              key={text}
            >
              <ListItem
                key={{ text }}
                sx={{
                  fontSize: 15,
                  fontWeight: "3",
                  display: "block",
                }}
                disablePadding
              >
                <ListItemButton
                  sx={{
                    bgcolor: path == location.pathname ? "grey" : null,
                    minHeight: 48,

                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={IconComponent}
                      alt={text}
                      style={{ width: 40, height: 40 }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    variant="body3"
                    primary={text}
                    sx={{ opacity: open ? 1 : 0, fontWeight: "bold" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          paddingY: 6,
          paddingX:9,
          backgroundColor: blueGrey[50],
          // height: "200vh",
          
        }}
      >
        <DrawerHeader />

        {body}
      </Box>
    </Box>
  );
}
