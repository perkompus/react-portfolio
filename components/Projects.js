import React from 'react';
import { View, Text, StyleSheet, Image as RNImage, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';
import { LinearGradient } from 'expo-linear-gradient';
import { ArrowUpRight } from 'lucide-react-native';

const projects = [
    { id: 1, name: 'Brander', desc: 'Implemented user research and testing to create a visually appealing and highly functional interface.', image: 'https://framerusercontent.com/images/3wDKnQKnJmBRXN5jNErMOI4iC48.png' },
    { id: 2, name: 'Arcane', desc: 'Conducted user research and testing to design an intuitive, visually stunning interface.', image: 'https://framerusercontent.com/images/PeFXCfp3PGbYPZfh3jOzTRaH0.png' },
    { id: 3, name: 'Quorra', desc: 'Leveraged user research and testing to create an attractive and highly functional interface.', image: 'https://framerusercontent.com/images/Q7YMuzoYWFoBxRqvVZZZ7MQtX58.png' },
    { id: 4, name: 'Solara', desc: 'Implemented user research and testing to develop a sleek, functional interface.', image: 'https://framerusercontent.com/images/UjIMzzmlOY0nRTIYvgVHOhRZQ4.png' },
];

export default function Projects() {
    return (
        <View style={styles.container}>
            <Text style={styles.sectionHeader}>PROJECTS</Text>

            <View style={styles.grid}>
                {projects.map((project) => (
                    <View key={project.id} style={styles.cardContainer}>
                        <View style={styles.imageContainer}>
                            <RNImage
                                source={{ uri: project.image }}
                                style={styles.projectImage}
                                resizeMode="cover"
                            />
                        </View>

                        <View style={styles.content}>
                            <Text style={styles.title}>{project.name}</Text>
                            <Text style={styles.description}>{project.desc}</Text>

                            <Pressable style={styles.viewButton}>
                                <Text style={styles.viewButtonText}>View Project</Text>
                                <ArrowUpRight color={Colors.text} size={16} />
                            </Pressable>
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
        paddingVertical: 80,
        backgroundColor: Colors.background,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 100,
        fontFamily: 'Inter_900Black',
        marginBottom: 80,
        textAlign: 'center',
        letterSpacing: -4,
        textTransform: 'uppercase',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 40,
        justifyContent: 'center', // Center grid items
    },
    cardContainer: {
        width: '100%',
        maxWidth: 600, // On desktop, approx half width minus gap
        flexBasis: 500, // Flex basis for responsiveness
        flexGrow: 1,
        marginBottom: 40,
    },
    imageContainer: {
        width: '100%',
        height: 400,
        backgroundColor: Colors.card,
        marginBottom: 20,
        overflow: 'hidden',
        // No border radius in screenshot? Actually hard to tell, usually minimal or none. keeping minimal 
        borderRadius: 0,
    },
    projectImage: {
        width: '100%',
        height: '100%',
    },
    content: {
        paddingHorizontal: 0, // Text aligned left under image
    },
    title: {
        color: Colors.text,
        fontSize: 32,
        fontFamily: 'Inter_600SemiBold',
        marginBottom: 10,
        letterSpacing: -1,
    },
    description: {
        color: Colors.textSecondary,
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 24,
        fontFamily: 'Inter_400Regular',
        maxWidth: '90%',
    },
    viewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#f5f5f5', // Light grey background
        alignSelf: 'flex-start',
        borderRadius: 4,
    },
    viewButtonText: {
        color: Colors.text,
        fontSize: 14,
        fontFamily: 'Inter_600SemiBold',
    },
});
