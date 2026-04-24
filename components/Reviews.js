import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Image as RNImage, ScrollView, Dimensions, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';

const reviews = [
    {
        id: 1,
        name: 'Harper Jackson',
        role: 'Founder & CEO',
        company: 'Dcode Agency',
        text: 'Working with Alex on our mobile banking app was a game-changer. His design skills and understanding of user experience are unparalleled.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Kakru Doman',
        role: 'Creative Director',
        company: 'TechFlow',
        text: 'Collaborating with Alex on our project was a total game-changer. His creative vision and focus on user experience made a massive impact.',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Juli Fulk',
        role: 'Product Manager',
        company: 'GrowthCo',
        text: 'Alex brought a fresh perspective to our app. His design expertise and understanding of UX made a huge difference in the final product.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    },
];

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH > 900 ? (SCREEN_WIDTH * 0.7) / 2 : SCREEN_WIDTH * 0.82;
const CARD_GAP = 20;

export default function Reviews() {
    const scrollViewRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % reviews.length;
            setActiveIndex(nextIndex);
            scrollViewRef.current?.scrollTo({ x: nextIndex * (CARD_WIDTH + CARD_GAP), animated: true });
        }, 4000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    const handleNav = (direction) => {
        let next = direction === 'next' ? activeIndex + 1 : activeIndex - 1;
        if (next >= reviews.length) next = 0;
        if (next < 0) next = reviews.length - 1;
        setActiveIndex(next);
        scrollViewRef.current?.scrollTo({ x: next * (CARD_WIDTH + CARD_GAP), animated: true });
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerRow}>
                <View>
                    <Text style={styles.sectionHeader}>CLIENT</Text>
                    <Text style={styles.sectionHeader}>REVIEWS</Text>
                </View>
                <View style={styles.navButtons}>
                    <Pressable onPress={() => handleNav('prev')} style={styles.navButton}>
                        <Text style={styles.navArrow}>←</Text>
                    </Pressable>
                    <Pressable onPress={() => handleNav('next')} style={styles.navButton}>
                        <Text style={styles.navArrow}>→</Text>
                    </Pressable>
                </View>
            </View>

            <ScrollView
                ref={scrollViewRef}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
                decelerationRate="fast"
                snapToInterval={CARD_WIDTH + CARD_GAP}
                snapToAlignment="start"
            >
                {reviews.map((review) => (
                    <View key={review.id} style={[styles.card, { width: CARD_WIDTH }]}>
                        <Text style={styles.reviewText}>"{review.text}"</Text>
                        <View style={styles.author}>
                            <RNImage source={{ uri: review.image }} style={styles.avatar} />
                            <View>
                                <Text style={styles.authorName}>{review.name}</Text>
                                <Text style={styles.authorRole}>{review.role} · {review.company}</Text>
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
        paddingTop: 100,
        paddingBottom: 100,
        paddingHorizontal: '15%',
        backgroundColor: Colors.background,
    },
    headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 60,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 95,
        fontFamily: 'Inter_700Bold',
        letterSpacing: -5,
        lineHeight: 90,
        textTransform: 'uppercase',
    },
    navButtons: {
        flexDirection: 'row',
        gap: 10,
    },
    navButton: {
        width: 80,
        height: 50,
        backgroundColor: Colors.border,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 0,
        borderWidth: 1,
        borderColor: Colors.text,
    },
    navArrow: {
        color: Colors.text,
        fontSize: 24,
    },
    scrollContent: {
        gap: CARD_GAP,
    },
    card: {
        backgroundColor: Colors.card,
        padding: 60,
    },
    reviewText: {
        color: Colors.text,
        fontSize: 28,
        fontFamily: 'Inter_600SemiBold',
        lineHeight: 40,
        marginBottom: 40,
        letterSpacing: -0.5,
    },
    author: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15,
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: Colors.border,
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
        marginTop: 2,
    },
});
