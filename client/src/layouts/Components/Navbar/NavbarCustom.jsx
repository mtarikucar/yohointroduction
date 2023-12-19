import React from "react";
import {
    Navbar, Typography, Avatar,
} from "@material-tailwind/react";

import {NavLink} from "react-router-dom";
import LanguageMenu from "./LanguageMenu";
import NavListMenu from "./NavListMenu";
import {
    Bars3Icon,
} from "@heroicons/react/24/solid";


export default function NavbarCustom({openDrawer}) {


    return (<Navbar
            className="fixed h-[8vh] top-0 z-40 max-w-full overflow-hidden bg-[#060417] rounded-none shadow-none backdrop-saturate-0 backdrop-blur-0 bg-opacity-100 border-none  itmx-auto flex items-center justify-between text-white">
            <div className={"flex items-center justify-center"}>

                <NavLink to={"/"}>
                    <Typography
                        as="a"
                        href="#"
                        className=" cursor-pointer  font-medium flex items-center"
                    >
                        <Avatar
                            src="../logo.png"
                            className="h-10 w-10 mr-2"/>
                        YOHO Fintech
                    </Typography>
                </NavLink>
            </div>
            <div className=" flex-row items-center justify-start lg:flex hidden">
                <NavListMenu/>
            </div>

        <div className="flex justify-center items-center space-x-2">
            <Bars3Icon className="h-6 w-6 lg:hidden" onClick={openDrawer}></Bars3Icon>
            <span className={"hidden lg:block"}>
                    <LanguageMenu/>
                </span>
        </div>


    </Navbar>);
}
