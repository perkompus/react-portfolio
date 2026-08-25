import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
import { Layout, Type } from '../../constants/Theme';
import Reveal from './Reveal';

/**
 * Stacked section heading. The reference insets these headings from the
 * container edge while the cards below stay full width; `align` covers the
 * centred variant used by the work-experience section.
 */
export default function SectionHeading({ children, align = 'left', inset = true, style }) {
    return (
        <View style={[styles.wrap, inset && styles.inset, style]}>
            <Reveal offset={40}>
                <Text style={[styles.title, align === 'center' && styles.center]}>{children}</Text>
            </Reveal>
        </View>
    );
}

const styles = StyleSheet.create({
    wrap: {
        width: '100%',
    },
    inset: {
        paddingHorizontal: Layout.headingInset,
    },
    title: {
        ...Type.section,
        color: Colors.text,
    },
    center: {
        textAlign: 'center',
    },
});
