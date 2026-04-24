import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { ArrowUpRight } from 'lucide-react-native';
import { Colors } from '../constants/Colors';

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {/* Left: CTA */}
                <View style={styles.ctaContainer}>
                    <Text style={styles.ctaText}>HAVE ANY PROJECT</Text>
                    <Text style={styles.ctaText}>IDEA? CONTACT ME</Text>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>Contact Now</Text>
                        <ArrowUpRight color={Colors.background} size={20} />
                    </Pressable>
                </View>

                {/* Right: Links */}
                <View style={styles.linksContainer}>
                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>MAIN PAGES</Text>
                        <Text style={styles.link}>Home</Text>
                        <Text style={styles.link}>About</Text>
                        <Text style={styles.link}>Project</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>UTILITY PAGES</Text>
                        <Text style={styles.link}>Licenses</Text>
                        <Text style={styles.link}>404 Page</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>MORE PAGES</Text>
                        <Text style={styles.link}>Services</Text>
                        <Text style={styles.link}>Blog</Text>
                        <Text style={styles.link}>Contact</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.columnHeader}>SOCIALS</Text>
                        <Text style={styles.link}>Instagram</Text>
                        <Text style={styles.link}>Twitter</Text>
                        <Text style={styles.link}>Linkedin</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <View style={styles.divider} />
                <Text style={styles.copyright}>Copyright © Jaxon Grayson. All Rights Reserved</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: '15%',
        paddingTop: 60,
        paddingBottom: 40,
        backgroundColor: Colors.footerBackground,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 60,
        marginBottom: 60,
        alignItems: 'flex-start',
    },
    ctaContainer: {
        flex: 1.5,
        minWidth: 300,
    },
    ctaText: {
        color: Colors.text,
        fontSize: 58,
        fontFamily: 'Inter_700Bold',
        lineHeight: 70,
        letterSpacing: -1,
        textTransform: 'uppercase',
    },
    button: {
        backgroundColor: Colors.text,
        paddingHorizontal: 30,
        paddingVertical: 16,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginTop: 40,
        alignSelf: 'flex-start',
    },
    buttonText: {
        color: Colors.background,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
    linksContainer: {
        flex: 1,
        minWidth: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: 40,
    },
    column: {
        minWidth: 100,
    },
    columnHeader: {
        color: Colors.text,
        fontSize: 14,
        fontFamily: 'Inter_900Black',
        marginBottom: 20,
        textTransform: 'uppercase',
    },
    link: {
        color: Colors.textSecondary,
        fontSize: 16,
        fontFamily: 'Inter_400Regular',
        marginBottom: 12,
    },
    bottom: {
        width: '100%',
    },
    divider: {
        height: 1,
        backgroundColor: Colors.border,
        marginBottom: 30,
    },
    copyright: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'Inter_400Regular',
        textAlign: 'center',
    },
});
