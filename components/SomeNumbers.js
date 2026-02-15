import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const stats = [
    { value: '16', label: 'Years of experience' },
    { value: '60+', label: 'Projects Completed' },
    { value: '20', label: 'Award winner' },
    { value: '98%', label: 'Clients satisfied' },
    { value: '14+', label: 'Industries served' },
    { value: '8M+', label: 'Fundraising' },
];

export default function SomeNumbers() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {/* Left Side: Title */}
                <View style={styles.leftColumn}>
                    <Text style={styles.sectionHeader}>SOME</Text>
                    <Text style={styles.sectionHeader}>NUMBERS</Text>
                </View>

                {/* Right Side: Stats Grid */}
                <View style={styles.rightColumn}>
                    <View style={styles.grid}>
                        {stats.map((stat, index) => (
                            <View key={index} style={styles.statItem}>
                                <Text style={styles.statValue}>{stat.value}</Text>
                                <Text style={styles.statLabel}>{stat.label}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        paddingVertical: 100,
        backgroundColor: Colors.background,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 60,
    },
    leftColumn: {
        flex: 1,
        minWidth: 300,
    },
    rightColumn: {
        flex: 1.5,
        minWidth: 300,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 100,
        fontFamily: 'Inter_900Black',
        letterSpacing: -5,
        textTransform: 'uppercase',
        lineHeight: 90,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 60,
        columnGap: 40,
    },
    statItem: {
        width: '45%', // Two columns in the right section
    },
    statValue: {
        color: Colors.text,
        fontSize: 80,
        fontFamily: 'Inter_600SemiBold',
        marginBottom: 10,
        letterSpacing: -2,
    },
    statLabel: {
        color: Colors.textSecondary,
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
    },
});
