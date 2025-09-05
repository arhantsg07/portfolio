import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ThemeContextType {
    isDark: boolean;
    toggleTheme: () => void;
    themeClasses: {
        bg: string;
        textHolder: string,
        text: string;
        skillText: string,
        headerBg: string;
        cardBg: string;
        projectCardBg: string;
        sectionBg: string;
        textSecondary: string;
        textMuted: string;
        border: string;
        hoverBg: string;
    };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
  if (isDark) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
  } else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
  }
}, [isDark]);

  const themeClasses = {
    bg: isDark ? 'bg-gray-900' : 'bg-[#f5eded]',
    text: isDark ? 'text-white' : 'text-gray-900',
    textHolder: isDark ? 'bg-[#f5eded]' : 'bg-[#383838]',
    skillText: isDark ? 'text-gray-900' : 'text-white',
    headerBg: isDark ? 'bg-gray-800' : 'bg-white-100',
    cardBg: isDark ? 'bg-gray-50' : 'bg-gray-800',
    projectCardBg: isDark ? 'bg-white' : 'bg-gray-800',
    sectionBg: isDark ? 'bg-gray-800' : 'bg-gray-50',
    textSecondary: isDark ? 'text-gray-300' : 'text-gray-600',
    textMuted: isDark ? 'text-gray-400' : 'text-gray-500',
    border: isDark ? 'border-gray-700' : 'border-gray-300',
    hoverBg: isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, themeClasses }}>
      {children}
    </ThemeContext.Provider>
  );
};