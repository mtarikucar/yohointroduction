import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Typography
} from "@material-tailwind/react";
import { useEffect, useRef, createRef, forwardRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import {useTranslation} from "react-i18next";


function LeftSection({ introduction, title }) {
    const textVariants = {
        hidden: { y: '-20vh', opacity: 0.8 },
        visible: { y: 0, opacity: 1, transition: { duration: 1.5 } }
    };
    return (
        <div className=' items-center'>
            <motion.div variants={textVariants} className='p-10'>
                <Typography
                    as={"span"}
                    variant="lead"
                    color="white"
                    className="mb-4  border-b-2 border-solid border-white"
                >
                    {title}
                </Typography>
                <Typography
                    variant="paragraph"
                    color="white"
                    className="mb-12 opacity-80"
                >
                    {introduction}
                </Typography>
            </motion.div>
        </div>
    );
}

function RightSection({ selectedCard, setSelectedCard, items, index }) {
    const cardRefs = useRef(items.map(() => createRef()));

    useEffect(() => {
        cardRefs.current = items.map((_, i) => cardRefs.current[i] ?? createRef());
    }, [items]);

    const handleSelectCard = (index) => {
        console.log(index);
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
        <div className=" ">
            <div className='px-10 mb-10  no-scrollbar'>

                <div className="grid grid-cols-2 gap-4  ml-auto items-center ">
                    {items.map((_, i) => (
                        <Card
                            key={i}
                            ref={cardRefs[i]}
                            number={i > 8 ? `${i + 1}`: `0${i + 1}`}
                            title={_.title}
                            content={_.content}
                            img={`../h5_f${index + 1}_small0${i + 1}.png`}
                            isSelected={selectedCard === i}
                            onSelect={() => handleSelectCard(i)}
                        />
                    ))}
                </div>
            </div>

        </div>
    );
}

const Card = forwardRef(({ number, title, img, isSelected, onSelect, content }, ref) => {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const { t } = useTranslation();
    const handleDialogOpen = () => {
        setDialogOpen(true);
    };

    const handleDialogClose = () => {
        setDialogOpen(false);
    };

    return (
        <div
            className={`relative ease-in-out duration-300`}
            ref={ref}
        >
            <img src={img} alt={title} className="h-full w-full object-cover max-h-[50vh]" />

            <div className='absolute inset-0 grid h-full w-full items-center text-white p-6'>
                <div>
                    <span className="text-sm border-b-2 border-solid border-white mb-2">{number}</span>
                    <p className='text-sm'>{title}</p>
                </div>

                <button className="bottom-0 mt-4 text-white bg-transparent border-2 p-2 backdrop-blur-lg w-fit" onClick={handleDialogOpen}>{t("click")}</button>

                {isDialogOpen && <DialogDefault title={title} content={content} open={isDialogOpen} onClose={handleDialogClose} />}
            </div>
        </div>
    );
});


function DialogDefault({ title, content, open, onClose }) {
    return (
        <>
            <Dialog open={open} handler={onClose} className="bg-[#0085FF]">
                <DialogHeader className="text-white text-center">{title}</DialogHeader>
                <DialogBody className="text-white">
                    {content}
                </DialogBody>
            </Dialog>
        </>
    );
}


function SectionCustomMobile({ items, introduction, title, index }) {
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
            className='h-fit bg-[#07051D] my-2'
        >

            <LeftSection introduction={introduction} title={title} />
            <RightSection introduction={introduction} title={title} index={index} items={items} />

        </motion.div>
    )
}

export default SectionCustomMobile
