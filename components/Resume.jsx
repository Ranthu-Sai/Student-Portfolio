import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section.jsx';

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

const Resume = () => {
  return (
    <Section id="resume" title="My Resume">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-secondary/80 dark:text-light/80 leading-relaxed text-base mb-3">
          Feel free to download my resume for a more detailed overview of my skills, experience, and projects.
        </p>
        <a
          href="/resume.pdf"
          download="Sai-Ranthu-Resume.pdf"
          className="inline-flex items-center bg-primary text-white font-semibold text-sm py-2 px-6 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg"
          aria-label="Download my resume"
        >
          <DownloadIcon />
          Download Resume
        </a>
      </motion.div>
    </Section>
  );
};

export default Resume;
