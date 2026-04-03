import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

interface NavbarProps {
  onHireMe: () => void;
}

export default function Navbar({ onHireMe }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (item: string) => {
    const id = item.toLowerCase();
    if (id === "experience") {
      navigate("/experience");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (id === "certifications") {
      navigate("/certifications");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // About, Skills — scroll on home page
    if (location !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 2rem)",
        maxWidth: "56rem",
        zIndex: 50,
      }}
    >
      <motion.div
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.1 }}
        className="liquid-glass"
        style={{
          borderRadius: "9999px",
          padding: "0 1.25rem",
          height: "3.5rem",
          display: "flex",
          alignItems: "center",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.12)"
            : "inset 0 1px 1px rgba(255,255,255,0.10)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div style={{ flex: 1 }}>
          <Link href="/">
            <span
              className="instrument-serif"
              style={{ color: "white", fontSize: "1.05rem", letterSpacing: "-0.02em", cursor: "pointer" }}
            >
              Nivethitha Ramesh
            </span>
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexShrink: 0,
          }}
        >
          {["About", "Skills", "Experience", "Certifications"].map((item) => (
            <button
              key={item}
              onClick={() => handleNavClick(item)}
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.75)",
                fontWeight: 400,
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.2s",
                fontFamily: "Barlow, sans-serif",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.color = "white")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.color = "rgba(255,255,255,0.75)")
              }
            >
              {item}
            </button>
          ))}
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
          <button
            onClick={onHireMe}
            style={{
              background: "white",
              color: "black",
              borderRadius: "9999px",
              padding: "0.375rem 1.25rem",
              fontSize: "0.875rem",
              fontWeight: 500,
              fontFamily: "Barlow, sans-serif",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "0.25rem",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
          >
            Hire Me <ArrowUpRight size={14} />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
