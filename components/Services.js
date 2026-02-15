import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

const services = [
    { id: '01', title: 'Branding', items: ['Brand', 'Strategy', 'Communication'], desc: 'Branding builds trust, defines identity, and connects emotionally through consistent visuals and messaging.' },
    { id: '02', title: 'Product Design', items: ['Website', 'App', 'Design Systems'], desc: 'Product design blends function and form to create useful, appealing, user-focused solutions.' },
    { id: '03', title: 'Development', items: ['Webflow', 'Framer', 'Wordpress'], desc: 'Development turns ideas into reality through coding, problem-solving, testing, and continuous improvement.' },
    { id: '04', title: 'Motion Design', items: ['Motion Graphics', '3D Animation'], desc: 'Motion design combines animation and storytelling to create engaging, dynamic visual content experiences.' },
];

export default function Services() {
    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                {/* Left Side: Huge Title */}
                <View style={styles.leftColumn}>
                    <Text style={styles.sectionHeader}>SERVICES</Text>
                </View>

                {/* Right Side: List of Services */}
                <View style={styles.rightColumn}>
                    {services.map((service, index) => (
                        <View key={service.id} style={styles.serviceItem}>
                            <View style={styles.serviceHeader}>
                                <Text style={styles.serviceIndex}>[{service.id}]</Text>
                                <Text style={styles.serviceTags}>{service.items.join(' • ')}</Text>
                            </View>

                            <Text style={styles.serviceTitle}>{service.title}</Text>

                            <Text style={styles.serviceDesc}>{service.desc}</Text>

                            {/* Divider Line */}
                            {index < services.length - 1 && <View style={styles.divider} />}
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        paddingVertical: 100,
        backgroundColor: Colors.background,
    },
    contentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allow wrapping on mobile
        justifyContent: 'space-between',
        gap: 60,
    },
    leftColumn: {
        flex: 1,
        minWidth: 300,
        paddingLeft: '15%', // Indent 15%
    },
    rightColumn: {
        flex: 1.5, // Check screenshot, right side takes slightly more space or equal
        minWidth: 300,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 95, // Reduced by 5
        fontFamily: 'Inter_700Bold', // Reduced boldness by 2 units
        letterSpacing: -5,
        textTransform: 'uppercase',
        lineHeight: 100,
    },
    serviceItem: {
        marginBottom: 60,
    },
    serviceHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    serviceIndex: {
        color: Colors.textSecondary,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
    serviceTags: {
        color: Colors.text,
        fontSize: 16,
        fontFamily: 'Inter_600SemiBold',
    },
    serviceTitle: {
        color: Colors.text,
        fontSize: 40,
        fontFamily: 'Inter_600SemiBold', // Matches "Branding" boldness
        marginBottom: 20,
        letterSpacing: -1,
    },
    serviceDesc: {
        color: Colors.textSecondary,
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Inter_400Regular',
    },
    divider: {
        height: 1,
        backgroundColor: Colors.border,
        marginTop: 60,
    },
});
