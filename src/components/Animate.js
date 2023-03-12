import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["Hello", "World", "Framer-Motion"];
const variants = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: "-100%" }
};

export default function Typewriter() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={words[index]}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={variants}
      >
        {words[index]}
      </motion.div>
    </AnimatePresence>
  );
}