import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../context_provider/ContextProvider"

export function GuestLayout() {
     
    const {user,token}=useStateContext()

  if (token) {
    return <Navigate to="/" />;
  }

    return  (
    <div id="guestLayout">
      <Outlet />
    </div>
  );
}