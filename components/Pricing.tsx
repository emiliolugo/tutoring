"use client"

import React from 'react';
import { CheckCircle } from 'lucide-react'; // Import the checkmark icon
import { motion } from 'framer-motion'

const Card: React.FC<{ title: string; features: string[]; price: string }> = ({ title, features, price }) => (
  <motion.div className="bg-gray-200 shadow-md rounded-lg p-6 max-w-sm mx-5"
  whileHover={{scale: 1.1, translateY: -5}}>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <div className='text-center my-10'>
        <div className='text-center flex items-end justify-center'>

        <p className="text-6xl font-bold ">{price}</p>
        <p className='text-md font-light'>.99</p>
        </div>
      
      <p className='text-sm'>Per session</p>
    </div>
    <ul className=" pl-5 text-gray-700">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start mb-2">
          <CheckCircle className="mr-2 text-blue-500" />
          <span className='w-[200px] text-wrap'>{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const PricingPage: React.FC = () => {
  return (
    <div className="h-screen bg-white flex flex-col ">
      <h3 className="text-6xl font-black mb-6 p-10 drop-shadow-lg">PRIC<span className='text-blue-500'>ING</span></h3>
      <div className='flex justify-center'>
        <Card
          title="Welcome Session"
          features={[
            "Introductory consultation",
            "Goal setting",
            "Money back if you don't come back for a second session",
            "Basic strategy discussion"
          ]}
          price="$29"
        />
        <Card
          title="Master of One"
          features={[
            "Study plan for SAT/ACT or a specific subject",
            "Practice tests",
            "Strategy sessions",
            "Flexible scheduling",
            "Personalized attention"
          ]}
          price="$59"
        />
        <Card
          title="Jack of All Trades"
          features={[
            "Study plan for SAT/ACT or a specific subject",
            "Help with unlimited number of subjects",
            "Practice tests",
            "Strategy sessions",
            "Flexible scheduling",
            "Personalized attention"
          ]}
          price="$99"
        />
      </div>
    </div>
  );
};

export default PricingPage;
