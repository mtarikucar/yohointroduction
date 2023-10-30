import React, { useState, useRef } from 'react';

function SliderCustom({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleCardClick = (index) => {
    setActiveIndex(index);
    const slider = sliderRef.current;
    const cardWidth = slider.children[index].offsetWidth;

    slider.scrollLeft = cardWidth * index;
  };

  return (
    <div className="relative h-full overflow-hidden p-16">
      <div className="overflow-x-auto scrollbar-w-4 scrollbar-thumb-gray-500 scrollbar-track-gray-200">
        <div ref={sliderRef} className="flex whitespace-nowrap">
          {items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`p-4 ${activeIndex === index ? 'bg-blue-200' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SliderCustom;
