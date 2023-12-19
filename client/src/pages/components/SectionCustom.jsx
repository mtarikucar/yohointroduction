import {Typography} from '@material-tailwind/react';
import {useEffect, useRef, createRef, forwardRef, useState} from 'react'
import {motion, useAnimation, useScroll, useTransform} from 'framer-motion';
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";


function LeftSection({introduction, title}) {
    const textVariants = {
        hidden: {y: '-40vh', opacity: 0.8},
        visible: {y: 0, opacity: 1, transition: {duration: 1.5}}
    };

    return (
        <div className="relative bg-gray-200 h-screen z-50 min-w-[40vw]">

            <img src="../image_f1_big.png" alt="Description" className="h-full w-full object-cover"/>
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

// eslint-disable-next-line react/prop-types
function RightSection({selectedCard, setSelectedCard, items, index}) {

    const cardRefs = useRef(items.map(() => createRef()));

    useEffect(() => {
        cardRefs.current = items.map((_, i) => cardRefs.current[i] ?? createRef());
    }, [items]);

    const handleSelectCard = (index) => {
        setSelectedCard(index);

        const selectedCardRef = cardRefs.current[index];

        if (selectedCardRef && selectedCardRef.current) {
            const scrollPosition = selectedCardRef.current.offsetLeft;
            const scrollContainer = selectedCardRef.current.parentNode;
            scrollContainer.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }
    };

    const handleScroll = (event) => {
        const container = event.target;
        const scrollAmount = event.deltaY;
        console.log(container)
        container.scrollTo({
            top: 0,
            left: container.scrollLeft + scrollAmount,
            behavior: 'smooth'
        });
    };

    return (

        <div className='p-10 h-full w-full '>

            <div
                onWheel={handleScroll}
                className="flex space-x-4  items-center  ">
                {items.map((_, i) => (
                    <Card
                        key={i}
                        ref={cardRefs[i]}
                        number={i > 8 ? `${i + 1}` : `0${i + 1}`}
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

    );
}

const Card = forwardRef(({number, title, img, isSelected, onSelect, content, delayMultiplier = 0}, ref) => {
    const cardVariants = {
        hidden: {opacity: 0},
        visible: {opacity: 1, transition: {duration: 0.5}}
    };
    const {t} = useTranslation()
    const sectionItem = useSelector(sectionItem => sectionItem.sectionItem)

    useEffect(() => {
        if (title === sectionItem.value) {
            onSelect()
        }
    }, [sectionItem]);

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            transition={{delay: 0.3 * delayMultiplier}}
            variants={cardVariants}
            className={`relative flex-shrink-0 ${isSelected ? `w-96` : `w-64`} ease-in-out duration-300 snap-center`}
            ref={ref}

        >
            <img src={img} alt={title} className="h-full w-full object-cover max-h-[50vh]"/>

            <div id={title} className='absolute inset-0 grid h-full w-full items-center text-white p-6'>
                <div>
                    <span className="text-2xl border-b-2 border-solid border-white mb-2">{number}</span>
                    <p className='mt-2'>{title}</p>
                </div>

                {
                    isSelected
                        ? <p className="mt-4">{content}</p>
                        : <button className="mt-4 text-white bg-transparent border-2 p-2 backdrop-blur-lg w-fit"
                                  onClick={onSelect}>{t("click")}</button>
                }
            </div>
        </motion.div>
    );
});


function SectionCustom({items, introduction, title, index}) {
    const [selectedCard, setSelectedCard] = useState(null);
    const controls = useAnimation();
    const sectionRef = useRef(null);
    const variants = {
        hidden: {opacity: 0, y: 50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.8}}
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

    const targetRef = useRef(null);
    const {scrollYProgress} = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);


    return (
        <section ref={targetRef} className={`relative h-[300vh] bg-neutral-900`}>
            <div className="sticky top-0 flex h-screen items-center w-full">


                    <LeftSection introduction={introduction} title={title}/>


                    <motion.div style={{x}}
                                animate={controls}
                                variants={variants}
                                initial="hidden"
                                ref={sectionRef}
                                className='flex bg-[#07051D]'
                    >
                        <RightSection selectedCard={selectedCard} setSelectedCard={setSelectedCard} items={items}
                                      index={index}/>
                    </motion.div>

            </div>
        </section>
    )
}

export default SectionCustom
