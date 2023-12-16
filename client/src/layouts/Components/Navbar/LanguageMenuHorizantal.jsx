
import { Button} from "@material-tailwind/react";
import {useDispatch, useSelector} from 'react-redux';
import {setLanguage} from "../../../store/LanguageSlice";
import i18n from 'i18next';

const LanguageItems = [
    { label: "Türkçe", code: "tr" },
    { label: "English", code: "en" },
    { label: "繁體中文", code: "zh-cn" },
    { label: "简体中文", code: "zh-hant" },
];

export default function LanguageMenuHorizantal() {
    const dispatch = useDispatch();
    const currentLanguage = useSelector(state => state.language.value);

    const handleLanguageChange = (lang) => {
        dispatch(setLanguage(lang));
        i18n.changeLanguage(lang);
    };

    return (
        <div className="grid grid-cols-4">
            {LanguageItems.map(({label, code}, index) => (
                <span className={"flex items-center justify-center"}>
                    <div
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        variant="text"
                        color={"gray"}
                        className={`text-sm mr-2 ${currentLanguage === code ? "font-bold" : "font-thin"}`}
                        style={{fontSize:"0.8rem"}}
                    >
                        {label}
                    </div>
                    {index != LanguageItems.length -1 && (

                        < span>
                        |
                        </span>
                    )
                    }
                </span>
            ))}

        </div>
    )
        ;
}
