import { Typography } from "@material-tailwind/react";
import { useTranslation } from "react-i18next";
export default function FooterCustom() {
  const {t} = useTranslation();
  return (
    <footer className="sticky flex w-full items-center justify-start  bg-[#060417] h-[10vh]">
      <Typography color="blue-gray" className=" text-white  w-full  font-thin p-4">
        &copy; {t('footer')}
      </Typography>
    </footer>
  );
}