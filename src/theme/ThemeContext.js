import React, {useState, createContext, useEffect} from 'react'

import {
  COLORS,
} from '../utils/constants';


export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode'
    );
    rawSetColorMode(initialColorValue);
  }, []);

  function setColorMode(newValue) {
    const root = window.document.documentElement;
    // 1. Update React color-mode state
    rawSetColorMode(newValue);
    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue);
    // 3. Update each color
    root.style.setProperty(
      '--color-text',
      newValue === 'light'
        ? COLORS.text.light
        : COLORS.text.dark
    );
    root.style.setProperty(
      '--color-background',
      newValue === 'light'
        ? COLORS.background.light
        : COLORS.background.dark
    );
    root.style.setProperty(
      '--color-primary',
      newValue === 'light'
        ? COLORS.primary.light
        : COLORS.primary.dark
    );
    root.style.setProperty('--initial-color-mode', colorMode);

  }

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
