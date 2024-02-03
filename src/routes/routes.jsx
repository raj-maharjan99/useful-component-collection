import { Outlet, createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Header from "../common/header";
import Footer from "../common/footer";

import ErrorPage from "../pages/error";
import AboutUs from "../pages/aboutUs";
import LoginForm from "../Component/form/LoginForm";
import ForgotPassword from "../Component/form/ForgotPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/form", element: <LoginForm /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
    ],
    errorElement: <ErrorPage />,
  },
]);
