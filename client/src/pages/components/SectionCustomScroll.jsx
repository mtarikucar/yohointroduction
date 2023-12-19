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
        <div className="col-span-2 relative bg-gray-200">

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



const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {cards.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
};

const Card = ({ card }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            ></div>
            <div className="absolute inset-0 z-10 grid place-content-center">
                <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
                    {card.title}
                </p>
            </div>
        </div>
    );
};


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


    return (
        <>
           {/* <LeftSection introduction={introduction} title={title}/>*/}
            <HorizontalScrollCarousel />
        </>
    )
}

export default SectionCustom


const cards = [
    {
        url: "/banner01.png",
        title: "Title 1",
        id: 1,
    },
    {
        url: "/banner02.png",
        title: "Title 2",
        id: 2,
    },
    {
        url: "/banner03.png",
        title: "Title 3",
        id: 3,
    },
    {
        url: "/banner04.png",
        title: "Title 4",
        id: 4,
    },
    {
        url: "/banner05.png",
        title: "Title 5",
        id: 5,
    },
    {
        url: "/banner06.png",
        title: "Title 6",
        id: 6,
    },
    {
        url: "/banner07.png",
        title: "Title 7",
        id: 7,
    },
];
