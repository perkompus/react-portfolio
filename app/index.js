import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors';

// Components
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
import Articles from '../components/Articles';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false }} />
            <Header />
            <ScrollView
                style={styles.scrollView}
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Hero />
                <Services />
                <Projects />
                <WorkExperience />
                <Reviews />
                <FAQ />
                <Articles />
                <Footer />
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
