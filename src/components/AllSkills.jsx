// AllSkills.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { technologies } from "../constants";

const trianglePattern = [7, 6, 5, 4];

const getTriangleRows = (items, pattern) => {
  let rows = [], idx = 0;
  for (let count of pattern) {
    rows.push(items.slice(idx, idx + count));
    idx += count;
  }
  if (idx < items.length) rows.push(items.slice(idx));
  return rows;
};

const triangleRows = getTriangleRows(technologies, trianglePattern);
const STAR_COLORS = ["#fff", "#b3cfff", "#e0e7ef"];
const STAR_COUNT = 120;

const AllSkills = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
    setTimeout(() => {
      const techSection = document.getElementById("tech");
      if (techSection) techSection.scrollIntoView({ behavior: "smooth" });
    }, 200);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center py-10 relative overflow-hidden bg-[#0a0a13]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-black opacity-80" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] bg-gradient-radial from-white/10 via-[#22263a]/10 to-transparent rounded-full blur-3xl opacity-60 z-10" />
        <div className="absolute inset-0 z-20 pointer-events-none">
          <svg width="100%" height="100%" className="w-full h-full opacity-5 animate-grid-move">
            {[...Array(20)].map((_, i) => (
              <line key={"h" + i} x1="0" y1={i * 60} x2="2000" y2={i * 60} stroke="#b3cfff" strokeWidth="1" />
            ))}
            {[...Array(20)].map((_, i) => (
              <line key={"v" + i} x1={i * 60} y1="0" x2={i * 60} y2="2000" stroke="#b3cfff" strokeWidth="1" />
            ))}
          </svg>
        </div>
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-30">
          {[...Array(STAR_COUNT)].map((_, i) => {
            const cx = Math.random() * window.innerWidth;
            const cy = Math.random() * window.innerHeight;
            const r = Math.random() * 2.2 + 0.8;
            const color = STAR_COLORS[i % STAR_COLORS.length];
            const twinkle = 1.5 + Math.random() * 2;
            return (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                fill={color}
                opacity={Math.random() * 0.5 + 0.5}
                style={{
                  animation: `twinkle ${twinkle}s ease-in-out infinite alternate`,
                  animationDelay: `${Math.random() * 3}s`,
                  filter: "blur(1.2px) drop-shadow(0 0 6px #b3cfff)"
                }}
              />
            );
          })}
        </svg>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 text-white drop-shadow-lg animate-fade-in tracking-wide z-10 text-center">
        My Skills
      </h1>

      <div className="flex flex-col items-center w-full px-4 sm:px-8 max-w-6xl space-y-8 z-10">
        {triangleRows.map((row, i) => (
          <div
            key={i}
            className="flex flex-row justify-center flex-wrap gap-4 sm:gap-6 md:gap-8"
            style={{
              animation: `fadeInUp 0.6s ease ${i * 0.15 + 0.2}s both`
            }}
          >
            {row.map((tech, j) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center bg-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-lg border-2 border-white/10 hover:border-blue-400/80 transition-transform hover:scale-110 skill-card"
                style={{
                  animation: `fadeIn 0.7s ease ${j * 0.07 + 0.2}s both, float 3s ease-in-out infinite alternate`,
                  animationDelay: `${j * 0.07 + 0.2}s, ${j * 0.2}s`,
                  width: "clamp(4rem, 6vw, 7rem)",
                  boxShadow: "0 0 24px 0 #22263a55, 0 0 80px 0 #b3cfff33"
                }}
              >
                <div className="relative flex items-center justify-center mb-2">
                  <div className="absolute -inset-1 rounded-full blur-lg opacity-60 bg-gradient-to-tr from-white/30 via-blue-400/30 to-blue-900/30 z-0"></div>
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain relative z-10 drop-shadow-xl"
                    style={{ filter: "drop-shadow(0 0 12px #b3cfff)" }}
                  />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white drop-shadow tracking-wide text-center whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>

      <button
        onClick={handleGoBack}
        className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 bg-gradient-to-tr from-[#23263a] via-[#3b4252] to-[#b3cfff] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-2xl border-2 border-white/20 font-bold text-base sm:text-lg hover:scale-110 hover:shadow-[0_0_40px_10px_#b3cfff] transition-all duration-300 z-50"
        style={{
          boxShadow: "0 0 32px 0 #23263a55, 0 0 80px 0 #b3cfff55"
        }}
      >
        Go Back
      </button>

      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(40px);}
            to { opacity: 1; transform: translateY(0);}
          }
          @keyframes float {
            from { transform: translateY(0);}
            to { transform: translateY(-12px);}
          }
          @keyframes twinkle {
            0% { opacity: 0.2; }
            50% { opacity: 1; }
            100% { opacity: 0.2; }
          }
          @keyframes grid-move {
            0% { transform: translateY(0);}
            100% { transform: translateY(-60px);}
          }
          .animate-fade-in {
            animation: fadeIn 1s ease both;
          }
          .skill-card:hover img {
            filter: drop-shadow(0 0 24px #b3cfff) drop-shadow(0 0 8px #fff);
          }
          .animate-grid-move {
            animation: grid-move 30s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default AllSkills;