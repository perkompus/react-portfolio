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
            <Text style={styles.sectionHeader}>Services</Text>

            <View style={styles.grid}>
                {services.map((service) => (
                    <View key={service.id} style={styles.card}>
                        <Text style={styles.id}>{service.id}</Text>
                        <Text style={styles.title}>{service.title}</Text>
                        <View style={styles.tags}>
                            {service.items.map((item, index) => (
                                <Text key={index} style={styles.tag}>{item}</Text>
                            ))}
                        </View>
                        <Text style={styles.description}>{service.desc}</Text>
                    </View>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: Colors.background,
        paddingVertical: 60,
    },
    sectionHeader: {
        color: Colors.text,
        fontSize: 48,
        fontFamily: 'Inter_900Black',
        marginBottom: 50,
        letterSpacing: -1,
    },
    grid: {
        gap: 20,
    },
    card: {
        backgroundColor: Colors.card,
        borderRadius: 24,
        padding: 30,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: Colors.border,
    },
    id: {
        color: Colors.textSecondary,
        fontSize: 16,
        marginBottom: 15,
        fontFamily: 'Inter_400Regular',
    },
    title: {
        color: Colors.text,
        fontSize: 32,
        fontFamily: 'Inter_700Bold',
        marginBottom: 20,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 10,
        marginBottom: 25,
    },
    tag: {
        color: Colors.text,
        fontSize: 14,
        borderWidth: 1,
        borderColor: Colors.border,
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 100,
        overflow: 'hidden',
        backgroundColor: 'rgba(0,0,0,0.05)',
        fontFamily: 'Inter_500Medium',
    },
    description: {
        color: Colors.textSecondary,
        fontSize: 18,
        lineHeight: 28,
        fontFamily: 'Inter_400Regular',
    },
});
