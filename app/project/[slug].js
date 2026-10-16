import React, { useEffect, useRef } from 'react';
import { StyleSheet, ScrollView, View, Text, Image as RNImage } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft } from 'lucide-react-native';
import { Colors } from '../../constants/Colors';
import { projects, getProject } from '../../constants/projects';

import Header from '../../components/Header';
import Projects from '../../components/Projects';
import Footer from '../../components/Footer';
import FadeInOnScroll from '../../components/FadeInOnScroll';
import HoverFillButton from '../../components/HoverFillButton';

function TextSection({ title, paragraphs }) {
    return (
        <FadeInOnScroll style={styles.textSection}>
            <Text style={styles.sectionTitle}>{title}</Text>
            {paragraphs.map((paragraph, index) => (
                <Text key={index} style={styles.paragraph}>{paragraph}</Text>
            ))}
        </FadeInOnScroll>
    );
}

export default function ProjectDetail() {
    const { slug } = useLocalSearchParams();
    const router = useRouter();
    const scrollRef = useRef(null);
    const project = getProject(slug);

    // Start each project at the top when moving between projects
    useEffect(() => {
        scrollRef.current?.scrollTo({ y: 0, animated: false });
    }, [slug]);

    if (!project) {
        return (
            <SafeAreaView style={styles.container} edges={['top']}>
                <Stack.Screen options={{ headerShown: false, title: 'Project not found' }} />
                <Header />
                <View style={styles.notFound}>
                    <Text style={styles.sectionTitle}>Project not found</Text>
                </View>
            </SafeAreaView>
        );
    }

    // Two other projects, starting after this one, like the original "More Projects" row
    const index = projects.indexOf(project);
    const moreProjects = [1, 2].map((offset) => projects[(index + offset) % projects.length]);

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false, title: `${project.name} - Jaxon Portfolio` }} />
            <Header />
            <ScrollView ref={scrollRef} style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.page}>
                    <FadeInOnScroll>
                        <HoverFillButton
                            style={styles.backButton}
                            fillColor={Colors.card}
                            onPress={() => (router.canGoBack() ? router.back() : router.navigate('/'))}
                        >
                            {() => (
                                <>
                                    <ArrowLeft color={Colors.text} size={18} />
                                    <Text style={styles.backText}>Back</Text>
                                </>
                            )}
                        </HoverFillButton>

                        <Text style={styles.title}>{project.name}</Text>
                    </FadeInOnScroll>

                    <FadeInOnScroll delay={150} style={styles.detailsRow}>
                        {Object.entries(project.details).map(([label, value]) => (
                            <View key={label} style={styles.detail}>
                                <Text style={styles.detailLabel}>{label}</Text>
                                <Text style={styles.detailValue}>{value}</Text>
                            </View>
                        ))}
                    </FadeInOnScroll>

                    <FadeInOnScroll delay={300} style={styles.coverContainer}>
                        <RNImage source={{ uri: project.cover }} style={styles.image} resizeMode="cover" />
                    </FadeInOnScroll>

                    <TextSection title="Overview" paragraphs={project.overview} />

                    <FadeInOnScroll style={styles.galleryWide}>
                        <RNImage source={{ uri: project.gallery[0] }} style={styles.image} resizeMode="cover" />
                    </FadeInOnScroll>
                    <View style={styles.galleryRow}>
                        {project.gallery.slice(1).map((uri, i) => (
                            <FadeInOnScroll key={uri} delay={i * 150} style={styles.galleryHalf}>
                                <RNImage source={{ uri }} style={styles.image} resizeMode="cover" />
                            </FadeInOnScroll>
                        ))}
                    </View>

                    <TextSection title="Problems" paragraphs={project.problems} />
                    <TextSection title="Solutions" paragraphs={project.solutions} />
                </View>

                <FadeInOnScroll>
                    <Projects title="MORE PROJECTS" projects={moreProjects} />
                </FadeInOnScroll>
                <FadeInOnScroll>
                    <Footer />
                </FadeInOnScroll>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    scrollView: {
        flex: 1,
    },
    page: {
        paddingHorizontal: '15%',
        paddingTop: 40,
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        alignSelf: 'flex-start',
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 6,
        marginBottom: 40,
    },
    backText: {
        color: Colors.text,
        fontSize: 15,
        fontFamily: 'Inter_500Medium',
    },
    title: {
        color: Colors.text,
        fontSize: 120,
        fontFamily: 'Inter_900Black',
        letterSpacing: -5,
        lineHeight: 120,
        textAlign: 'center',
        textTransform: 'uppercase',
        marginBottom: 60,
    },
    detailsRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 30,
        paddingVertical: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: Colors.border,
        marginBottom: 60,
    },
    detail: {
        minWidth: 140,
    },
    detailLabel: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'Inter_500Medium',
        marginBottom: 8,
    },
    detailValue: {
        color: Colors.text,
        fontSize: 18,
        fontFamily: 'Inter_600SemiBold',
    },
    coverContainer: {
        width: '100%',
        height: 600,
        backgroundColor: Colors.card,
        overflow: 'hidden',
        marginBottom: 80,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textSection: {
        maxWidth: 800,
        marginBottom: 80,
    },
    sectionTitle: {
        color: Colors.text,
        fontSize: 40,
        fontFamily: 'Inter_700Bold',
        letterSpacing: -1.5,
        marginBottom: 24,
    },
    paragraph: {
        color: Colors.textSecondary,
        fontSize: 18,
        lineHeight: 30,
        fontFamily: 'Inter_400Regular',
        marginBottom: 20,
    },
    galleryWide: {
        width: '100%',
        height: 500,
        backgroundColor: Colors.card,
        overflow: 'hidden',
        marginBottom: 20,
    },
    galleryRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 20,
        marginBottom: 80,
    },
    galleryHalf: {
        flex: 1,
        minWidth: 280,
        height: 400,
        backgroundColor: Colors.card,
        overflow: 'hidden',
    },
});
