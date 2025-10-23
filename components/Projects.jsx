import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section.jsx';

const projectData = [
  {
    title: 'TO-DOIT',
    description:
      'TO-DOIT App is a web-based task manager that lets users add, edit, delete, and filter tasks by status (All, Pending, Completed) while offering a theme switcher for a personalized experience.',
    image: 'https://github.com/takitajwar17/Simple-Todo-List-Refactored/assets/111155827/4b1c2e01-f24b-4f39-899e-c356d468e386',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/Ranthu-Sai/ToDo-List',
    demoLink: 'https://ranthu-sai.github.io/ToDo-List',
    imageClass: 'h-40 object-cover object-center',
  },
  {
    title: 'Spotify Clone',
    description:
      'Spotify Clone – MERN stack app with Tailwind CSS, secure authentication, playlist management, music streaming, and a responsive, dynamic UI with smooth playback controls.',
    image: 'https://res.cloudinary.com/dkpi8hona/image/upload/v1761236084/Spotify_Clone.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/Ranthu-Sai/Spotify-Clone',
    demoLink: 'https://spotify-clone-56ce.onrender.com',
    imageClass: 'h-40 object-cover object-center',
  },
  {
    title: 'SOS Game',
    description:
      'SOS Game – A 5x5 two-player strategy game where players alternately place "S" or "O" to form "SOS" sequences horizontally, vertically, or diagonally. The player with the highest score wins; a tie results in a draw.',
    image: 'https://res.cloudinary.com/dkpi8hona/image/upload/v1761245702/ic_launcher-playstore_hbh9u5.png',
    tags: ['Java'],
    codeLink: 'https://github.com/Ranthu-Sai/SOS-Game',
    demoLink: 'https://github.com/Ranthu-Sai/SOS-Game/releases/download/B1/SOS.Game_v1.0.apk',
    demoLabel: 'APK',
    imageClass: 'h-40 object-cover object-center',
  },
  {
    title: 'Portfolio Website',
    description:
      'Student Portfolio – A clean, fast, and customizable portfolio to showcase work, skills, and story. Features organized components, a simple theming system, and lightweight, responsive design.',
    image: 'https://res.cloudinary.com/dkpi8hona/image/upload/v1761250992/Portfolio.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    codeLink: 'https://github.com/Ranthu-Sai/Student-Portfolio',
    demoLink: 'https://ranthu-sai.github.io/Student-Portfolio',
  },
];

const ProjectCard = ({ title, description, image, tags, codeLink, demoLink, imageClass, demoLabel = 'Live Demo' }) => (
  <div className="bg-white dark:bg-secondary rounded-lg shadow-lg overflow-hidden group flex flex-col h-full">
    <div className="overflow-hidden">
      <img
        loading="lazy"
        src={image}
        alt={`Screenshot of the ${title} project`}
        className={`w-full ${imageClass || 'h-36 object-cover'} group-hover:scale-110 transition-transform duration-500`}
      />
    </div>
    <div className="p-3 flex flex-col flex-grow">
      <h3 className="text-md font-bold text-dark dark:text-light mb-1">{title}</h3>
      <div className="flex flex-wrap gap-1 mb-1.5">
        {tags.map(tag => (
          <span key={tag} className="bg-primary/10 text-primary text-xs font-semibold px-1.5 py-0.5 rounded-full">
            {tag}
          </span>
        ))}
      </div>
      <p className="text-xs text-secondary/90 dark:text-light/80 mb-2 flex-grow">{description}</p>
      <div className="mt-auto flex space-x-2">
        <a
          href={codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-secondary dark:bg-dark text-light font-semibold py-1 px-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 text-sm"
        >
          View Code
        </a>
        <a
          href={demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center bg-primary text-white font-semibold py-1 px-3 rounded-md hover:bg-opacity-90 transition-colors duration-300 text-sm"
        >
          {demoLabel}
        </a>
      </div>
    </div>
  </div>
);

const projectContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const projectItemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Projects = () => {
  return (
    <Section id="projects" title="My Projects">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-6xl mx-auto"
        variants={projectContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projectData.map((project, index) => (
          <motion.div
            key={index}
            variants={projectItemVariants}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="card-glow-wrapper rounded-lg h-full"
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
};

export default Projects;
