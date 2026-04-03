import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Download, Code2, Brain, Globe, Database, ChevronRight } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import ParticleTitle from "@/components/ParticleTitle";

function useScrollFadeUp() {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  };
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 0.6], [0, 45]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  const fadeUp = useScrollFadeUp();

  const skillCards = [
    {
      icon: Code2,
      num: "01",
      title: "Languages & Logic",
      desc: "Python is my mother tongue. Fluent in React, Vite, HTML, CSS, Bootstrap — and conversational in Java and C.",
    },
    {
      icon: Brain,
      num: "02",
      title: "AI & Intelligent Systems",
      desc: "OpenAI APIs, Supabase backends, Google Generative AI, Claude — I don't just use AI tools, I integrate them into real products.",
    },
    {
      icon: Globe,
      num: "03",
      title: "Web & Deployment",
      desc: "From Figma to Vercel — React frontends, Git version control, and production-ready deployments that actually ship.",
    },
    {
      icon: Database,
      num: "04",
      title: "Data & Infrastructure",
      desc: "MySQL, SQLite, AWS Cloud Foundations. Data isn't just stored — it's structured to power decisions.",
    },
  ];

  return (
    <div style={{ background: "black", minHeight: "100vh" }}>
      {/* HERO */}
      <section
        id="hero"
        ref={heroRef}
        style={{
          height: "100vh",
          minHeight: "600px",
          background: "black",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Video background */}
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dgqsqiucd&public_id=Untitled_design_ydxlbl&autoplay=true&loop=true&muted=true&controls=false&showLogo=false&showJumpControls=false&hideContextMenu=true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "56.25vw",
            border: "none",
            pointerEvents: "none",
            zIndex: 0,
          }}
          allow="autoplay; fullscreen"
          title="hero background"
        />
        <div style={{ position: "absolute", inset: 0, zIndex: 1, background: "rgba(0,0,0,0.05)" }} />
        <ParticleCanvas />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity, zIndex: 10, position: "relative" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div
            style={{
              paddingTop: "110px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              paddingLeft: "1.5rem",
              paddingRight: "1.5rem",
            }}
          >
            {/* Badge */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="liquid-glass"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                borderRadius: "9999px",
                padding: "0.5rem 1rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  background: "white",
                  color: "black",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  padding: "0.15rem 0.5rem",
                  borderRadius: "9999px",
                }}
              >
                Open to Work
              </span>
              <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem" }}>
                AI & Data Science Engineer · Coimbatore, India
              </span>
            </motion.div>

            {/* Particle Title */}
            <div style={{ maxWidth: "960px", width: "100%" }}>
              <ParticleTitle />
            </div>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.8, duration: 0.8 }}
              style={{
                color: "rgba(255,255,255,0.65)",
                fontWeight: 300,
                fontSize: "1rem",
                maxWidth: "540px",
                marginBottom: "2rem",
                lineHeight: 1.6,
              }}
            >
              Python. React. OpenAI. Supabase. Every tool a brushstroke — every system a universe built from scratch.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
            >
              <a
                href="#skills"
                onClick={(e) => { e.preventDefault(); document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" }); }}
                className="liquid-glass-strong"
                style={{
                  borderRadius: "9999px",
                  padding: "0.75rem 1.75rem",
                  color: "white",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.9rem",
                  fontFamily: "Barlow, sans-serif",
                }}
              >
                View My Work <ArrowUpRight size={16} />
              </a>
              <a
                href="/resume.pdf"
                download="Nivethitha_Ramesh_Resume.pdf"
                style={{
                  borderRadius: "9999px",
                  padding: "0.75rem 1.25rem",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  fontSize: "0.9rem",
                  fontFamily: "Barlow, sans-serif",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                Download Resume <Download size={16} />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom fade */}
        <div
          style={{
            position: "absolute",
            zIndex: 5,
            top: "calc(56.25vw - 280px)",
            height: "280px",
            left: 0,
            right: 0,
            background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.9) 80%, black 100%)",
            pointerEvents: "none",
          }}
        />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          background: "black",
          paddingTop: "7rem",
          paddingBottom: "9rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          textAlign: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "70%",
            height: "70%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
            objectFit: "contain",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 75%)",
          }}
        >
          <source src="https://res.cloudinary.com/dgqsqiucd/video/upload/v1773990554/14967453_1920_1080_30fps_nrgzdo.mp4" type="video/mp4" />
        </video>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, zIndex: 3, height: "300px", background: "linear-gradient(to bottom, transparent, black)", pointerEvents: "none" }} />

        <div style={{ maxWidth: "48rem", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <motion.div {...fadeUp}>
            <span className="section-badge">Origin Story</span>
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1.5rem" }}
          >
            I didn't choose technology —<br />it chose me.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: "rgba(255,255,255,0.72)",
              fontWeight: 300,
              fontSize: "1.05rem",
              lineHeight: 1.7,
              marginBottom: "2.5rem",
            }}
          >
            Growing up in Coimbatore, I found my calling at the intersection of logic and imagination. Today, as a B.Tech student in AI & Data Science at SNS College of Engineering — carrying a 9.36 CGPA — I build things that think.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              flexWrap: "wrap",
            }}
          >
            {["IBM", "Google", "AWS", "HackerRank", "SNS College", "EduSpine"].map((partner) => (
              <span
                key={partner}
                style={{
                  fontSize: "0.875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  fontWeight: 300,
                  color: "rgba(255,255,255,0.42)",
                }}
              >
                {partner}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW I WORK */}
      <section
        style={{
          background: "black",
          position: "relative",
        }}
      >
        <div style={{ position: "relative", overflow: "hidden", paddingTop: "10rem", paddingBottom: "14rem", paddingLeft: "1.5rem", paddingRight: "1.5rem" }}>
          <iframe
            src="https://player.cloudinary.com/embed/?cloud_name=dgqsqiucd&public_id=Untitled_design_2_elcyul&autoplay=true&loop=true&muted=true&controls=false&showLogo=false&showJumpControls=false&hideContextMenu=true"
            style={{
              position: "absolute",
              top: "-12%",
              left: 0,
              width: "100%",
              height: "124%",
              border: "none",
              pointerEvents: "none",
              zIndex: 0,
            }}
            allow="autoplay; fullscreen"
            title="process background"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 1,
              background: "linear-gradient(to bottom, black 0%, transparent 45%, transparent 55%, black 100%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ maxWidth: "64rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
            <motion.div {...fadeUp}>
              <span className="section-badge">My Approach</span>
            </motion.div>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-heading"
              style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1.5rem" }}
            >
              I imagine it.<br />I build it.<br />I ship it.
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                color: "rgba(255,255,255,0.70)",
                fontWeight: 300,
                fontSize: "1.05rem",
                maxWidth: "36rem",
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              From a spark of an idea to a deployed product — I move fast without losing precision. Python backends, React frontends, AI integrations. Full stack, full focus.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        style={{
          background: "black",
          paddingTop: "7rem",
          paddingBottom: "9rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: "60%",
            height: "60%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
            objectFit: "cover",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 15%, transparent 72%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 15%, transparent 72%)",
          }}
        >
          <source src="https://res.cloudinary.com/dgqsqiucd/video/upload/v1773990554/14967453_1920_1080_30fps_nrgzdo.mp4" type="video/mp4" />
        </video>

        <div style={{ maxWidth: "56rem", margin: "0 auto", position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <motion.div {...fadeUp}>
              <span className="section-badge">The Stack</span>
            </motion.div>
            <motion.h2
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-heading"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              Built with precision<br />and curiosity in balance.
            </motion.h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.25rem",
              maxWidth: "48rem",
              margin: "0 auto",
            }}
          >
            {skillCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -6 }}
                  className="glass-card-hover"
                  style={{
                    borderRadius: "1.5rem",
                    padding: "1.75rem",
                    position: "relative",
                    overflow: "hidden",
                    background: "linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
                    backdropFilter: "blur(40px)",
                    border: "1px solid rgba(255,255,255,0.09)",
                    boxShadow: "0 1px 0 rgba(255,255,255,0.08) inset, 0 20px 60px rgba(0,0,0,0.5)",
                  }}
                >
                  <div className="shimmer-effect" />
                  <div
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.3)",
                      letterSpacing: "0.08em",
                      marginBottom: "1rem",
                      fontWeight: 400,
                    }}
                  >
                    {card.num}
                  </div>
                  <div
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      background: "rgba(255,255,255,0.07)",
                      borderRadius: "0.75rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1rem",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <Icon size={18} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "Barlow, sans-serif",
                      fontWeight: 500,
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      color: "white",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.6)",
                      fontWeight: 300,
                      fontSize: "0.875rem",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          background: "black",
          paddingTop: "7rem",
          paddingBottom: "10rem",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Hero-style particle canvas for the CTA section */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
          <ParticleCanvas />
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)" }} />
        </div>

        <div style={{ maxWidth: "48rem", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div {...fadeUp}>
            <span className="section-badge">Open Channel</span>
          </motion.div>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="section-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginBottom: "1rem" }}
          >
            Let's build something<br />intelligent together.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              color: "rgba(255,255,255,0.70)",
              fontWeight: 300,
              fontSize: "1.05rem",
              maxWidth: "28rem",
              margin: "0 auto 2.5rem",
              lineHeight: 1.7,
            }}
          >
            I'm currently open to internships, collaborations, and full-time opportunities in AI, Data Science, and Full-Stack Development.
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}
          >
            <a
              href="mailto:nivethitha1131@gmail.com"
              className="liquid-glass-strong"
              style={{
                borderRadius: "9999px",
                padding: "0.875rem 2rem",
                color: "white",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontFamily: "Barlow, sans-serif",
                fontSize: "0.9rem",
              }}
            >
              Get in Touch <ArrowUpRight size={16} />
            </a>
            <a
              href="https://github.com/Nivethitha-1131"
              target="_blank"
              rel="noopener noreferrer"
              className="liquid-glass"
              style={{
                borderRadius: "9999px",
                padding: "0.875rem 2rem",
                color: "rgba(255,255,255,0.80)",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: "0.375rem",
                fontFamily: "Barlow, sans-serif",
                fontWeight: 300,
                fontSize: "0.9rem",
              }}
            >
              View GitHub <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "black", paddingLeft: "1.5rem", paddingRight: "1.5rem", paddingBottom: "2.5rem" }}>
        <div style={{ maxWidth: "64rem", margin: "0 auto" }}>
          <div style={{ height: "1px", background: "rgba(255,255,255,0.12)", marginBottom: "2rem" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span style={{ fontWeight: 300, fontSize: "0.75rem", color: "rgba(255,255,255,0.38)" }}>
              © 2026 Nivethitha Ramesh. All rights reserved.
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              {[
                { label: "LinkedIn", url: "https://www.linkedin.com/in/nivethitha-ramesh/" },
                { label: "GitHub", url: "https://github.com/Nivethitha-1131" },
                { label: "Mail", url: "mailto:nivethitha1131@gmail.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target={link.url.startsWith("mailto") ? "_self" : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    fontWeight: 300,
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.38)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.70)")}
                  onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = "rgba(255,255,255,0.38)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
