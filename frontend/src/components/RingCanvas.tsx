import { useEffect, useRef } from "react";

export default function RingCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width * 0.78;
      const cy = canvas.height * 0.5;
      const R = Math.min(canvas.width, canvas.height) * 0.38; // torus major radius
      const r = R * 0.48; // minor radius
      const rings = 72;

      for (let i = 0; i < rings; i++) {
        const phi = (i / rings) * Math.PI * 2 + t * 0.4;
        // torus projected to 2D with a tilt
        const tiltX = 0.55;
        const tiltY = 0.18;

        const x = Math.cos(phi) * R;
        const y = Math.sin(phi) * R;

        // 3D tilt: rotate around X axis
        const x3 = x;
        const y3 = y * Math.cos(tiltX) - 0 * Math.sin(tiltX);
        const z3 = y * Math.sin(tiltX) + 0 * Math.cos(tiltX);

        // project
        const px = cx + x3 + Math.cos(phi + t * 0.2) * r * 0.5;
        const py = cy + y3 * Math.cos(tiltY) + Math.sin(phi + t * 0.15) * r * Math.sin(tiltX);

        // strand thickness & color based on angle
        const hue = 260 + (Math.sin(phi + t) * 0.5 + 0.5) * 120; // purple to cyan
        const lightness = 45 + (Math.sin(phi * 2 + t) * 0.5 + 0.5) * 30;
        const alpha = 0.55 + (Math.sin(phi + t * 1.3) * 0.5 + 0.5) * 0.4;
        const lineW = 1.2 + (Math.sin(phi * 1.5 + t) * 0.5 + 0.5) * 1.8;

        // draw the curved strand as an arc
        const nextPhi = phi + (Math.PI * 2) / rings;
        const nx = Math.cos(nextPhi) * R;
        const ny = Math.sin(nextPhi) * R;
        const ny3 = ny * Math.cos(tiltX);
        const npx = cx + nx + Math.cos(nextPhi + t * 0.2) * r * 0.5;
        const npy = cy + ny3 * Math.cos(tiltY) + Math.sin(nextPhi + t * 0.15) * r * Math.sin(tiltX);

        ctx.beginPath();
        ctx.moveTo(px, py);

        // sweep in a tight helix arc
        for (let k = 1; k <= 6; k++) {
          const u = k / 6;
          const aPhi = phi + (Math.PI * 2 / rings) * u;
          const aX = Math.cos(aPhi) * R;
          const aY = Math.sin(aPhi) * R;
          const aY3 = aY * Math.cos(tiltX);
          const aPx = cx + aX + Math.cos(aPhi + t * 0.2) * r * 0.5;
          const aPy = cy + aY3 * Math.cos(tiltY) + Math.sin(aPhi + t * 0.15) * r * Math.sin(tiltX);

          // add helix sweep inward
          const sweep = Math.sin(aPhi * 4 + t * 2) * r * 0.45;
          const sweepX = Math.cos(aPhi + Math.PI / 2) * sweep;
          const sweepY = Math.sin(aPhi + Math.PI / 2) * sweep * Math.cos(tiltX);

          ctx.lineTo(aPx + sweepX, aPy + sweepY);
        }

        ctx.strokeStyle = `hsla(${hue}, 85%, ${lightness}%, ${alpha})`;
        ctx.lineWidth = lineW;
        ctx.lineCap = "round";
        ctx.stroke();
      }

      // Inner glow core
      const coreGrad = ctx.createRadialGradient(cx - R * 0.1, cy, 0, cx - R * 0.1, cy, R * 0.35);
      coreGrad.addColorStop(0, "rgba(120,60,180,0.12)");
      coreGrad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.beginPath();
      ctx.arc(cx - R * 0.1, cy, R * 0.35, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();

      t += 0.008;
      animId = requestAnimationFrame(draw);
    };

    draw();

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
