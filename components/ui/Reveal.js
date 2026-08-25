import React, { useCallback } from 'react';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';
import { Motion } from '../../constants/Theme';
import useInView from './useInView';

/**
 * Scroll-triggered entrance: opacity 0 -> 1 with a translateY(50) -> 0 lift,
 * matching the reveal used on every section of the reference site.
 */
export default function Reveal({
    children,
    style,
    delay = 0,
    offset = Motion.revealOffset,
    x = 0,
    scale: fromScale = 1,
    duration = Motion.duration,
    threshold = 0.12,
}) {
    const progress = useSharedValue(0);

    const play = useCallback(() => {
        progress.value = withDelay(
            delay,
            withTiming(1, { duration, easing: Easing.bezier(0.16, 1, 0.3, 1) })
        );
    }, [delay, duration, progress]);

    const { ref, onLayout } = useInView(play, threshold);

    const animatedStyle = useAnimatedStyle(() => {
        const p = progress.value;
        return {
            opacity: p,
            transform: [
                { translateY: offset * (1 - p) },
                { translateX: x * (1 - p) },
                { scale: fromScale + (1 - fromScale) * p },
            ],
        };
    });

    return (
        <Animated.View ref={ref} onLayout={onLayout} style={[style, animatedStyle]}>
            {children}
        </Animated.View>
    );
}
