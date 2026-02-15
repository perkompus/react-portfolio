import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const experience = [
    { role: 'Webflow Developer', company: 'Microsoft', period: '2023 - 2024' },
    { role: 'Product Designer', company: 'ExxonMobile', period: '2022 - 2023' },
    { role: 'UI/UX Designer', company: 'Berkshire Hathaway', period: '2021 - 2022' },
    { role: 'Visual Designer', company: 'UnitedHealth Group', period: '2020 - 2021' },
    { role: 'Graphic Designer', company: 'NovaAir Design Team', period: '2019 - 2020' },
];

export default function WorkExperience() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Work Experience</Text>

            <View style={styles.list}>
                {experience.map((item, index) => (
                    <View key={index} style={styles.item}>
                        <View style={styles.roleContainer}>
                            <Text style={styles.role}>{item.role}</Text>
                            <Text style={styles.company}>{item.company}</Text>
                        </View>
                        <Text style={styles.period}>{item.period}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.background,
        paddingVertical: 40,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 48,
        fontWeight: '900',
        marginBottom: 40,
        letterSpacing: -1,
    },
    list: {
        gap: 0,
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 25,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
    },
    roleContainer: {
        flex: 1,
    },
    role: {
        color: Colors.text,
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 4,
    },
    company: {
        color: Colors.textSecondary,
        fontSize: 14,
    },
    period: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'System',
    },
});
