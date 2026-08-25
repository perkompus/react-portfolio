import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { Colors } from '../constants/Colors';
import { Layout, Type, isPhone } from '../constants/Theme';
import Reveal from './ui/Reveal';
import StickyColumn from './ui/StickyColumn';

const faqs = [
    {
        id: 0,
        question: 'Can you work with wireframes or our existing designs?',
        answer: 'Yes, absolutely. I can work with your provided wireframes, mockups, or existing designs to ensure consistency and alignment with your vision.',
    },
    {
        id: 1,
        question: 'What happens after the design is ready & I approve it?',
        answer: 'Once approved, we move to the development phase where we bring the designs to life using modern web technologies, ensuring pixel-perfect implementation.',
    },
    {
        id: 2,
        question: 'Do you charge for additional revisions?',
        answer: 'A set number of revisions is included in the initial agreement. Additional revisions may incur extra costs depending on the complexity and scope of changes.',
    },
    {
        id: 3,
        question: 'I have an agency. Can I outsource work to you?',
        answer: 'Yes. I regularly white-label design and development work for agencies, working directly inside your process and tooling.',
    },
    {
        id: 4,
        question: 'What do I need to give you to get started?',
        answer: 'A short brief, any brand assets you already have, and access to the people who make decisions. Everything else we can shape together.',
    },
];

const EASE = Easing.bezier(0.16, 1, 0.3, 1);

function FaqItem({ item, open, onToggle }) {
    const progress = useSharedValue(0);
    const contentHeight = useSharedValue(0);

    // Drive the open/close animation from the parent's single-open state.
    React.useEffect(() => {
        progress.value = withTiming(open ? 1 : 0, { duration: 420, easing: EASE });
    }, [open, progress]);

    const bodyStyle = useAnimatedStyle(() => ({
        height: contentHeight.value * progress.value,
        opacity: progress.value,
    }));

    const iconStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${45 * progress.value}deg` }],
    }));

    return (
        <View style={styles.item}>
            <Pressable onPress={onToggle} style={styles.question}>
                <Text style={styles.questionText}>{item.question}</Text>
                <Animated.View style={[styles.icon, iconStyle]}>
                    <View style={styles.iconBarH} />
                    <View style={styles.iconBarV} />
                </Animated.View>
            </Pressable>

            <Animated.View style={[styles.bodyClip, bodyStyle]}>
                <View
                    style={styles.bodyMeasure}
                    onLayout={(e) => {
                        contentHeight.value = e.nativeEvent.layout.height;
                    }}
                >
                    <Text style={styles.answer}>{item.answer}</Text>
                </View>
            </Animated.View>
        </View>
    );
}

export default function FAQ() {
    const [openId, setOpenId] = useState(0);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <StickyColumn style={styles.leftColumn} top={140}>
                    <Reveal offset={40}>
                        <Text style={styles.sectionTitle}>FAQ</Text>
                    </Reveal>
                </StickyColumn>

                <View style={styles.list}>
                    {faqs.map((item, i) => (
                        <Reveal key={item.id} delay={i * 70}>
                            <FaqItem
                                item={item}
                                open={openId === item.id}
                                onToggle={() => setOpenId(openId === item.id ? -1 : item.id)}
                            />
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
        gap: isPhone ? 32 : 60,
        alignItems: 'flex-start',
    },
    leftColumn: {
        flex: isPhone ? undefined : 540,
        width: isPhone ? '100%' : undefined,
        alignSelf: 'stretch',
    },
    list: {
        flex: isPhone ? undefined : 660,
        width: isPhone ? '100%' : undefined,
        gap: 24,
    },
    sectionTitle: {
        ...Type.section,
        color: Colors.text,
    },
    item: {
        paddingBottom: 24,
    },
    question: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
    },
    questionText: {
        flex: 1,
        fontSize: isPhone ? 17 : 20,
        lineHeight: isPhone ? 26 : 28,
        letterSpacing: -0.4,
        fontFamily: 'Inter_500Medium',
        color: Colors.text,
    },
    icon: {
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconBarH: {
        position: 'absolute',
        width: 16,
        height: 1.5,
        backgroundColor: Colors.text,
    },
    iconBarV: {
        position: 'absolute',
        width: 1.5,
        height: 16,
        backgroundColor: Colors.text,
    },
    bodyClip: {
        overflow: 'hidden',
    },
    bodyMeasure: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        paddingTop: 20,
    },
    answer: {
        ...Type.body,
        color: Colors.textSecondary,
    },
});
