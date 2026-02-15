import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';
import Animated, { useAnimatedStyle, withTiming, useSharedValue } from 'react-native-reanimated';
import { ChevronDown, ChevronUp } from 'lucide-react-native';

const faqs = [
    { i: 0, q: 'Can you work with wireframes or our existing designs?', a: 'Yes, absolutely. I can work with your provided wireframes, mockups, or existing designs to ensure consistency and alignment with your vision.' },
    { i: 1, q: 'What happens after the design is ready & I approve it?', a: 'Once approved, we move to the development phase where we bring the designs to life using modern web technologies.' },
    { i: 2, q: 'Do you charge for additional revisions?', a: 'We include a set number of revisions in our initial agreement. Additional revisions may incur extra costs depending on the complexity.' },
    { i: 3, q: 'I have an agency. Can I outsource work to you?', a: 'Yes, I promote white-label services for agencies looking to scale their production capabilities.' },
];

function AccordionItem({ item }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Pressable onPress={() => setExpanded(!expanded)} style={styles.item}>
            <View style={styles.header}>
                <Text style={styles.question}>{item.q}</Text>
                {expanded ? <ChevronUp color={Colors.text} size={20} /> : <ChevronDown color={Colors.text} size={20} />}
            </View>
            {expanded && (
                <View style={styles.body}>
                    <Text style={styles.answer}>{item.a}</Text>
                </View>
            )}
        </Pressable>
    );
}

export default function FAQ() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>FAQ</Text>
            <View style={styles.list}>
                {faqs.map((item) => (
                    <AccordionItem key={item.i} item={item} />
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
        marginVertical: 0,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 48,
        fontWeight: '900',
        marginBottom: 40,
        letterSpacing: -1,
    },
    list: {
        gap: 20,
    },
    item: {
        backgroundColor: Colors.card,
        borderRadius: 20,
        padding: 25,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    question: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: '600',
        flex: 1,
        marginRight: 10,
    },
    body: {
        marginTop: 15,
        paddingTop: 15,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
    },
    answer: {
        color: Colors.textSecondary,
        fontSize: 16,
        lineHeight: 24,
    },
});
