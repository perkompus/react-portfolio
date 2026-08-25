import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';
import { ArrowUpRight } from 'lucide-react-native';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import useHover from './ui/useHover';

const experience = [
    { id: '1', role: 'Webflow Developer', company: 'Microsoft', period: '2023 - 2024' },
    { id: '2', role: 'Product Designer', company: 'ExxonMobile', period: '2022 - 2023' },
    { id: '3', role: 'UI/UX Designer', company: 'Berkshire Hathaway', period: '2021 - 2022' },
    { id: '4', role: 'Visual Designer', company: 'UnitedHealth Group', period: '2020 - 2021' },
    { id: '5', role: 'Graphic Designer', company: 'NovaAir Design Team', period: '2019 - 2020' },
];

function ExperienceRow({ item }) {
    const { hover, handlers } = useHover();

    const rowStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(hover.value, [0, 1], ['rgba(0,0,0,0)', 'rgba(12,4,7,0.03)']),
    }));

    const roleStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: 8 * hover.value }],
    }));

    const arrowStyle = useAnimatedStyle(() => ({
        opacity: hover.value,
        transform: [
            { translateX: 8 * (1 - hover.value) },
            { translateY: 8 * (1 - hover.value) },
        ],
    }));

    return (
        <Pressable {...handlers}>
            <Animated.View style={[styles.row, rowStyle]}>
                <Animated.Text style={[styles.role, roleStyle]}>{item.role}</Animated.Text>
                <View style={styles.rowRight}>
                    <Text style={styles.company}>{item.company}</Text>
                    <Text style={styles.period}>{item.period}</Text>
                    <Animated.View style={arrowStyle}>
                        <ArrowUpRight color={Colors.text} size={18} />
                    </Animated.View>
                </View>
            </Animated.View>
        </Pressable>
    );
}

export default function WorkExperience() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <SectionHeading align="center" inset={false} style={styles.heading}>
                    Work Experience
                </SectionHeading>

                {/* The list is narrower than the container and centred under the title. */}
                <View style={styles.list}>
                    {experience.map((item, i) => (
                        <Reveal key={item.id} delay={i * 80}>
                            <ExperienceRow item={item} />
                            <View style={styles.line} />
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
        alignItems: 'center',
    },
    heading: {
        marginBottom: 80,
    },
    list: {
        width: isPhone ? '100%' : '69%',
        gap: 50,
    },
    row: {
        paddingBottom: 24,
        flexDirection: isPhone ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: isPhone ? 'flex-start' : 'center',
        gap: isPhone ? 8 : 24,
    },
    line: {
        height: 1,
        width: '100%',
        backgroundColor: Colors.line,
    },
    rowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
    },
    role: {
        ...Type.cardTitle,
        fontSize: isPhone ? 22 : 28,
        lineHeight: isPhone ? 26 : 34,
        color: Colors.text,
    },
    company: {
        fontSize: 18,
        lineHeight: 27,
        letterSpacing: -0.54,
        fontFamily: 'Inter_500Medium',
        color: Colors.text,
    },
    period: {
        ...Type.small,
        color: Colors.textMuted,
    },
});
