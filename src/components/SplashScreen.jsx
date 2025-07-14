/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * SplashScreen
 * Full‑screen loading splash with a fashion‑forward, elegant vibe.
 * The component auto‑dismisses after `duration` ms and triggers `onFinish()`.
 *
 * Props:
 * - onFinish: ()=>void  — callback when splash completes
 * - duration?: number   — splash duration in ms (default 2500)
 */
export default function SplashScreen({ onFinish, duration = 2500 }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onFinish?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onFinish]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-neutral-100 to-stone-200"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Rotating ring */}
          <motion.div
            className="relative flex items-center justify-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 14 }}
          >
            <div className="w-32 h-32 rounded-full border-[6px] border-neutral-300 border-t-transparent animate-spin-slow" />
            {/* Logo text */}
            <motion.span
              className="absolute text-3xl font-semibold tracking-widest text-stone-700 uppercase"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Girly
            </motion.span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}