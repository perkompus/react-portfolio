import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { useIsMobile, mobileStyles } from '../constants/responsive';

const stats = [
    { value: '16', label: 'Years of experience' },
    { value: '60+', label: 'Projects Completed' },
    { value: '20', label: 'Award winner' },
    { value: '98%', label: 'Clients satisfied' },
    { value: '14+', label: 'Industries served' },
    { value: '8M+', label: 'Fundraising' },
];

export default function SomeNumbers() {
    const isMobile = useIsMobile();
    return (
        <View style={[styles.container, isMobile && mobileStyles.section]}>
            <View style={[styles.contentContainer, isMobile && mobileStyles.columns]}>
                {/* Left Side: Title */}
                <View style={styles.leftColumn}>
                    <Text style={[styles.sectionHeader, isMobile && mobileStyles.heading]}>SOME</Text>
                    <Text style={[styles.sectionHeader, isMobile && mobileStyles.heading]}>NUMBERS</Text>
                </View>

                {/* Right Side: Stats Grid */}
                <View style={styles.rightColumn}>
                    <View style={styles.grid}>
                        {stats.map((stat, index) => (
                            <View key={index} style={styles.statItem}>
                                <Text style={[styles.statValue, isMobile && mobile.statValue]}>{stat.value}</Text>
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
        paddingHorizontal: '15%',
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
        fontSize: 95, // Reduced by 5
        fontFamily: 'Inter_700Bold', // Reduced boldness by 2 units
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

// Phone overrides
const mobile = StyleSheet.create({
    statValue: {
        fontSize: 48,
    },
});
