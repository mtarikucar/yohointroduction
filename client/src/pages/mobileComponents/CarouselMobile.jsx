import React from 'react'
import CarouselCustom from "../../components/CarouselCustom"
import { motion } from 'framer-motion';

export default function CarouselMobile(props) {

    const textVariants = {
        hidden: { y: '-20vh', opacity: 0.8 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
    };

    return (<>

        <div className='px-10  h-36 sm:h-64 md:h-96 rounded-sm'>

            <CarouselCustom setLockScroll={props.setLockScroll}>

                <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  h-fit'>
                    <img
                        src="../banner_h5_01.png"
                        alt="image 2"
                        className=" w-full h-full object-cover"
                    />

                </motion.div>
                <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  h-fit'>
                    <img
                        src="../banner_h5_02.png"
                        alt="image 2"
                        className=" w-full h-full object-cover"
                    />

                </motion.div>
                <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  h-fit'>
                    <img
                        src="../banner_h5_03.png"
                        alt="image 2"
                        className=" w-full h-full object-cover"
                    />

                </motion.div>
                <motion.div initial="hidden" animate="visible" className='relative lg:w-screen  h-fit'>
                    <img
                        src="../banner_h5_04.png"
                        alt="image 2"
                        className=" w-full h-full object-cover"
                    />

                </motion.div>


            </CarouselCustom>
        </div>
    </>
    );
}