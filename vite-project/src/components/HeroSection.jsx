
import { ArrowDown } from "lucide-react";
export const HeroSection = () => {
    return (
        <>
            <section
                id="hero"
                className="relative min-h-screen flex flex-col items-center justify-center px-4"
            >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">
                            {" "}Ashalya
                        </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                            {" "}Senarathna
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I’m an Information Technology undergraduate and aspiring full-stack developer,
                        passionate about building clean, modern, and user-focused digital experiences.
                    </p>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button" style={{ color: '#ffffff' }}>
                            View my work
                        </a>
                    </div>
                </div>
            </div>
            <div style={{ position: 'absolute', bottom: '8vh', left: '50%', transform: 'translateX(-50%)', zIndex: 60 }}>
                <a
                    href="#projects"
                    className="flex flex-col items-center gap-1 text-sm transition-all duration-200 no-underline hero-bounce"
                    style={{ color: 'hsl(var(--foreground))' }}
                >
                    <ArrowDown className="w-6 h-6" style={{ color: 'hsl(var(--foreground))' }} />
                    <span className="text-xs mt-1" style={{ color: 'hsl(var(--foreground))' }}>Scroll</span>
                </a>
            </div>
            </section>
        </>
    );
};