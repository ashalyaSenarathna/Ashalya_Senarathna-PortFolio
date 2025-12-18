
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Little Nest Daycare",
        description: "A Beautiful and User-friendly daycare management system built with MERN stack. University ITP project.",
        image: "/Projects/project1.png",
        tags: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "https://github.com/madhawadiyanath/Daycare-Managment-System",
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "A Beautiful and professional portfolio website built with React and modern animations.",
        image: "/Projects/project2.png",
        tags: ["React", "Tailwind", "Vite"],
        demoUrl: "#",
        githubUrl: "https://github.com/ashalyaSenarathna/Personal-PortFolio",
    },
    {
        id: 3,
        title: "VtoA Converter",
        description: "A user-friendly video to audio converter application built with Python.",
        image: "/Projects/project3.png",
        tags: ["Python", "FFmpeg", "Desktop"],
        demoUrl: "#",
        githubUrl: "https://github.com/ashalyaSenarathna/Converter",
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-6xl">
                <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>
                    Featured <span className="text-gradient">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
                </p>

                {/* Project Cards Grid */}
                <div 
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1.5rem',
                        marginBottom: '3rem'
                    }}
                    className="projects-grid"
                >
                    {projects.map((project) => (
                        <article 
                            key={project.id} 
                            style={{
                                backgroundColor: 'hsl(var(--card))',
                                border: '1px solid hsl(var(--border))',
                                borderRadius: '0.75rem',
                                overflow: 'hidden',
                                transition: 'all 0.3s ease',
                            }}
                            className="project-card"
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'hsl(var(--border))';
                            }}
                        >
                            {/* Project Image */}
                            <div style={{ position: 'relative', overflow: 'hidden' }}>
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '180px',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>

                            {/* Card Content */}
                            <div style={{ padding: '1.25rem' }}>
                                {/* Tags */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.75rem' }}>
                                    {project.tags.map((tag, i) => (
                                        <span 
                                            key={i}
                                            style={{
                                                padding: '0.25rem 0.75rem',
                                                fontSize: '0.75rem',
                                                fontWeight: 500,
                                                borderRadius: '0.25rem',
                                                backgroundColor: 'hsl(250 65% 65% / 0.15)',
                                                color: 'hsl(250 65% 75%)',
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h3 style={{ 
                                    fontSize: '1.125rem', 
                                    fontWeight: 600, 
                                    marginBottom: '0.5rem',
                                    color: 'inherit'
                                }}>
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p 
                                    className="text-muted-foreground"
                                    style={{ 
                                        fontSize: '0.875rem', 
                                        lineHeight: 1.5,
                                        marginBottom: '1rem',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden'
                                    }}
                                >
                                    {project.description}
                                </p>

                                {/* Action Icons */}
                                <div style={{ display: 'flex', gap: '0.75rem' }}>
                                    <a 
                                        href={project.demoUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ 
                                            color: 'inherit', 
                                            opacity: 0.6,
                                            transition: 'all 0.2s'
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'hsl(250 65% 65%)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.6; e.currentTarget.style.color = 'inherit'; }}
                                    >
                                        <ExternalLink style={{ width: '1.25rem', height: '1.25rem' }} />
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        style={{ 
                                            color: 'inherit', 
                                            opacity: 0.6,
                                            transition: 'all 0.2s'
                                        }}
                                        onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.color = 'hsl(250 65% 65%)'; }}
                                        onMouseLeave={(e) => { e.currentTarget.style.opacity = 0.6; e.currentTarget.style.color = 'inherit'; }}
                                    >
                                        <Github style={{ width: '1.25rem', height: '1.25rem' }} />
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* View all projects link */}
                <div className="flex justify-center mt-8">
                    <a href="https://github.com/ashalyaSenarathna" target="_blank" rel="noopener noreferrer" className="cosmic-button w-fit flex items-center mx-auto gap-2" style={{ color: '#ffffff' }}>
                        Check My GitHub
                    </a>
                </div>
            </div>

            <style>{`
                @media (max-width: 1024px) {
                    .projects-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                    }
                }
                @media (max-width: 640px) {
                    .projects-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    );
};