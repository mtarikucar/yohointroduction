import { Typography } from "@material-tailwind/react";

export default function FooterCustom() {
  return (
    <footer className="sticky flex w-full items-center justify-start  bg-[#060417]">
      <Typography color="blue-gray" className=" text-white  w-full  font-thin p-4">
        &copy; Copyright © 2023 YOHO金融技术股份有限公司 版权所有
      </Typography>
    </footer>
  );
}