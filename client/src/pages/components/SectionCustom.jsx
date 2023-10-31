import { Typography } from '@material-tailwind/react';
import { useEffect, useRef, createRef, forwardRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';


function LeftSection({ introduction, title }) {
    const textVariants = {
        hidden: { y: '-40vh', opacity: 0.8 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
    };

    return (
        <div className="col-span-2 relative bg-gray-200">

            <img src="../image_f1_big.png" alt="Description" className="h-full w-full object-cover" />
            <div className='absolute inset-0 grid h-full w-full items-center'>
                <motion.div variants={textVariants} className='p-10'>
                    <Typography
                        variant="h1"
                        color="white"
                        className="mb-4 text-3xl md:text-4xl lg:text-5xl"
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="lead"
                        color="white"
                        className="mb-12 opacity-80"
                    >
                        {introduction}
                    </Typography>
                </motion.div>
            </div>
        </div>
    );
}

function RightSection({ selectedCard, setSelectedCard, items, index }) {
    const cardRefs = useRef(items.map(() => createRef()));

    useEffect(() => {
        cardRefs.current = items.map((_, i) => cardRefs.current[i] ?? createRef());
    }, [items]);

    const handleSelectCard = (index) => {
        setSelectedCard(index);
        const scrollContainer = cardRefs[index].current.parentNode;
        const cardStart = cardRefs[index].current.offsetLeft;
        const cardMargin = window.getComputedStyle(cardRefs[index].current).marginLeft.replace('px', '');
        const scrollPosition = cardStart - cardMargin;
        scrollContainer.scrollTo({
            right: scrollPosition,
            behavior: 'smooth'
        });
    }

    return (
        <div className="col-span-3   ">
            <div className='p-10 h-full overflow-x-auto relative no-scrollbar'>

                <div className="flex space-x-4 ml-auto items-center h-full">
                    {items.map((_, i) => (
                        <Card
                            key={i}
                            ref={cardRefs[i]}
                            number={i > 8 ? `${i + 1}`: `0${i + 1}`}
                            title={_.title}
                            content={_.content}
                            img={`../image_f${index + 1}_small_0${i + 1}.png`}
                            isSelected={selectedCard === i}
                            onSelect={() => handleSelectCard(i)}
                            delayMultiplier={i}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full h-1 bg-white">
                <div style={{ width: `${(selectedCard + 1) * 16.6666}%` }} className="h- bg-blue-500"></div>
            </div>
        </div>
    );
}

const Card = forwardRef(({ number, title, img, isSelected, onSelect, content, delayMultiplier = 0 }, ref) => {
    const cardVariants = {
        hidden: { x: '10vh', opacity: 0 },
        visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
    };
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 * delayMultiplier }}
            variants={cardVariants}
            className={`relative flex-shrink-0 ${isSelected ? `w-[54%] bg-blue-500` : `w-[27%]`} ease-in-out duration-300`}
            ref={ref}
        >
            <img src={img} alt={title} className="h-full w-full object-cover max-h-[50vh]" />

            <div className='absolute inset-0 grid h-full w-full items-center text-white p-6'>
                <div>
                    <span className="text-2xl border-b-2 border-solid border-white mb-2">{number}</span>
                    <p className='mt-2'>{title}</p>
                </div>

                {
                    isSelected
                        ? <p className="mt-4">{content}</p>
                        : <button className="mt-4 text-white bg-transparent border-2 p-2 backdrop-blur-lg w-fit" onClick={onSelect}>Click Me</button>
                }
            </div>
        </motion.div>
    );
});


function SectionCustom({ items, introduction, title, index }) {
    const [selectedCard, setSelectedCard] = useState(null);
    const controls = useAnimation();
    const sectionRef = useRef(null);

    const variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                } else {
                    controls.start("hidden");
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [controls]);

    return (
        <motion.div
            ref={sectionRef}
            initial="hidden"
            animate={controls}
            variants={variants}
            className='grid grid-cols-5 h-[100vh] bg-[#07051D]'
        >
            <LeftSection introduction={introduction} title={title} />
            <RightSection selectedCard={selectedCard} setSelectedCard={setSelectedCard} items={items} index={index} />
        </motion.div>
    )
}

export default SectionCustom