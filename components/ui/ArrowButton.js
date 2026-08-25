import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { ArrowUpRight } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { Type } from '../../constants/Theme';
import useHover from './useHover';

/**
 * Reference button: square corners, label rolls up on hover while the arrow
 * leaves top-right and a second arrow replaces it from the bottom-left.
 * Variants match the three the reference uses — solid dark, outlined white,
 * and the muted grey "View Project" chip.
 */
export default function ArrowButton({
    label,
    variant = 'dark',
    size = 'medium',
    onPress,
    style,
}) {
    const { hover, handlers } = useHover();

    const dark = variant === 'dark';
    const fg = dark ? Colors.buttonText : Colors.text;
    const iconBox = size === 'medium' ? 18 : 16;
    const labelHeight = size === 'medium' ? 22 : 20;

    const containerStyle = useAnimatedStyle(() => ({
        opacity: 1 - 0.12 * hover.value,
    }));

    const labelRoll = useAnimatedStyle(() => ({
        transform: [{ translateY: -labelHeight * hover.value }],
    }));

    const arrowOut = useAnimatedStyle(() => ({
        opacity: 1 - hover.value,
        transform: [
            { translateX: iconBox * hover.value },
            { translateY: -iconBox * hover.value },
        ],
    }));

    const arrowIn = useAnimatedStyle(() => ({
        opacity: hover.value,
        transform: [
            { translateX: -iconBox * (1 - hover.value) },
            { translateY: iconBox * (1 - hover.value) },
        ],
    }));

    return (
        <Pressable {...handlers} onPress={onPress} style={style}>
            <Animated.View
                style={[
                    styles.button,
                    size === 'medium' ? styles.medium : styles.small,
                    variant === 'light' && styles.light,
                    variant === 'muted' && styles.muted,
                    dark && styles.dark,
                    containerStyle,
                ]}
            >
                <View style={[styles.clip, { height: labelHeight }]}>
                    <Animated.View style={labelRoll}>
                        <Text style={[styles.label, { color: fg, lineHeight: labelHeight }]}>{label}</Text>
                        <Text style={[styles.label, { color: fg, lineHeight: labelHeight }]}>{label}</Text>
                    </Animated.View>
                </View>

                <View style={[styles.clip, { width: iconBox, height: iconBox }]}>
                    <Animated.View style={[styles.arrow, arrowOut]}>
                        <ArrowUpRight color={fg} size={iconBox} />
                    </Animated.View>
                    <Animated.View style={[styles.arrow, arrowIn]}>
                        <ArrowUpRight color={fg} size={iconBox} />
                    </Animated.View>
                </View>
            </Animated.View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
        alignSelf: 'flex-start',
    },
    medium: {
        paddingHorizontal: 28,
        paddingVertical: 16,
    },
    small: {
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    dark: {
        backgroundColor: Colors.button,
    },
    light: {
        backgroundColor: Colors.background,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    muted: {
        backgroundColor: Colors.surface,
        paddingHorizontal: 20,
        paddingVertical: 8,
    },
    label: {
        ...Type.small,
        fontFamily: 'Inter_600SemiBold',
    },
    clip: {
        overflow: 'hidden',
        justifyContent: 'flex-start',
    },
    arrow: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
