import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterCustom from "./Components/FooterCustom";
import NavbarCustom from "./Components/Navbar/NavbarCustom";
import DrawerCustom from "./Components/DrawerCustom";
import ScrollToTop from "../hooks/ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col h-screen justify-between scroll-smooth">
        <NavbarCustom />
        <Outlet />
        <FooterCustom />
      </div>

      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
    </>
  );
};

export default Layout;
