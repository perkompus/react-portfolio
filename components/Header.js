import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';
import { Menu, X, ArrowUpRight } from 'lucide-react-native';

export default function Header() {
    // Simple implementation for the requested layout
    // In a real responsive app, we might toggle between this and a hamburger menu based on width
    return (
        <View style={styles.container}>
            {/* Left: Logo */}
            <Link href="/" asChild>
                <TouchableOpacity>
                    <Text style={styles.logo}>Jaxon</Text>
                </TouchableOpacity>
            </Link>

            {/* Center: Navigation */}
            <View style={styles.nav}>
                <Link href="/" style={styles.navLink}>Home</Link>
                <Link href="/projects" style={styles.navLink}>Projects</Link>
                <Link href="/services" style={styles.navLink}>Services</Link>
                <Link href="/about" style={styles.navLink}>About</Link>
                <Link href="/blog" style={styles.navLink}>Blog</Link>
            </View>

            {/* Right: Contact Button */}
            <Link href="/contact" asChild>
                <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactText}>Contact</Text>
                    <ArrowUpRight color={Colors.background} size={20} />
                </TouchableOpacity>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 24,
        backgroundColor: Colors.background,
        zIndex: 100,
    },
    logo: {
        color: Colors.text,
        fontSize: 24,
        fontFamily: 'Inter_900Black',
        letterSpacing: -0.5,
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 32,
        // Hide nav on very small screens if needed, but for now we display as requested
        display: 'flex',
    },
    navLink: {
        color: Colors.textSecondary,
        fontSize: 15,
        fontFamily: 'Inter_500Medium',
        textDecorationLine: 'none', // Remove default link underline
        marginHorizontal: 10,
    },
    contactButton: {
        backgroundColor: Colors.text, // Black button (in light mode)
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 100,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    contactText: {
        color: Colors.background, // White text
        fontSize: 15,
        fontFamily: 'Inter_600SemiBold',
    },
});
