import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FloatingGeometry3D = () => {
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

    const shapes = [
      { type: "hex", x: 0.18, y: 0.4, size: 38, speed: 0.8, r: 0, g: 217, b: 255, rotation: 0 },
      { type: "hex", x: 0.72, y: 0.35, size: 33, speed: 0.6, r: 57, g: 255, b: 20, rotation: 1 },
      { type: "hex", x: 0.45, y: 0.55, size: 42, speed: 1.0, r: 164, g: 128, b: 255, rotation: 2 },
      { type: "torus", x: 0.15, y: 0.65, size: 30, speed: 1.2, r: 0, g: 217, b: 255, rotation: 0.5 },
      { type: "torus", x: 0.82, y: 0.58, size: 26, speed: 0.9, r: 57, g: 255, b: 20, rotation: 1.5 },
      { type: "diamond", x: 0.33, y: 0.25, size: 24, speed: 0.7, r: 164, g: 128, b: 255, rotation: 3 },
      { type: "diamond", x: 0.62, y: 0.72, size: 20, speed: 1.1, r: 0, g: 217, b: 255, rotation: 0.8 },
    ];

    const rings = [
      { cx: 0.5, cy: 0.5, rx: 0.35, ry: 0.14, speed: 0.2, r: 0, g: 217, b: 255, tilt: 0 },
      { cx: 0.5, cy: 0.5, rx: 0.4, ry: 0.11, speed: -0.15, r: 57, g: 255, b: 20, tilt: 0.5 },
      { cx: 0.5, cy: 0.5, rx: 0.28, ry: 0.17, speed: 0.25, r: 164, g: 128, b: 255, tilt: -0.3 },
    ];

    const drawHex = (ctx, x, y, size, rotation, r, g, b, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      const sides = 6;
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const angle = (i / sides) * Math.PI * 2;
        const px = Math.cos(angle) * size;
        const py = Math.sin(angle) * size;
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.4})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.7})`;
      ctx.stroke();
      // Inner lines
      for (let i = 0; i < sides; i += 2) {
        const angle = (i / sides) * Math.PI * 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * size, Math.sin(angle) * size);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.3})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
      ctx.restore();
    };

    const drawTorus = (ctx, x, y, size, rotation, r, g, b, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.ellipse(0, 0, size, size * 0.4, 0, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`;
      ctx.lineWidth = 3;
      ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
      ctx.shadowBlur = 15 * alpha;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.restore();
    };

    const drawDiamond = (ctx, x, y, size, rotation, r, g, b, alpha) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);
      ctx.beginPath();
      ctx.moveTo(0, -size);
      ctx.lineTo(size * 0.6, 0);
      ctx.lineTo(0, size);
      ctx.lineTo(-size * 0.6, 0);
      ctx.closePath();
      const gradient = ctx.createLinearGradient(-size, -size, size, size);
      gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.35})`);
      gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.6})`;
      ctx.lineWidth = 1;
      ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.4)`;
      ctx.shadowBlur = 10 * alpha;
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.restore();
    };

    const animate = () => {
      if (!isVisible) {
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      const cw = canvas.offsetWidth;
      const ch = canvas.offsetHeight;
      ctx.clearRect(0, 0, cw, ch);
      const time = Date.now() * 0.001;

      // Draw orbital rings
      rings.forEach((ring) => {
        ctx.save();
        ctx.translate(ring.cx * cw, ring.cy * ch);
        ctx.rotate(ring.tilt + time * ring.speed);
        ctx.beginPath();
        ctx.ellipse(0, 0, ring.rx * cw, ring.ry * ch, 0, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${ring.r}, ${ring.g}, ${ring.b}, 0.18)`;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.stroke();
        ctx.setLineDash([]);
        ctx.restore();
      });

      // Draw shapes
      shapes.forEach((shape) => {
        const floatY = Math.sin(time * shape.speed + shape.rotation) * 15;
        const floatX = Math.cos(time * shape.speed * 0.7 + shape.rotation) * 8;
        const x = shape.x * cw + floatX;
        const y = shape.y * ch + floatY;
        const rot = shape.rotation + time * shape.speed * 0.3;
        const alpha = 0.4 + Math.sin(time * 0.8 + shape.rotation) * 0.2;

        switch (shape.type) {
          case "hex":
            drawHex(ctx, x, y, shape.size, rot, shape.r, shape.g, shape.b, alpha);
            break;
          case "torus":
            drawTorus(ctx, x, y, shape.size, rot, shape.r, shape.g, shape.b, alpha);
            break;
          case "diamond":
            drawDiamond(ctx, x, y, shape.size, rot, shape.r, shape.g, shape.b, alpha);
            break;
        }
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

export default FloatingGeometry3D;
