import React from 'react';
import { Image as RNImage, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import ArrowButton from './ui/ArrowButton';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import useGridWidth from './ui/useGridWidth';
import useHover from './ui/useHover';

const projects = [
    {
        id: 1,
        name: 'Brander',
        desc: 'Implemented user research and testing to create a visually appealing and highly functional interface that increased user engagement and sales.',
        image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Arcane',
        desc: 'Conducted user research and testing to design an intuitive, visually stunning interface that boosted user engagement and conversions.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Quorra',
        desc: 'Leveraged user research and testing to create an attractive and highly functional interface that drove increased engagement and sales.',
        image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 4,
        name: 'Solara',
        desc: 'Implemented user research and testing to develop a sleek, functional interface that significantly improved user engagement and revenue.',
        image: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 5,
        name: 'Futura',
        desc: 'Applied user research and testing to design a visually compelling, easy-to-use interface that enhanced user engagement and sales.',
        image: 'https://images.unsplash.com/photo-1524169358666-79f22534bc6e?q=80&w=1200&auto=format&fit=crop',
    },
    {
        id: 6,
        name: 'Meraki',
        desc: 'Used user research and testing to craft a visually appealing, user-friendly interface that boosted both engagement and revenue.',
        image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop',
    },
];

function ProjectCard({ project }) {
    const { hover, handlers } = useHover(420);

    const imageStyle = useAnimatedStyle(() => ({
        transform: [{ scale: 1 + 0.06 * hover.value }],
    }));

    const overlayStyle = useAnimatedStyle(() => ({
        opacity: 0.18 * hover.value,
    }));

    const contentStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: -6 * hover.value }],
    }));

    return (
        <Pressable {...handlers} style={styles.card}>
            <View style={styles.imageWrap}>
                <Animated.View style={[styles.imageInner, imageStyle]}>
                    <RNImage source={{ uri: project.image }} style={styles.image} resizeMode="cover" />
                </Animated.View>
                <Animated.View style={[styles.overlay, overlayStyle]} />
            </View>

            <Animated.View style={[styles.cardContent, contentStyle]}>
                <View style={styles.cardText}>
                    <Text style={styles.cardTitle}>{project.name}</Text>
                    <Text style={styles.cardDesc}>{project.desc}</Text>
                </View>
                <ArrowButton label="View Project" variant="muted" size="small" />
            </Animated.View>
        </Pressable>
    );
}

const GRID_GAP = isPhone ? 40 : 40;

export default function Projects() {
    const { onLayout, itemWidth } = useGridWidth(isPhone ? 1 : 2, GRID_GAP);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <SectionHeading style={styles.heading}>Projects</SectionHeading>

                <View style={styles.grid} onLayout={onLayout}>
                    {projects.map((project, i) => (
                        <Reveal
                            key={project.id}
                            style={[styles.gridItem, { width: itemWidth }]}
                            delay={(i % 2) * 120}
                            offset={60}
                            scale={0.96}
                        >
                            <ProjectCard project={project} />
                        </Reveal>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Layout.gutter,
        paddingVertical: Layout.sectionSpacing,
        backgroundColor: Colors.background,
    },
    content: {
        width: '100%',
        maxWidth: Layout.maxWidth,
        alignSelf: 'center',
    },
    heading: {
        marginBottom: 80,
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: GRID_GAP,
    },
    gridItem: {
        width: '100%',
    },
    card: {
        width: '100%',
    },
    imageWrap: {
        width: '100%',
        aspectRatio: 580 / 429,
        overflow: 'hidden',
        backgroundColor: Colors.card,
    },
    imageInner: {
        width: '100%',
        height: '100%',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        pointerEvents: 'none',
        backgroundColor: Colors.text,
    },
    cardContent: {
        paddingTop: 12,
        gap: 23,
        alignItems: 'flex-start',
    },
    cardText: {
        gap: 4,
    },
    cardTitle: {
        ...Type.cardTitle,
        fontSize: isPhone ? 26 : 30,
        lineHeight: isPhone ? 32 : 36,
        color: Colors.text,
    },
    cardDesc: {
        ...Type.small,
        color: Colors.textSecondary,
    },
});
