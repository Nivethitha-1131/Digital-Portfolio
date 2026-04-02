import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Crash Course on Python",
    issuer: "Google via Coursera",
    date: "November 27, 2024",
    description: "Completed with verification. Covers Python fundamentals, automation, data structures, and scripting.",
    url: "https://www.coursera.org/account/accomplishments/verify/EXFLM7VWXOXU",
    tags: ["Python", "Automation", "Programming"],
    color: "rgba(66,133,244,0.12)",
    borderColor: "rgba(66,133,244,0.3)",
    badge: "Coursera",
  },
  {
    title: "Problem Solving (Basic)",
    issuer: "HackerRank",
    date: "February 7, 2025",
    description: "Verified certification covering Data Structures (Arrays, Strings) and Algorithms (Sorting, Searching).",
    url: "https://www.hackerrank.com/certificates/867738e68a55",
    tags: ["Algorithms", "Data Structures", "Problem Solving"],
    color: "rgba(19,129,58,0.12)",
    borderColor: "rgba(19,129,58,0.3)",
    badge: "HackerRank",
  },
  {
    title: "Introduction to Generative AI",
    issuer: "Google Cloud via Coursera",
    date: "March 9, 2025",
    description: "Covers generative AI concepts, model types, and real-world applications. Issued by Google Cloud.",
    url: "https://www.coursera.org/account/accomplishments/verify/UBD6R4PT9Q1J",
    tags: ["Generative AI", "Google Cloud", "Machine Learning"],
    color: "rgba(66,133,244,0.12)",
    borderColor: "rgba(66,133,244,0.3)",
    badge: "Google Cloud",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "August 21, 2025",
    description: "Demonstrates knowledge of AI concepts: NLP, computer vision, deep learning, chatbots, and neural networks.",
    url: "https://www.credly.com/badges/31626560-6509-4e30-a80f-ae77a2e868c4/linked_in_profile",
    tags: ["AI", "IBM", "Deep Learning", "NLP"],
    color: "rgba(255,100,30,0.1)",
    borderColor: "rgba(255,100,30,0.3)",
    badge: "IBM",
  },
  {
    title: "Gemini Certification for Students (K12)",
    issuer: "Google for Education",
    date: "January 3, 2026",
    description: "Demonstrated knowledge, skills, and competencies in using Google AI in education. Score: 94.",
    url: "https://edu.exceedlms.com/student/award/axjAqn7YHcfirtyMdFENjdjp",
    tags: ["Gemini AI", "Google", "Education"],
    color: "rgba(66,133,244,0.12)",
    borderColor: "rgba(66,133,244,0.3)",
    badge: "Google",
  },
  {
    title: "Digital Skills",
    issuer: "FutureLearn",
    date: "2024",
    description: "Completed digital skills certification covering modern technology fundamentals and digital literacy.",
    url: "https://www.futurelearn.com/certificates/9ktrbfi",
    tags: ["Digital Skills", "Technology", "Literacy"],
    color: "rgba(140,82,255,0.1)",
    borderColor: "rgba(140,82,255,0.3)",
    badge: "FutureLearn",
  },
  {
    title: "Gemini Certified Student",
    issuer: "Google",
    date: "2025",
    description: "Google Accredible certification demonstrating advanced proficiency in Gemini AI tools and applications.",
    url: "https://edu.google.accredible.com/b6eef1e0-b9e4-404c-8270-99aa489072a6#acc.qwStj2il",
    tags: ["Gemini", "Google AI", "Certified"],
    color: "rgba(66,133,244,0.12)",
    borderColor: "rgba(66,133,244,0.3)",
    badge: "Google",
  },
  {
    title: "AWS Cloud Foundations",
    issuer: "Amazon Web Services",
    date: "2025",
    description: "AWS Credly badge certifying foundational knowledge of cloud computing and AWS services.",
    url: "https://www.credly.com/badges/aefc2e0f-2ed9-41d2-a040-fa5521229410",
    tags: ["AWS", "Cloud", "Infrastructure"],
    color: "rgba(255,153,0,0.12)",
    borderColor: "rgba(255,153,0,0.35)",
    badge: "AWS",
  },
];

export default function Certifications() {
  return (
    <div style={{ background: "black", minHeight: "100vh", paddingTop: "8rem", paddingBottom: "4rem" }}>
      <div className="grain-overlay" />

      {/* Background blobs */}
      <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div
          className="cloud-drift-1"
          style={{
            position: "absolute",
            top: "5%",
            left: "-15%",
            width: "60vw",
            height: "60vw",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.02) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="cloud-drift-2"
          style={{
            position: "absolute",
            bottom: "0%",
            right: "-10%",
            width: "45vw",
            height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(255,255,255,0.018) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <div style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}
        >
          <span className="section-badge">Credentials</span>
          <h1
            className="section-heading"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", marginTop: "0.75rem", marginBottom: "1rem" }}
          >
            Certified &amp;<br />constantly learning.
          </h1>
          <p style={{ color: "rgba(255,255,255,0.6)", fontWeight: 300, fontSize: "1rem", maxWidth: "30rem", margin: "0 auto", lineHeight: 1.7 }}>
            A collection of verified certifications across AI, cloud, and full-stack development. Click any card to verify the credential.
          </p>
        </motion.div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.title}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              style={{
                display: "block",
                textDecoration: "none",
                borderRadius: "1.25rem",
                padding: "1.5rem",
                background: cert.color,
                border: `1px solid ${cert.borderColor}`,
                backdropFilter: "blur(40px)",
                boxShadow: "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 60px rgba(0,0,0,0.4)",
                position: "relative",
                overflow: "hidden",
                transition: "box-shadow 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 1px 0 rgba(255,255,255,0.1) inset, 0 25px 70px rgba(0,0,0,0.5)`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 1px 0 rgba(255,255,255,0.06) inset, 0 20px 60px rgba(0,0,0,0.4)";
              }}
            >
              {/* Shimmer */}
              <div className="shimmer-effect" />

              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <span
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.5)",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    borderRadius: "9999px",
                    padding: "0.15rem 0.6rem",
                    letterSpacing: "0.04em",
                    textTransform: "uppercase",
                  }}
                >
                  {cert.badge}
                </span>
                <ExternalLink size={14} style={{ color: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
              </div>

              <h3
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 500,
                  fontSize: "1rem",
                  color: "white",
                  marginBottom: "0.375rem",
                  lineHeight: 1.3,
                }}
              >
                {cert.title}
              </h3>

              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", fontWeight: 300, marginBottom: "0.25rem" }}>
                {cert.issuer}
              </p>

              <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.75rem", fontWeight: 300, marginBottom: "0.875rem" }}>
                {cert.date}
              </p>

              <p
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontWeight: 300,
                  fontSize: "0.85rem",
                  lineHeight: 1.5,
                  marginBottom: "1rem",
                }}
              >
                {cert.description}
              </p>

              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.5)",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "9999px",
                      padding: "0.15rem 0.55rem",
                      fontWeight: 400,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1.25rem",
                  right: "1.25rem",
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <ArrowUpRight size={12} style={{ color: "rgba(255,255,255,0.6)" }} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}
