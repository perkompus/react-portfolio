import React from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withTiming,
    useAnimatedReaction,
    useDerivedValue,
    Easing,
} from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { useScrollY } from '../contexts/ScrollContext';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const TRIGGER_OFFSET = 80;

export default function AnimatedSection({ children, style }) {
    const scrollY = useScrollY();
    const sectionY = useSharedValue(-1);
    const hasAnimated = useSharedValue(false);
    const opacity = useSharedValue(0);
    const translateY = useSharedValue(40);

    const isVisible = useDerivedValue(() => {
        if (sectionY.value < 0) return false;
        const scrollVal = scrollY ? scrollY.value : 0;
        return scrollVal + SCREEN_HEIGHT > sectionY.value + TRIGGER_OFFSET;
    });

    useAnimatedReaction(
        () => isVisible.value,
        (visible) => {
            if (visible && !hasAnimated.value) {
                hasAnimated.value = true;
                opacity.value = withTiming(1, { duration: 700, easing: Easing.out(Easing.quad) });
                translateY.value = withTiming(0, { duration: 700, easing: Easing.out(Easing.quad) });
            }
        }
    );

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ translateY: translateY.value }],
    }));

    return (
        <Animated.View
            style={[animatedStyle, style]}
            onLayout={(e) => {
                if (sectionY.value < 0) {
                    sectionY.value = e.nativeEvent.layout.y;
                }
            }}
        >
            {children}
        </Animated.View>
    );
}
