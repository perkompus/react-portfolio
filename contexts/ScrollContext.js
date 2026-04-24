import { createContext, useContext } from 'react';

export const ScrollContext = createContext(null);
export const useScrollY = () => useContext(ScrollContext);
