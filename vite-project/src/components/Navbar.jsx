import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
    const location = useLocation();
    const [isMobile, setIsMobile] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/#about', label: 'About' },
        { path: '/#skills', label: 'Skills' },
        { path: '/#projects', label: 'Projects' },
        { path: '/#contact', label: 'Contact' },
    ];

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/' && !location.hash;
        }
        return location.hash === path.split('#')[1];
    };

    return (
        <>
            {/* Portfolio Name - Fixed on left */}
            <Link
                to="/"
                style={{
                    position: 'fixed',
                    top: isMobile ? '1rem' : '1.5rem',
                    left: isMobile ? '1rem' : '2rem',
                    zIndex: 10000,
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                }}
            >
                <span style={{ 
                    color: '#ffffff',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.5)',
                    fontWeight: 700,
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                }}>
                    Ashalya Senarathna
                </span>
                <span style={{ 
                    color: '#a78bfa',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(167,139,250,0.8)',
                    fontWeight: 700,
                    fontSize: isMobile ? '1.2rem' : '1.5rem',
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                }}>
                    Portfolio
                </span>
            </Link>

            {/* Desktop Navigation - Horizontal */}
            {!isMobile && (
                <nav
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 10000,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1.5rem 2rem',
                        width: '100%',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            marginLeft: '8rem', // Move further to the right
                        }}
                    >
                        {navItems.map((item) => {
                            const active = isActive(item.path);
                            const textColor = active 
                                ? 'hsl(var(--primary))' 
                                : 'hsl(var(--foreground))';
                            
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    style={{
                                        color: textColor,
                                        textDecoration: 'none',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        padding: '0.25rem 0.5rem',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.opacity = '0.8';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.opacity = '1';
                                    }}
                                >
                                    {item.label}
                                    {active && (
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                height: '2px',
                                                background: 'hsl(var(--primary))',
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </nav>
            )}

            {/* Mobile Menu Toggle Button */}
            {isMobile && (
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    style={{
                        position: 'fixed',
                        top: '1rem',
                        right: '1rem',
                        zIndex: 10050,
                        padding: '0.5rem',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: 'hsl(var(--foreground))',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            )}

            {/* Mobile Navigation - Full screen overlay with blur */}
            {isMobile && isMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'hsl(var(--background) / 0.95)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        zIndex: 10040,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                >
                    <nav
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '2rem',
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {navItems.map((item) => {
                            const active = isActive(item.path);
                            const textColor = active 
                                ? 'hsl(var(--primary))' 
                                : 'hsl(var(--foreground))';
                            
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    style={{
                                        color: textColor,
                                        textDecoration: 'none',
                                        fontSize: '1.125rem',
                                        fontWeight: 500,
                                        padding: '0.5rem 1rem',
                                        position: 'relative',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.target.style.opacity = '0.8';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.opacity = '1';
                                    }}
                                >
                                    {item.label}
                                    {active && (
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: '50%',
                                                transform: 'translateX(-50%)',
                                                width: '60%',
                                                height: '2px',
                                                background: 'hsl(var(--primary))',
                                            }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            )}
        </>
    );
};
