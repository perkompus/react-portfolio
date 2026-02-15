import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const experience = [
    { role: 'Webflow Developer', company: 'Microsoft', period: '2023 - 2024' },
    { role: 'Product Designer', company: 'ExxonMobile', period: '2022 - 2023' },
    { role: 'UI/UX Designer', company: 'Berkshire Hathaway', period: '2021 - 2022' },
    { role: 'Visual Designer', company: 'UnitedHealth Group', period: '2020 - 2021' },
    { id: '1', role: 'Webflow Developer', company: 'Microsoft', period: '2023 - 2024' },
    { id: '2', role: 'Product Designer', company: 'ExxonMobile', period: '2022 - 2023' },
    { id: '3', role: 'UI/UX Designer', company: 'Berkshire Hathaway', period: '2021 - 2022' },
    { id: '4', role: 'Visual Designer', company: 'UnitedHealth Group', period: '2020 - 2021' },
    { id: '5', role: 'Graphic Designer', company: 'NovaAir Design Team', period: '2019 - 2020' },
];

export default function WorkExperience() {
    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.sectionHeader}>WORK</Text>
                <Text style={styles.sectionHeader}>EXPERIENCE</Text>
            </View>

            <View style={styles.list}>
                {experience.map((job) => (
                    <View key={job.id} style={styles.item}>
                        <Text style={styles.role}>{job.role}</Text>

                        <View style={styles.rightContent}>
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
        paddingHorizontal: 40,
        paddingVertical: 100,
        backgroundColor: Colors.background,
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 80,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 100,
        fontFamily: 'Inter_900Black',
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
