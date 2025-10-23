import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GithubIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
);
const LinkedinIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#0077B5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
);
const GmailIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-current">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.79L12 16.51l-6.545-4.72v9.212H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
  </svg>
);
const WhatsAppIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#25D366">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.204-1.634a11.86 11.86 0 005.785 1.47h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);
const HackerRankIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#2EC866">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12zm3.36 17.52h-2.112v-4.116H7.728v4.116H5.616V6.48h2.112v3.852h5.508V6.48h2.112v11.04z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6">
    <defs>
      <radialGradient id="instagram-gradient" cx="30%" cy="107%" r="150%" fx="30%" fy="107%">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </radialGradient>
    </defs>
    <path
      fill="url(#instagram-gradient)"
      d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.784.297-1.457.717-2.126 1.387C1.344 2.684.924 3.357.627 4.14c-.297.765-.497 1.635-.558 2.913-.058 1.28-.072 1.687-.072 4.947s.013 3.667.072 4.947c.06 1.278.262 2.148.558 2.913.297.783.717 1.457 1.387 2.126.67.67 1.343 1.09 2.126 1.387.765.297 1.635.497 2.913.558 1.28.058 1.687.072 4.947.072s3.667-.013 4.947-.072c1.278-.06 2.148-.262 2.913-.558.783-.297 1.457-.717 2.126-1.387.67-.67 1.09-1.343 1.387-2.126.297-.765.497-1.635.558-2.913.058-1.28.072-1.687.072-4.947s-.013-3.667-.072-4.947c-.06-1.278-.262-2.148-.558-2.913-.297-.783-.717-1.457-1.387-2.126C21.316 1.344 20.643.924 19.86.627c-.765-.297-1.635-.497-2.913-.558C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.07 1.17.05 1.948.248 2.45.45.546.21.94.46 1.32.84.38.38.63.774.84 1.32.2.504.4 1.28.45 2.45.054 1.265.07 1.646.07 4.85s-.016 3.585-.07 4.85c-.05 1.17-.25 1.948-.45 2.45-.21.546-.46.94-.84 1.32-.38.38-.774.63-1.32.84-.503.2-1.28.4-2.45.45-1.265.054-1.646.07-4.85.07s-3.585-.016-4.85-.07c-1.17-.05-1.948-.25-2.45-.45-.546-.21-.94-.46-1.32-.84-.38-.38-.63-.774-.84-1.32-.2-.503-.4-1.28-.45-2.45-.054-1.265-.07-1.646-.07-4.85s.016-3.585.07-4.85c.05-1.17.25-1.948.45-2.45.21-.546.46.94.84-1.32.38-.38.774-.63 1.32-.84.503-.2 1.28-.4 2.45-.45C8.415 2.176 8.797 2.16 12 2.16zm0 5.48c-2.43 0-4.39 1.96-4.39 4.39s1.96 4.39 4.39 4.39 4.39-1.96 4.39-4.39-1.96-4.39-4.39-4.39zm0 7.16c-1.527 0-2.77-1.243-2.77-2.77s1.243-2.77 2.77-2.77 2.77 1.243 2.77 2.77-1.243 2.77-2.77 2.77zm4.965-7.85c-.867 0-1.57-.703-1.57-1.57s.703-1.57 1.57-1.57 1.57.703 1.57 1.57-.703 1.57-1.57 1.57z"/>
  </svg>
);
const TwitterIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/>
  </svg>
);
const TelegramIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="#2AABEE">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.17.91-.494 1.208-.822 1.23-.696.04-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.04-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.662 3.488-1.373 5.55-2.186 6.286-2.522 1.562-.72 2.793-1.082 3.261-1.096z"/>
  </svg>
);

const SocialIconLink = ({ href, ariaLabel, title, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    className="group relative flex flex-col items-center transform hover:scale-110 transition-transform duration-300 text-center"
  >
    {children}
    <span className="absolute top-full mt-2 text-xs font-medium opacity-0 group-hover:opacity-100 group-hover:z-10 transition-opacity duration-300 whitespace-nowrap text-light/90">
      {title}
    </span>
  </a>
);

const Footer = () => {
  const [isEmailMenuOpen, setIsEmailMenuOpen] = useState(false);
  const emailContainerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (emailContainerRef.current && !emailContainerRef.current.contains(event.target)) setIsEmailMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [emailContainerRef]);

  return (
    <footer className="bg-dark dark:bg-black text-light/70 py-4">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-8 mb-4 pb-4">
          <SocialIconLink href="https://www.linkedin.com/in/sai-ranthu-73b352295/" ariaLabel="LinkedIn Profile" title="LinkedIn">
            <LinkedinIcon />
          </SocialIconLink>
          <SocialIconLink href="https://github.com/Ranthu-Sai" ariaLabel="GitHub Profile" title="GitHub">
            <GithubIcon />
          </SocialIconLink>
          <SocialIconLink href="https://www.hackerrank.com/profile/sai_ranthu" ariaLabel="HackerRank Profile" title="HackerRank">
            <HackerRankIcon />
          </SocialIconLink>
          <SocialIconLink href="https://www.codechef.com/users/sai_ranthu" ariaLabel="CodeChef Profile" title="CodeChef">
            <img src="https://img.icons8.com/?size=100&id=vAtJFm3hwtQw&format=png&color=000000" alt="CodeChef Profile" className="h-6 w-6 dark:invert" />
          </SocialIconLink>
          <SocialIconLink href="https://x.com/rowdy_boy_07" ariaLabel="X/Twitter Profile" title="X (Twitter)">
            <TwitterIcon />
          </SocialIconLink>
          <SocialIconLink href="https://www.instagram.com/s.a.i_r.a.n.t.h.u/" ariaLabel="Instagram Profile" title="Instagram">
            <InstagramIcon />
          </SocialIconLink>
          <SocialIconLink href="https://t.me/rowdy_boy_7" ariaLabel="Telegram Profile" title="Telegram">
            <TelegramIcon />
          </SocialIconLink>
          <SocialIconLink href="https://wa.me/919381552176" ariaLabel="WhatsApp" title="WhatsApp">
            <WhatsAppIcon />
          </SocialIconLink>
          <div ref={emailContainerRef} className="relative">
            <div className="group relative flex flex-col items-center">
              <button onClick={() => setIsEmailMenuOpen(prev => !prev)} aria-label="Gmail" className="transform hover:scale-110 transition-transform duration-300 inline-block">
                <GmailIcon />
              </button>
              <span className="absolute top-full mt-2 text-xs font-medium opacity-0 group-hover:opacity-100 group-hover:z-10 transition-opacity duration-300 whitespace-nowrap text-light/90">Gmail</span>
            </div>
            <AnimatePresence>
              {isEmailMenuOpen && (
                <motion.div
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-40 bg-white dark:bg-secondary rounded-lg shadow-2xl p-2 z-10"
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <ul className="space-y-1">
                    <li>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=saiyadav4719@gmail.com"
                        onClick={() => setIsEmailMenuOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-left text-sm px-3 py-2 rounded-md text-secondary dark:text-light hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        Personal
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=sai.ranthu@sasi.ac.in"
                        onClick={() => setIsEmailMenuOpen(false)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full text-left text-sm px-3 py-2 rounded-md text-secondary dark:text-light hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        Academic
                      </a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Sai Ranthu. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
