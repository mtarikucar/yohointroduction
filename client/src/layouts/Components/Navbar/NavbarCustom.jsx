import React from "react";
import {
  Navbar,
  Typography,
  Avatar
} from "@material-tailwind/react";

import { NavLink } from "react-router-dom";
import LanguageMenu from "./LanguageMenu";
import NavListMenu from "./NavListMenu";





export default function NavbarCustom() {
  return (
    <Navbar className="stıcky h-[12vh] top-0 z-40 max-w-full overflow-hidden bg-[#060417] rounded-none shadow-none backdrop-saturate-0 backdrop-blur-0 bg-opacity-100 border-none  itmx-auto flex items-center justify-between text-white">

      <NavLink to={"/"}>

        <Typography
          as="a"
          href="#"
          className=" cursor-pointer  font-medium"
        >
          <Avatar
            src="../logo.png"
            className="h-10 w-10 mr-2" />
          YOHO金融技术股份有限公司
        </Typography>
      </NavLink>
      <div className="flex flex-row items-center justify-start">
        <NavListMenu />
      </div>



      <span className=" lg:block">
        <LanguageMenu />
      </span>


    </Navbar>
  );
}