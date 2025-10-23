import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section.jsx';

const educationData = [
  {
    degree: 'Bachelor of Technology in CSE (Data Science)',
    institution: 'Sasi Institute of Technology & Engineering, Tadepalligudem',
    years: '2022 - 2026',
    description: '',
  },
  {
    degree: 'Intermediate Education',
    institution: 'Vikas Junior College, Samisragudem',
    years: '2020 - 2022',
    description: '',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Sri Harshavardhana E.M School, Devarapalli',
    years: 'Completed 2020',
    description: '',
  },
];

const EducationCard = ({ degree, institution, years, description }) => (
  <div className="card-glow-wrapper rounded-lg">
    <motion.div
      className="bg-white dark:bg-secondary p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-primary md:border-l-0 md:text-left h-full"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <p className="text-xs text-secondary/70 dark:text-light/70 font-semibold mb-1">{years}</p>
      <h3 className="text-xl font-bold text-dark dark:text-light mb-1">{degree}</h3>
      <p className="text-md font-semibold text-primary mb-2">{institution}</p>
      <p className="text-secondary/90 dark:text-light/90">{description}</p>
    </motion.div>
  </div>
);

const Education = () => {
  return (
    <Section id="education" title="Education">
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="absolute w-0.5 h-full bg-primary/20 top-0 left-4 md:left-1/2 transform md:-translate-x-1/2"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          style={{ originY: 0 }}
        />
        <div className="space-y-2">
          {educationData.map((edu, index) => (
            <div key={index} className="relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full mt-1.5 left-4 md:left-1/2 transform -translate-x-1/2 border-4 border-light dark:border-dark"></div>
              <div className={`pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 items-center`}>
                {index % 2 === 0 ? (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="md:col-start-2">
                      <EducationCard {...edu} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="md:col-start-1 md:text-right">
                      <EducationCard {...edu} />
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
