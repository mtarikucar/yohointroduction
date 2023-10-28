import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CarouselCustom({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };

    return (
        <div onWheel={handleScroll} className="relative h-full overflow-hidden">
            <motion.div
                initial={{ x: `-${(100 / children.length)}%`, opacity: "0%" }}
                animate={{ x: `-${activeIndex * (100 / children.length)}%`, opacity:"100%", transition :{duration: 1} }}
                transition={{ type: 'spring', stiffness: 300, damping: 300 }}
                className="absolute rounded sm:rounded-none top-0 left-0 flex"
                style={{ width: `${children.length * 100}%` }}
            >
                {React.Children.map(children, (child, index) => (
                    <div className='h-full'>{child}</div>
                ))}
            </motion.div>

            <div className="absolute bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-2">
                {React.Children.map(children, (_, index) => (
                    <span
                        key={index}
                        className={`block h-1 cursor-pointer rounded-2xl transition-all ${activeIndex === index ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                        onClick={() => setActiveIndex(index)}
                    />
                ))}
            </div>

            <button className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10" onClick={handlePrev}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                </svg>

            </button>

            <button className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10" onClick={handleNext}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                </svg>

            </button>
        </div>
    );
}
