import React, {useRef, useState} from 'react';
import {motion, AnimatePresence, useScroll, useTransform} from 'framer-motion';
import {Typography} from "@material-tailwind/react";
import {useTranslation} from "react-i18next";

export default function CarouselCustomScroll({children}) {

    const [activeIndex, setActiveIndex] = useState(0);
    const { t } = useTranslation();

    const textVariants = {
        hidden: { y: '-100vh', opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
    };


    const handleScroll = (e) => {

        if (e.deltaY > 0 && activeIndex < children.length - 1) {

            setActiveIndex((prev) => prev + 1);
        } else if (e.deltaY < 0 && activeIndex > 0) {

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
    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (<div id='carousel' onWheel={handleScroll}
                 className="bg-[#07051D] ">
            <section ref={targetRef} className="relative h-[400vw] bg-neutral-900">
                <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                    <motion.div style={{x}} className="flex">
                        <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  '>
                            <img
                                src="../banner01.png"
                                alt="image 2"
                                className=" w-full h-full object-cover"
                            />
                            <motion.div initial="hidden" animate="visible" variants={textVariants}
                                        className="absolute inset-0 grid h-full w-full items-center ">
                                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                    <motion.div variants={textVariants}>
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            YOHO Fintech
                                        </Typography>
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
                                            className="mb-12 opacity-80"
                                        >
                                            {t('carousel.slide1.description')}
                                        </Typography>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  h-full'>
                            <img
                                src="../banner02.png"
                                alt="image 2"
                                className=" w-full h-full object-cover"
                            />
                            <motion.div initial="hidden" animate="visible" variants={textVariants}
                                        className="absolute inset-0 grid h-full w-full items-center ">
                                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                    <motion.div variants={textVariants}>
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            {t('carousel.slide2.title')}
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            {t('carousel.slide2.description')}
                                        </Typography>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  h-full'>
                            <img
                                src="../banner03.png"
                                alt="image 2"
                                className=" w-full h-full object-cover"
                            />
                            <motion.div initial="hidden" animate="visible" variants={textVariants}
                                        className="absolute inset-0 grid h-full w-full items-center ">
                                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                    <motion.div variants={textVariants}>
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            {t('carousel.slide3.title')}
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            {t('carousel.slide3.description')}
                                        </Typography>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                        <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  h-full'>
                            <img
                                src="../banner04.png"
                                alt="image 2"
                                className=" w-full h-full object-cover"
                            />
                            <motion.div initial="hidden" animate="visible" variants={textVariants}
                                        className="absolute inset-0 grid h-full w-full items-center ">
                                <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                                    <motion.div variants={textVariants}>
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                                        >
                                            {t('carousel.slide4.title')}
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-12 opacity-80"
                                        >
                                            {t('carousel.slide4.description')}
                                        </Typography>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
            <div className="fixed bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-2">
                {React.Children.map(children, (_, index) => (<span
                        key={index}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === index ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                        onClick={() => setActiveIndex(index)}
                    />))}
            </div>


            <button className="fixed top-1/2 left-4 transform -translate-y-1/2 z-10" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
                     className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"/>
                </svg>
            </button>

            <button className="fixed top-1/2 right-4 transform -translate-y-1/2 z-10" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white"
                     className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"/>
                </svg>

            </button>
        </div>);
}
