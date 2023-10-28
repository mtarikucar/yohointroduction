import React from 'react';
import {
    Typography,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Card,
    Button
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    ChevronDownIcon,
    CursorArrowRaysIcon

} from "@heroicons/react/24/solid";
import { NavLink } from 'react-router-dom';

// nav list menu
const navListMenuItems = [
    {
        title: "FinTech and Services",
        content: [
            {
                title: "software development",
                route: "software"
            },
            {
                title: "Guarantees and Guarantees",
                route: "/"
            },
            {
                title: "Movable and real estate management",
                route: "/"
            },
            {
                title: "Guarantee and mortgage registration",
                route: "/"
            },
            {
                title: "Claims and Debt Protection",
                route: "/"
            },
        ]
    },
    {
        title: "FinTech and Services",
        content: [
            {
                title: "software development",
                route: "/"
            },
            {
                title: "Guarantees and Guarantees",
                route: "/"
            },
            {
                title: "Movable and real estate management",
                route: "/"
            },
            {
                title: "Guarantee and mortgage registration",
                route: "/"
            },
            {
                title: "Claims and Debt Protection",
                route: "/"
            },
        ]
    },

];
export default function NavListMenu() {
    const [openedMenuIndex, setOpenedMenuIndex] = React.useState(null);

    const toggleMenu = (index) => {
        if (openedMenuIndex === index) {
            setOpenedMenuIndex(null); // Close the currently opened menu
        } else {
            setOpenedMenuIndex(index); // Open the clicked menu
        }
    };

    return (
        <>
            {navListMenuItems.map(({ title, content }, idx) => (
                <Menu key={idx} open={openedMenuIndex === idx} handler={() => toggleMenu(idx)} placement="bottom-end">
                    <MenuHandler>
                        <Button
                            variant="text"
                            color="white"
                            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto lg:px-4 lg:py-2"
                            onClick={() => toggleMenu(idx)}
                        >
                            {title}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`h-3 w-3 transition-transform ${openedMenuIndex === idx ? "rotate-180" : ""}`}
                            />
                        </Button>
                    </MenuHandler>
                    <MenuList className="p-1">
                        {content.map(({ title: menuItemTitle, route }) => (
                            <NavLink to={"Detail/" + route}>
                                <MenuItem
                                    key={menuItemTitle}
                                    onClick={() => setOpenedMenuIndex(null)} // Close the menu when a submenu item is clicked
                                    className={`flex items-center gap-2 rounded`}
                                >
                                    <Typography
                                        as="span"
                                        variant="small"
                                        className="font-normal"
                                        color={"inherit"}
                                    >
                                        {menuItemTitle}
                                    </Typography>
                                </MenuItem>
                            </NavLink>
                        ))}
                    </MenuList>
                </Menu>
            ))}
        </>
    );
}
