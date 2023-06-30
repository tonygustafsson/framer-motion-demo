"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Demo2() {
  const defaultState = {
    translateX: 250,
    scale: 2,
    rotate: "1turn",
  };

  const animatedState = {
    translateX: 0,
    scale: 1,
    rotate: "-1turn",
  };

  const [animation, setAnimation] = useState(defaultState);

  const toggleAnimation = () => {
    setAnimation(animation.translateX === 0 ? defaultState : animatedState);
  };

  return (
    <motion.div
      animate={{
        ...animation,
        transition: {
          type: "spring",
          stiffness: 100,
          duration: 1.5,
        },
      }}
      onClick={toggleAnimation}
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
