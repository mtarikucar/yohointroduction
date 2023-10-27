import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";
import DrawerCustom from "../DrawerCustom";
import { NavLink } from "react-router-dom";
import NavList from "./NavList";
import LanguageMenu from "./LanguageMenu";





export default function NavbarCustom() {
  return (
    <Navbar className="stıcky top-0 z-40 max-w-full overflow-hidden bg-[#060417] rounded-none shadow-none backdrop-saturate-0 backdrop-blur-0 bg-opacity-100 border-none  itmx-auto flex items-center justify-between text-white">

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
      <div className="hidden lg:block lg:flex-row items-center justify-start">
        <NavList />
      </div>



      <span className="hidden lg:block">
        <LanguageMenu />
      </span>


    </Navbar>
  );
}