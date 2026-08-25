import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, interpolateColor } from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import Reveal from './ui/Reveal';
import StickyColumn from './ui/StickyColumn';
import useHover from './ui/useHover';

const services = [
    {
        id: '01',
        title: 'Branding',
        items: ['Brand', 'Strategy', 'Communication'],
        desc: 'Branding builds trust, defines identity, and connects emotionally through consistent visuals and messaging.',
    },
    {
        id: '02',
        title: 'Product Design',
        items: ['Website', 'App', 'Design Systems'],
        desc: 'Product design blends function and form to create useful, appealing, user-focused solutions.',
    },
    {
        id: '03',
        title: 'Development',
        items: ['Webflow', 'Framer', 'Wordpress'],
        desc: 'Development turns ideas into reality through coding, problem-solving, testing, and continuous improvement.',
    },
    {
        id: '04',
        title: 'Motion Design',
        items: ['Motion Graphics', '3D Animation'],
        desc: 'Motion design combines animation and storytelling to create engaging, dynamic visual content experiences.',
    },
];

function ServiceRow({ service }) {
    const { hover, handlers } = useHover();

    const rowStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(hover.value, [0, 1], ['rgba(0,0,0,0)', 'rgba(12,4,7,0.03)']),
    }));

    const titleStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: 8 * hover.value }],
    }));

    const descStyle = useAnimatedStyle(() => ({
        opacity: 0.7 + 0.3 * hover.value,
    }));

    return (
        <Pressable {...handlers}>
            <Animated.View style={[styles.row, rowStyle]}>
                <Animated.View style={[styles.rowHead, titleStyle]}>
                    <Text style={styles.index}>[{service.id}]</Text>
                    <Text style={styles.title}>{service.title}</Text>
                </Animated.View>

                <View style={styles.tags}>
                    {service.items.map((item, i) => (
                        <View key={item} style={styles.tag}>
                            {i > 0 && <View style={styles.bullet} />}
                            <Text style={styles.tagText}>{item}</Text>
                        </View>
                    ))}
                </View>

                <Animated.Text style={[styles.desc, descStyle]}>{service.desc}</Animated.Text>
            </Animated.View>
        </Pressable>
    );
}

export default function Services() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StickyColumn style={styles.leftColumn} top={140}>
                    <Reveal offset={40}>
                        <Text style={styles.sectionTitle}>Services</Text>
                    </Reveal>
                </StickyColumn>

                <View style={styles.rightColumn}>
                    {services.map((service, i) => (
                        <Reveal key={service.id} delay={i * 90}>
                            <ServiceRow service={service} />
                        </Reveal>
                    ))}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: Layout.gutter,
        paddingVertical: Layout.sectionSpacing,
        backgroundColor: Colors.background,
    },
    content: {
        width: '100%',
        maxWidth: Layout.maxWidth,
        alignSelf: 'center',
        flexDirection: isPhone ? 'column' : 'row',
        justifyContent: 'space-between',
        gap: isPhone ? 40 : 60,
        alignItems: 'flex-start',
    },
    leftColumn: {
        flex: isPhone ? undefined : 660,
        width: isPhone ? '100%' : undefined,
        alignSelf: 'stretch',
    },
    rightColumn: {
        flex: isPhone ? undefined : 539,
        width: isPhone ? '100%' : undefined,
        gap: 60,
    },
    sectionTitle: {
        ...Type.section,
        color: Colors.text,
    },
    row: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.borderStrong,
        paddingBottom: 24,
        gap: 16,
    },
    rowHead: {
        gap: 4,
    },
    index: {
        ...Type.label,
        color: Colors.textMuted,
    },
    title: {
        ...Type.cardTitle,
        color: Colors.text,
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 10,
    },
    tag: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    bullet: {
        width: 4,
        height: 4,
        borderRadius: 2,
        backgroundColor: Colors.text,
    },
    tagText: {
        ...Type.small,
        color: Colors.text,
    },
    desc: {
        ...Type.body,
        color: Colors.textSecondary,
    },
});
