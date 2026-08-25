import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import Counter from './ui/Counter';
import Reveal from './ui/Reveal';
import StickyColumn from './ui/StickyColumn';

// Two stats per row, split by a vertical rule, exactly as on the reference.
const rows = [
    [
        { value: '16', label: 'Years of experience' },
        { value: '60+', label: 'Projects Completed' },
    ],
    [
        { value: '20', label: 'Award winner' },
        { value: '98%', label: 'Clients satisfied' },
    ],
    [
        { value: '14+', label: 'Industries served' },
        { value: '8M+', label: 'Fundraising' },
    ],
];

export default function SomeNumbers() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StickyColumn style={styles.leftColumn} top={140}>
                    <Reveal offset={40}>
                        <Text style={styles.sectionTitle}>Some Numbers</Text>
                    </Reveal>
                </StickyColumn>

                <View style={styles.rightColumn}>
                    {rows.map((row, i) => (
                        <Reveal key={row[0].label} delay={i * 90}>
                            <View style={styles.row}>
                                {row.map((stat, j) => (
                                    <React.Fragment key={stat.label}>
                                        {j > 0 && <View style={styles.vLine} />}
                                        <View style={styles.cell}>
                                            <Counter
                                                value={stat.value}
                                                style={styles.value}
                                                suffixStyle={styles.suffix}
                                            />
                                            <Text style={styles.label}>{stat.label}</Text>
                                        </View>
                                    </React.Fragment>
                                ))}
                            </View>
                            <View style={styles.hLine} />
                        </Reveal>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Layout.gutter,
        paddingVertical: Layout.sectionSpacing,
        backgroundColor: Colors.background,
    },
    content: {
        width: '100%',
        maxWidth: Layout.maxWidth,
        alignSelf: 'center',
        flexDirection: isPhone ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: isPhone ? 40 : 60,
        alignItems: 'flex-start',
    },
    leftColumn: {
        flex: isPhone ? undefined : 652,
        width: isPhone ? '100%' : undefined,
        alignSelf: 'stretch',
    },
    rightColumn: {
        flex: isPhone ? undefined : 548,
        width: isPhone ? '100%' : undefined,
        gap: 60,
    },
    sectionTitle: {
        ...Type.section,
        color: Colors.text,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        paddingBottom: 24,
    },
    cell: {
        flex: 1,
        gap: 8,
    },
    vLine: {
        width: 1,
        alignSelf: 'stretch',
        backgroundColor: Colors.line,
        marginHorizontal: 24,
    },
    hLine: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.line,
    },
    value: {
        ...Type.counter,
        color: Colors.text,
    },
    suffix: {
        color: Colors.textMuted,
    },
    label: {
        ...Type.body,
        color: Colors.textSecondary,
    },
});
