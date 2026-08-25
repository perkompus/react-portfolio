import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';

/**
 * Masked line: the text starts fully below its own clipped box and slides up
 * into place. Used for the hero display lines on the reference site.
 */
export default function LineReveal({ children, textStyle, delay = 0, duration = 900 }) {
    const progress = useSharedValue(0);
    const height = useSharedValue(0);

    const start = (h) => {
        if (!h || height.value === h) return;
        height.value = h;
        progress.value = withDelay(delay, withTiming(1, { duration, easing: Easing.bezier(0.16, 1, 0.3, 1) }));
    };

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: progress.value,
        transform: [{ translateY: height.value * (1 - progress.value) }],
    }));

    return (
        <View style={styles.clip}>
            <Animated.View
                onLayout={(e) => start(e.nativeEvent.layout.height)}
                style={animatedStyle}
            >
                <Text style={textStyle}>{children}</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    clip: {
        overflow: 'hidden',
    },
});
