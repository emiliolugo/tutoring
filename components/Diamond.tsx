"use client"

import { motion } from "framer-motion";
import { default as Teenguy } from "/Users/emiliolugo/tutoring-sit/public/teen-notebook-guy-png-5691764.svg";
import Image from "next/image";
const Diamond = () => {
  // Define the animation variants for Framer Motion
  const diamondVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div className="relative"
    variants={diamondVariants}
      initial="hidden"
      animate="visible">
    <motion.svg
    className="drop-shadow-lg"
      width="300"
      height="300"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <g clipPath="url(#clip0_238_1284)">
        <motion.path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M50 0H0V100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100V0H150C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0Z"
          fill="url(#paint0_linear_238_1284)"
        />
        <motion.svg
          x="50"  // Adjust the positioning of the nested SVG
          y="50"
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          variants={diamondVariants}
          initial="hidden"
          animate="visible"
        >
          
        </motion.svg>
      </g>
      
      <defs>
        <linearGradient
          id="paint0_linear_238_1284"
          x1="100"
          y1="0"
          x2="100"
          y2="200"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A7B5FF" />
          <stop offset="1" stopColor="#F3ACFF" />
        </linearGradient>
        <clipPath id="clip0_238_1284">
          <rect width="200" height="200" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
    <Image src={Teenguy} width={400} height={400} alt="teenguy" className="absolute top-1/2 right-1/2 transform translate-x-1/2 -translate-y-1/2"/>

    </motion.div>
    
  );
};

export default Diamond;
