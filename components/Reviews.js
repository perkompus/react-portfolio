import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image as RNImage, ScrollView, Dimensions, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';

const reviews = [
    { id: 1, name: 'Juli Fulk', role: 'Founder & CEO', company: 'Dcode Agency', text: 'Jaxon is a true professional. He delivered the project on time and exceeded our expectations. His attention to detail is unmatched.' },
    { id: 2, name: 'Alex Johnson', role: 'Product Manager', company: 'TechFlow', text: 'The design system delivered was comprehensive and easy to implement. It significantly sped up our development process.' },
    { id: 3, name: 'Sarah Lee', role: 'Marketing Director', company: 'GrowthCo', text: 'Incredible work on the rebranding. The new visual identity perfectly captures our company values and mission.' },
];

const SCREEN_WIDTH = Dimensions.get('window').width;
const CARD_WIDTH = SCREEN_WIDTH > 768 ? (SCREEN_WIDTH - 140) / 2 : SCREEN_WIDTH * 0.8; // Show 2 on desktop, 1 on mobile

export default function Reviews() {
    const scrollViewRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    // Auto-scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % reviews.length;
            setActiveIndex(nextIndex);
            scrollViewRef.current?.scrollTo({ x: nextIndex * (CARD_WIDTH + 20), animated: true });
        }, 4000); // Scroll every 4 seconds

        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleScroll = (direction) => {
        let nextIndex = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
        if (nextIndex >= reviews.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = reviews.length - 1;

        setActiveIndex(nextIndex);
        scrollViewRef.current?.scrollTo({ x: nextIndex * (CARD_WIDTH + 20), animated: true });
    };

    return (
        <View style={styles.container}>
            {/* Header Row: Title + Arrows */}
            <View style={styles.headerRow}>
                <View style={styles.titleContainer}>
                    <Text style={styles.sectionHeader}>CLIENT</Text>
                    <Text style={styles.sectionHeader}>REVIEWS</Text>
                </View>

                <View style={styles.navButtons}>
                    <Pressable onPress={() => handleScroll('prev')} style={styles.navButton}>
                        <Text style={styles.navArrow}>←</Text>
                    </Pressable>
                    <Pressable onPress={() => handleScroll('next')} style={styles.navButton}>
                        <Text style={styles.navArrow}>→</Text>
                    </Pressable>
                </View>
            </View>

            {/* Reviews Carousel */}
            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                pagingEnabled={false} // Custom paging via logic
                decelerationRate="fast"
                snapToInterval={CARD_WIDTH + 20}
            >
                {reviews.map((review) => (
                    <View key={review.id} style={[styles.reviewCard, { width: CARD_WIDTH }]}>
                        <Text style={styles.reviewText}>
                            "{review.text}"
                        </Text>

                        <View style={styles.authorContainer}>
                            <RNImage
                                source={{ uri: 'https://framerusercontent.com/images/123Placeholder.png' }} // Placeholder
                                style={styles.authorImage}
                            />
                            <View>
                                <Text style={styles.authorName}>{review.name}</Text>
                                <Text style={styles.authorRole}>{review.role} & {review.company}</Text>
                            </View>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 100,
        backgroundColor: Colors.background,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        marginBottom: 60,
    },
    titleContainer: {
        paddingLeft: '15%', // Indent 15% as requested
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 95, // Reduced size
        fontFamily: 'Inter_700Bold', // Reduced boldness
        letterSpacing: -5,
        textTransform: 'uppercase',
        lineHeight: 90,
    },
    navButtons: {
        flexDirection: 'row',
        gap: 10,
        paddingRight: '15%', // Indent 15% from right to match title
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
    scrollContent: {
        paddingHorizontal: 40, // Padding for the scroll view start
        paddingBottom: 20,
    },
    reviewCard: {
        backgroundColor: '#f9f9f9', // Very light grey
        padding: 60,
        marginRight: 20, // Gap between cards
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
