import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FooterCustom from "./Components/FooterCustom";
import NavbarCustom from "./Components/Navbar/NavbarCustom";
import DrawerCustom from "./Components/Drawer/DrawerCustom.jsx";
import ScrollToTop from "../hooks/ScrollToTop";

const Layout = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);

  return (
    <>
      <ScrollToTop />
      <div className="flex flex-col h-screen justify-between scroll-smooth no-scrollbar w-screen overflow-x-clip">
        <NavbarCustom openDrawer={openDrawer}/>
        <Outlet />
        <FooterCustom />
        <DrawerCustom open={open} setOpen={setOpen}/>
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
