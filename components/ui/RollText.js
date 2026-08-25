import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Colors } from '../../constants/Colors';
import { Type } from '../../constants/Theme';
import useHover from './useHover';

/**
 * The reference site renders every nav/footer link twice inside a clipped box
 * and rolls the stack up on hover, so the second copy replaces the first.
 */
export default function RollText({
    children,
    style,
    textStyle,
    lineHeight = Type.small.lineHeight,
    color = Colors.text,
    hoverColor = Colors.text,
    onPress,
}) {
    const { hover, handlers } = useHover();

    const rollStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: -lineHeight * hover.value }],
    }));

    const topStyle = useAnimatedStyle(() => ({ opacity: 1 - hover.value * 0.35 }));

    return (
        <Pressable {...handlers} onPress={onPress} style={style}>
            <View style={[styles.clip, { height: lineHeight }]}>
                <Animated.View style={rollStyle}>
                    <Animated.View style={topStyle}>
                        <Text style={[textStyle, { color, lineHeight }]} numberOfLines={1}>
                            {children}
                        </Text>
                    </Animated.View>
                    <Text style={[textStyle, { color: hoverColor, lineHeight }]} numberOfLines={1}>
                        {children}
                    </Text>
                </Animated.View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    clip: {
        overflow: 'hidden',
        justifyContent: 'flex-start',
    },
});
