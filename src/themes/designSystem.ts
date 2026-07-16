
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
    mode: 'light',
    colors: {
        background: '#ffffff',
        surface: '#f7f9fc',
        surfaceHighlight: '#edf2f7',
        text: '#1a202c',
        textSecondary: '#4a5568',
        textLight: '#718096',
        primary: '#6366f1', // Indigo
        primaryHover: '#4f46e5',
        secondary: '#ec4899', // Pink
        accent: '#8b5cf6', // Violet
        border: '#e2e8f0',
        error: '#ef4444',
        success: '#10b981',
        warning: '#f59e0b',
        gradient: 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
        glass: 'rgba(255, 255, 255, 0.7)',
    },
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    },
    fonts: {
        body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        heading: '"Outfit", sans-serif',
        monospace: '"Fira Code", monospace',
    },
};

export const darkTheme: DefaultTheme = {
    mode: 'dark',
    colors: {
        background: '#0f172a', // Slate 900
        surface: '#1e293b', // Slate 800
        surfaceHighlight: '#334155', // Slate 700
        text: '#f8fafc',
        textSecondary: '#cbd5e1',
        textLight: '#94a3b8',
        primary: '#818cf8', // Indigo 400
        primaryHover: '#6366f1',
        secondary: '#f472b6',
        accent: '#a78bfa',
        border: '#334155',
        error: '#f87171',
        success: '#34d399',
        warning: '#fbbf24',
        gradient: 'linear-gradient(135deg, #818cf8 0%, #f472b6 100%)',
        glass: 'rgba(15, 23, 42, 0.7)',
    },
    shadows: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.5)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.5), 0 2px 4px -1px rgba(0, 0, 0, 0.3)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 10px 10px -5px rgba(0, 0, 0, 0.3)',
    },
    fonts: {
        body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        heading: '"Outfit", sans-serif',
        monospace: '"Fira Code", monospace',
    },
};
