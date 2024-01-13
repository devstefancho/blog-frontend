'use client';
import { createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { cookies } from 'next/headers';
import { getNextTheme } from '@/utils/theme';
import { Theme } from '@/constants/theme';

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const defaultTheme: ThemeContextType = {
  theme: Theme.LIGHT,
  toggleTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultTheme);

export const ThemeProvider = ({
  children,
  xTheme,
}: {
  children: React.ReactNode;
  xTheme: Theme;
}) => {
  const [theme, setTheme] = useState<Theme>(xTheme);
  const { refresh } = useRouter();

  const toggleTheme = () => {
    const nextTheme = getNextTheme(theme);
    Cookies.set('x-theme', nextTheme);
    setTheme(nextTheme);
    refresh();
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
