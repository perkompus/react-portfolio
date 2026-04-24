import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { ScrollContext } from '../contexts/ScrollContext';

import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import SomeNumbers from '../components/SomeNumbers';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Articles from '../components/Articles';
import Footer from '../components/Footer';
import AnimatedSection from '../components/AnimatedSection';

export default function Home() {
    const scrollY = useSharedValue(0);
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
        },
    });

    return (
        <ScrollContext.Provider value={scrollY}>
            <SafeAreaView style={styles.container} edges={['top']}>
                <Stack.Screen options={{ headerShown: false }} />
                <Header />
                <Animated.ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                >
                    <Hero />
                    <AnimatedSection><Services /></AnimatedSection>
                    <AnimatedSection><Projects /></AnimatedSection>
                    <AnimatedSection><WorkExperience /></AnimatedSection>
                    <AnimatedSection><SomeNumbers /></AnimatedSection>
                    <AnimatedSection><Reviews /></AnimatedSection>
                    <AnimatedSection><FAQ /></AnimatedSection>
                    <AnimatedSection><Articles /></AnimatedSection>
                    <AnimatedSection><Footer /></AnimatedSection>
                </Animated.ScrollView>
            </SafeAreaView>
        </ScrollContext.Provider>
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
    content: {
        flexGrow: 1,
    },
});
