import React from 'react';
import { Dimensions, Image as RNImage, StyleSheet, Text, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import { useScrollY } from '../contexts/ScrollContext';
import ArrowButton from './ui/ArrowButton';
import LineReveal from './ui/LineReveal';
import Reveal from './ui/Reveal';

// The reference shows three client wordmarks spread across the left column.
const clients = ['DCODE', 'TECHFLOW', 'LUMINOUS'];
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

export default function Hero() {
    const scrollY = useScrollY();

    // Slow parallax drift on the hero image, as on the reference site.
    const imageStyle = useAnimatedStyle(() => {
        const y = scrollY ? scrollY.value : 0;
        return {
            transform: [
                { translateY: interpolate(y, [0, SCREEN_HEIGHT], [0, -60], 'clamp') },
                { scale: interpolate(y, [0, SCREEN_HEIGHT], [1, 1.08], 'clamp') },
            ],
        };
    });

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <View style={styles.headline}>
                    <LineReveal textStyle={styles.greeting} delay={100} duration={700}>
                        Hello, I&rsquo;m Jaxon Grayson
                    </LineReveal>
                    <LineReveal textStyle={styles.title} delay={250}>
                        Designer+
                    </LineReveal>
                    <LineReveal textStyle={styles.title} delay={400}>
                        Developer
                    </LineReveal>
                </View>

                <View style={styles.bottom}>
                    {/* Left column matches the image height and pushes the client
                        strip to the bottom, as the reference does. */}
                    <Reveal style={styles.leftColumn} delay={200}>
                        <View style={styles.paragraphBlock}>
                            <Text style={styles.description}>
                                A visionary Art Director from Brooklyn, showcases a portfolio of visually stunning
                                campaigns that blend artistry and innovation. His work spans multiple mediums, from
                                print to digital, and demonstrates a keen eye for bold typography, striking imagery,
                                and compelling storytelling.
                            </Text>
                            <ArrowButton label="Contact Now" size="small" />
                        </View>

                        <View style={styles.clients}>
                            <Text style={styles.clientsLabel}>FEATURED CLIENTS</Text>
                            <View style={styles.logoRow}>
                                {clients.map((client) => (
                                    <Text key={client} style={styles.clientLogo}>
                                        {client}
                                    </Text>
                                ))}
                            </View>
                        </View>
                    </Reveal>

                    <Reveal style={styles.rightColumn} delay={320} offset={70} scale={0.94}>
                        <Animated.View style={[styles.imageWrap, imageStyle]}>
                            <RNImage
                                source={{
                                    uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1000&auto=format&fit=crop',
                                }}
                                style={styles.image}
                                resizeMode="cover"
                            />
                        </Animated.View>
                    </Reveal>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Layout.gutter,
        paddingTop: isPhone ? 60 : 105,
        paddingBottom: Layout.sectionSpacing,
        backgroundColor: Colors.background,
    },
    content: {
        width: '100%',
        maxWidth: Layout.maxWidth,
        alignSelf: 'center',
    },
    headline: {
        alignItems: 'center',
        marginBottom: isPhone ? 48 : 80,
    },
    greeting: {
        ...Type.body,
        fontSize: isPhone ? 18 : 22,
        color: Colors.text,
        textAlign: 'center',
        marginBottom: 12,
    },
    title: {
        ...Type.display,
        color: Colors.text,
        textAlign: 'center',
    },
    bottom: {
        flexDirection: isPhone ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: isPhone ? 40 : 55,
        alignItems: 'stretch',
    },
    leftColumn: {
        flex: isPhone ? undefined : 501,
        width: isPhone ? '100%' : undefined,
        justifyContent: 'space-between',
        gap: 40,
    },
    paragraphBlock: {
        gap: 40,
        alignItems: 'flex-start',
    },
    rightColumn: {
        flex: isPhone ? undefined : 444,
        width: isPhone ? '100%' : undefined,
    },
    description: {
        ...Type.body,
        color: Colors.textSecondary,
    },
    imageWrap: {
        width: '100%',
        aspectRatio: 444 / 480,
        overflow: 'hidden',
        backgroundColor: Colors.card,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    clients: {
        gap: 24,
    },
    clientsLabel: {
        ...Type.label,
        color: Colors.text,
    },
    logoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    clientLogo: {
        fontSize: 20,
        lineHeight: 30,
        fontFamily: 'Inter_700Bold',
        letterSpacing: -0.8,
        color: Colors.text,
        opacity: 0.55,
    },
});
