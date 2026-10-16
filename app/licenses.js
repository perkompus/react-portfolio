import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import { Colors } from '../constants/Colors';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FadeInOnScroll from '../components/FadeInOnScroll';

const licenses = [
    { title: 'Design', body: 'Layout and visual design based on the Jaxon Framer template.' },
    { title: 'Fonts', body: 'Inter by Rasmus Andersson, used under the SIL Open Font License.' },
    { title: 'Icons', body: 'Lucide icons, used under the ISC License.' },
    { title: 'Images', body: 'Portrait photography from Unsplash, used under the Unsplash License. Project imagery from the Jaxon template.' },
];

export default function Licenses() {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false, title: 'Licenses' }} />
            <Header />
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.page}>
                    <FadeInOnScroll>
                        <Text style={styles.title}>LICENSES</Text>
                    </FadeInOnScroll>
                    {licenses.map((item, index) => (
                        <FadeInOnScroll key={item.title} delay={index * 100} style={styles.item}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemBody}>{item.body}</Text>
                        </FadeInOnScroll>
                    ))}
                </View>
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
    page: {
        paddingHorizontal: '15%',
        paddingTop: 60,
        paddingBottom: 100,
    },
    title: {
        color: Colors.text,
        fontSize: 100,
        fontFamily: 'Inter_900Black',
        letterSpacing: -4,
        textAlign: 'center',
        marginBottom: 60,
    },
    item: {
        paddingVertical: 30,
        borderTopWidth: 1,
        borderColor: Colors.border,
        maxWidth: 800,
        width: '100%',
        alignSelf: 'center',
    },
    itemTitle: {
        color: Colors.text,
        fontSize: 24,
        fontFamily: 'Inter_700Bold',
        marginBottom: 10,
    },
    itemBody: {
        color: Colors.textSecondary,
        fontSize: 17,
        lineHeight: 28,
        fontFamily: 'Inter_400Regular',
    },
});
