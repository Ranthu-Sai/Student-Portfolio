import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const letterContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letterVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 12, stiffness: 200 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut', delay: 0.4 } },
};

const Hero = () => {
  const name = 'Sai Ranthu';
  const subtitle = 'Full-Stack Developer (MERN) | AI & NLP Enthusiast | Java & OOP Specialist'.split(' ');

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-light dark:bg-dark overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-50 dark:opacity-70">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 md:w-48 md:h-48 bg-primary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-[15%] right-[10%] w-48 h-48 md:w-64 md:h-64 bg-teal-400/30 rounded-full blur-3xl animate-blob [animation-delay:-2s]" />
        <div className="hidden md:block absolute top-[25%] right-[20%] w-24 h-24 md:w-32 md:h-32 bg-primary/20 rounded-full blur-2xl animate-blob [animation-delay:-4s]" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-dark dark:text-light mb-4" variants={itemVariants}>
            Hello, I'm{' '}
            <motion.span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400" variants={letterContainerVariants}>
              {name.split('').map((char, index) => (
                <motion.span key={index} variants={letterVariants} className="inline-block">
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
          <motion.p className="text-md md:text-lg text-secondary dark:text-light/90 mb-2 font-semibold" variants={letterContainerVariants}>
            {subtitle.map((word, index) => (
              <motion.span key={index} variants={letterVariants} className="inline-block mr-2 last:mr-0">
                {word}
              </motion.span>
            ))}
          </motion.p>
          <motion.p className="text-md text-secondary/80 dark:text-light/70 mb-6" variants={itemVariants}>
            Focused on integrating AI tools and APIs into scalable web solutions. I build intelligent, high-performance applications where elegant code and intuitive design work in harmony.
          </motion.p>
          <motion.div variants={itemVariants}>
            <a href="#projects" className="inline-block bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
              View My Work
            </a>
          </motion.div>
        </motion.div>
        <motion.div className="md:w-1/2 flex justify-center" variants={imageVariants} initial="hidden" animate="visible">
          <div className="relative w-80 h-80 md:w-96 md:h-96 aspect-square">
            <div className="relative w-full h-full rounded-full ring-4 ring-primary/40 ring-offset-2 ring-offset-light dark:ring-offset-dark overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/dkpi8hona/image/upload/v1737190997/me.jpeg_uhraqu.jpg"
                alt="Sai Ranthu"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
