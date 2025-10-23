import React from 'react';
import Section from '@/components/Section.jsx';

// Icon sources primarily from Devicon CDN; fallbacks provided where needed
const skillCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
      { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', invertOnLight: true },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
      { name: 'Kotlin', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg' },
    ],
  },
  {
    title: 'Databases',
    items: [
      { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'PL/SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ],
  },
  {
    title: 'Tools & Other Activities',
    items: [
      { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
      { name: 'Git & Github', icons: [
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
        'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
      ] },
      { name: 'Google Colab', icon: 'https://colab.research.google.com/img/colab_favicon_256px.png' },
      { name: 'Android Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
    ],
  },
];

// Animations removed for a static, snappy render

const TechStack = () => {
  return (
    <Section id="skills" title="Skills & Technologies">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
        {skillCategories.map((category) => (
          <div key={category.title} className="bg-white/50 dark:bg-secondary/50 p-4 rounded-lg shadow-sm card-glow-wrapper">
            <h3 className="text-xl font-bold text-primary mb-3">{category.title}</h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((tech) => (
                <div key={tech.name} className="bg-gray-100 dark:bg-dark/50 text-secondary dark:text-light py-1 pl-2 pr-3 rounded-full text-sm font-medium flex items-center gap-2">
                  <span className="flex items-center gap-1">
                    {tech.icons ? (
                      tech.icons.map((src, idx) => (
                        <img
                          key={src + idx}
                          src={src}
                          alt=""
                          className={`w-4 h-4 object-contain ${tech.invertOnLight ? 'invert-[.85] dark:invert-0' : ''}`}
                          loading="lazy"
                        />
                      ))
                    ) : tech.icon ? (
                      <img
                        src={tech.icon}
                        alt=""
                        className={`w-4 h-4 object-contain ${tech.invertOnLight ? 'invert-[.85] dark:invert-0' : ''}`}
                        loading="lazy"
                      />
                    ) : null}
                  </span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
