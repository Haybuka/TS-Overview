import React, { createContext } from 'react';
import { theme } from './theme';

type ContextChildren = {
  children: React.ReactNode;
};
export const ThemeContext = createContext(theme);
export const ThemeContextProvider = ({ children }: ContextChildren) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
