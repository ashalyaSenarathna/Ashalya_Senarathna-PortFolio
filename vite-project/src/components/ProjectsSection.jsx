
import { ExternalLink, Github, ArrowUpRight, Sparkles, Star } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Little Nest Daycare",
        description: "A Beautiful and User-friendly daycare management system built with MERN stack. University ITP project.",
        image: "/Projects/project1.png",
        tags: ["React", "Node.js", "MongoDB"],
        demoUrl: "#",
        githubUrl: "https://github.com/madhawadiyanath/Daycare-Managment-System",
        featured: true,
        year: "2024",
    },
    {
        id: 2,
        title: "Personal Portfolio",
        description: "A Beautiful and professional portfolio website built with React and modern animations.",
        image: "/Projects/project2.png",
        tags: ["React", "Tailwind", "Vite"],
        demoUrl: "#",
        githubUrl: "https://github.com/ashalyaSenarathna/Personal-PortFolio",
        featured: false,
        year: "2024",
    },
    {
        id: 3,
        title: "VtoA Converter",
        description: "A user-friendly video to audio converter application built with Python.",
        image: "/Projects/project3.png",
        tags: ["Python", "FFmpeg", "Desktop"],
        demoUrl: "#",
        githubUrl: "https://github.com/ashalyaSenarathna/Converter",
        featured: false,
        year: "2023",
    },
];

// Tag color mapping
const tagColors = {
    "React": "bg-blue-500/10 text-blue-400 border-blue-500/20",
    "Node.js": "bg-green-500/10 text-green-400 border-green-500/20",
    "MongoDB": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "Tailwind": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    "Vite": "bg-purple-500/10 text-purple-400 border-purple-500/20",
    "Python": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    "FFmpeg": "bg-red-500/10 text-red-400 border-red-500/20",
    "Desktop": "bg-gray-500/10 text-gray-400 border-gray-500/20",
};

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-6xl">
            <h2 style={{ fontSize: '1.875rem', fontWeight: 700, marginBottom: '1rem', textAlign: 'center' }}>Featured <span className="text-gradient">Projects</span></h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
            </p>
            


            <div className="flex flex-wrap justify-center gap-8 lg:gap-10 w-full mb-24 lg:mb-32">
                {projects.map((project, key) => (
                    <article key={key} className="flex-shrink-0 max-w-[280px] w-full sm:w-[45%] md:w-[30%] lg:w-[22%] mx-4 relative flex flex-col h-full group bg-gradient-to-b from-card to-card/50 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-primary/10 hover:scale-[1.03] hover:z-10 transition-all duration-500 overflow-hidden">
                        
                        {/* Featured ribbon */}
                        {project.featured && (
                            <div className="absolute top-0 right-0 z-20">
                                <div className="bg-gradient-to-r from-primary to-purple-500 text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                                    <Star className="w-3 h-3 fill-current" /> Featured
                                </div>
                            </div>
                        )}

                        {/* Image with gradient overlay */}
                        <div className="relative overflow-hidden">
                            <img loading="lazy" src={project.image} alt={project.title} className="w-full h-40 object-cover transition-transform duration-700 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-80" />
                            
                            {/* Year badge */}
                            <div className="absolute bottom-2 right-2 px-2 py-0.5 bg-background/80 backdrop-blur-sm rounded-md text-[10px] font-medium text-muted-foreground">
                                {project.year}
                            </div>

                            {/* Hover overlay with quick links */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-primary hover:scale-110 transition-all duration-300 border border-white/20">
                                    <ExternalLink className="w-5 h-5 text-white" />
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full backdrop-blur-sm hover:bg-primary hover:scale-110 transition-all duration-300 border border-white/20">
                                    <Github className="w-5 h-5 text-white" />
                                </a>
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-4 flex flex-col flex-grow">
                            {/* Tags with colors */}
                            <div className="flex flex-wrap gap-1.5 mb-3">
                                {project.tags.map((tag, i) => (
                                    <span key={i} className={`px-2 py-0.5 text-[10px] font-medium rounded-full border ${tagColors[tag] || "bg-muted-foreground/10 text-muted-foreground border-muted-foreground/20"}`}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            
                            {/* Title with hover underline effect */}
                            <h3 className="text-base font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300 relative inline-block">
                                {project.title}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                            </h3>
                            
                            <p className="text-muted-foreground text-xs mb-4 line-clamp-2 leading-relaxed">{project.description}</p>

                            {/* Action buttons */}
                            <div className="flex items-center justify-between pt-3 border-t border-border/30 mt-auto">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary bg-primary/10 px-4 py-1.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn">
                                    View <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                </a>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                                    <Github className="w-4 h-4" /> Code
                                </a>
                            </div>
                        </div>

                        {/* Decorative gradient border glow on hover */}
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" 
                             style={{ boxShadow: 'inset 0 0 20px rgba(139,92,246,0.1), 0 0 40px rgba(139,92,246,0.05)'}} />
                    </article>
                ))}
            </div>

            {/* spacer to separate cards from button */}
            <div className="w-full">
                <div className="h-24 lg:h-48" />
            </div>

            {/* View all projects link */}
            <div className="flex justify-center mt-8">
                <a href="https://github.com/ashalyaSenarathna" target="_blank" rel="noopener noreferrer" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                    Check My GitHub <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
            </div>
        </div>
    </section>
};