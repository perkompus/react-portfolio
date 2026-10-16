import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';
import { useIsMobile, mobileStyles } from '../constants/responsive';

const experience = [
    // Duplicates removed
    { id: '1', role: 'Webflow Developer', company: 'Microsoft', period: '2023 - 2024' },
    { id: '2', role: 'Product Designer', company: 'ExxonMobile', period: '2022 - 2023' },
    { id: '3', role: 'UI/UX Designer', company: 'Berkshire Hathaway', period: '2021 - 2022' },
    { id: '4', role: 'Visual Designer', company: 'UnitedHealth Group', period: '2020 - 2021' },
    { id: '5', role: 'Graphic Designer', company: 'NovaAir Design Team', period: '2019 - 2020' },
];

export default function WorkExperience() {
    const isMobile = useIsMobile();
    return (
        <View style={[styles.container, isMobile && mobileStyles.section]}>
            <View style={styles.headerContainer}>
                <Text style={[styles.sectionHeader, isMobile && mobileStyles.heading]}>WORK</Text>
                <Text style={[styles.sectionHeader, isMobile && mobileStyles.heading]}>EXPERIENCE</Text>
            </View>

            <View style={styles.list}>
                {experience.map((job) => (
                    <View key={job.id} style={[styles.item, isMobile && mobile.item]}>
                        <Text style={[styles.role, isMobile && mobile.role]}>{job.role}</Text>

                        <View style={[styles.rightContent, isMobile && mobile.rightContent]}>
                            <Text style={styles.company}>{job.company}</Text>
                            <Text style={styles.date}>{job.period}</Text>
                        </View>
                    </View>
                ))}
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
    headerContainer: {
        alignItems: 'center',
        marginBottom: 80,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 95, // Reduced by 5
        fontFamily: 'Inter_700Bold', // Reduced boldness by 2 units
        letterSpacing: -5,
        textTransform: 'uppercase',
        lineHeight: 90,
        textAlign: 'center',
    },
    list: {
        maxWidth: 1000,
        width: '100%',
        alignSelf: 'center',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline', // Align text baselines
        paddingVertical: 40,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    role: {
        color: Colors.text,
        fontSize: 32,
        fontFamily: 'Inter_600SemiBold',
        flex: 1,
        letterSpacing: -1,
    },
    rightContent: {
        alignItems: 'flex-end',
    },
    company: {
        color: Colors.text,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        marginBottom: 4,
    },
    date: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
    },
});

// Phone overrides
const mobile = StyleSheet.create({
    item: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 8,
        paddingVertical: 24,
    },
    role: {
        fontSize: 24,
    },
    rightContent: {
        alignItems: 'flex-start',
    },
});
