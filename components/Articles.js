import React from 'react';
import { View, Text, StyleSheet, Pressable, Image as RNImage } from 'react-native';
import { Colors } from '../constants/Colors';
import { Calendar } from 'lucide-react-native/icons';

const articles = [
    { id: 1, category: 'Marketing', date: 'Jan 22, 2024', title: 'Marketing Insights: Email Campaign Strategies', preview: 'They report concept the we of packed, place service. Well commas, with instead .', image: 'https://framerusercontent.com/images/aZ9CrNHcNBJZRBRhRRCHsOz7Q2s.png' },
    { id: 2, category: 'Startups', date: 'Jan 23, 2024', title: 'Designers\' Hub: Tips and Tricks for Creatives', preview: 'They explain method the we of guided, provide function. Clear links, in instead.', image: 'https://framerusercontent.com/images/cPiVsC271eI8xvLkup9jJqxtP8.png' },
    { id: 3, category: 'Business', date: 'Jan 24, 2024', title: 'Code Crafting: Mastering Web Development', preview: 'We demonstrate tool the of applying, ensure quality. Precise steps, with rather.', image: 'https://framerusercontent.com/images/Lv4SUfySMejcD4S1UnjzuUmc810.png' },
];

export default function Articles() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>ARTICLES</Text>

            <View style={styles.grid}>
                {articles.map((article) => (
                    <Pressable key={article.id} style={styles.card}>
                        <View style={styles.imageContainer}>
                            <RNImage source={{ uri: article.image }} style={styles.image} resizeMode="cover" />
                        </View>

                        <View style={styles.content}>
                            <View style={styles.metaRow}>
                                <View style={styles.badge}>
                                    <Text style={styles.badgeText}>{article.category}</Text>
                                </View>
                                <View style={styles.dateContainer}>
                                    <Calendar size={14} color={Colors.textSecondary} />
                                    <Text style={styles.date}>{article.date}</Text>
                                </View>
                            </View>

                            <Text style={styles.title}>{article.title}</Text>
                            <Text style={styles.preview}>{article.preview}</Text>

                            <View style={styles.readMoreButton}>
                                <Text style={styles.readMoreText}>Read more</Text>
                            </View>
                        </View>
                    </Pressable>
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
    sectionHeader: {
        color: Colors.text,
        fontSize: 100, // Updated to 100 based on feedback
        fontFamily: 'Inter_700Bold', // Reduced boldness
        marginBottom: 60,
        letterSpacing: -2,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 30,
        justifyContent: 'center',
    },
    card: {
        width: '100%',
        maxWidth: 400,
        flexBasis: 350,
        flexGrow: 1,
        marginBottom: 20,
    },
    imageContainer: {
        width: '100%',
        height: 250,
        backgroundColor: Colors.card,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    content: {
        // padding: 24, // Screenshot shows no padding around content text, aligned with image
    },
    metaRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    badge: {
        backgroundColor: '#f5f5f5',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#eee',
    },
    badgeText: {
        fontSize: 12,
        fontFamily: 'Inter_600SemiBold',
        color: Colors.text,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    date: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
    },
    title: {
        color: Colors.text,
        fontSize: 24,
        fontFamily: 'Inter_600SemiBold', // Reduced boldness from Bold to SemiBold
        marginBottom: 10,
        lineHeight: 32,
    },
    preview: {
        color: Colors.textSecondary,
        fontSize: 15, // Reduced from 16
        lineHeight: 24,
        marginBottom: 20,
        fontFamily: 'Inter_400Regular',
    },
    readMoreButton: {
        backgroundColor: '#f9f9f9',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 4,
        alignSelf: 'flex-start',
        borderWidth: 1,
        borderColor: '#eee',
    },
    readMoreText: {
        color: Colors.text,
        fontSize: 14,
        fontFamily: 'Inter_600SemiBold',
    },
});
