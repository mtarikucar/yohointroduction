import React from 'react';
import {Typography, Button} from "@material-tailwind/react";
import {ChevronDownIcon} from "@heroicons/react/24/solid";
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from "../../../store/LanguageSlice";
import i18n from 'i18next';

const LanguageItems = [
    {label: "Türkçe", code: "tr"},
    {label: "English", code: "en"},
    {label: "繁體中文", code: "zh"},
    // { label: "简体中文", code: "zh" },
];

export default function LanguageMenuHorizantal() {
    const dispatch = useDispatch();
    const currentLanguage = useSelector(state => state.language.value);

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
        i18n.changeLanguage(lang);
    };

    return (
        <div className="flex items-center gap-4">
            {LanguageItems.map(({label, code}, index) => (
                <>
                    <Button
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        variant="text"
                        color={"gray"}
                        className={`py-2 px-4 ${currentLanguage === code ? "font-bold" : ""}`}
                    >
                        {label}
                    </Button>
                    {index != LanguageItems.length -1 && (

                        < span>
                        |
                        </span>
                    )
                    }
                </>
            ))}

        </div>
    )
        ;
}
