import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase, GraduationCap, Award } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
};

const experiences = [
  {
    type: "education",
    title: "B.Tech in AI & Data Science",
    org: "SNS College of Engineering",
    period: "2022 – 2026",
    location: "Coimbatore, India",
    description: "Pursuing a Bachelor's in Artificial Intelligence & Data Science with a 9.36 CGPA. Deep focus on machine learning, neural networks, and full-stack development.",
    tags: ["AI", "Data Science", "Python", "Machine Learning"],
  },
  {
    type: "work",
    title: "AI & Full-Stack Development",
    org: "Independent Projects",
    period: "2023 – Present",
    location: "Remote",
    description: "Built multiple end-to-end AI-powered applications integrating OpenAI, Supabase, and React. Developed tools that solve real-world problems using generative AI.",
    tags: ["OpenAI", "React", "Supabase", "Python"],
  },
  {
    type: "achievement",
    title: "Technical Skill Builder",
    org: "HackerRank & Exercism",
    period: "2024 – Present",
    location: "Online",
    description: "Actively solving problems in Data Structures, Algorithms, and Python. Earned verified certifications in Problem Solving (Basic) from HackerRank.",
    tags: ["Problem Solving", "Algorithms", "Python"],
  },
];

export default function Experience() {
  return (
    <div style={{ background: "black", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "4rem" }}>
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Background blobs */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div
          className="cloud-drift-1"
          style={{
            position: "absolute",
            top: "10%",
            right: "-10%",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.025) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="cloud-drift-2"
          style={{
            position: "absolute",
            bottom: "10%",
            left: "-10%",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.02) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div {...fadeUp} style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-badge">Journey</span>
          <h1
            className="section-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginTop: "0.75rem", marginBottom: "1rem" }}
          >
            Where I've been,<br />what I've built.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 300, fontSize: "1rem", maxWidth: "30rem", margin: "0 auto", lineHeight: 1.7 }}>
            A timeline of education, projects, and continuous learning in the world of AI & full-stack development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "1.5rem",
              top: 0,
              bottom: 0,
              width: "1px",
              background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.2) 20%, rgba(255,255,255,0.2) 80%, transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {experiences.map((exp, i) => {
              const Icon = exp.type === "education" ? GraduationCap : exp.type === "work" ? Briefcase : Award;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: "flex", gap: "2rem", paddingLeft: "0.5rem" }}
                >
                  {/* Icon dot */}
                  <div style={{ flexShrink: 0, marginTop: "0.25rem" }}>
                    <div
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "50%",
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={14} />
                    </div>
                  </div>

                  {/* Card */}
                  <div
                    style={{
                      flex: 1,
                      borderRadius: "1.25rem",
                      padding: "1.5rem",
                      background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                      backdropFilter: "blur(40px)",
                      border: "1px solid rgba(255,255,255,0.09)",
                      boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 20px 60px rgba(0,0,0,0.4)",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.transform = "translateY(0)")}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                      <div>
                        <h3 style={{ fontFamily: "Barlow, sans-serif", fontWeight: 500, fontSize: "1.05rem", marginBottom: "0.25rem", color: "white" }}>
                          {exp.title}
                        </h3>
                        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", fontWeight: 300, margin: 0 }}>
                          {exp.org} · {exp.location}
                        </p>
                      </div>
                      <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", fontWeight: 300, whiteSpace: "nowrap" }}>
                        {exp.period}
                      </span>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontWeight: 300, fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {exp.description}
                    </p>
                    <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.6)",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            borderRadius: "9999px",
                            padding: "0.2rem 0.7rem",
                            fontWeight: 400,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          {...fadeUp}
          style={{ textAlign: "center", marginTop: "4rem" }}
        >
          <a
            href="mailto:nivethitha1131@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.375rem",
              borderRadius: "9999px",
              padding: "0.75rem 1.75rem",
              color: "white",
              textDecoration: "none",
              fontFamily: "Barlow, sans-serif",
              fontSize: "0.9rem",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.12)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)")}
          >
            Let's Work Together <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
