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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.80)",
              zIndex: 200,
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
            }}
          />

          {/* Modal — truly centered */}
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 210,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
              pointerEvents: "none",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.94 }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              style={{
                pointerEvents: "auto",
                width: "100%",
                maxWidth: "560px",
                maxHeight: "85vh",
                overflowY: "auto",
                background: "rgba(8,8,8,0.96)",
                borderRadius: "1.5rem",
                border: "1px solid rgba(255,255,255,0.12)",
                boxShadow: "0 40px 100px rgba(0,0,0,0.85), inset 0 1px 0 rgba(255,255,255,0.10)",
                padding: "2rem",
              }}
            >
              {/* Header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <div>
                  <span className="section-badge" style={{ marginBottom: "0.5rem" }}>Let's Connect</span>
                  <h2
                    className="section-heading"
                    style={{ fontSize: "1.75rem", margin: "0 0 0.375rem" }}
                  >
                    Open to opportunities
                  </h2>
                  <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.875rem", fontWeight: 300, margin: 0, lineHeight: 1.5 }}>
                    Internships, collaborations & full-time roles in AI, Data Science & Full-Stack
                  </p>
                </div>
                <button
                  onClick={onClose}
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    borderRadius: "50%",
                    width: "2rem",
                    height: "2rem",
                    minWidth: "2rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    color: "white",
                    marginLeft: "1rem",
                    flexShrink: 0,
                  }}
                >
                  <X size={15} />
                </button>
              </div>

              {/* Profile cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {profiles.map((profile, i) => {
                  const Icon = profile.icon;
                  return (
                    <motion.a
                      key={profile.name}
                      href={profile.url}
                      target={profile.url.startsWith("mailto") ? "_self" : "_blank"}
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.4 }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.875rem",
                        padding: "0.875rem 1rem",
                        borderRadius: "0.875rem",
                        background: profile.color,
                        border: `1px solid ${profile.borderColor}`,
                        textDecoration: "none",
                        color: "white",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        backdropFilter: "blur(8px)",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(4px)";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.4)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.transform = "translateX(0)";
                        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                      }}
                    >
                      <div
                        style={{
                          width: "2.25rem",
                          height: "2.25rem",
                          borderRadius: "0.625rem",
                          background: "rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          border: "1px solid rgba(255,255,255,0.10)",
                        }}
                      >
                        <Icon size={16} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontWeight: 500, fontSize: "0.9rem", lineHeight: 1.3 }}>
                          {profile.name}
                        </div>
                        <div style={{ fontSize: "0.775rem", color: "rgba(255,255,255,0.45)", fontWeight: 300 }}>
                          {profile.handle}
                        </div>
                      </div>
                      <div style={{ fontSize: "0.775rem", color: "rgba(255,255,255,0.40)", fontWeight: 300, textAlign: "right", maxWidth: "130px", lineHeight: 1.3 }}>
                        {profile.description}
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Footer note */}
              <div
                style={{
                  marginTop: "1.25rem",
                  padding: "0.875rem 1rem",
                  borderRadius: "0.875rem",
                  background: "rgba(255,255,255,0.025)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  textAlign: "center",
                }}
              >
                <p style={{ color: "rgba(255,255,255,0.42)", fontSize: "0.8rem", fontWeight: 300, margin: 0 }}>
                  Based in Coimbatore, India · Open to remote & hybrid roles
                </p>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
