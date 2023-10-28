import React from 'react'
import CarouselCustom from "../../components/CarouselCustom"
import { Button, Typography } from '@material-tailwind/react';
import { motion } from 'framer-motion';

export default function Carousel() {

    const textVariants = {
        hidden: { y: '-100vh', opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
    };

    return (<>

        <CarouselCustom>

            <motion.div initial="hidden" animate="visible" className='relative'>
                <img
                    src="../banner01.png"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <motion.div variants={textVariants}>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                        </motion.div>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" className='relative'>
                <img
                    src="../banner02.png"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <motion.div variants={textVariants}>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                        </motion.div>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" className='relative'>
                <img
                    src="../banner03.png"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <motion.div variants={textVariants}>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                        </motion.div>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" className='relative'>
                <img
                    src="../banner04.png"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <motion.div variants={textVariants}>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                        </motion.div>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
            <motion.div initial="hidden" animate="visible" className='relative'>
                <img
                    src="../banner02.png"
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <motion.div initial="hidden" animate="visible" variants={textVariants} className="absolute inset-0 grid h-full w-full items-center ">
                    <div className="w-3/4 pl-12 md:w-2/4 md:pl-20 lg:pl-32">
                        <motion.div variants={textVariants}>
                            <Typography
                                variant="h1"
                                color="white"
                                className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                            >
                                The Beauty of Nature
                            </Typography>
                            <Typography
                                variant="lead"
                                color="white"
                                className="mb-12 opacity-80"
                            >
                                It is not so much for its beauty that the forest makes a claim
                                upon men&apos;s hearts, as for that subtle something, that quality
                                of air that emanation from old trees, that so wonderfully changes
                                and renews a weary spirit.
                            </Typography>
                        </motion.div>
                        <div className="flex gap-2">
                            <Button size="lg" color="white">
                                Explore
                            </Button>
                            <Button size="lg" color="white" variant="text">
                                Gallery
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>



        </CarouselCustom>
    </>
    );
}