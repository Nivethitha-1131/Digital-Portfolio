import { useEffect, useRef } from "react";

interface TitleParticle {
  x: number;
  y: number;
  tx: number;
  ty: number;
  vx: number;
  vy: number;
  r: number;
  opacity: number;
  phase: number;
  settled: boolean;
}

const REPEL_RADIUS = 90;
const REPEL_STRENGTH = 7;
const SPRING = 0.055;
const FRICTION = 0.82;

export default function ParticleTitle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: TitleParticle[] = [];

    const buildParticles = async () => {
      try {
        await document.fonts.load("italic 80px 'Instrument Serif'");
      } catch {}

      const W = canvas.offsetWidth;
      const H = 230;
      canvas.width = W;
      canvas.height = H;

      const fontSize = Math.min(W * 0.086, 90);
      const leading = fontSize * 1.08;

      const offscreen = document.createElement("canvas");
      offscreen.width = W;
      offscreen.height = H;
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      offCtx.fillStyle = "white";
      offCtx.font = `italic ${fontSize}px 'Instrument Serif', serif`;
      offCtx.textAlign = "center";
      offCtx.textBaseline = "middle";
      offCtx.fillText("Architecting AI that feels.", W / 2, H / 2 - leading * 0.5);

      const imageData = offCtx.getImageData(0, 0, W, H);
      const targets: { x: number; y: number }[] = [];

      for (let y = 0; y < H; y += 3) {
        for (let x = 0; x < W; x += 3) {
          const alpha = imageData.data[(y * W + x) * 4 + 3];
          if (alpha > 100) {
            targets.push({ x, y });
          }
        }
      }

      particles = targets.map((t) => ({
        x: Math.random() * W,
        y: Math.random() > 0.5 ? -20 : H + 20,
        tx: t.x,
        ty: t.y,
        vx: 0,
        vy: 0,
        r: Math.random() * 0.85 + 0.45,
        opacity: 0,
        phase: Math.random() * Math.PI * 2,
        settled: false,
      }));
    };

    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cx = cursorRef.current.x;
      const cy = cursorRef.current.y;

      particles.forEach((p) => {
        const dx = p.x - cx;
        const dy = p.y - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS) {
          const force = (1 - dist / REPEL_RADIUS) * REPEL_STRENGTH;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }

        const ddx = p.tx - p.x;
        const ddy = p.ty - p.y;
        const distToTarget = Math.sqrt(ddx * ddx + ddy * ddy);

        if (distToTarget < 2 && Math.abs(p.vx) < 0.5 && Math.abs(p.vy) < 0.5) {
          p.settled = true;
        }

        if (p.settled) {
          p.phase += 0.02;
          p.x = p.tx + Math.sin(p.phase) * 0.5;
          p.y = p.ty + Math.cos(p.phase * 0.7) * 0.5;
          p.vx = 0;
          p.vy = 0;
        } else {
          p.vx += ddx * SPRING;
          p.vy += ddy * SPRING;
          p.vx *= FRICTION;
          p.vy *= FRICTION;
          p.x += p.vx;
          p.y += p.vy;
        }

        if (p.opacity < 1) p.opacity = Math.min(1, p.opacity + 0.022);

        const nearFactor = dist < REPEL_RADIUS ? (1 - dist / REPEL_RADIUS) : 0;
        if (nearFactor > 0) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 4);
          glow.addColorStop(0, `rgba(18,8,28,${nearFactor * 0.3})`);
          glow.addColorStop(1, "rgba(18,8,28,0)");
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.r * 4, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(18,8,28,${p.opacity * 0.82})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    buildParticles().then(animate);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      cursorRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const handleMouseLeave = () => {
      cursorRef.current = { x: -9999, y: -9999 };
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "230px",
        cursor: "none",
        background: "transparent",
        display: "block",
      }}
    />
  );
}
