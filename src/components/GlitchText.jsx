import { motion } from 'framer-motion';

const GlitchText = ({ children, className = '' }) => {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Main text */}
      <motion.span
        className="relative z-10"
        animate={{
          textShadow: [
            '0 0 0px rgba(0, 217, 255, 0)',
            '2px 2px 4px rgba(0, 217, 255, 0.8), -2px -2px 4px rgba(57, 255, 20, 0.8)',
            '0 0 0px rgba(0, 217, 255, 0)',
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {children}
      </motion.span>

      {/* Glitch layer 1 */}
      <motion.span
        className="absolute top-0 left-0 text-[#00d9ff] opacity-70 z-0"
        style={{ clipPath: 'inset(0 0 0 0)' }}
        animate={{
          clipPath: [
            'inset(40% 0 61% 0)',
            'inset(92% 0 1% 0)',
            'inset(43% 0 1% 0)',
            'inset(25% 0 58% 0)',
            'inset(54% 0 7% 0)',
            'inset(58% 0 43% 0)',
            'inset(40% 0 61% 0)',
          ],
          transform: ['translateX(0)', 'translateX(-2px)', 'translateX(2px)', 'translateX(0)'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          times: [0, 0.2, 0.4, 0.6, 0.7, 0.9, 1],
        }}
      >
        {children}
      </motion.span>

      {/* Glitch layer 2 */}
      <motion.span
        className="absolute top-0 left-0 text-[#39ff14] opacity-70 z-0"
        style={{ clipPath: 'inset(0 0 0 0)' }}
        animate={{
          clipPath: [
            'inset(20% 0 30% 0)',
            'inset(54% 0 7% 0)',
            'inset(8% 0 23% 0)',
            'inset(40% 0 43% 0)',
            'inset(15% 0 65% 0)',
            'inset(70% 0 15% 0)',
            'inset(20% 0 30% 0)',
          ],
          transform: ['translateX(0)', 'translateX(2px)', 'translateX(-2px)', 'translateX(0)'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          times: [0, 0.2, 0.4, 0.6, 0.7, 0.9, 1],
          delay: 0.5,
        }}
      >
        {children}
      </motion.span>
    </div>
  );
};

export default GlitchText;
