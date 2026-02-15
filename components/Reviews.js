import React from 'react';
import { View, Text, StyleSheet, Image as RNImage } from 'react-native';
import { Colors } from '../constants/Colors';

const reviews = [
    { id: 1, name: 'Juli Fulk', role: 'Founder & CEO', company: 'Dcode Agency', text: 'Jaxon is a true professional. He delivered the project on time and exceeded our expectations. His attention to detail is unmatched.' },
];

export default function Reviews() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {/* Left Side: Title */}
                <View style={styles.leftColumn}>
                    <Text style={styles.sectionHeader}>CLIENT</Text>
                    <Text style={styles.sectionHeader}>REVIEWS</Text>
                </View>

                {/* Right Side: Reviews */}
                <View style={styles.rightColumn}>
                    <View style={styles.navButtons}>
                        <View style={styles.navButton}><Text style={styles.navArrow}>←</Text></View>
                        <View style={styles.navButton}><Text style={styles.navArrow}>→</Text></View>
                    </View>

                    <View style={styles.reviewCard}>
                        <Text style={styles.reviewText}>
                            "Alex brought a fresh perspective to our app. His design expertise and understanding of UX made a huge difference in the final product."
                        </Text>

                        <View style={styles.authorContainer}>
                            <RNImage
                                source={{ uri: 'https://framerusercontent.com/images/123Placeholder.png' }} // Placeholder
                                style={styles.authorImage}
                            />
                            <View>
                                <Text style={styles.authorName}>Juli fulk</Text>
                                <Text style={styles.authorRole}>Founder & CEO & Dcode agency</Text>
                            </View>
                        </View>
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
        backgroundColor: Colors.background, // Alternating background if needed, but screenshot shows white/light
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
    navButtons: {
        flexDirection: 'row',
        marginBottom: 40,
        justifyContent: 'flex-end',
        gap: 10,
    },
    navButton: {
        width: 50,
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    navArrow: {
        color: 'white',
        fontSize: 24,
    },
    reviewCard: {
        backgroundColor: '#f9f9f9', // Very light grey
        padding: 60,
        borderRadius: 0, // Squared off? Screenshot looks squared
    },
    reviewText: {
        color: Colors.text,
        fontSize: 28,
        fontFamily: 'Inter_600SemiBold',
        lineHeight: 40,
        marginBottom: 40,
        letterSpacing: -0.5,
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    authorImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
    },
    authorName: {
        color: Colors.text,
        fontSize: 18,
        fontFamily: 'Inter_700Bold',
    },
    authorRole: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
    },
});
