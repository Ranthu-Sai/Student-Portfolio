import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-2 sm:py-4 px-6 ${className}`}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-serif font-bold text-center text-primary mb-3">{title}</h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
};

export default Section;
