import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Pressable, useWindowDimensions } from 'react-native';
import { Colors } from '../constants/Colors';
import { ArrowUpRight, Menu, X } from 'lucide-react-native';
import HoverFillButton from './HoverFillButton';
import useSectionNavigate from './useSectionNavigate';

const NAV_ITEMS = [
    { label: 'Home', section: 'home' },
    { label: 'Projects', section: 'projects' },
    { label: 'Services', section: 'services' },
    { label: 'About', section: 'about' },
    { label: 'Blog', section: 'blog' },
];

export default function Header({ onNavigate }) {
    const navigate = useSectionNavigate(onNavigate);
    const [menuOpen, setMenuOpen] = useState(false);
    // The full nav row needs ~900px; below that, collapse it into a menu
    const compact = useWindowDimensions().width < 900;

    const go = (section) => {
        setMenuOpen(false);
        navigate(section);
    };

    if (compact) {
        return (
            <View style={[styles.container, styles.containerCompact]}>
                <TouchableOpacity onPress={() => go('home')}>
                    <Text style={styles.logo}>Jaxon</Text>
                </TouchableOpacity>

                <Pressable
                    onPress={() => setMenuOpen((open) => !open)}
                    style={styles.menuButton}
                    accessibilityRole="button"
                    accessibilityLabel={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    {menuOpen ? <X color={Colors.text} size={26} /> : <Menu color={Colors.text} size={26} />}
                </Pressable>

                <View style={[styles.menu, menuOpen && styles.menuOpen]}>
                    {[...NAV_ITEMS, { label: 'Contact', section: 'contact' }].map(({ label, section }) => (
                        <HoverFillButton key={section} style={styles.menuItem} fillColor={Colors.card} onPress={() => go(section)}>
                            {() => <Text style={styles.menuText}>{label}</Text>}
                        </HoverFillButton>
                    ))}
                </View>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            {/* Left: Logo */}
            <TouchableOpacity onPress={() => go('home')}>
                <Text style={styles.logo}>Jaxon</Text>
            </TouchableOpacity>

            {/* Center: Navigation */}
            <View style={styles.nav}>
                {NAV_ITEMS.map(({ label, section }) => (
                    <HoverFillButton key={section} style={styles.navButton} onPress={() => go(section)}>
                        {(hovered) => (
                            <Text style={[styles.navLink, hovered && styles.textHovered]}>{label}</Text>
                        )}
                    </HoverFillButton>
                ))}
            </View>

            {/* Right: Contact Button */}
            <HoverFillButton style={styles.contactButton} onPress={() => go('contact')}>
                {(hovered) => (
                    <>
                        <Text style={[styles.contactText, hovered && styles.textHovered]}>Contact</Text>
                        <ArrowUpRight color={hovered ? Colors.background : Colors.text} size={20} />
                    </>
                )}
            </HoverFillButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '15%',
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
        gap: 8,
    },
    navButton: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 6,
    },
    navLink: {
        color: Colors.textSecondary,
        fontSize: 15,
        fontFamily: 'Inter_500Medium',
        transitionProperty: 'color',
        transitionDuration: '350ms',
    },
    textHovered: {
        color: Colors.background,
    },
    contactButton: {
        backgroundColor: Colors.background, // White background
        paddingHorizontal: 20,
        paddingVertical: 12,
        borderRadius: 8, // Slightly less rounded based on screenshot
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        borderWidth: 1,
        borderColor: Colors.border, // Light border
    },
    contactText: {
        color: Colors.text, // Black text
        fontSize: 15,
        fontFamily: 'Inter_600SemiBold',
        transitionProperty: 'color',
        transitionDuration: '350ms',
    },
    containerCompact: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    menuButton: {
        padding: 6,
        cursor: 'pointer',
    },
    menu: {
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        paddingHorizontal: 12,
        paddingBottom: 16,
        backgroundColor: Colors.background,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        opacity: 0,
        pointerEvents: 'none',
        transform: [{ translateY: -8 }],
        transitionProperty: 'opacity, transform',
        transitionDuration: '250ms',
        transitionTimingFunction: 'ease',
    },
    menuOpen: {
        opacity: 1,
        pointerEvents: 'auto',
        transform: [{ translateY: 0 }],
    },
    menuItem: {
        paddingHorizontal: 8,
        paddingVertical: 14,
        borderRadius: 6,
    },
    menuText: {
        color: Colors.text,
        fontSize: 22,
        fontFamily: 'Inter_600SemiBold',
        letterSpacing: -0.5,
    },
});
