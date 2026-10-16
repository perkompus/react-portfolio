import React from 'react';
import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const LINE_HEIGHT = 22;

// Text link that rolls up on hover, revealing a darker copy from below (web).
export default function RollingLink({ label, onPress, style }) {
    return (
        <Pressable onPress={onPress} style={[styles.container, style]}>
            {({ hovered }) => (
                <View style={[styles.roll, hovered && styles.rollHovered]}>
                    <Text style={styles.text}>{label}</Text>
                    <Text style={[styles.text, styles.textHovered]}>{label}</Text>
                </View>
            )}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        height: LINE_HEIGHT,
        overflow: 'hidden',
        alignSelf: 'flex-start',
        cursor: 'pointer',
    },
    roll: {
        transitionProperty: 'transform',
        transitionDuration: '450ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
    rollHovered: {
        transform: [{ translateY: -LINE_HEIGHT }],
    },
    text: {
        color: Colors.textSecondary,
        fontSize: 16,
        lineHeight: LINE_HEIGHT,
        fontFamily: 'Inter_400Regular',
    },
    textHovered: {
        color: Colors.text,
    },
});
