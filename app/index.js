import { StyleSheet, View } from 'react-native';
import { Stack } from 'expo-router';
import React, { useCallback, useRef } from 'react';
import Animated, { runOnJS, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
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

export default function Home() {
    const scrollY = useSharedValue(0);
    const listeners = useRef(new Set());

    const subscribe = useCallback((listener) => {
        listeners.current.add(listener);
        return () => listeners.current.delete(listener);
    }, []);

    const notify = useCallback((y) => {
        listeners.current.forEach((listener) => listener(y));
    }, []);

    // The shared value stays on the UI thread for frame-accurate parallax; the
    // JS-side notification is what lets one-shot reveals start their animation.
    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollY.value = event.contentOffset.y;
            runOnJS(notify)(event.contentOffset.y);
        },
    });

    const scroll = React.useMemo(() => ({ scrollY, subscribe }), [scrollY, subscribe]);

    return (
        <ScrollContext.Provider value={scroll}>
            <View style={styles.container}>
                <Stack.Screen options={{ headerShown: false }} />

                <Animated.ScrollView
                    style={styles.scrollView}
                    contentContainerStyle={styles.content}
                    showsVerticalScrollIndicator={false}
                    onScroll={scrollHandler}
                    scrollEventThrottle={16}
                >
                    <Header />
                    <Hero />
                    <Services />
                    <Projects />
                    <WorkExperience />
                    <SomeNumbers />
                    <Reviews />
                    <FAQ />
                    <Articles />
                    <Footer />
                </Animated.ScrollView>
            </View>
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
