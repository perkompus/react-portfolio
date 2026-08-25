import { useCallback, useState } from 'react';

/**
 * Percentage widths cannot account for the row gap, which pushes columns onto
 * their own line. Measuring the container and handing back pixel widths keeps
 * the grid exact on both web and native.
 */
export default function useGridWidth(columns, gap) {
    const [containerWidth, setContainerWidth] = useState(0);

    const onLayout = useCallback((e) => {
        const width = e.nativeEvent.layout.width;
        setContainerWidth((prev) => (Math.abs(prev - width) < 1 ? prev : width));
    }, []);

    const itemWidth =
        containerWidth > 0 && columns > 1
            ? (containerWidth - gap * (columns - 1)) / columns
            : '100%';

    return { onLayout, itemWidth };
}
