import { StyleSheet, useWindowDimensions } from 'react-native';

export const MOBILE_BREAKPOINT = 768;

// Re-renders on resize/rotation, so layouts switch live
export function useIsMobile() {
    return useWindowDimensions().width < MOBILE_BREAKPOINT;
}

// Shared phone overrides, applied as `[styles.x, isMobile && mobileStyles.y]`
export const mobileStyles = StyleSheet.create({
    section: {
        paddingHorizontal: 20,
        paddingVertical: 60,
    },
    heading: {
        fontSize: 48,
        lineHeight: 50,
        letterSpacing: -2,
    },
    columns: {
        gap: 32,
    },
});
