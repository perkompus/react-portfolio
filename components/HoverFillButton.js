import React from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

// Button whose background color fades in on hover (web).
// `children` is a function receiving `hovered` so text/icon colors can swap.
export default function HoverFillButton({ style, fillColor = Colors.text, onPress, children }) {
    return (
        <Pressable onPress={onPress} style={[styles.base, style]}>
            {({ hovered }) => (
                <>
                    <View style={[styles.fill, { backgroundColor: fillColor, opacity: hovered ? 1 : 0 }]} />
                    {children(hovered)}
                </>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    base: {
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
    },
    fill: {
        ...StyleSheet.absoluteFillObject,
        pointerEvents: 'none',
        transitionProperty: 'opacity',
        transitionDuration: '350ms',
        transitionTimingFunction: 'ease',
    },
});
