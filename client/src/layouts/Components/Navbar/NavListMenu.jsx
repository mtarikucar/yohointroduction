import React from 'react';
import {
    Typography, Menu, MenuHandler, MenuList, MenuItem, Button
} from "@material-tailwind/react";
import {
    ChevronDownIcon,

} from "@heroicons/react/24/solid";
import {useTranslation} from 'react-i18next';


export default function NavListMenu() {
    const [openedMenuIndex, setOpenedMenuIndex] = React.useState(null);
    const {t} = useTranslation();

    const navListMenuItems = t('navListMenu.sections', {returnObjects: true});


    const toggleMenu = (index) => {
        if (openedMenuIndex === index) {
            setOpenedMenuIndex(null);
        } else {
            setOpenedMenuIndex(index);
        }
    };

    const [activeHash, setActiveHash] = React.useState(window.location.hash);

    // Use effect to listen for hash changes and update the activeHash state.
    React.useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener('hashchange', handleHashChange);

        // Clean up the event listener when the component is unmounted.
        return () => {
            window.removeEventListener('hashchange', handleHashChange);
        };
    }, []);

    return (<>
        {navListMenuItems.map(({title, items}, idx) => (
            <Menu key={idx} open={openedMenuIndex === idx} handler={() => toggleMenu(idx)} placement="bottom-end">
                {idx != 2 ? < MenuHandler>
                        < Button
                            variant="text"
                            color="white"
                            className="flex items-center  rounded-full  lg:ml-auto font-thin text-xs"
                            onClick={() => toggleMenu(idx)}
                        >
                            {title}
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`h-3 w-3 transition-transform ${openedMenuIndex === idx ? "rotate-180" : ""}`}
                            />
                        </Button>
                    </MenuHandler> :
                    <a href={`#${title}`}>


                        < Button
                            variant="text"
                            color="white"
                            className="flex items-center  rounded-full  lg:ml-auto font-thin text-xs"

                        >
                            {title}
                            
                        </Button>

                    </a>}
                <MenuList className="p-1">
                    {items.map(({title: menuItemTitle}) => (


                        <a href={`#${title}`}>
                            <MenuItem
                                key={menuItemTitle}
                                onClick={() => setOpenedMenuIndex(null)}
                                className={`flex items-center gap-2 rounded ${activeHash === `#${title}` ? 'underline' : ''}`}
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
                        </a>


                    ))}
                </MenuList>
            </Menu>))}
    </>);
}
