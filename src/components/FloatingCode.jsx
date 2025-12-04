import React, { useEffect, useRef } from 'react';

const FloatingCode = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const codeSnippets = [
      'const data = [];',
      'function render() {}',
      'import React from "react"',
      'export default App',
      'useState(null)',
      'useEffect(() => {})',
      'return <div>',
      'async await fetch()',
      'map((item) => {})',
      'filter(x => x > 0)',
    ];

    class CodeParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        this.speed = 0.3 + Math.random() * 0.5;
        this.opacity = 0;
        this.fadeIn = true;
        this.life = 0;
      }

      update() {
        this.y -= this.speed;
        this.life += 0.01;

        if (this.fadeIn) {
          this.opacity += 0.02;
          if (this.opacity >= 0.3) {
            this.fadeIn = false;
          }
        } else {
          this.opacity -= 0.005;
        }

        if (this.y < -50 || this.opacity <= 0) {
          this.y = canvas.height + Math.random() * 100;
          this.x = Math.random() * canvas.width;
          this.opacity = 0;
          this.fadeIn = true;
          this.life = 0;
          this.text = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        }
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        
        // Syntax highlighting colors
        if (this.text.includes('const') || this.text.includes('function') || this.text.includes('import') || this.text.includes('export')) {
          ctx.fillStyle = '#00d9ff'; // cyan for keywords
        } else if (this.text.includes('useState') || this.text.includes('useEffect')) {
          ctx.fillStyle = '#39ff14'; // green for hooks
        } else {
          ctx.fillStyle = '#888'; // gray for others
        }
        
        ctx.font = '14px "Courier New", monospace';
        ctx.fillText(this.text, this.x, this.y);
        ctx.restore();
      }
    }

    const particles = Array.from({ length: 5 }, () => new CodeParticle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none"
      style={{ zIndex: 5 }}
    />
  );
};

export default FloatingCode;
