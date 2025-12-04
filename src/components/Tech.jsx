import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const navigate = useNavigate();
  const [hoveredTech, setHoveredTech] = useState(null);

  // Proficiency levels for each technology
  const proficiencyLevels = {
    "HTML 5": "Expert",
    "CSS 3": "Expert",
    "JavaScript": "Advanced",
    "React JS": "Advanced",
    "Next JS": "Advanced",
    "Prisma": "Intermediate",
    "Node JS": "Intermediate",
    "MongoDB": "Advanced",
    "PostgreSQL": "Intermediate",
    "MySQL": "Intermediate",
    "git": "Advanced",
    "Firebase": "Intermediate",
    "docker": "Intermediate",
    "Python": "Expert",
    "Java": "Advanced"
  };

  return (
    <div className='flex flex-col items-center'>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
        {technologies.slice(0, 13).map((technology) => (
          <div 
            className='w-28 h-28 relative group' 
            key={technology.name}
            onMouseEnter={() => setHoveredTech(technology.name)}
            onMouseLeave={() => setHoveredTech(null)}
          >
            <BallCanvas icon={technology.icon} />
            
            {/* Tooltip */}
            {hoveredTech === technology.name && (
              <div className='absolute -top-16 left-1/2 transform -translate-x-1/2 bg-tertiary px-4 py-2 rounded-lg shadow-xl z-50 whitespace-nowrap animate-fade-in'>
                <p className='text-white font-bold text-sm'>{technology.name}</p>
                <p className='text-secondary text-xs'>{proficiencyLevels[technology.name] || "Intermediate"}</p>
                <div className='absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-tertiary'></div>
              </div>
            )}
          </div>
        ))}
      </div>
      <button
        className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        onClick={() => navigate("/all-skills")}
      >
        View All Skills
      </button>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");