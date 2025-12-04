import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalWindow = () => {
  const [lines, setLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  const terminalCommands = [
    { command: '$ npm start', output: 'Starting development server...' },
    { command: '$ Building portfolio...', output: '✓ Compiled successfully!' },
    { command: '$ Deploying to production...', output: '✓ Deployment complete!' },
    { command: '$ Running tests...', output: '✓ All tests passed!' },
    { command: '$ git status', output: 'On branch main. Working tree clean.' },
  ];

  useEffect(() => {
    if (currentLine < terminalCommands.length) {
      const timer = setTimeout(() => {
        setLines(prev => [...prev, terminalCommands[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      // Reset after showing all commands
      const resetTimer = setTimeout(() => {
        setLines([]);
        setCurrentLine(0);
      }, 5000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentLine]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-8 w-96 bg-[#0d1b2a] border border-[#00d9ff] rounded-lg shadow-2xl z-50 overflow-hidden"
    >
      {/* Terminal header */}
      <div className="bg-[#1b263b] px-4 py-2 flex items-center gap-2 border-b border-[#00d9ff]">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <span className="text-[#00d9ff] text-sm font-mono ml-2">terminal</span>
      </div>

      {/* Terminal content */}
      <div className="p-4 font-mono text-sm h-48 overflow-y-auto">
        <AnimatePresence>
          {lines.map((line, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-2"
            >
              <div className="text-[#39ff14]">{line.command}</div>
              <div className="text-[#00d9ff] ml-4">{line.output}</div>
            </motion.div>
          ))}
        </AnimatePresence>
        
        {/* Cursor */}
        {currentLine < terminalCommands.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="text-[#39ff14]"
          >
            █
          </motion.span>
        )}
      </div>
    </motion.div>
  );
};

export default TerminalWindow;
