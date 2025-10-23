import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '@/components/Section.jsx';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Contact = () => {
  const [isEmailChoiceModalOpen, setIsEmailChoiceModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [mailtoLinks, setMailtoLinks] = useState({ gmail: '', sasi: '' });
  const formRef = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

    const baseGmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1';

    setMailtoLinks({
      gmail: `${baseGmailUrl}&to=saiyadav4719@gmail.com&su=${subject}&body=${body}`,
      sasi: `${baseGmailUrl}&to=sai.ranthu@sasi.ac.in&su=${subject}&body=${body}`,
    });

    setIsEmailChoiceModalOpen(true);
  };

  const handleEmailLinkClick = () => {
    setIsEmailChoiceModalOpen(false);
    setTimeout(() => {
      setIsFormSubmitted(true);
      if (formRef.current) formRef.current.reset();
    }, 500);
  };

  const handleFormChange = () => {
    if (isFormSubmitted) setIsFormSubmitted(false);
  };

  return (
    <Section id="contact" title="Get In Touch">
      <motion.div
        className="max-w-2xl mx-auto bg-white dark:bg-secondary p-4 rounded-xl shadow-2xl card-glow-wrapper"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <p className="text-center text-secondary/80 dark:text-light/80 mb-4">Have a question or want to work together?</p>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              onChange={handleFormChange}
              className="w-full px-4 py-3 bg-gray-100 dark:bg-dark/50 border-2 border-transparent rounded-lg focus:outline-none focus:border-primary transition-colors text-secondary dark:text-light placeholder:text-secondary/50 dark:placeholder:text-light/50"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              onChange={handleFormChange}
              className="w-full px-4 py-3 bg-gray-100 dark:bg-dark/50 border-2 border-transparent rounded-lg focus:outline-none focus:border-primary transition-colors text-secondary dark:text-light placeholder:text-secondary/50 dark:placeholder:text-light/50"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              onChange={handleFormChange}
              className="w-full px-4 py-3 bg-gray-100 dark:bg-dark/50 border-2 border-transparent rounded-lg focus:outline-none focus:border-primary transition-colors resize-none text-secondary dark:text-light placeholder:text-secondary/50 dark:placeholder:text-light/50"
            ></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-primary text-white font-bold py-3 px-10 rounded-full hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Send Message
            </button>
          </div>
          <AnimatePresence>
            {isFormSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: -10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: 'auto' }}
                exit={{ opacity: 0, y: -10, height: 0 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="text-center text-green-600 dark:text-green-400 font-medium flex items-center justify-center"
                aria-live="polite"
              >
                <CheckIcon />
                Thank you! Your message has been sent successfully.
              </motion.p>
            )}
          </AnimatePresence>
        </form>
      </motion.div>

      <AnimatePresence>
        {isEmailChoiceModalOpen && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <motion.div
              className="bg-white dark:bg-secondary rounded-lg shadow-2xl p-6 w-full max-w-md relative text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
            >
              <button
                onClick={() => setIsEmailChoiceModalOpen(false)}
                className="absolute top-3 right-3 text-secondary/60 dark:text-light/60 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
              <h3 className="text-2xl font-bold text-dark dark:text-light mb-6">Send Message To:</h3>
              <div className="space-y-4">
                <a
                  href={mailtoLinks.gmail}
                  onClick={handleEmailLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-secondary dark:bg-dark text-light font-semibold py-3 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Personal
                </a>
                <a
                  href={mailtoLinks.sasi}
                  onClick={handleEmailLinkClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-secondary dark:bg-dark text-light font-semibold py-3 px-4 rounded-md hover:bg-opacity-90 transition-all duration-300"
                >
                  Academic
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </Section>
  );
};

export default Contact;
