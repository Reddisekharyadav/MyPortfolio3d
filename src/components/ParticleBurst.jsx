import React, { useEffect, useRef, useState } from 'react';

const ParticleBurst = () => {
  const canvasRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const requestRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Observe sections for particle bursts
    const sections = document.querySelectorAll('[data-section]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.target.getBoundingClientRect();
            createBurst(rect.left + rect.width / 2, rect.top + rect.height / 2);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));

    const createBurst = (x, y) => {
      const newParticles = [];
      const particleCount = 30;
      
      for (let i = 0; i < particleCount; i++) {
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 2 + Math.random() * 3;
        
        newParticles.push({
          x,
          y,
          vx: Math.cos(angle) * velocity,
          vy: Math.sin(angle) * velocity,
          life: 1,
          decay: 0.015 + Math.random() * 0.01,
          size: 2 + Math.random() * 3,
          color: Math.random() > 0.5 ? '#00d9ff' : '#39ff14',
        });
      }
      
      setParticles((prev) => [...prev, ...newParticles]);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      setParticles((prevParticles) => {
        const updatedParticles = prevParticles
          .map((particle) => ({
            ...particle,
            x: particle.x + particle.vx,
            y: particle.y + particle.vy,
            vy: particle.vy + 0.1, // gravity
            life: particle.life - particle.decay,
          }))
          .filter((particle) => particle.life > 0);

        updatedParticles.forEach((particle) => {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.globalAlpha = particle.life;
          ctx.fill();
          ctx.globalAlpha = 1;
        });

        return updatedParticles;
      });

      requestRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 15 }}
    />
  );
};

export default ParticleBurst;
