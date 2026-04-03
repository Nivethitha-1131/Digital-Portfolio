import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import NebulaCanvas from "@/components/NebulaCanvas";

const experiences = [
  {
    type: "PART-TIME",
    title: "Junior Software Developer",
    org: "EduSpine",
    period: "Jan 2026 — Present",
    isCurrent: true,
    location: "Coimbatore, Tamil Nadu, India · Hybrid",
    description: "Building AI-powered educational tools and full-stack applications integrating generative AI models into real learning workflows.",
    tags: ["Artificial Intelligence (AI)", "Generative AI Tools", "Full-Stack Development"],
  },
  {
    type: "INTERNSHIP",
    title: "Full-Stack Developer Intern",
    org: "OneDot Communications Ltd",
    period: "Jul 2025 — Jan 2026",
    isCurrent: false,
    location: "Coimbatore, Tamil Nadu, India · Remote",
    description: "Developed and maintained full-stack web applications, managed client portfolios, and integrated generative AI tools into production pipelines.",
    tags: ["Portfolio Management", "Git", "GitHub", "Generative AI Tools", "TypeScript", "Vite"],
  },
  {
    type: "EDUCATION",
    title: "B.Tech — AI & Data Science",
    org: "SNS College of Engineering",
    period: "Sep 2024 — Present",
    isCurrent: true,
    location: "Coimbatore, India",
    description: "CGPA: 9.36. Deep focus on machine learning, neural networks, data structures, and full-stack development with AI integrations.",
    tags: ["AI", "Data Science", "Python", "Machine Learning", "Neural Networks"],
  },
];

export default function Experience() {
  return (
    <div
      style={{
        background: "black",
        minHeight: "100vh",
        paddingTop: "8rem",
        paddingBottom: "5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Purple nebula particle canvas — full page background */}
      <NebulaCanvas />

      {/* Overlay to keep text readable */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      <div className="grain-overlay" />

      <div style={{ maxWidth: "56rem", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 2 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <span className="section-badge">Experience</span>
          <h1
            className="section-heading"
            style={{
              fontSize: "clamp(2.75rem, 7vw, 5rem)",
              marginTop: "0.75rem",
              marginBottom: 0,
            }}
          >
            Where I've built<br />real things.
          </h1>
        </motion.div>

        {/* Experience cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                borderRadius: "1rem",
                padding: "1.5rem 1.75rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.09)",
                backdropFilter: "blur(30px)",
                WebkitBackdropFilter: "blur(30px)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 16px 48px rgba(0,0,0,0.5)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.08) inset, 0 24px 60px rgba(0,0,0,0.6)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.06) inset, 0 16px 48px rgba(0,0,0,0.5)";
              }}
            >
              {/* Top row: type + period + current badge */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.625rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Briefcase size={13} style={{ color: "rgba(255,255,255,0.35)" }} />
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 500,
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,0.45)",
                      textTransform: "uppercase",
                    }}
                  >
                    {exp.type}
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <span style={{ fontSize: "0.825rem", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
                    {exp.period}
                  </span>
                  {exp.isCurrent && (
                    <span
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 500,
                        color: "white",
                        background: "rgba(255,255,255,0.1)",
                        border: "1px solid rgba(255,255,255,0.18)",
                        borderRadius: "9999px",
                        padding: "0.15rem 0.625rem",
                      }}
                    >
                      Current
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  color: "white",
                  marginBottom: "0.25rem",
                  lineHeight: 1.3,
                }}
              >
                {exp.title}
              </h3>

              {/* Org */}
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", fontWeight: 300, margin: 0, marginBottom: exp.location ? "0.2rem" : "0.875rem" }}>
                {exp.org}
              </p>

              {/* Location */}
              {exp.location && (
                <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.8rem", fontWeight: 300, marginBottom: "0.875rem" }}>
                  📍 {exp.location}
                </p>
              )}

              {/* Description */}
              {exp.description && (
                <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 300, fontSize: "0.875rem", lineHeight: 1.6, marginBottom: "1rem" }}>
                  {exp.description}
                </p>
              )}

              {/* Tags */}
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.775rem",
                      color: "rgba(255,255,255,0.65)",
                      background: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      borderRadius: "9999px",
                      padding: "0.25rem 0.75rem",
                      fontWeight: 400,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          style={{ textAlign: "center", marginTop: "3.5rem" }}
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
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.13)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.07)")}
          >
            Let's Work Together <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
