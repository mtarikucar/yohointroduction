// components/Accordion.js

import React, { useState, useEffect } from 'react';

function HorizantalAccordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(-1);

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY;
            const newIndex = Math.floor(scrollY / 200); // Assuming each section is 200px tall
            setActiveIndex(newIndex);
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className="flex">
            {items.map((item, index) => (
                <div 
                    key={index}
                    className={`flex-none transition-transform duration-300 ${activeIndex === index ? 'transform scale-125' : ''}`}
                    style={{ flexBasis: '150px' }} // Initial width of each panel
                >
                    <div className="bg-blue-500 text-white p-4">{item}</div>
                </div>
            ))}
        </div>
    );
}

export default HorizantalAccordion;
