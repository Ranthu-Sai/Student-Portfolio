import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section.jsx';

const Certifications = () => {
  return (
    <Section id="certifications" title="Certifications & Achievements">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-secondary/80 dark:text-light/80 leading-relaxed text-lg mb-8">
          Details about my certifications and achievements are coming soon. Stay tuned!
        </p>
      </motion.div>
    </Section>
  );
};

export default Certifications;
