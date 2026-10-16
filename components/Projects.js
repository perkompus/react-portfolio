import React from 'react';
import { View, Text, StyleSheet, Image as RNImage, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';
import { useIsMobile, mobileStyles } from '../constants/responsive';
import HoverFillButton from './HoverFillButton';
import { ArrowUpRight } from 'lucide-react-native';
import { useRouter } from 'expo-router';
import { projects as allProjects } from '../constants/projects';

export default function Projects({ title = 'PROJECTS', projects = allProjects }) {
    const isMobile = useIsMobile();
    const router = useRouter();
    const openProject = (slug) => router.push(`/project/${slug}`);

    return (
        <View style={[styles.container, isMobile && mobileStyles.section]}>
            <Text style={[styles.sectionHeader, isMobile && mobileStyles.heading]}>{title}</Text>

            <View style={styles.grid}>
                {projects.map((project) => (
                    <Pressable key={project.slug} style={[styles.cardContainer, isMobile && mobile.cardContainer]} onPress={() => openProject(project.slug)}>
                        {({ hovered: cardHovered }) => (
                            <>
                                <View style={[styles.imageContainer, isMobile && mobile.imageContainer]}>
                                    <RNImage
                                        source={{ uri: project.image }}
                                        style={[styles.projectImage, cardHovered && styles.projectImageHovered]}
                                        resizeMode="cover"
                                    />
                                </View>

                                <View style={styles.content}>
                                    <Text style={[styles.title, isMobile && mobile.title]}>{project.name}</Text>
                                    <Text style={styles.description}>{project.desc}</Text>

                                    <HoverFillButton style={styles.viewButton} onPress={() => openProject(project.slug)}>
                                        {(hovered) => (
                                            <>
                                                <Text style={[styles.viewButtonText, hovered && styles.viewButtonTextHovered]}>View Project</Text>
                                                <ArrowUpRight color={hovered ? Colors.background : Colors.text} size={16} />
                                            </>
                                        )}
                                    </HoverFillButton>
                                </View>
                            </>
                        )}
                    </Pressable>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '15%',
        paddingVertical: 80,
        backgroundColor: Colors.background,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 95,
        fontFamily: 'Inter_700Bold',
        marginBottom: 60,
        textAlign: 'left',
        letterSpacing: -5,
        textTransform: 'uppercase',
        lineHeight: 90,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 40,
        justifyContent: 'center', // Center grid items
    },
    cardContainer: {
        cursor: 'pointer',
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
        transitionProperty: 'transform',
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
    projectImageHovered: {
        transform: [{ scale: 1.08 }],
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
        backgroundColor: Colors.card, // Light card background
        alignSelf: 'flex-start',
        borderRadius: 4,
    },
    viewButtonText: {
        color: Colors.text,
        fontSize: 14,
        fontFamily: 'Inter_600SemiBold',
        transitionProperty: 'color',
        transitionDuration: '350ms',
    },
    viewButtonTextHovered: {
        color: Colors.background,
    },
});

// Phone overrides
const mobile = StyleSheet.create({
    cardContainer: {
        flexBasis: 'auto',
        marginBottom: 0,
    },
    imageContainer: {
        height: 260,
    },
    title: {
        fontSize: 26,
    },
});
