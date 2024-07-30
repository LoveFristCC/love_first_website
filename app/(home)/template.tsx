"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    setIsExiting(true);
    const timeout = setTimeout(() => setIsExiting(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      {isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "black",
            zIndex: 9999,
            pointerEvents: "none",
          }}
        />
      )}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          // exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.42, 0, 0.58, 1] }}
          style={{ willChange: "transform, opacity" }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
