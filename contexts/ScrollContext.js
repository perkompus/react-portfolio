import { createContext, useContext } from 'react';

/**
 * Provides both a shared value (for animated styles that follow the scroll
 * position frame by frame) and a plain JS subscription (for one-shot triggers
 * that need to start an animation, which must happen on the JS thread).
 */
export const ScrollContext = createContext(null);

export const useScroll = () => useContext(ScrollContext);

/** Shared value holding the page scroll offset. Null outside the provider. */
export const useScrollY = () => {
    const ctx = useContext(ScrollContext);
    return ctx ? ctx.scrollY : null;
};

/** Subscribes to scroll offsets on the JS thread. Returns an unsubscribe fn. */
export const useScrollSubscribe = () => {
    const ctx = useContext(ScrollContext);
    return ctx ? ctx.subscribe : null;
};
