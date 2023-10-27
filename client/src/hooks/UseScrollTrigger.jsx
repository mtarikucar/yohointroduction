import { useState, useEffect } from 'react';

export default function useScrollTrigger(threshold = 300) {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrolled = window.scrollY;
            if (scrolled > threshold) {
                setShow(true);
            } else {
                setShow(false);
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [threshold]);

    return show;
}
