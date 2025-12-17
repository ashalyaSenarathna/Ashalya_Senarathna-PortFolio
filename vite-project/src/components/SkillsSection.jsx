import { useMemo, useState } from "react";

const skills = [
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 80, category: "frontend" },

  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },

  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
];

export const SkillsSection = () => {
  const [filter, setFilter] = useState("all");
  const categories = ["all", "frontend", "backend", "tools"];

  const visibleSkills = useMemo(() => {
    return filter === "all" ? skills : skills.filter((s) => s.category === filter);
  }, [filter]);

  return (
    <section id="skills" style={{ padding: "4rem 1rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <h2 style={{ fontSize: "1.875rem", fontWeight: 700, marginBottom: "1rem" }}>
          My <span className="text-gradient">Skills</span>
        </h2>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", marginBottom: 24 }}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: 9999,
                border: c === filter ? "2px solid transparent" : "1px solid rgba(255,255,255,0.06)",
                background: c === filter ? "linear-gradient(90deg,#7c3aed,#6366f1)" : "transparent",
                color: c === filter ? "white" : "hsl(var(--muted-foreground))",
                cursor: "pointer",
              }}
            >
              {c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}
            </button>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 16,
          }}
          className="skills-grid"
        >
          {visibleSkills.map((skill) => (
            <div
              key={skill.name}
              style={{
                padding: 20,
                borderRadius: 12,
                background: "hsl(222 47% 8% / 0.6)",
                border: "1px solid rgba(255,255,255,0.03)",
                boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                <div style={{ fontWeight: 600 }}>{skill.name}</div>
                <div style={{ fontSize: 12, color: "hsl(var(--muted-foreground))" }}>{skill.level}%</div>
              </div>

              <div style={{ height: 8, background: "rgba(255,255,255,0.04)", borderRadius: 9999, overflow: "hidden" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${skill.level}%`,
                    background: "linear-gradient(90deg,#7c3aed,#6366f1)",
                    borderRadius: 9999,
                    transition: "width 600ms ease",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
};
