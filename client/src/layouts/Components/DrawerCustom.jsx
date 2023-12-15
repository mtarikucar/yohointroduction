import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import {AccordionCustom} from "./AccordionCustom";
import LanguageMenu from "./Navbar/LanguageMenu.jsx";
import LanguageMenuHorizantal from "./Navbar/LanguageMenuHorizantal.jsx";

export default function DrawerCustom({open, setOpen}) {


    const closeDrawer = () => setOpen(false);


    return (
        <>


            <Drawer
                placement="right"
                open={open}
                onClose={closeDrawer}
                className="p-4"
            >
                <div className="overflow-y-scroll h-screen flex flex-col justify-between">
                    <div>

                        <AccordionCustom closeDrawer={closeDrawer}/>
                    </div>
                    <div className={"mb-8"}>
                        <LanguageMenuHorizantal/>
                    </div>
                </div>
            </Drawer>

        </>
    );
}
