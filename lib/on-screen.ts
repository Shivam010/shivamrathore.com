// Copied From https://stackoverflow.com/a/61719846

import { useRef, useEffect, useState } from 'react';

/**
 * Check if an element is in viewport

 * @param {number} offset - Number of pixels up to the observable element from the top
 * @param {number} throttleMilliseconds - Throttle observable listener, in ms
 */
export default function useOnScreen<Element extends HTMLElement>(
    offset = 0,
): [Boolean, React.RefObject<Element>] {
    const [isVisible, setIsVisible] = useState(false);
    const currentElement = useRef<Element>();

    const onScroll = () => {
        if (!currentElement.current) {
            setIsVisible(false);
            return;
        }
        const top = currentElement.current.getBoundingClientRect().top;
        setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight);
    };

    useEffect(() => {
        document.addEventListener('scroll', onScroll, true);
        return () => document.removeEventListener('scroll', onScroll, true);
    });

    return [isVisible, currentElement];
}
