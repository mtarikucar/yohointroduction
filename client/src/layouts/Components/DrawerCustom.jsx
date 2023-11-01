import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { AccordionCustom } from "./AccordionCustom";

export default function DrawerCustom({ open, setOpen }) {


    const closeDrawer = () => setOpen(false);


    return (
        <>


            <Drawer
                placement="right"
                open={open}
                onClose={closeDrawer}
                className="p-4"
            >
                <div className="overflow-y-scroll h-screen">

                    <AccordionCustom closeDrawer={closeDrawer} />
                </div>
            </Drawer>

        </>
    );
}