import { Box } from "@mui/system";
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context_provider/ContextProvider";
import MiniDrawer from "./drawer";

export function DefaultLayout() {
      const { user, token, setUser, setToken } =
        useStateContext();

        


return (
  <>
  <Box
  >

    <Outlet></Outlet>
  </Box>
  </>
);
}