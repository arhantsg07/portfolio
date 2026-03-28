import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  themeClasses: {
    bg: string;
    logo: string;
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
    bg: isDark ? 'bg-[#131917]' : 'bg-[#f5f4ef]',
    logo: isDark ? './images/Title_light.png' : './images/Title.png',
    text: isDark ? 'text-stone-100' : 'text-stone-800',
    textHolder: isDark ? 'bg-stone-800/75' : 'bg-stone-100/90',
    skillText: isDark ? 'text-stone-200' : 'text-stone-700',
    headerBg: isDark ? 'bg-[#131917]/80' : 'bg-[#f6f5ef]/75',
    cardBg: isDark ? 'bg-stone-800/70' : 'bg-stone-50/80',
    projectCardBg: isDark ? 'bg-stone-900/60' : 'bg-stone-50/80',
    sectionBg: isDark ? 'bg-stone-900/40' : 'bg-stone-50/70',
    textSecondary: isDark ? 'text-stone-300' : 'text-stone-600',
    textMuted: isDark ? 'text-stone-400' : 'text-stone-500',
    border: isDark ? 'border-stone-700/70' : 'border-stone-300/80',
    hoverBg: isDark ? 'hover:bg-stone-700/70' : 'hover:bg-stone-100/80'
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, themeClasses }}>
      <div className={`${themeClasses.bg}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};