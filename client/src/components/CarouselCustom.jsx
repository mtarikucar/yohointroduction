import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';

export default function CarouselCustom({children, setLockScroll}) {

    const [activeIndex, setActiveIndex] = useState(0);


    const handleScroll = (e) => {

        if (e.deltaY > 0 && activeIndex < children.length - 1) {
            if (activeIndex !== children.length - 2) {
                setLockScroll(true);
            } else {
                setLockScroll(false);
            }
            setActiveIndex((prev) => prev + 1);
        } else if (e.deltaY < 0 && activeIndex > 0) {
            if (activeIndex !== children.length - 2) {
                setLockScroll(true);
            } else {
                setLockScroll(false);
            }
            setActiveIndex((prev) => prev - 1);
        }

    };

    const handleNext = () => {
        if (activeIndex < children.length - 1) {
            setActiveIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (activeIndex > 0) {
            setActiveIndex((prev) => prev - 1);
        }
    };


    return (<div id='carousel' onMouseEnter={() => {
        }} onMouseLeave={() => setLockScroll(false)} onWheel={handleScroll}
                 className="relative h-full   bg-[#07051D] overflow-hidden">
            <motion.div
                initial={{x: `-${(100 / children.length)}%`, opacity: "0%"}}
                animate={{x: `-${activeIndex * (100 / children.length)}%`, opacity: "100%", transition: {duration: 1}}}
                transition={{type: 'spring', stiffness: 300, damping: 300}}
                className="absolute rounded sm:rounded-none top-0 left-0 flex object-contain h-[82vh] snap-y snap-mandatory"
                style={{width: `${children.length * 100}%`}}
            >
                {React.Children.map(children, (child, index) => (<div className=''>{child}</div>))}
            </motion.div>
            <div className="absolute bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-2">
                {React.Children.map(children, (_, index) => (<span
                        key={index}
                        className={`block h-1  cursor-pointer rounded-2xl transition-all ${activeIndex === index ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                        onClick={() => setActiveIndex(index)}
                    />))}
            </div>

            {React.Children.length > 0 && <>
                <button className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" onClick={handlePrev}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"/>
                    </svg>
                </button>

                <button className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" onClick={handleNext}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
                    </svg>

                </button>
            </>}
        </div>);
}
