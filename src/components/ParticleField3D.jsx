import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PARTICLE_COUNT = 60;

const ParticleField3D = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const particlesRef = useRef([]);
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

    // Initialize particles
    const w = canvas.offsetWidth;
    const h = canvas.offsetHeight;
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: 1.5 + Math.random() * 2.5,
      hue: Math.random() > 0.5 ? 180 : 130,
      pulse: Math.random() * Math.PI * 2,
    }));

    const handleMouse = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouse);

    const animate = () => {
      if (!isVisible) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);

      const particles = particlesRef.current;
      const time = Date.now() * 0.001;

      // Update & draw particles
      particles.forEach((p, i) => {
        p.pulse += 0.02;
        p.x += p.vx + Math.sin(time + i) * 0.15;
        p.y += p.vy + Math.cos(time * 0.7 + i) * 0.15;

        // Mouse attraction
        const mx = mouseRef.current.x * cw;
        const my = mouseRef.current.y * ch;
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          p.x += dx * 0.003;
          p.y += dy * 0.003;
        }

        // Boundary bounce
        if (p.x < 0 || p.x > cw) p.vx *= -1;
        if (p.y < 0 || p.y > ch) p.vy *= -1;
        p.x = Math.max(0, Math.min(cw, p.x));
        p.y = Math.max(0, Math.min(ch, p.y));

        const glow = 0.5 + Math.sin(p.pulse) * 0.3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${glow})`;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, 0.5)`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 120) {
            const alpha = (1 - d / 120) * 0.25;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, `hsla(${particles[i].hue}, 100%, 60%, ${alpha})`);
            gradient.addColorStop(1, `hsla(${particles[j].hue}, 100%, 60%, ${alpha})`);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouse);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [isVisible]);

  return (
    <motion.div
      ref={containerRef}
      className="w-full h-[250px] relative overflow-hidden"
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

export default ParticleField3D;
