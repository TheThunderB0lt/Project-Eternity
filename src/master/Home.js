import { motion } from "framer-motion";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col h-screen justify-center">
      <motion.h1
        initial={{ opacity: 0, y: 500 }}
        animate={{
          scale: 1.0,
          opacity: 1,
          y: 0,
          transition: { duration: 0.8 },
        }}
        className="text-center text-7xl uppercase font-extrabold leading-loose"
      >
        Welcome
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 500 }}
        animate={{
          scale: 1.0,
          opacity: 1,
          y: 0,
          transition: { duration: 1.2 },
        }}
        className="text-center text-7xl uppercase font-bold leading-loose"
      >
        To
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, y: 500 }}
        animate={{
          scale: 1.0,
          opacity: 1,
          y: 0,
          transition: { duration: 1.6 },
        }}
        className="text-center text-7xl uppercase font-extrabold leading-loose"
      >
        Plutonium
      </motion.h1>
    </div>
  );
}
