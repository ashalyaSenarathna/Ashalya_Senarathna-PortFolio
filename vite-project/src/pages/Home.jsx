import { ThemeToggle } from '../components/ThemeToggle';
import { StarBackground } from '../components/StarBackground';
import { Navbar } from '../components/Navbar';

export const Home = () => {

    return (
        <div 
            className="min-h-screen bg-background text-foreground"
            style={{
                minHeight: '100vh',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Star Background - Only shows in dark mode */}
            <StarBackground />
            
            {/* NavBar - Fixed at top with high z-index */}
            <Navbar />
            
            {/* Theme Toggle - Outside content div to avoid z-index issues */}
            <ThemeToggle />
            
            {/* Content layer */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                {/* Main Content */}

                {/* Footer */}
            </div>
        </div>
    );
};
