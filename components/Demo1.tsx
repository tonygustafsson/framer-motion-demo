"use client";

import Image from "next/image";
import { m as motion } from "framer-motion";

export default function Demo1() {
  return (
    <motion.div
      initial={{
        scale: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 260,
          duration: 1,
        },
      }}
      whileTap={{ scale: 0.8 }}
    >
      <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/img/sqli-logo.svg"
        alt="SQLI Logo"
        width={250}
        height={102}
        priority
      />
    </motion.div>
  );
}
