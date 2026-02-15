import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const reviews = [
    { id: 1, name: 'Juli Fulk', role: 'Founder & CEO', company: 'Dcode Agency', text: 'Jaxon is a true professional. He delivered the project on time and exceeded our expectations. His attention to detail is unmatched.' },
];

export default function Reviews() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Client Reviews</Text>

            <View style={styles.grid}>
                {reviews.map((review) => (
                    <View key={review.id} style={styles.card}>
                        <Text style={styles.text}>"{review.text}"</Text>
                        <View style={styles.author}>
                            <Text style={styles.name}>{review.name}</Text>
                            <Text style={styles.role}>{review.role} @ {review.company}</Text>
                        </View>
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
    card: {
        backgroundColor: Colors.card,
        borderRadius: 24,
        padding: 40,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    text: {
        color: Colors.text,
        fontSize: 24,
        lineHeight: 36,
        marginBottom: 30,
        fontStyle: 'italic',
        fontWeight: '500',
    },
    author: {
        marginTop: 10,
    },
    name: {
        color: Colors.text,
        fontSize: 20,
        fontWeight: 'bold',
    },
    role: {
        color: Colors.textSecondary,
        fontSize: 14,
        marginTop: 4,
    },
});
