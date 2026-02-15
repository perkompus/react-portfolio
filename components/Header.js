import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Colors } from '../constants/Colors';
import { Menu, X } from 'lucide-react-native';

export default function Header() {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <View style={styles.container}>
            <Link href="/" asChild>
                <TouchableOpacity>
                    <Text style={styles.logo}>Jaxon</Text>
                </TouchableOpacity>
            </Link>

            {/* Desktop/Tablet Menu - Hidden on mobile usually, but for simplicity we'll just show a menu icon on small screens and links on large */}
            {/* For this react native implementation, we'll stick to a simple top bar with a menu icon for now */}

            <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
                {menuOpen ? <X color={Colors.text} size={24} /> : <Menu color={Colors.text} size={24} />}
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 24,
        paddingVertical: 20,
        backgroundColor: Colors.background, // Transparent or background color
        zIndex: 100,
    },
    logo: {
        color: Colors.text,
        fontSize: 28,
        fontWeight: '900',
        letterSpacing: -0.5,
    },
    menuButton: {
        padding: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 50,
    },
});
