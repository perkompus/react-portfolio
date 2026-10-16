import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image as RNImage } from 'react-native';
import Animated, { FadeInDown, Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';
import { ArrowUpRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';
import HoverFillButton from './HoverFillButton';
import { useIsMobile } from '../constants/responsive';

const { width } = Dimensions.get('window');

// Slides a line in horizontally from `from` px offset (negative = left, positive = right)
function useSlideIn(from, delay) {
    const progress = useSharedValue(0);

    useEffect(() => {
        progress.value = withDelay(delay, withTiming(1, { duration: 1200, easing: Easing.out(Easing.cubic) }));
    }, []);

    return useAnimatedStyle(() => ({
        opacity: progress.value,
        transform: [{ translateX: from * (1 - progress.value) }],
    }));
}

export default function Hero({ onContact }) {
    const isMobile = useIsMobile();
    const slideDistance = isMobile ? 40 : 80;
    const greetingStyle = useSlideIn(-slideDistance, 200);
    const designerStyle = useSlideIn(-slideDistance, 400);
    const developerStyle = useSlideIn(slideDistance, 400);

    return (
        <View style={[styles.container, isMobile && mobile.container]}>
            <View style={styles.content}>
                {/* Header Content: Greeting & Title */}
                <View style={[styles.headerContent, isMobile && mobile.headerContent]}>
                    <Animated.Text style={[styles.greeting, isMobile && mobile.greeting, greetingStyle]}>
                        Hello, I’m Jaxon Grayson
                    </Animated.Text>

                    <View style={styles.titleContainer}>
                        <Animated.Text style={[styles.title, isMobile && mobile.title, designerStyle]}>
                            DESIGNER +
                        </Animated.Text>
                        <Animated.Text style={[styles.title, isMobile && mobile.title, developerStyle]}>
                            DEVELOPER
                        </Animated.Text>
                    </View>
                </View>

                {/* Split Section: Description & Image */}
                <Animated.View
                    entering={FadeInDown.delay(800).duration(1000)}
                    style={[styles.splitSection, isMobile && mobile.splitSection]}
                >
                    <View style={[styles.leftColumn, isMobile && mobile.column]}>
                        <Text style={[styles.description, isMobile && mobile.description]}>
                            A visionary Art Director from Brooklyn, showcases a portfolio of visually stunning campaigns that blend artistry and innovation. His work spans multiple mediums, from print to digital, and demonstrates a keen eye for bold typography, striking imagery, and compelling storytelling.
                        </Text>

                        <HoverFillButton style={styles.ctaButton} fillColor={Colors.background} onPress={onContact}>
                            {(hovered) => (
                                <>
                                    <Text style={[styles.ctaText, hovered && styles.ctaTextHovered]}>Contact Now</Text>
                                    <ArrowUpRight color={hovered ? Colors.text : Colors.background} size={20} />
                                </>
                            )}
                        </HoverFillButton>
                    </View>

                    <View style={[styles.rightColumn, isMobile && mobile.rightColumn]}>
                        {/* 
                            Note: The exact image from the screenshot is not available in the provided context.
                            Using a high-quality placeholder that fits the aesthetic.
                        */}
                        <RNImage
                            source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop' }}
                            style={styles.heroImage}
                            resizeMode="cover"
                        />
                    </View>
                </Animated.View>

                {/* Featured Clients Section */}
                <Animated.View
                    entering={FadeInDown.delay(1000).duration(1000)}
                    style={[styles.clientsSection, isMobile && mobile.clientsSection]}
                >
                    <Text style={styles.clientsLabel}>TRUSTED BY</Text>
                    <View style={[styles.logoRow, isMobile && mobile.logoRow]}>
                        <Text style={[styles.logoText, isMobile && mobile.logoText]}>DCODE</Text>
                        <Text style={[styles.logoText, isMobile && mobile.logoText]}>TECHFLOW</Text>
                        <Text style={[styles.logoText, isMobile && mobile.logoText]}>GROWTHCO</Text>
                        <Text style={[styles.logoText, isMobile && mobile.logoText]}>LUMINOUS</Text>
                        <Text style={[styles.logoText, isMobile && mobile.logoText]}>ASPECT</Text>
                    </View>
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden', // Keep sliding title lines from causing horizontal scroll
        paddingHorizontal: '15%',
        paddingTop: 60,
        paddingBottom: 80,
        backgroundColor: Colors.background,
        minHeight: Dimensions.get('window').height,
        justifyContent: 'center',
    },
    content: {
        maxWidth: 1400, // Limit width on large screens
        width: '100%',
        alignSelf: 'center',
    },
    headerContent: {
        alignItems: 'center',
        marginBottom: 80,
    },
    greeting: {
        color: Colors.text,
        fontSize: 24,
        fontFamily: 'Inter_400Regular',
        marginBottom: 20,
        letterSpacing: -0.5,
    },
    titleContainer: {
        alignItems: 'center',
    },
    title: {
        color: Colors.text,
        fontSize: 100, // Scaled for immediate impact
        fontFamily: 'Inter_900Black',
        lineHeight: 90,
        letterSpacing: -4,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    splitSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 60,
        flexWrap: 'wrap',
    },
    leftColumn: {
        flex: 1,
        minWidth: 300,
        paddingTop: 20,
    },
    rightColumn: {
        flex: 1,
        minWidth: 300,
        height: 500,
        borderRadius: 0,
        overflow: 'hidden',
        backgroundColor: '#f0f0f0',
    },
    description: {
        color: Colors.text,
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Inter_400Regular',
        marginBottom: 40,
        maxWidth: 500,
    },
    ctaButton: {
        backgroundColor: Colors.text,
        paddingHorizontal: 32,
        paddingVertical: 16,
        borderRadius: 4,
        alignSelf: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        borderColor: Colors.text,
    },
    ctaText: {
        color: Colors.background,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        transitionProperty: 'color',
        transitionDuration: '350ms',
    },
    ctaTextHovered: {
        color: Colors.text,
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
    clientsSection: {
        marginTop: 80,
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.1)',
        paddingTop: 40,
    },
    clientsLabel: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'Inter_600SemiBold',
        letterSpacing: 1,
        marginBottom: 30,
    },
    logoRow: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 60,
        alignItems: 'center',
        opacity: 0.6,
    },
    logoText: {
        color: Colors.text,
        fontSize: 24,
        fontFamily: 'Inter_700Bold', // Simulating logos with bold text
        letterSpacing: -1,
    },
});

// Phone overrides
const mobile = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 40,
        paddingBottom: 60,
        minHeight: 0,
    },
    headerContent: {
        marginBottom: 40,
    },
    greeting: {
        fontSize: 18,
        marginBottom: 12,
    },
    title: {
        fontSize: 52,
        lineHeight: 50,
        letterSpacing: -2,
    },
    splitSection: {
        gap: 32,
    },
    column: {
        minWidth: 0,
        flexBasis: '100%',
        paddingTop: 0,
    },
    description: {
        fontSize: 16,
        lineHeight: 26,
        marginBottom: 28,
    },
    rightColumn: {
        minWidth: 0,
        flexBasis: '100%',
        height: 420,
    },
    clientsSection: {
        marginTop: 50,
        paddingTop: 30,
    },
    logoRow: {
        gap: 24,
    },
    logoText: {
        fontSize: 18,
    },
});
