import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

// Fades and lifts its children into view the first time they scroll on screen (web).
// On native the content is shown immediately.
export default function FadeInOnScroll({ children, delay = 0, style }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(Platform.OS !== 'web');

    useEffect(() => {
        const node = ref.current;
        if (visible || !node || typeof IntersectionObserver === 'undefined') {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <View
            ref={ref}
            style={[styles.base, { transitionDelay: `${delay}ms` }, visible && styles.visible, style]}
        >
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    base: {
        opacity: 0,
        transform: [{ translateY: 40 }],
        transitionProperty: 'opacity, transform',
        transitionDuration: '900ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
    },
    visible: {
        opacity: 1,
        transform: [{ translateY: 0 }],
    },
});
