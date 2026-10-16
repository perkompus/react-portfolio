import React, { useCallback, useRef } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useFocusEffect, useLocalSearchParams } from 'expo-router';
import { Colors } from '../constants/Colors';

// Components
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
import FadeInOnScroll from '../components/FadeInOnScroll';

export default function Home() {
    const scrollRef = useRef(null);
    const contentRef = useRef(null);
    const sectionRefs = {
        services: useRef(null),
        projects: useRef(null),
        about: useRef(null),
        blog: useRef(null),
        contact: useRef(null),
    };

    // Measured at click time, since sections above can change height after first layout
    const scrollToSection = (name) => {
        const section = sectionRefs[name]?.current;
        if (!section) {
            scrollRef.current?.scrollTo({ y: 0, animated: true });
            return;
        }
        section.measureLayout(contentRef.current, (x, y) => {
            scrollRef.current?.scrollTo({ y, animated: true });
        });
    };

    // Arriving from another page via /?section=... (e.g. header/footer links on a project page)
    const { section } = useLocalSearchParams();
    // Runs on every return to this screen, so the same link works twice in a row
    useFocusEffect(
        useCallback(() => {
            if (!section) return;
            const timer = setTimeout(() => scrollToSection(section), 300);
            return () => clearTimeout(timer);
        }, [section])
    );

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />
            <Header onNavigate={scrollToSection} />
            <ScrollView
                ref={scrollRef}
                style={styles.scrollView}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <View ref={contentRef}>
                    <Hero onContact={() => scrollToSection('contact')} />
                    <View ref={sectionRefs.services}>
                        <FadeInOnScroll><Services /></FadeInOnScroll>
                    </View>
                    <View ref={sectionRefs.projects}>
                        <FadeInOnScroll><Projects /></FadeInOnScroll>
                    </View>
                    <View ref={sectionRefs.about}>
                        <FadeInOnScroll><WorkExperience /></FadeInOnScroll>
                    </View>
                    <FadeInOnScroll><SomeNumbers /></FadeInOnScroll>
                    <FadeInOnScroll><Reviews /></FadeInOnScroll>
                    <FadeInOnScroll><FAQ /></FadeInOnScroll>
                    <View ref={sectionRefs.blog}>
                        <FadeInOnScroll><Articles /></FadeInOnScroll>
                    </View>
                    <View ref={sectionRefs.contact}>
                        <FadeInOnScroll><Footer onNavigate={scrollToSection} /></FadeInOnScroll>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
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
        paddingBottom: 20,
    },
});
