import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Breakpoints = {
    phone: 640,
};

export const isPhone = width < Breakpoints.phone;

// Fluid scale so the 1280px reference proportions hold down to phones.
const scale = Math.min(1, Math.max(0.42, width / 1280));

export const Layout = {
    maxWidth: 1200,
    gutter: isPhone ? 20 : 30,
    // The reference pads every section 125px top and bottom.
    sectionSpacing: isPhone ? 80 : 125,
    // Section headings sit inset from the container edge, cards do not.
    headingInset: isPhone ? 0 : 120,
};

export const Type = {
    // Display: 154px / lh 160 / ls -0.08em on the reference hero.
    display: {
        fontSize: Math.round(154 * scale),
        lineHeight: Math.round(160 * scale),
        letterSpacing: Math.round(154 * scale) * -0.08,
        fontFamily: 'Inter_700Bold',
        textTransform: 'uppercase',
    },
    // Section headers: 100px / lh 89 / ls -0.08em.
    section: {
        fontSize: Math.round(100 * scale),
        lineHeight: Math.round(89 * scale),
        letterSpacing: Math.round(100 * scale) * -0.08,
        fontFamily: 'Inter_700Bold',
        textTransform: 'uppercase',
    },
    // CTA headline: 60px / lh 72 / ls -0.08em.
    cta: {
        fontSize: Math.round(60 * scale),
        lineHeight: Math.round(72 * scale),
        letterSpacing: Math.round(60 * scale) * -0.08,
        fontFamily: 'Inter_700Bold',
        textTransform: 'uppercase',
    },
    counter: {
        fontSize: Math.round(48 * Math.max(scale, 0.7)),
        lineHeight: Math.round(60 * Math.max(scale, 0.7)),
        letterSpacing: -1.44,
        fontFamily: 'Inter_600SemiBold',
    },
    cardTitle: {
        fontSize: isPhone ? 28 : 40,
        lineHeight: isPhone ? 32 : 44,
        letterSpacing: -1.6,
        fontFamily: 'Inter_600SemiBold',
    },
    body: {
        fontSize: 16,
        lineHeight: 26,
        letterSpacing: -0.32,
        fontFamily: 'Inter_400Regular',
    },
    small: {
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: -0.14,
        fontFamily: 'Inter_400Regular',
    },
    label: {
        fontSize: 12,
        lineHeight: 14,
        letterSpacing: -0.24,
        fontFamily: 'Inter_500Medium',
    },
};

export const Motion = {
    // Framer's default "smooth" ease for reveals and hovers.
    duration: 600,
    fast: 320,
    slow: 900,
    revealOffset: 50,
};
