"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      href:'/',
      title:"Home"
    }
    ,{
      href: "mailto:emilio23lugo@gmail.com",
      title: "Contact"},
    {
      href:'https://calendly.com/emilio23lugo/30min',
      title:"Book a session"
    },
    
  ]

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white  w-full bg-gradient-to-r to-blue-500  from-indigo-700 pt-2 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-3xl font-bold">
          <a  className='text-white'>
            <p >LeTutor</p>
            
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
        <motion.div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex  md:w-auto  `}
          initial={{ opacity: 0, }}
          animate={{ opacity: isOpen ? 1 : .5, }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col md:flex-row md:space-x-8">
            {links.map((item)=>
            <motion.li whileHover={{scale: 1.02, translateY: -1}} className='hover:text-gray-300 duration-250'>
              <motion.a href={item.href} rel = "noopener" target="__blank"
              >
                {item.title}
              </motion.a>
            </motion.li>)}
            {/* <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="block mt-4 md:inline-block md:mt-0 hover:text-gray-300 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                About Me
              </Link>
            </li> */}
            
            
          </ul>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
