import React from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Colors } from '../constants/Colors';

const articles = [
    { id: 1, category: 'Marketing', date: 'Jan 22, 2024', title: 'Marketing Insights: Email Campaign Strategies', preview: 'They report concept the we of packed, place service. Well commas, with instead .', image: 'https://framerusercontent.com/images/aZ9CrNHcNBJZRBRhRRCHsOz7Q2s.png' },
    { id: 2, category: 'Startups', date: 'Jan 23, 2024', title: 'Designers\' Hub: Tips and Tricks for Creatives', preview: 'They explain method the we of guided, provide function. Clear links, in instead.', image: 'https://framerusercontent.com/images/cPiVsC271eI8xvLkup9jJqxtP8.png' },
    { id: 3, category: 'Business', date: 'Jan 24, 2024', title: 'Code Crafting: Mastering Web Development', preview: 'We demonstrate tool the of applying, ensure quality. Precise steps, with rather.', image: 'https://framerusercontent.com/images/Lv4SUfySMejcD4S1UnjzuUmc810.png' },
];

export default function Articles() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Articles</Text>

            <View style={styles.list}>
                {articles.map((article) => (
                    <Pressable key={article.id} style={styles.card}>
                        <Image source={{ uri: article.image }} style={styles.image} resizeMode="cover" />
                        <View style={styles.meta}>
                            <Text style={styles.category}>{article.category}</Text>
                            <Text style={styles.date}>{article.date}</Text>
                        </View>
                        <Text style={styles.title}>{article.title}</Text>
                        <Text style={styles.preview}>{article.preview}</Text>
                        <Text style={styles.readMore}>Read more →</Text>
                    </Pressable>
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
        fontFamily: 'Inter_900Black',
        marginBottom: 40,
        letterSpacing: -1,
    },
    list: {
        gap: 30,
    },
    card: {
        backgroundColor: Colors.card,
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.border,
        marginBottom: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    imagePlaceholder: {
        height: 200,
        width: '100%',
    },
    content: {
        padding: 24,
    },
    meta: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        marginTop: 20,
        paddingHorizontal: 20,
    },
    category: {
        color: Colors.accent,
        fontSize: 14,
        fontFamily: 'Inter_600SemiBold',
        textTransform: 'uppercase',
    },
    date: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
    },
    title: {
        color: Colors.text,
        fontSize: 20,
        fontFamily: 'Inter_700Bold',
        marginBottom: 10,
        lineHeight: 28,
        paddingHorizontal: 20,
    },
    preview: {
        color: Colors.textSecondary,
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 16,
        paddingHorizontal: 20,
        fontFamily: 'Inter_400Regular',
    },
    readMore: {
        color: Colors.accent,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        marginBottom: 24,
        paddingHorizontal: 20,
    },
});
