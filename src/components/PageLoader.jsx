import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const PageLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: "easeInOut" }}
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-mono text-[12px] tracking-[0.45em] uppercase text-[#00d9ff]"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, letterSpacing: "0.4em" }}
            animate={{ opacity: 1, letterSpacing: "0.08em" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="mt-3 font-display text-4xl sm:text-6xl font-extrabold gradient-text"
          >
            MRS
          </motion.h1>
          <div className="mt-8 h-[3px] w-48 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-gradient-to-r from-[#00d9ff] to-[#39ff14]" style={{ animation: "loader-bar 1.4s ease forwards" }} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageLoader;
