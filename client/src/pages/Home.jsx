import React, { useState } from "react";
import Carousel from "./components/Carousel";

import SectionCustom from "./components/SectionCustom";
import { useTranslation } from 'react-i18next';
import CarouselMobile from "./mobileComponents/CarouselMobile";
import SectionCustomMobile from "./mobileComponents/SectionCustomMobile";
import { Typography } from "@material-tailwind/react";


function Home() {
  const [lockScroll, setLockScroll] = useState(true)
  const { t } = useTranslation();
  const navListMenuItems = t('navListMenu.sections', { returnObjects: true });
  const [isExpanded, setIsExpanded] = useState(false);
  const text = t('carousel.slide1.description');
  return (
    <>
      <div className="h-screen w-full overflow-hidden hidden md:block bg-[#07051D]">
        <div className={`h-full ${lockScroll ? "overflow-hidden" : "overflow-y-scroll"} snap-mandatory snap-y no-scrollbar scroll-smooth`}>
          <div className="snap-center h-full">
            <Carousel setLockScroll={setLockScroll} />
          </div>
          {navListMenuItems.map(({ title, items, introduction }, i) => (
            <div id={title} className=" snap-center min-h-screen">
              <SectionCustom items={items} introduction={introduction} title={title} index={i}  setLockScroll={setLockScroll}/>
            </div>
          ))}
        </div>
      </div>
      <div className={`h-full w-full overflow-y-scroll  no-scrollbar scroll-smooth md:hidden bg-[#07051D]`}>
        <div className=" h-fit bg-[#07051D]">
          <Typography color="white" className="p-10 font-medium text-3xl  break-keep" >
            YOHO金融技术 股份有限公司
          </Typography>
          <CarouselMobile />
          <div className=" grid mt-10 w-full items-center ">
            <div className="w-3/4 px-10">
              <div >
                <Typography
                  variant="h1"
                  color="white"
                  className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                >
                  {t('carousel.slide1.title')}
                </Typography>
                <Typography
                  variant="lead"
                  color="white"
                  className="mb-12 opacity-80 text-base"
                >
                  {isExpanded ? text : (text.length > 200 ? text.substring(0, 200) + '...' : text)}
                  {text.length > 200 && !isExpanded && (
                    <button onClick={() => setIsExpanded(true)} className="text-white z-50">Daha fazla</button>
                  )}
                </Typography>

              </div>
            </div>
          </div>
        </div>
        {navListMenuItems.map(({ title, items, introduction }, i) => (
          <div id={title} className="  h-fit">
            <div className='w-full h-fit bg-[#07051D]'>
              <img src={`h5_f${i + 1}_hengfu.png`} alt={title} className=" w-full object-cover " />
            </div>
            <SectionCustomMobile items={items} introduction={introduction} title={title} index={i} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
