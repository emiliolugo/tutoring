"use client"

import { ChevronsUpIcon } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';


export default function ServicesPage(){
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  const handleDropdown = (index:number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
    {
      title: 'APs',
      content: [
        'Calculus AB',
        'Statistics',
        'Computer Science A',
        'Macroeconomics',
        'Microeconomics',
        'US Government and Politics',
        'English Language and Composition',
        'Spanish 5',
        'World History: Modern',
      ],
    },
    {
      title: 'Standardized Tests',
      content: ['ACT', 'SAT'],
    },
    {
      title: 'Coding',
      content: ['Python', 'Java', 'HTML and CSS', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Languages',
      content: ['Spanish'],
    },
  ];
    return(
        <section className="py-16 px-8 text-center bg-white flex flex-col h-screen justify-center">
                  <h2 className="text-4xl font-extrabold tracking-tighter mb-10 drop-shadow-lg">PASS <span className="text-blue-500">AP</span>s, IMPROVE YOUR <span className="text-blue-500">SCORES</span>, LEARN A <span className="text-blue-500">LANGUAGE</span></h2>
          <div className="flex">
            <div className="text-wrap w-[50%] ">
        

        <div className="w-[80%] mx-auto">
        <p className="p-2">Want to get a <span className="font-bold text-blue-500">1500+</span> SAT? Want to <span className="font-bold text-blue-500">pass</span> AP Calc? Want to <span className="font-bold text-blue-500">learn</span> Spanish? Whatever it is you need, I am more than likely well versed in it.
            I can teach you subjects from math to economics to even US government.
        </p>

        <p className=" ">
            Just pick whatever you need help with and I can help!
        </p></div></div>
        <ul className="mt-4 space-y-4 text-lg text-center w-[50%]">
      {menuItems.map((item, index) => (
        <li key={index}>
          <button
            onClick={() => handleDropdown(index)}
            className="w-full flex justify-between items-center px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none shadow-md"
          >
            <span>{item.title}</span>
            <motion.div
              animate={{ rotate: openIndex === index ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronsUpIcon className="h-5 w-5" />
            </motion.div>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === index && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="mt-2 overflow-hidden text-left bg-gray-50 rounded-md shadow-inner"
              >
                {item.content.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className="px-4 py-2 border-b last:border-none border-gray-200 hover:bg-gray-100"
                  >
                    {subItem}
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul></div>
      </section>
    )
}