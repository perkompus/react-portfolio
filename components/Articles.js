import React from 'react';
import { Image as RNImage, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { ArrowUpRight } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import useGridWidth from './ui/useGridWidth';
import useHover from './ui/useHover';

const articles = [
    {
        id: 1,
        category: 'Marketing',
        date: 'Jan 22, 2024',
        title: 'Marketing Insights: Email Campaign Strategies',
        preview: 'Explore the latest strategies for email marketing campaigns that drive engagement and conversions.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 2,
        category: 'Startups',
        date: 'Jan 23, 2024',
        title: "Designers' Hub: Tips and Tricks for Creatives",
        preview: 'A curated collection of design tips, tools, and workflows to help creative professionals work smarter.',
        image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1000&auto=format&fit=crop',
    },
    {
        id: 3,
        category: 'Business',
        date: 'Jan 24, 2024',
        title: 'Code Crafting: Mastering Web Development',
        preview: 'Practical patterns and habits that separate maintainable front-end code from the rest.',
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1000&auto=format&fit=crop',
    },
];

function ArticleCard({ article }) {
    const { hover, handlers } = useHover(420);

    const imageStyle = useAnimatedStyle(() => ({
        transform: [{ scale: 1 + 0.07 * hover.value }],
    }));

    const cardStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: -10 * hover.value }],
    }));

    const readStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: 6 * hover.value }],
    }));

    return (
        <Pressable {...handlers}>
            <Animated.View style={[styles.card, cardStyle]}>
                <View style={styles.imageWrap}>
                    <Animated.View style={[styles.imageInner, imageStyle]}>
                        <RNImage source={{ uri: article.image }} style={styles.image} resizeMode="cover" />
                    </Animated.View>
                </View>

                <View style={styles.meta}>
                    <View style={styles.pill}>
                        <Text style={styles.pillText}>{article.category}</Text>
                    </View>
                    <Text style={styles.date}>{article.date}</Text>
                </View>

                <Text style={styles.title}>{article.title}</Text>
                <Text style={styles.preview}>{article.preview}</Text>

                <Animated.View style={[styles.readMore, readStyle]}>
                    <Text style={styles.readText}>Read more</Text>
                    <ArrowUpRight color={Colors.text} size={16} />
                </Animated.View>
            </Animated.View>
        </Pressable>
    );
}

const GRID_GAP = isPhone ? 40 : 20;

export default function Articles() {
    const { onLayout, itemWidth } = useGridWidth(isPhone ? 1 : 3, GRID_GAP);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <SectionHeading style={styles.heading}>Articles</SectionHeading>

                <View style={styles.grid} onLayout={onLayout}>
                    {articles.map((article, i) => (
                        <Reveal key={article.id} style={[styles.gridItem, { width: itemWidth }]} delay={i * 110} offset={60} scale={0.96}>
                            <ArticleCard article={article} />
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
        gap: 16,
    },
    imageWrap: {
        width: '100%',
        aspectRatio: 3 / 2,
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
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    pill: {
        backgroundColor: Colors.surface,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    pillText: {
        ...Type.label,
        color: Colors.text,
    },
    date: {
        ...Type.label,
        color: Colors.textMuted,
    },
    title: {
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: -0.8,
        fontFamily: 'Inter_600SemiBold',
        color: Colors.text,
    },
    preview: {
        ...Type.small,
        color: Colors.textSecondary,
    },
    readMore: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    readText: {
        ...Type.small,
        fontFamily: 'Inter_600SemiBold',
        color: Colors.text,
    },
});
