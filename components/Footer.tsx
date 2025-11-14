import React from 'react';
import { Page } from '../App';

interface FooterProps {
  navigate: (page: Page) => void;
}

const Footer: React.FC<FooterProps> = ({ navigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, page?: Page, anchor?: string) => {
    e.preventDefault();
    if (page) {
      navigate(page);
    } else if (anchor) {
      navigate('home');
      setTimeout(() => {
        document.querySelector(anchor)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const footerLinks = [
    { name: 'Features', action: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, 'features') },
    { name: 'Pricing', action: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, undefined, '#pricing') },
    { name: 'FAQ', action: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, 'faq') },
    { name: 'Contact', action: (e: React.MouseEvent<HTMLAnchorElement>) => handleLinkClick(e, 'contact') },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
  ];
  
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto bg-neutral-900 text-neutral-300 rounded-3xl p-8 md:p-12 text-center shadow-2xl shadow-neutral-900/20 animate-fade-in-up">
          
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center">
            <div className="flex items-center">
              <svg className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
              <h3 className="text-3xl font-bold text-white ml-2">Poysa</h3>
            </div>
            <p className="mt-4 text-neutral-400 max-w-sm">
              Smarter, simpler & affordable accounting for modern Indian businesses.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3 my-10">
            {footerLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href || '#'} 
                onClick={link.action} 
                className="font-medium hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300" aria-label="Twitter">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
               <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors duration-300" aria-label="Facebook">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <div className="mt-10 pt-8 border-t border-neutral-700/50 text-sm text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Poysa Inc. All rights reserved. Made with ❤️ in India.</p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;