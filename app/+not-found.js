import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, useRouter } from 'expo-router';
import { ArrowUpRight } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

import Header from '../components/Header';
import FadeInOnScroll from '../components/FadeInOnScroll';
import HoverFillButton from '../components/HoverFillButton';

export default function NotFound() {
    const router = useRouter();

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <Stack.Screen options={{ headerShown: false, title: 'Page not found' }} />
            <Header />
            <FadeInOnScroll style={styles.content}>
                <Text style={styles.code}>404</Text>
                <Text style={styles.message}>The page you are looking for doesn’t exist or has been moved.</Text>
                <HoverFillButton style={styles.button} fillColor={Colors.background} onPress={() => router.navigate('/')}>
                    {(hovered) => (
                        <>
                            <Text style={[styles.buttonText, hovered && styles.buttonTextHovered]}>Back to Home</Text>
                            <ArrowUpRight color={hovered ? Colors.text : Colors.background} size={20} />
                        </>
                    )}
                </HoverFillButton>
            </FadeInOnScroll>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: '15%',
    },
    code: {
        color: Colors.text,
        fontSize: 200,
        fontFamily: 'Inter_900Black',
        letterSpacing: -10,
        lineHeight: 200,
    },
    message: {
        color: Colors.textSecondary,
        fontSize: 18,
        fontFamily: 'Inter_400Regular',
        textAlign: 'center',
        marginVertical: 30,
    },
    button: {
        backgroundColor: Colors.text,
        paddingHorizontal: 30,
        paddingVertical: 16,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: Colors.text,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    buttonText: {
        color: Colors.background,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
        transitionProperty: 'color',
        transitionDuration: '350ms',
    },
    buttonTextHovered: {
        color: Colors.text,
    },
});
