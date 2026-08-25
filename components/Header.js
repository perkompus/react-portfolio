import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import ArrowButton from './ui/ArrowButton';
import RollText from './ui/RollText';

const links = ['Home', 'Projects', 'Services', 'About', 'Blog'];

/**
 * The reference header scrolls away with the page — no pinning, no background,
 * no rounded pill. It is just a transparent bar at the top of the document.
 */
export default function Header() {
    return (
        <View style={styles.wrapper}>
            <View style={styles.bar}>
                <Pressable>
                    <Text style={styles.logo}>Jaxon</Text>
                </Pressable>

                {!isPhone && (
                    <View style={styles.nav}>
                        {links.map((link) => (
                            <RollText
                                key={link}
                                textStyle={styles.navLink}
                                lineHeight={Type.small.lineHeight}
                            >
                                {link}
                            </RollText>
                        ))}
                    </View>
                )}

                <ArrowButton label="Contact" variant="light" size="small" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        paddingHorizontal: Layout.gutter,
        paddingVertical: 20,
        backgroundColor: Colors.background,
    },
    bar: {
        width: '100%',
        maxWidth: Layout.maxWidth,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        color: Colors.text,
        fontSize: 24,
        fontFamily: 'Inter_700Bold',
        letterSpacing: -1,
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 40,
    },
    navLink: {
        ...Type.small,
        color: Colors.text,
    },
});
