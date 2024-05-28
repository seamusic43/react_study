import { useEffect } from 'react';

export const useEventListener = (eventName, handler, element = window) => {
    useEffect(() => {
        if (!(element && element.addEventListener)) {
            return;
        }
        element.addEventListener(eventName, handler);
        return () => {
            element.removeEventListener(eventName, handler);
        };
    }, [eventName, handler, element]);
}