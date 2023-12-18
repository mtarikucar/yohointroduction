import React from 'react'
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from "../../../store/LanguageSlice"
import i18n from 'i18next';


const LanguageItems = [
  { label: "Türkçe", code: "tr" },
  { label: "English", code: "en" },
  { label: "简体中文", code: "zhsmpl" },
  { label: "繁體中文", code: "zhtrd" },
];


export default function LanguageMenu() {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(state => state.language.value);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLanguageChange = (lang) => {

    dispatch(setLanguage(lang));
    i18n.changeLanguage(lang);
    closeMenu();
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto lg:px-4 lg:py-2"
        >
          <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
              }`}
          />
          {LanguageItems.filter(item => item.code == currentLanguage).map(item =>item.label)}
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {LanguageItems.map(({ label, code }, key) => {
          return (
            <MenuItem
              key={code}
              onClick={() => handleLanguageChange(code)}
              className={`flex items-center gap-2 rounded`}
            >
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={currentLanguage === code ? "blue" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
