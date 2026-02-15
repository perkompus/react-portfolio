import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';

const projects = [
    { id: 1, name: 'Brander', desc: 'Implemented user research and testing to create a visually appealing and highly functional interface.', image: 'https://framerusercontent.com/images/3wDKnQKnJmBRXN5jNErMOI4iC48.png' },
    { id: 2, name: 'Arcane', desc: 'Conducted user research and testing to design an intuitive, visually stunning interface.', image: 'https://framerusercontent.com/images/PeFXCfp3PGbYPZfh3jOzTRaH0.png' },
    { id: 3, name: 'Quorra', desc: 'Leveraged user research and testing to create an attractive and highly functional interface.', image: 'https://framerusercontent.com/images/Q7YMuzoYWFoBxRqvVZZZ7MQtX58.png' },
    { id: 4, name: 'Solara', desc: 'Implemented user research and testing to develop a sleek, functional interface.', image: 'https://framerusercontent.com/images/UjIMzzmlOY0nRTIYvgVHOhRZQ4.png' },
];

export default function Projects() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>Projects</Text>

            <View style={styles.grid}>
                {projects.map((project) => (
                    <Pressable key={project.id} style={styles.cardContainer}>
                        <View style={styles.card}>
                            <Image
                                source={{ uri: project.image }}
                                style={styles.imagePlaceholder}
                                resizeMode="cover"
                            />
                            <View style={styles.content}>
                                <Text style={styles.title}>{project.name}</Text>
                                <Text style={styles.description}>{project.desc}</Text>
                                <Text style={styles.link}>View Project →</Text>
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
    grid: {
        gap: 40,
    },
    cardContainer: {
        marginBottom: 10,
    },
    card: {
        backgroundColor: Colors.card,
        borderRadius: 24,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: Colors.border,
    },
    imagePlaceholder: {
        height: 250,
        width: '100%',
    },
    content: {
        padding: 30,
    },
    title: {
        color: Colors.text,
        fontSize: 28,
        fontFamily: 'Inter_700Bold',
        marginBottom: 15,
    },
    description: {
        color: Colors.textSecondary,
        fontSize: 18,
        marginBottom: 25,
        lineHeight: 28,
        fontFamily: 'Inter_400Regular',
    },
    link: {
        color: Colors.text,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        textDecorationLine: 'underline',
    },
});
