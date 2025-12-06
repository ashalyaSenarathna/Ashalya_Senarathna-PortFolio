import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utills';

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Default to light mode unless user previously selected dark
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        const initial = stored ? stored === 'dark' : prefersDark;
        // If no stored preference, check whether the document already has a .dark class
        const classDark = document.documentElement.classList.contains('dark');
        // Per request, default should be light mode; but honor an existing .dark class if present
        const effective = stored ? initial : (classDark ? true : false);
        setIsDark(effective);
        document.documentElement.classList.toggle('dark', effective);
    }, []);

    const toggle = () => {
        const next = !isDark;
        setIsDark(next);
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    const toggleTheme = () => {
        // reuse the existing toggle logic
        toggle();
    };

    return (
        <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className={cn(
                "fixed max-sm:hidden top-2 right-2 z-50 p-2 rounded-full transition-colors duration-300",
                "bg-transparent border-none hover:bg-transparent active:bg-transparent focus:outline-hidden"
            )}
            style={{ top: '1rem', right: '1rem' }}
            title={isDark ? 'Switch to light' : 'Switch to dark'}
        >
            {isDark ? <Sun className="h-6 w-6 text-yellow-300" style={{color: '#fcd34d'}} /> : <Moon className="h-6 w-6 text-yellow-900" style={{color: '#78350f'}} />}
        </button>
    );
};