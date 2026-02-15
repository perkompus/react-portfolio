import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Colors } from '../constants/Colors';

export default function Footer() {
    return (
        <View style={styles.container}>
            <View style={styles.ctaContainer}>
                <Text style={styles.ctaText}>Have any project idea?</Text>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Contact Me</Text>
                </Pressable>
            </View>

            <View style={styles.linksContainer}>
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Main Pages</Text>
                    <Text style={styles.link}>Home</Text>
                    <Text style={styles.link}>About</Text>
                    <Text style={styles.link}>Projects</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Utility Pages</Text>
                    <Text style={styles.link}>Licenses</Text>
                    <Text style={styles.link}>404 Page</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>More Pages</Text>
                    <Text style={styles.link}>Services</Text>
                    <Text style={styles.link}>Blog</Text>
                    <Text style={styles.link}>Contact</Text>
                </View>
                <View style={styles.column}>
                    <Text style={styles.columnHeader}>Socials</Text>
                    <View style={styles.socialRow}>
                        <Text style={styles.link}>Instagram</Text>
                    </View>
                    <View style={styles.socialRow}>
                        <Text style={styles.link}>Twitter</Text>
                    </View>
                    <View style={styles.socialRow}>
                        <Text style={styles.link}>Linkedin</Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <Text style={styles.copyright}>© 2024 Jaxon Grayson. All Rights Reserved.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.card,
        borderTopWidth: 1,
        borderTopColor: Colors.border,
        paddingBottom: 60,
        paddingTop: 60,
    },
    ctaContainer: {
        alignItems: 'center',
        paddingVertical: 80,
        borderBottomWidth: 1,
        borderBottomColor: Colors.border,
        marginBottom: 60,
    },
    ctaText: {
        color: Colors.text,
        fontSize: 56,
        fontFamily: 'Inter_900Black',
        marginBottom: 40,
        textAlign: 'center',
        letterSpacing: -2,
        lineHeight: 60,
    },
    button: {
        backgroundColor: Colors.text,
        paddingHorizontal: 40,
        paddingVertical: 20,
        borderRadius: 100,
    },
    buttonText: {
        color: Colors.background,
        fontSize: 18,
        fontFamily: 'Inter_700Bold',
    },
    linksContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: 30,
        marginBottom: 40,
    },
    column: {
        minWidth: 150,
    },
    columnHeader: {
        color: Colors.text,
        fontSize: 18,
        fontFamily: 'Inter_700Bold',
        marginBottom: 20,
    },
    link: {
        color: Colors.text,
        fontSize: 16,
        fontFamily: 'Inter_500Medium',
    },
    socialRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    bottom: {
        alignItems: 'center',
    },
    copyright: {
        color: Colors.textSecondary,
        fontSize: 14,
        fontFamily: 'Inter_400Regular',
    },
});
