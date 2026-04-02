import { motion, AnimatePresence } from "framer-motion";
import { X, Github, Linkedin, Mail, Code2, Terminal } from "lucide-react";

interface HireModalProps {
  open: boolean;
  onClose: () => void;
}

const profiles = [
  {
    name: "LinkedIn",
    handle: "nivethitha-ramesh",
    description: "Professional profile & work history",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/nivethitha-ramesh/",
    color: "rgba(10,102,194,0.15)",
    borderColor: "rgba(10,102,194,0.4)",
  },
  {
    name: "GitHub",
    handle: "Nivethitha-1131",
    description: "Open source projects & code",
    icon: Github,
    url: "https://github.com/Nivethitha-1131",
    color: "rgba(255,255,255,0.04)",
    borderColor: "rgba(255,255,255,0.2)",
  },
  {
    name: "Email",
    handle: "nivethitha1131@gmail.com",
    description: "Best way to reach me directly",
    icon: Mail,
    url: "mailto:nivethitha1131@gmail.com",
    color: "rgba(234,67,53,0.1)",
    borderColor: "rgba(234,67,53,0.3)",
  },
  {
    name: "LeetCode",
    handle: "Nivethitha_R",
    description: "Problem solving & algorithms",
    icon: Terminal,
    url: "https://leetcode.com/u/Nivethitha_R/",
    color: "rgba(255,161,22,0.1)",
    borderColor: "rgba(255,161,22,0.3)",
  },
  {
    name: "Exercism",
    handle: "Nivethitha-1131",
    description: "Code practice & mentorship",
    icon: Code2,
    url: "https://exercism.org/profiles/Nivethitha-1131",
    color: "rgba(107,206,255,0.1)",
    borderColor: "rgba(107,206,255,0.3)",
  },
];

export default function HireModal({ open, onClose }: HireModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              zIndex: 200,
              backdropFilter: "blur(12px)",
            }}
          />
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 210,
              width: "min(90vw, 600px)",
              maxHeight: "85vh",
              overflowY: "auto",
              background: "rgba(10,10,10,0.95)",
              borderRadius: "1.5rem",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.1)",
              padding: "2rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div>
                <span className="section-badge">Let's Connect</span>
                <h2
                  className="section-heading"
                  style={{ fontSize: "2rem", marginTop: "0.5rem", marginBottom: "0.5rem" }}
                >
                  Open to opportunities
                </h2>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontWeight: 300, margin: 0 }}>
                  Internships, collaborations & full-time roles in AI, Data Science & Full-Stack
                </p>
              </div>
              <button
                onClick={onClose}
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  width: "2rem",
                  height: "2rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "white",
                  flexShrink: 0,
                }}
              >
                <X size={16} />
              </button>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {profiles.map((profile, i) => {
                const Icon = profile.icon;
                return (
                  <motion.a
                    key={profile.name}
                    href={profile.url}
                    target={profile.url.startsWith("mailto") ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      padding: "1rem 1.25rem",
                      borderRadius: "1rem",
                      background: profile.color,
                      border: `1px solid ${profile.borderColor}`,
                      textDecoration: "none",
                      color: "white",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                      backdropFilter: "blur(8px)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.4)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
                      (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                    }}
                  >
                    <div
                      style={{
                        width: "2.5rem",
                        height: "2.5rem",
                        borderRadius: "0.75rem",
                        background: "rgba(255,255,255,0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        border: "1px solid rgba(255,255,255,0.1)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 500, fontSize: "0.95rem", marginBottom: "0.1rem" }}>
                        {profile.name}
                      </div>
                      <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontWeight: 300 }}>
                        {profile.handle}
                      </div>
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", fontWeight: 300, textAlign: "right", maxWidth: "140px" }}>
                      {profile.description}
                    </div>
                  </motion.a>
                );
              })}
            </div>

            <div
              style={{
                marginTop: "1.5rem",
                padding: "1rem 1.25rem",
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                textAlign: "center",
              }}
            >
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.825rem", fontWeight: 300, margin: 0 }}>
                Based in Coimbatore, India · Open to remote & hybrid roles
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
