import { createBrowserRouter, Navigate } from "react-router-dom";
import { DefaultLayout } from "../components/DefaultLayout";
import { NotFound } from "../components/Notfound";
import DashboardFirstPage from "../pages/dashboard/Dashboard";
import DigitalStrategy from "../pages/digitalStartegy/DigitalStrategy";
import PageTwo from "../pages/page_2/PageTwo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" />,
      },
      {
        path: "/dashboard",
        element: <DashboardFirstPage />,
      },
      {
        path: "/pageTwo",
        element: <PageTwo />,
      },
      //   {
      //     path: "/users/:id",
      //     element: <UserForm key="userUpdate" />,
      //   },
    ],
  },
  // {
  //   path: "/",
  //   element: <GuestLayout />,
  //   children: [
  //     {
  //       path: "/login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "/signup",
  //       element: <SignUp />,
  //     },
  //   ],
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
