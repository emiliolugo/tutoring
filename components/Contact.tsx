"use client"

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion'
import Socials from './Socials';
const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submissionStatus, setSubmissionStatus] = useState<string | null>(null);

  const [isHovered, setIsHovered] = useState(false);

  const [submissionTimer, setSubmissionTimer] = useState(true)
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    // Use FormData to collect form data
    const form = event.currentTarget;
    const formData = new FormData(form);
  
    try {
      // Send form data to Netlify using fetch
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(), // Type assertion to prevent TS errors
      });

      if (response.ok) {
        setSubmissionStatus('Thank you for your message!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form fields
        setInterval(()=>{
          setSubmissionTimer(false)
        },2000)

      } else {
        setSubmissionStatus('Oops! Something went wrong.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionStatus('Oops! Something went wrong.');
    }
  };
  

  return (
    <div className='relative w-full bg-white p-5 tracking-tighter'>
      <h1 className='text-6xl font-black m-5 drop-shadow-lg' >GET IN <span className='text-blue-500'>TOUCH</span></h1>
      <div className='flex justify-start items-end'>
      <form
        name="contact"
        onSubmit={handleSubmit}
        className="w-[50%]  mr-auto p-6 text-black"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p className="hidden">
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-medium">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded bg-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border border-gray-300 rounded bg-white"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full p-2 border border-gray-300 rounded bg-white"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 w-full"
        >
          Send
        </button>
      </form>
      <div>
        <Socials />
      </div>
      </div>
      {submissionStatus  && (
        <motion.div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 left-1/2 text-center w-[30vw]"
        whileHover={{opacity:0}}
        onHoverStart={() => setIsHovered(true)}
      animate={{ opacity: isHovered || !submissionTimer ? 0 : 1 }}
      transition={{delay:1.5}}>
          <p className="bg-green-100 text-green-800 p-4 rounded shadow-md">{submissionStatus}</p>
        </motion.div>
      )}
    </div>
  );
};

export default ContactForm;
