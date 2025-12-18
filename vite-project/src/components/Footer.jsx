import { Linkedin, Github, Instagram, Heart } from "lucide-react";

export const Footer = () => {
    return (
        <footer 
            style={{ 
                borderTop: '1px solid hsl(var(--border))', 
                padding: '2rem 1rem',
                backgroundColor: 'hsl(var(--card))'
            }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
                
                {/* Social Links */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a 
                        href="https://www.linkedin.com/in/ashalya-senarathna-782992292" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ padding: '0.5rem', color: 'inherit', opacity: 0.7, transition: 'opacity 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                        onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                    >
                        <Linkedin style={{ width: '1.25rem', height: '1.25rem' }} />
                    </a>
                    <a 
                        href="https://github.com/ashalyaSenarathna" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ padding: '0.5rem', color: 'inherit', opacity: 0.7, transition: 'opacity 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                        onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                    >
                        <Github style={{ width: '1.25rem', height: '1.25rem' }} />
                    </a>
                    <a 
                        href="https://www.instagram.com/ashalya__senarathna?igsh=cTN3cGhyZDR5dmRx&utm_source=qr" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ padding: '0.5rem', color: 'inherit', opacity: 0.7, transition: 'opacity 0.3s' }}
                        onMouseOver={(e) => e.currentTarget.style.opacity = 1}
                        onMouseOut={(e) => e.currentTarget.style.opacity = 0.7}
                    >
                        <Instagram style={{ width: '1.25rem', height: '1.25rem' }} />
                    </a>
                </div>

                {/* Copyright */}
                <div className="text-muted-foreground" style={{ fontSize: '0.875rem', textAlign: 'center', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                    <span>© {new Date().getFullYear()} Ashalya Senarathna. Made with</span>
                    <Heart style={{ width: '0.875rem', height: '0.875rem', color: 'hsl(0 84% 60%)', fill: 'hsl(0 84% 60%)' }} />
                </div>
            </div>
        </footer>
    );
};
