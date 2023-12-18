import React from 'react'
import CarouselCustom from "../../components/CarouselCustom"
import { Button, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Carousel(props) {
    const { t } = useTranslation();

    const textVariants = {
        hidden: { y: '-100vh', opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
    };

    return (<>

        <CarouselCustom setLockScroll={props.setLockScroll}>

            <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  h-full'>
                <img
                    src="../banner01.png"
                    alt="image 2"
                    className=" w-full h-full object-cover"
                />
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
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
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
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
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
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
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
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


        </CarouselCustom>
    </>
    );
}
