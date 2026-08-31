import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DNA_POINTS = 40;

const DNAHelix3D = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      if (!isVisible) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);
      const time = Date.now() * 0.001;

      const centerX = cw / 2;
      const centerY = ch / 2;
      const helixWidth = Math.min(cw * 0.35, 250);
      const helixHeight = ch * 0.8;

      // Draw two strands
      const strand1Points = [];
      const strand2Points = [];

      for (let i = 0; i < DNA_POINTS; i++) {
        const t = i / (DNA_POINTS - 1);
        const y = centerY - helixHeight / 2 + t * helixHeight;
        const angle = t * Math.PI * 3 + time * 0.8;
        const depth1 = Math.sin(angle);
        const depth2 = Math.sin(angle + Math.PI);
        const x1 = centerX + Math.cos(angle) * helixWidth * 0.5;
        const x2 = centerX + Math.cos(angle + Math.PI) * helixWidth * 0.5;
        const scale1 = 0.6 + depth1 * 0.4;
        const scale2 = 0.6 + depth2 * 0.4;

        strand1Points.push({ x: x1, y, depth: depth1, scale: scale1 });
        strand2Points.push({ x: x2, y, depth: depth2, scale: scale2 });
      }

      // Draw connecting rungs (behind)
      for (let i = 0; i < DNA_POINTS; i += 2) {
        const p1 = strand1Points[i];
        const p2 = strand2Points[i];
        const alpha = 0.15 + Math.sin(time + i * 0.3) * 0.08;
        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
        gradient.addColorStop(0, `rgba(0, 217, 255, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(164, 128, 255, ${alpha * 0.6})`);
        gradient.addColorStop(1, `rgba(57, 255, 20, ${alpha})`);
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw strand curves
      const drawStrand = (points, color) => {
        ctx.beginPath();
        for (let i = 0; i < points.length - 1; i++) {
          const curr = points[i];
          const next = points[i + 1];
          if (i === 0) {
            ctx.moveTo(curr.x, curr.y);
          }
          const cpX = (curr.x + next.x) / 2;
          const cpY = (curr.y + next.y) / 2;
          ctx.quadraticCurveTo(curr.x, curr.y, cpX, cpY);
        }
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.shadowColor = color;
        ctx.shadowBlur = 12;
        ctx.stroke();
        ctx.shadowBlur = 0;
      };

      drawStrand(strand1Points, `rgba(0, 217, 255, 0.6)`);
      drawStrand(strand2Points, `rgba(57, 255, 20, 0.6)`);

      // Draw nodes
      strand1Points.forEach((p, i) => {
        const alpha = 0.4 + p.scale * 0.4;
        const size = 2 + p.scale * 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 217, 255, ${alpha})`;
        ctx.shadowColor = "#00d9ff";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      strand2Points.forEach((p, i) => {
        const alpha = 0.4 + p.scale * 0.4;
        const size = 2 + p.scale * 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${alpha})`;
        ctx.shadowColor = "#39ff14";
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isVisible]);

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-[200px] relative overflow-hidden"
      style={{ opacity, zIndex: 5 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ background: "transparent" }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#050816] via-transparent to-[#050816]" />
    </motion.div>
  );
};

export default DNAHelix3D;
