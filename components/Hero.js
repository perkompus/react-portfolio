import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { Colors } from '../constants/Colors';

const { width } = Dimensions.get('window');

export default function Hero() {
    return (
        <View style={styles.container}>
            {/* Background Gradient Effect */}
            <LinearGradient
                colors={[Colors.gradientStart, Colors.background]}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />

            <View style={styles.content}>
                <Animated.Text
                    entering={FadeInDown.delay(200).duration(1000)}
                    style={styles.greeting}
                >
                    Hello, I’m Jaxon Grayson
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(400).duration(1000)}
                    style={styles.title}
                >
                    Developer
                </Animated.Text>

                <Animated.Text
                    entering={FadeInDown.delay(600).duration(1000)}
                    style={styles.description}
                >
                    A visionary Art Director from Brooklyn, showcases a portfolio of visually stunning campaigns that blend artistry and innovation.
                </Animated.Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 100,
        paddingBottom: 40,
        justifyContent: 'center',
        minHeight: Dimensions.get('window').height * 0.8,
    },
    content: {
        width: '100%',
    },
    greeting: {
        color: Colors.textSecondary,
        fontSize: 18,
        fontWeight: '500',
        marginBottom: 15,
        letterSpacing: 0.5,
    },
    title: {
        color: Colors.text,
        fontSize: 80, // Massive text
        fontWeight: '900',
        marginBottom: 25,
        lineHeight: 85,
        letterSpacing: -2,
    },
    description: {
        color: Colors.textSecondary,
        fontSize: 20,
        lineHeight: 32,
        maxWidth: 500,
    },
});
