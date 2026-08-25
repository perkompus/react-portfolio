import { useCallback } from 'react';
import { Easing, useSharedValue, withTiming } from 'react-native-reanimated';
import { Motion } from '../../constants/Theme';

/**
 * 0 -> 1 hover progress. Pointer hover drives it on web; touch press drives the
 * same value on native so the interaction is never dead there.
 */
export default function useHover(duration = Motion.fast) {
    const hover = useSharedValue(0);
    const easing = Easing.bezier(0.22, 1, 0.36, 1);

    const on = useCallback(() => {
        hover.value = withTiming(1, { duration, easing });
    }, [hover, duration]);

    const off = useCallback(() => {
        hover.value = withTiming(0, { duration, easing });
    }, [hover, duration]);

    return {
        hover,
        handlers: {
            onHoverIn: on,
            onHoverOut: off,
            onPressIn: on,
            onPressOut: off,
        },
    };
}
