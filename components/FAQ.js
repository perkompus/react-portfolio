import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';

const faqs = [
    {
        id: 0,
        question: 'Can you work with wireframes or our existing designs?',
        answer: 'Yes, absolutely. I can work with your provided wireframes, mockups, or existing designs to ensure consistency and alignment with your vision.',
    },
    {
        id: 1,
        question: 'What happens after the design is ready & I approve it?',
        answer: 'Once approved, we move to the development phase where we bring the designs to life using modern web technologies, ensuring pixel-perfect implementation.',
    },
    {
        id: 2,
        question: 'Do you charge for additional revisions?',
        answer: 'We include a set number of revisions in our initial agreement. Additional revisions may incur extra costs depending on the complexity and scope of changes.',
    },
    {
        id: 3,
        question: 'I have an agency. Can I outsource work to you?',
        answer: 'Yes, I offer white-label services for agencies looking to scale their production capabilities. All work is delivered under your brand with full confidentiality.',
    },
    {
        id: 4,
        question: 'What do I need to give you to get started?',
        answer: 'To get started, I\'ll need your project brief or requirements, any existing brand assets such as logos and guidelines, and an outline of your timeline and budget.',
    },
];

export default function FAQ() {
    const [openId, setOpenId] = useState(null);

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.leftColumn}>
                    <Text style={styles.sectionHeader}>FAQ</Text>
                </View>

                <View style={styles.rightColumn}>
                    {faqs.map((faq) => (
                        <View key={faq.id} style={styles.item}>
                            <Pressable
                                style={styles.header}
                                onPress={() => setOpenId(openId === faq.id ? null : faq.id)}
                            >
                                <Text style={styles.question}>{faq.question}</Text>
                                <Text style={styles.icon}>{openId === faq.id ? '−' : '+'}</Text>
                            </Pressable>

                            {openId === faq.id && (
                                <View style={styles.answerContainer}>
                                    <Text style={styles.answer}>{faq.answer}</Text>
                                </View>
                            )}
                        </View>
                    ))}
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
        fontSize: 95,
        fontFamily: 'Inter_700Bold',
        letterSpacing: -5,
        lineHeight: 90,
        textTransform: 'uppercase',
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        paddingVertical: 30,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    question: {
        color: Colors.text,
        fontSize: 22,
        fontFamily: 'Inter_600SemiBold',
        flex: 1,
        marginRight: 20,
    },
    icon: {
        fontSize: 30,
        color: Colors.text,
        fontFamily: 'Inter_400Regular',
        lineHeight: 36,
    },
    answerContainer: {
        marginTop: 20,
    },
    answer: {
        color: Colors.textSecondary,
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Inter_400Regular',
    },
});
