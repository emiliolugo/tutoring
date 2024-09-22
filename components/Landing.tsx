"use client"
import React from 'react';
import Diamond from './Diamond';
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
    <div className="relative h-screen text-white text-center p-10">
      <div className="absolute inset-0 bg-gradient-to-r to-blue-500  p-[10%] from-indigo-700 w-full"></div>
      <div className='m-[10%] flex relative z-10 items-center '>
      <div className="ml-auto   flex flex-col items-start">
        <h1 className="text-8xl font-black text-start tracking-wide	drop-shadow-lg">
          <span className='text-green-500'>AP</span>+<span className='text-yellow-500'>SAT</span><br /> Tutoring
        </h1>
        <p className="text-md text-start mt-4 text-wrap  ">Expert Tutoring Tailored to Your Learning Starting $59.99!</p>
        <motion.button className="border-2 border-white p-5 mt-10 hover:bg-white hover:text-blue-600 duration-350 font-bold"
        whileHover={{scale: 1.1}}
        >
        Secure Your Spot Now!
        </motion.button>
      </div>
      <div className=' mx-auto'>
      
  <Diamond />
  </div>
      </div>
      <svg
  className="absolute bottom-0 left-0 w-[100%] h-40"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 1440 320"
  preserveAspectRatio='none'
>
  <path
    fill="#fff"
    fillOpacity="1"
    d="M0,224L48,208C96,192,192,160,288,165.3C384,171,480,213,576,234.7C672,256,768,256,864,229.3C960,203,1056,149,1152,149.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
  ></path>
</svg>

    </div>
  );
}
