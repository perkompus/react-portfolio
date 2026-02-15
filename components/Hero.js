import React from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Image as RNImage } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { ArrowUpRight } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

export default function Hero() {
    return (
        <View style={styles.container}>
            {/* Background Gradient Effect - subtle */}
            <LinearGradient
                colors={[Colors.background, '#f5f5f5', Colors.background]}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                locations={[0, 0.5, 1]}
                opacity={0.5}
            />

            <View style={styles.content}>
                {/* Header Content: Greeting & Title */}
                <View style={styles.headerContent}>
                    <Animated.Text
                        entering={FadeInDown.delay(200).duration(1000)}
                        style={styles.greeting}
                    >
                        Hello, I’m Jaxon Grayson
                    </Animated.Text>

                    <View style={styles.titleContainer}>
                        <Animated.Text
                            entering={FadeInDown.delay(400).duration(1000)}
                            style={styles.title}
                        >
                            DESIGNER +
                        </Animated.Text>
                        <Animated.Text
                            entering={FadeInDown.delay(600).duration(1000)}
                            style={styles.title}
                        >
                            DEVELOPER
                        </Animated.Text>
                    </View>
                </View>

                {/* Split Section: Description & Image */}
                <Animated.View
                    entering={FadeInDown.delay(800).duration(1000)}
                    style={styles.splitSection}
                >
                    <View style={styles.leftColumn}>
                        <Text style={styles.description}>
                            A visionary Art Director from Brooklyn, showcases a portfolio of visually stunning campaigns that blend artistry and innovation. His work spans multiple mediums, from print to digital, and demonstrates a keen eye for bold typography, striking imagery, and compelling storytelling.
                        </Text>

                        <TouchableOpacity style={styles.ctaButton}>
                            <Text style={styles.ctaText}>Contact Now</Text>
                            <ArrowUpRight color={Colors.background} size={20} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.rightColumn}>
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
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
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
        borderRadius: 20,
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
    },
    ctaText: {
        color: Colors.background,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
    heroImage: {
        width: '100%',
        height: '100%',
    },
});
