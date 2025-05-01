import React, { createContext, useState, useContext, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define our theme colors
export type ThemeType = 'light' | 'dark';

interface ThemeColors {
  background: string;
  text: string;
  secondaryText: string;
  card: string;
  border: string;
  primary: string;
  tabBarActive: string;
  tabBarInactive: string;
}

export const lightTheme: ThemeColors = {
  background: '#F5FCFF',
  text: '#333',
  secondaryText: '#666',
  card: 'white',
  border: '#f0f0f0',
  primary: '#36D1DC',
  tabBarActive: '#00B4DB',
  tabBarInactive: 'gray',
};

export const darkTheme: ThemeColors = {
  background: '#121212',
  text: '#FFFFFF',
  secondaryText: '#AAAAAA',
  card: '#1E1E1E',
  border: '#2C2C2C',
  primary: '#36D1DC',
  tabBarActive: '#36D1DC',
  tabBarInactive: '#777777',
};

interface ThemeContextType {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Storage key
const THEME_STORAGE_KEY = '@app_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get device color scheme
  const deviceTheme = useColorScheme();
  
  // Initialize with device preference, defaulting to 'light' if null
  const [theme, setTheme] = useState<ThemeType>('light');
  
  // Load saved theme preference on mount
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme) {
          setTheme(savedTheme as ThemeType);
        } else if (deviceTheme) {
          // Use device theme if no saved preference
          setTheme(deviceTheme);
        }
      } catch (error) {
        console.log('Error loading theme preference', error);
      }
    };
    
    loadTheme();
  }, [deviceTheme]);
  
  // Save theme preference when changed
  useEffect(() => {
    const saveTheme = async () => {
      try {
        await AsyncStorage.setItem(THEME_STORAGE_KEY, theme);
      } catch (error) {
        console.log('Error saving theme preference', error);
      }
    };
    
    saveTheme();
  }, [theme]);
  
  // Toggle between light and dark
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  // Current theme colors
  const colors = theme === 'dark' ? darkTheme : lightTheme;
  
  return (
    <ThemeContext.Provider 
      value={{ 
        theme, 
        colors, 
        toggleTheme,
        isDarkMode: theme === 'dark'
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};