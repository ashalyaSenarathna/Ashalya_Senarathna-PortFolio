import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utills';

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        // Check localStorage first, then system preference, default to dark for star background
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let initial = false;
        if (stored) {
            initial = stored === 'dark';
        } else {
            // Default to dark mode for star background effect
            initial = true;
        }
        
        setIsDark(initial);
        if (initial) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log('Theme toggle clicked! Current theme:', isDark ? 'dark' : 'light');
        const next = !isDark;
        setIsDark(next);
        if (next) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', next ? 'dark' : 'light');
        console.log('Theme changed to:', next ? 'dark' : 'light');
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            onMouseDown={(e) => e.stopPropagation()}
            aria-label="Toggle theme"
            className={cn(
                "fixed p-3 rounded-full transition-all duration-300",
                "bg-transparent border-none hover:opacity-80 active:scale-95",
                "focus:outline-none focus:ring-2 focus:ring-offset-2",
                "cursor-pointer select-none"
            )}
            style={{ 
                top: isMobile ? '4rem' : '1rem', // Below hamburger button on mobile
                right: '1rem',
                zIndex: 10001,
                pointerEvents: 'auto',
                WebkitTapHighlightColor: 'transparent',
                touchAction: 'manipulation',
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)'
            }}
            title={isDark ? 'Switch to light' : 'Switch to dark'}
        >
            {isDark ? (
                <Sun className="h-6 w-6" style={{color: '#fcd34d', pointerEvents: 'none'}} />
            ) : (
                <Moon className="h-6 w-6" style={{color: '#fbbf24', pointerEvents: 'none'}} />
            )}
        </button>
    );
};