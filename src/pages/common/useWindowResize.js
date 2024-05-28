import { useState, useEffect } from 'react';
import { useEventListener } from './useEventListener';

export const useWindowResize = () => {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        /*
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
        */
    }, []);
    useEventListener('resize', () => { setWindowSize([window.innerWidth, window.innerHeight]) }, window);

    return windowSize;
}