import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section.jsx';

const About = () => {
  return (
    <Section id="about" title="About Me">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-secondary/80 dark:text-light/80 leading-relaxed text-base text-justify space-y-3"
        >
          <p>
            I'm a passionate Full-Stack Developer with a mission to build intelligent and scalable web solutions. My expertise lies at the intersection of robust backend engineering and modern frontend development, with a strong focus on the MERN stack (MongoDB, Express.js, React, Node.js). I thrive on transforming complex problems into elegant, high-performance applications with intuitive user experiences.
          </p>
          <p>
            As an AI and Natural Language Processing (NLP) enthusiast, I am dedicated to integrating cutting-edge AI tools and APIs to create smarter, more responsive applications. My specialization in Java and Object-Oriented Programming (OOP) provides a solid foundation for building secure, enterprise-grade backend systems and microservices that can handle complexity and scale.
          </p>
          <p>
            Whether it's architecting a RESTful API, developing a dynamic single-page application, or fine-tuning a machine learning model, I am driven by a commitment to clean code, best practices, and continuous learning. I'm excited by the challenge of leveraging technology to solve real-world problems and create meaningful digital experiences.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
