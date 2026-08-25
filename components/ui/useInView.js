import { useCallback, useEffect, useRef } from 'react';
import { Dimensions } from 'react-native';
import { useScrollSubscribe } from '../../contexts/ScrollContext';

const SCREEN_HEIGHT = Dimensions.get('window').height;

/**
 * Fires once, the first time the element's measured position enters the
 * viewport. Everything runs on the JS thread so the callback is free to start
 * Reanimated animations, which stall when kicked off from a worklet on web.
 */
export default function useInView(onEnter, threshold = 0.12) {
    const subscribe = useScrollSubscribe();
    const ref = useRef(null);
    const absoluteY = useRef(-1);
    const fired = useRef(false);

    const check = useCallback(
        (scrollOffset) => {
            if (fired.current || absoluteY.current < 0) return;
            if (scrollOffset + SCREEN_HEIGHT * (1 - threshold) > absoluteY.current) {
                fired.current = true;
                onEnter();
            }
        },
        [onEnter, threshold]
    );

    const measure = useCallback(
        (scrollOffset = 0) => {
            const node = ref.current;
            if (!node || typeof node.measureInWindow !== 'function') return;
            node.measureInWindow((x, y) => {
                if (typeof y !== 'number' || Number.isNaN(y)) return;
                absoluteY.current = y + scrollOffset;
                check(scrollOffset);
            });
        },
        [check]
    );

    const onLayout = useCallback(() => {
        requestAnimationFrame(() => measure(0));
    }, [measure]);

    useEffect(() => {
        // Fonts and images settle after first layout and shift everything below
        // them, so the position is re-read a few times before giving up.
        const timers = [100, 400, 1200, 2500].map((delay) => setTimeout(() => measure(0), delay));
        return () => timers.forEach(clearTimeout);
    }, [measure]);

    useEffect(() => {
        if (!subscribe) return undefined;
        return subscribe((y) => {
            if (fired.current) return;
            if (absoluteY.current < 0) {
                measure(y);
                return;
            }
            check(y);
        });
    }, [subscribe, check, measure]);

    return { ref, onLayout };
}
