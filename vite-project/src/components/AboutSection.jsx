

import { Code, User, Briefcase } from "lucide-react";

export const AboutSection = () => {
    const skills = [
        {
            icon: Code,
            title: "Web Development",
            description: "Creating responsive websites and web applications with modern frameworks."
        },
        {
            icon: User,
            title: "UI/UX Design",
            description: "Designing intuitive user interfaces and seamless user experiences."
        },
        {
            icon: Briefcase,
            title: "Project Management",
            description: "Leading projects from conception to completion with agile methodologies."
        }
    ];

    return (
        <section id="about" style={{ padding: '6rem 1rem' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <h2 
                    style={{ 
                        fontSize: '1.875rem', 
                        fontWeight: 'bold', 
                        marginBottom: '3rem', 
                        textAlign: 'center' 
                    }}
                >
                    About <span className="text-gradient">Me</span>
                </h2>

                <div 
                    style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(2, 1fr)', 
                        gap: '3rem',
                        alignItems: 'start'
                    }}
                    className="about-grid"
                >
                    {/* Left column: content block */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>
                            Passionate Web Developer | IT Undergraduate | Tech Enthusiast
                        </h3>

                        <p className="text-muted-foreground">
                            As an undergraduate Information Technology student, 
                            I focus on building responsive, accessible, 
                            and user-friendly web applications using modern web technologies through academic and personal projects.
                        </p>

                        <p className="text-muted-foreground">
                            I enjoy solving problems through clean and efficient code,
                             and I am continuously learning new technologies and best practices to grow as a developer in the ever-evolving tech landscape
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', flexWrap: 'wrap' }}>
                            <a href="#contact" className="cosmic-button" style={{ color: '#ffffff' }}>
                                Get in Touch
                            </a>
                            <a
                                href="/CV/Ashalya_Senarathna_CV.pdf"
                                download="Ashalya_Senarathna_CV.pdf"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '0.5rem 1.5rem',
                                    borderRadius: '9999px',
                                    border: '1px solid hsl(250 65% 65%)',
                                    color: 'hsl(250 65% 65%)',
                                    textDecoration: 'none',
                                    transition: 'background-color 0.3s'
                                }}
                                onMouseOver={(e) => e.target.style.backgroundColor = 'hsl(250 65% 65% / 0.1)'}
                                onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    {/* Right column: skill cards */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {skills.map((skill, index) => {
                            const IconComponent = skill.icon;
                            return (
                                <div
                                    key={index}
                                    style={{
                                        padding: '1.5rem',
                                        borderRadius: '0.75rem',
                                        border: '1px solid hsl(var(--border))',
                                        backgroundColor: 'hsl(var(--card))',
                                        backdropFilter: 'blur(8px)',
                                        transition: 'border-color 0.3s, transform 0.3s'
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.borderColor = 'hsl(250 65% 65% / 0.5)';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.borderColor = 'hsl(var(--border))';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                        <div 
                                            style={{ 
                                                padding: '0.75rem', 
                                                borderRadius: '0.75rem',
                                                backgroundColor: 'hsl(250 65% 65% / 0.1)'
                                            }}
                                        >
                                            <IconComponent 
                                                style={{ 
                                                    width: '1.5rem', 
                                                    height: '1.5rem', 
                                                    color: 'hsl(250 65% 65%)' 
                                                }} 
                                            />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.25rem' }}>
                                                {skill.title}
                                            </h4>
                                            <p className="text-muted-foreground" style={{ fontSize: '0.875rem', margin: 0 }}>
                                                {skill.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    .about-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};