import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Image as RNImage, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
    Easing,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import Reveal from './ui/Reveal';
import useHover from './ui/useHover';

const reviews = [
    {
        id: 1,
        name: 'Harper Jackson',
        role: 'Founder & CEO & Dcode agency',
        text: 'Working with Alex on our mobile banking app was a game-changer. His design skills and understanding of user experience are unparalleled.',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    },
    {
        id: 2,
        name: 'Kakru Doman',
        role: 'Founder & CEO & Dcode agency',
        text: 'Collaborating with Alex on our project was a total game-changer. His creative vision and focus on user experience made a massive impact.',
        image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=200&auto=format&fit=crop',
    },
    {
        id: 3,
        name: 'Juli Fulk',
        role: 'Founder & CEO & Dcode agency',
        text: 'Alex brought a fresh perspective to our app. His design expertise and understanding of UX made a huge difference in the final product.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop',
    },
    {
        id: 4,
        name: 'Marco Reyes',
        role: 'Founder & CEO & Dcode agency',
        text: 'The rebrand landed exactly where we hoped. Clear thinking, sharp typography, and a process that kept every stakeholder in the loop.',
        image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop',
    },
];

// The reference stacks two reviews per slide and pages through them.
const slides = [];
for (let i = 0; i < reviews.length; i += 2) {
    slides.push(reviews.slice(i, i + 2));
}

const AUTOPLAY_MS = 5000;

function ReviewCard({ review }) {
    return (
        <View style={styles.card}>
            <Text style={styles.quote}>&ldquo;{review.text}&rdquo;</Text>
            <View style={styles.profile}>
                <RNImage source={{ uri: review.image }} style={styles.avatar} />
                <View style={styles.profileText}>
                    <Text style={styles.name}>{review.name}</Text>
                    <Text style={styles.role}>{review.role}</Text>
                </View>
            </View>
        </View>
    );
}

function ArrowControl({ children, onPress }) {
    const { hover, handlers } = useHover();

    const style = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(hover.value, [0, 1], [Colors.surface, '#e8e8e8']),
        transform: [{ scale: 1 - 0.04 * hover.value }],
    }));

    return (
        <Pressable {...handlers} onPress={onPress}>
            <Animated.View style={[styles.control, style]}>{children}</Animated.View>
        </Pressable>
    );
}

export default function Reviews() {
    const [index, setIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);
    const offset = useSharedValue(0);
    const timer = useRef(null);

    const goTo = useCallback(
        (next) => {
            const wrapped = (next + slides.length) % slides.length;
            setIndex(wrapped);
        },
        []
    );

    useEffect(() => {
        offset.value = withTiming(-index * slideWidth, {
            duration: 620,
            easing: Easing.bezier(0.16, 1, 0.3, 1),
        });
    }, [index, slideWidth, offset]);

    useEffect(() => {
        timer.current = setInterval(() => setIndex((i) => (i + 1) % slides.length), AUTOPLAY_MS);
        return () => clearInterval(timer.current);
    }, []);

    const trackStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: offset.value }],
    }));

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Reveal offset={40}>
                    <Text style={styles.sectionTitle}>Client{'\n'}Reviews</Text>
                </Reveal>

                <Reveal offset={60} style={styles.viewport}>
                    <View
                        style={styles.clip}
                        onLayout={(e) => setSlideWidth(e.nativeEvent.layout.width)}
                    >
                        <Animated.View style={[styles.track, trackStyle]}>
                            {slides.map((slide, i) => (
                                <View
                                    key={i}
                                    style={[styles.slide, slideWidth ? { width: slideWidth } : null]}
                                >
                                    {slide.map((review) => (
                                        <ReviewCard key={review.id} review={review} />
                                    ))}
                                </View>
                            ))}
                        </Animated.View>
                    </View>

                    <View style={styles.controls}>
                        <ArrowControl onPress={() => goTo(index - 1)}>
                            <ArrowLeft color={Colors.text} size={18} />
                        </ArrowControl>
                        <ArrowControl onPress={() => goTo(index + 1)}>
                            <ArrowRight color={Colors.text} size={18} />
                        </ArrowControl>
                    </View>
                </Reveal>
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
        gap: 37,
    },
    sectionTitle: {
        ...Type.section,
        color: Colors.text,
    },
    viewport: {
        width: '100%',
        gap: 24,
    },
    clip: {
        width: '100%',
        overflow: 'hidden',
    },
    track: {
        flexDirection: 'row',
    },
    slide: {
        gap: 24,
    },
    card: {
        width: '100%',
        backgroundColor: Colors.surface,
        padding: isPhone ? 20 : 28,
        gap: isPhone ? 28 : 50,
        justifyContent: 'space-between',
    },
    quote: {
        fontSize: isPhone ? 16 : 18,
        lineHeight: isPhone ? 26 : 28,
        letterSpacing: -0.36,
        fontFamily: 'Inter_400Regular',
        color: Colors.text,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Colors.card,
    },
    profileText: {
        gap: 4,
    },
    name: {
        fontSize: 18,
        lineHeight: 28,
        letterSpacing: -0.36,
        fontFamily: 'Inter_600SemiBold',
        color: Colors.text,
    },
    role: {
        ...Type.small,
        color: Colors.textMuted,
    },
    controls: {
        flexDirection: 'row',
        gap: 10,
        alignSelf: 'flex-end',
    },
    control: {
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
