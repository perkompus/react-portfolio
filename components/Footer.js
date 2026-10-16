import { View, Text, StyleSheet, Linking } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/Colors';
import { useIsMobile, mobileStyles } from '../constants/responsive';
import HoverFillButton from './HoverFillButton';
import RollingLink from './RollingLink';
import useSectionNavigate from './useSectionNavigate';
import { ArrowUpRight } from 'lucide-react-native/icons';

export default function Footer({ onNavigate }) {
    const isMobile = useIsMobile();
    const router = useRouter();
    const navigate = useSectionNavigate(onNavigate);

    const columns = [
        {
            title: 'MAIN PAGES',
            links: [
                { label: 'Home', onPress: () => navigate('home') },
                { label: 'About', onPress: () => navigate('about') },
                { label: 'Project', onPress: () => navigate('projects') },
            ],
        },
        {
            title: 'UTILITY PAGES',
            links: [
                { label: 'Licenses', onPress: () => router.push('/licenses') },
                { label: '404 Page', onPress: () => router.push('/404') },
            ],
        },
        {
            title: 'MORE PAGES',
            links: [
                { label: 'Services', onPress: () => navigate('services') },
                { label: 'Blog', onPress: () => navigate('blog') },
                { label: 'Contact', onPress: () => navigate('contact') },
            ],
        },
        {
            title: 'SOCIALS',
            links: [
                { label: 'Instagram', onPress: () => Linking.openURL('https://instagram.com') },
                { label: 'Twitter', onPress: () => Linking.openURL('https://twitter.com') },
                { label: 'Linkedin', onPress: () => Linking.openURL('https://linkedin.com') },
            ],
        },
    ];

    return (
        <View style={[styles.container, isMobile && mobileStyles.section]}>
            <View style={[styles.contentContainer, isMobile && mobile.contentContainer]}>
                {/* Left Side: Call to Action */}
                <View style={[styles.ctaContainer, isMobile && mobile.fullWidth]}>
                    <Text style={[styles.ctaText, isMobile && mobile.ctaText]}>HAVE ANY PROJECT</Text>
                    <Text style={[styles.ctaText, isMobile && mobile.ctaText]}>IDEA? CONTACT ME</Text>

                    <HoverFillButton style={styles.button} fillColor={Colors.background}>
                        {(hovered) => (
                            <>
                                <Text style={[styles.buttonText, hovered && styles.buttonTextHovered]}>Contact Now</Text>
                                <ArrowUpRight color={hovered ? Colors.text : Colors.background} size={20} />
                            </>
                        )}
                    </HoverFillButton>
                </View>

                {/* Right Side: Links */}
                <View style={[styles.linksContainer, isMobile && mobile.links]}>
                    {columns.map((column) => (
                        <View key={column.title} style={styles.column}>
                            <Text style={styles.columnHeader}>{column.title}</Text>
                            {column.links.map((link) => (
                                <RollingLink key={link.label} label={link.label} onPress={link.onPress} style={styles.link} />
                            ))}
                        </View>
                    ))}
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
        paddingTop: 60, // Reduced from 100
        paddingBottom: 40,
        backgroundColor: Colors.footerBackground,
        overflow: 'hidden',
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 0,
        marginBottom: 60, // Reduced from 100
        alignItems: 'flex-start',
    },
    ctaContainer: {
        flex: 1.5, // Give it more space relative to links
        // paddingLeft removed for global alignment
    },
    ctaText: {
        color: Colors.text,
        fontSize: 58, // Reduced by 2 as requested
        fontFamily: 'Inter_700Bold', // Reduced boldness
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
        borderWidth: 1,
        borderColor: Colors.text,
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
    linksContainer: {
        flex: 1, // Smaller ratio to keep it closer to CTA if needed, or just let them sit side by side
        minWidth: 300,
        flexDirection: 'row',
        flexWrap: 'wrap',
        rowGap: 40,
    },
    column: {
        width: '50%', // Even 2x2 grid so columns line up across rows
        paddingRight: 16,
    },
    columnHeader: {
        color: Colors.text,
        fontSize: 14,
        fontFamily: 'Inter_900Black', // Bold header
        marginBottom: 20,
        textTransform: 'uppercase',
    },
    link: {
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

// Phone overrides
const mobile = StyleSheet.create({
    contentContainer: {
        flexDirection: 'column',
        gap: 50,
    },
    // Natural height when stacked; plain `flex: 0` keeps a 0 basis and collapses the block
    fullWidth: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        width: '100%',
    },
    links: {
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        width: '100%',
        minWidth: 0,
        rowGap: 32,
    },
    ctaText: {
        fontSize: 32,
        lineHeight: 38,
    },
});
