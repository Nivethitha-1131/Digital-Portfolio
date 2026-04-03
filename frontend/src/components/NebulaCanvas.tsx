import { useEffect, useRef } from "react";

interface NebParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  hue: number;
  life: number;
  maxLife: number;
}

export default function NebulaCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: NebParticle[] = [];
    const PARTICLE_COUNT = 320;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Spawn particles across the canvas in nebula clusters
    const clusters = [
      { cx: 0.5, cy: 0.5 },
      { cx: 0.25, cy: 0.4 },
      { cx: 0.75, cy: 0.6 },
      { cx: 0.15, cy: 0.7 },
      { cx: 0.85, cy: 0.3 },
    ];

    const spawnParticle = (): NebParticle => {
      const cluster = clusters[Math.floor(Math.random() * clusters.length)];
      const spread = 0.25;
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.pow(Math.random(), 0.5) * spread;
      const maxLife = 200 + Math.random() * 300;
      return {
        x: (cluster.cx + Math.cos(angle) * radius) * canvas.width,
        y: (cluster.cy + Math.sin(angle) * radius) * canvas.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 2.5 + 0.5,
        opacity: 0,
        hue: 250 + Math.random() * 60, // purple to blue-purple
        life: 0,
        maxLife,
      };
    };

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = spawnParticle();
      p.life = Math.random() * p.maxLife; // stagger initial lives
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw glow blobs for nebula effect
      clusters.forEach((c, idx) => {
        const gx = c.cx * canvas.width;
        const gy = c.cy * canvas.height;
        const gr = canvas.width * 0.18;
        const glow = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        const alpha = 0.025 + Math.sin(Date.now() * 0.0005 + idx) * 0.008;
        glow.addColorStop(0, `hsla(${270 + idx * 15}, 80%, 60%, ${alpha})`);
        glow.addColorStop(0.5, `hsla(${240 + idx * 10}, 90%, 50%, ${alpha * 0.5})`);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(gx, gy, gr, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();
      });

      particles.forEach((p, i) => {
        p.life++;
        if (p.life > p.maxLife) {
          particles[i] = spawnParticle();
          return;
        }

        const progress = p.life / p.maxLife;
        // fade in then fade out
        const fadeIn = Math.min(progress * 8, 1);
        const fadeOut = Math.min((1 - progress) * 8, 1);
        p.opacity = Math.min(fadeIn, fadeOut) * (0.5 + Math.random() * 0.05);

        p.x += p.vx;
        p.y += p.vy;

        // slight drift towards center cluster
        const cx = canvas.width * 0.5;
        const cy = canvas.height * 0.5;
        p.vx += (cx - p.x) * 0.0001;
        p.vy += (cy - p.y) * 0.0001;
        p.vx *= 0.998;
        p.vy *= 0.998;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 75%, ${p.opacity})`);
        gradient.addColorStop(0.4, `hsla(${p.hue - 20}, 80%, 55%, ${p.opacity * 0.6})`);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core bright dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue + 30}, 100%, 90%, ${p.opacity * 0.8})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
