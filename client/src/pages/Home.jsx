import React, { useState } from "react";
import Carousel from "./components/Carousel";

import SectionCustom from "./components/SectionCustom";
import { useTranslation } from 'react-i18next';


function Home() {
  const [lockScroll, setLockScroll] = useState(true)
  const { t } = useTranslation();
  const navListMenuItems = t('navListMenu.sections', { returnObjects: true });

  return (
    <>
      <div className="h-screen w-full overflow-hidden hidden lg:block">
        <div className={`h-full ${lockScroll ? "overflow-hidden" : "overflow-y-scroll"} snap-mandatory snap-y no-scrollbar scroll-smooth`}>
          <div className="snap-center h-full">
            <Carousel setLockScroll={setLockScroll} />
          </div>
          {navListMenuItems.map(({ title, items, introduction },i) => (
            <div id={title} className=" snap-center min-h-screen">
              <SectionCustom items={items} introduction={introduction} title={title} index={i}/>
            </div>
          ))}
        </div>
      </div>
      <div className="h-screen w-full overflow-hidden lg:hidden">
        <div className={`h-full ${lockScroll ? "overflow-hidden" : "overflow-y-scroll"} snap-mandatory snap-y no-scrollbar scroll-smooth`}>
          <div className="snap-center h-full">
            <Carousel setLockScroll={setLockScroll} />
          </div>
          {navListMenuItems.map(({ title, items, introduction },i) => (
            <div id={title} className=" snap-center min-h-screen">
              <SectionCustom items={items} introduction={introduction} title={title} index={i} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
