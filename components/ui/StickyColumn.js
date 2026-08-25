import React from 'react';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { useScrollY } from '../../contexts/ScrollContext';
import useAbsoluteY from './useAbsoluteY';

/**
 * Scroll-pinned column, the Reanimated equivalent of `position: sticky`.
 * It tracks the page offset and slides down inside its own container so the
 * content stays parked below the header until the container scrolls past.
 */
export default function StickyColumn({ children, top = 120, style }) {
    const scrollY = useScrollY();
    const { ref, absoluteY, onLayout: measureSelf } = useAbsoluteY();
    const containerHeight = useSharedValue(0);
    const contentHeight = useSharedValue(0);

    const onLayout = (e) => {
        containerHeight.value = e.nativeEvent.layout.height;
        measureSelf(e);
    };

    const animatedStyle = useAnimatedStyle(() => {
        if (absoluteY.value < 0) return { transform: [{ translateY: 0 }] };
        const offsetY = scrollY ? scrollY.value : 0;
        const travel = Math.max(0, containerHeight.value - contentHeight.value);
        const raw = offsetY + top - absoluteY.value;
        const clamped = Math.min(Math.max(raw, 0), travel);
        return { transform: [{ translateY: clamped }] };
    });

    return (
        <Animated.View ref={ref} onLayout={onLayout} style={style}>
            <Animated.View
                onLayout={(e) => {
                    contentHeight.value = e.nativeEvent.layout.height;
                }}
                style={animatedStyle}
            >
                {children}
            </Animated.View>
        </Animated.View>
    );
}
