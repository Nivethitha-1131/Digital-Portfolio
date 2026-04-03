import { useEffect, useRef } from "react";

interface Star {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  brightness: number;
  armOffset: number;
  spiral: number;
}

export default function GalaxyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let rotation = 0;
    const STAR_COUNT = 500;
    const stars: Star[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    // Build galaxy arms
    const ARM_COUNT = 3;
    for (let i = 0; i < STAR_COUNT; i++) {
      const arm = Math.floor(Math.random() * ARM_COUNT);
      const armOffset = (arm / ARM_COUNT) * Math.PI * 2;
      const t = Math.pow(Math.random(), 0.55); // bias toward center
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.44;
      const radius = t * maxRadius;
      const spiral = radius * 0.003 + Math.random() * 0.3;
      const scatter = (1 - t) * 0.6 + 0.05;

      stars.push({
        angle: armOffset + spiral * radius * 0.018 + (Math.random() - 0.5) * scatter,
        radius,
        speed: 0.00015 + (1 - t) * 0.0003,
        size: Math.random() * 1.6 + 0.3,
        brightness: 0.3 + Math.random() * 0.7,
        armOffset,
        spiral,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const tilt = 0.28; // tilt factor for ellipse effect

      // Galaxy disk glow
      const diskW = Math.min(canvas.width, canvas.height) * 0.5;
      const diskH = diskW * tilt;

      const outerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, diskW);
      outerGlow.addColorStop(0, "rgba(200,80,255,0.22)");
      outerGlow.addColorStop(0.2, "rgba(160,40,230,0.14)");
      outerGlow.addColorStop(0.55, "rgba(100,20,180,0.07)");
      outerGlow.addColorStop(1, "rgba(0,0,0,0)");

      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, tilt);
      ctx.beginPath();
      ctx.arc(0, 0, diskW, 0, Math.PI * 2);
      ctx.fillStyle = outerGlow;
      ctx.fill();
      ctx.restore();

      // Draw stars
      stars.forEach((s) => {
        s.angle += s.speed;
        const a = s.angle + rotation;
        const x = cx + Math.cos(a) * s.radius;
        const y = cy + Math.sin(a) * s.radius * tilt;

        const distFactor = 1 - s.radius / (Math.min(canvas.width, canvas.height) * 0.46);
        const alpha = s.brightness * Math.max(0.1, distFactor);
        const hue = 260 + distFactor * 40 + Math.sin(a * 2) * 20;
        const sat = 60 + distFactor * 30;

        // Glow
        const glow = ctx.createRadialGradient(x, y, 0, x, y, s.size * 3.5);
        glow.addColorStop(0, `hsla(${hue}, ${sat}%, 80%, ${alpha * 0.9})`);
        glow.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(x, y, s.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(x, y, s.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue + 20}, 100%, 92%, ${alpha})`;
        ctx.fill();
      });

      // Bright core
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, diskW * 0.18);
      core.addColorStop(0, "rgba(255,255,255,0.9)");
      core.addColorStop(0.08, "rgba(220,180,255,0.7)");
      core.addColorStop(0.3, "rgba(160,60,255,0.3)");
      core.addColorStop(1, "rgba(0,0,0,0)");
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(1, tilt * 0.6);
      ctx.beginPath();
      ctx.arc(0, 0, diskW * 0.18, 0, Math.PI * 2);
      ctx.fillStyle = core;
      ctx.fill();
      ctx.restore();

      rotation += 0.0004;
      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
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
