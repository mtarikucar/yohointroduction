import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FullPage({ children }) {
    const [activeIndex, setActiveIndex] = useState(0);


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
        <div className="h-full overflow-hidden">
            <motion.div
                initial={{ opacity: "0%" }}
                animate={{ opacity: "100%", transition: { duration: 1 } }}

                className="absolute rounded sm:rounded-none top-0 left-0 flex"
                style={{ width: `${children.length * 100}%` }}
            >
                {React.Children.map(children, (child, index) => (
                    <div className='h-full'>{child}</div>
                ))}
            </motion.div>

        </div>
    );
}
