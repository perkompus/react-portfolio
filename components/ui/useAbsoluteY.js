import { useCallback, useEffect, useRef } from 'react';
import { useSharedValue } from 'react-native-reanimated';
import { useScrollY } from '../../contexts/ScrollContext';

/**
 * Resolves an element's absolute Y position inside the scrolling page.
 * measureInWindow returns viewport coordinates, so the current scroll offset
 * is added back to get a value that stays valid as the page scrolls.
 */
export default function useAbsoluteY() {
    const scrollY = useScrollY();
    const ref = useRef(null);
    const absoluteY = useSharedValue(-1);

    const measure = useCallback(() => {
        const node = ref.current;
        if (!node || typeof node.measureInWindow !== 'function') return;
        node.measureInWindow((x, y) => {
            if (typeof y !== 'number' || Number.isNaN(y)) return;
            absoluteY.value = y + (scrollY ? scrollY.value : 0);
        });
    }, [absoluteY, scrollY]);

    const onLayout = useCallback(() => {
        // Layout callbacks fire before the parent has settled its own position,
        // so defer one frame before measuring against the window.
        requestAnimationFrame(measure);
    }, [measure]);

    // Late-loading fonts and images shift everything below them, which would
    // leave a one-shot measurement pointing at the wrong offset.
    useEffect(() => {
        const timers = [150, 600, 1500, 3000].map((delay) => setTimeout(measure, delay));
        return () => timers.forEach(clearTimeout);
    }, [measure]);

    return { ref, absoluteY, onLayout, measure };
}
