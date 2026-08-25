import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import useInView from './useInView';

/** Splits "60+" / "98%" / "8M+" into its numeric part and trailing suffix. */
function parse(value) {
    const match = String(value).match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return { target: 0, suffix: String(value) };
    return { target: parseFloat(match[1]), suffix: match[2] };
}

/** Counts up from zero the first time it scrolls into view. */
export default function Counter({ value, duration = 1600, style, suffixStyle }) {
    const { target, suffix } = parse(value);
    const [display, setDisplay] = useState(0);
    const frame = useRef(null);

    const run = useCallback(() => {
        const startedAt = Date.now();
        const tick = () => {
            const t = Math.min(1, (Date.now() - startedAt) / duration);
            // easeOutExpo, so the number decelerates into its final value.
            const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
            setDisplay(Math.round(target * eased));
            if (t < 1) frame.current = requestAnimationFrame(tick);
        };
        frame.current = requestAnimationFrame(tick);
    }, [duration, target]);

    useEffect(() => () => frame.current && cancelAnimationFrame(frame.current), []);

    const { ref, onLayout } = useInView(run, 0.1);

    return (
        <View ref={ref} onLayout={onLayout} style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
            <Text style={style}>{display}</Text>
            {suffix ? <Text style={[style, suffixStyle]}>{suffix}</Text> : null}
        </View>
    );
}
