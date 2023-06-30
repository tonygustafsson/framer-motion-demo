"use client";
import { motion } from "framer-motion";

const MoreInfo = () => {
  const variants = {
    animate: {
      translateY: [-1500, 0],
      transition: {
        type: "spring",
        bounce: 0.5,
        staggerChildren: 0.1,
        duration: 2,
      },
    },
  };

  return (
    <div>
      <h2 className="text-4xl mb-4">More Info</h2>

      <motion.ul className="list-disc" animate="animate" variants={variants}>
        <motion.li className="list-item text-xl">
          <a href="https://www.framer.com/motion/introduction/">
            Framer Documentation
          </a>
        </motion.li>

        <motion.li className="list-item text-xl" variants={variants}>
          <a href="https://www.framer.com/motion/examples/">Examples</a>
        </motion.li>

        <motion.li className="list-item text-xl" variants={variants}>
          <a href="https://npmtrends.com/@mojs/core-vs-@tweenjs/tween.js-vs-animejs-vs-framer-motion-vs-just-animate-vs-popmotion-vs-velocityjs">
            NPM Trends
          </a>
        </motion.li>
      </motion.ul>
    </div>
  );
};

export default MoreInfo;
