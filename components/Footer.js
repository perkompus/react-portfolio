import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import ArrowButton from './ui/ArrowButton';
import Reveal from './ui/Reveal';
import RollText from './ui/RollText';
import useGridWidth from './ui/useGridWidth';

const columns = [
    { title: 'MAIN PAGES', links: ['Home', 'About', 'Project'] },
    { title: 'UTILITY PAGES', links: ['Licenses', '404 Page'] },
    { title: 'MORE PAGES', links: ['Services', 'Blog', 'Contact'] },
    { title: 'SOCIALS', links: ['Instagram', 'Twitter', 'Linkedin'] },
];

const COLUMN_GAP = 24;

export default function Footer() {
    // The reference lays the four link groups out two per row, not four across.
    const { onLayout, itemWidth } = useGridWidth(isPhone ? 1 : 2, COLUMN_GAP);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.top}>
                    <Reveal style={styles.ctaBlock} offset={40}>
                        <Text style={styles.cta}>Have any project idea? Contact me</Text>
                        <ArrowButton label="Contact Now" />
                    </Reveal>

                    <View style={styles.columns} onLayout={onLayout}>
                        {columns.map((column, i) => (
                            <Reveal
                                key={column.title}
                                style={[styles.column, { width: itemWidth }]}
                                delay={i * 70}
                            >
                                <Text style={styles.columnHeader}>{column.title}</Text>
                                {column.links.map((link) => (
                                    <RollText
                                        key={link}
                                        textStyle={styles.link}
                                        color={Colors.textSecondary}
                                        hoverColor={Colors.text}
                                        style={styles.linkRow}
                                    >
                                        {link}
                                    </RollText>
                                ))}
                            </Reveal>
                        ))}
                    </View>
                </View>

                <View style={styles.bottom}>
                    <Text style={styles.copyright}>Copyright @ Jaxon Grayson. All Rights Reserved</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Layout.gutter,
        paddingTop: isPhone ? 80 : 120,
        paddingBottom: 28,
        backgroundColor: Colors.footerBackground,
    },
    content: {
        width: '100%',
        maxWidth: Layout.maxWidth,
        alignSelf: 'center',
        gap: 30,
    },
    top: {
        gap: 80,
    },
    ctaBlock: {
        paddingHorizontal: Layout.headingInset,
        gap: 30,
        alignItems: 'flex-start',
    },
    cta: {
        ...Type.cta,
        color: Colors.text,
    },
    columns: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: COLUMN_GAP,
    },
    column: {
        gap: 24,
    },
    columnHeader: {
        ...Type.small,
        fontFamily: 'Inter_700Bold',
        color: Colors.text,
    },
    linkRow: {
        alignSelf: 'flex-start',
    },
    link: {
        ...Type.small,
    },
    bottom: {
        paddingTop: 24,
    },
    copyright: {
        ...Type.small,
        color: Colors.textMuted,
    },
});
