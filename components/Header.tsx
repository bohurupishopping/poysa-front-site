import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Page } from '../App';

interface HeaderProps {
  navigate: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ navigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: Page | null, anchor?: string) => {
    e.preventDefault();
    setIsOpen(false);
    if (page) {
      navigate(page);
    } else if (anchor) {
      // Navigate to home and then scroll
      navigate('home');
      setTimeout(() => {
        const element = document.querySelector(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow page render
    }
  };


  const navLinks = (
    <>
      <a href="#" onClick={(e) => handleNavClick(e, 'features')} className="block md:inline-block text-neutral-600 hover:text-primary transition-all px-4 py-2 rounded-full text-center relative group font-medium">Features
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary/50 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
      </a>
      <a href="#pricing" onClick={(e) => handleNavClick(e, null, '#pricing')} className="block md:inline-block text-neutral-600 hover:text-primary transition-all px-4 py-2 rounded-full text-center relative group font-medium">Pricing
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary/50 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
      </a>
      <a href="#" onClick={(e) => handleNavClick(e, 'faq')} className="block md:inline-block text-neutral-600 hover:text-primary transition-all px-4 py-2 rounded-full text-center relative group font-medium">FAQ
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary/50 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
      </a>
      <a href="#" onClick={(e) => handleNavClick(e, 'contact')} className="block md:inline-block text-neutral-600 hover:text-primary transition-all px-4 py-2 rounded-full text-center relative group font-medium">Contact
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary/50 rounded-full transition-all duration-300 group-hover:w-3/4 group-hover:left-1/4"></span>
      </a>
    </>
  );

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'pt-2' : 'pt-6'} ${isScrolled ? 'bg-white/95 backdrop-blur-lg border-b border-neutral-200/50' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className={`max-w-5xl mx-auto glass bg-white/80 backdrop-blur-xl border border-neutral-200/60 rounded-2xl md:rounded-full shadow-lg shadow-neutral-300/20 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-primary/15' : 'shadow-xl shadow-primary/20'}`}>
            <div className="relative flex items-center justify-between px-6 py-3">
              <a href="#" onClick={(e) => handleNavClick(e, 'home')} className="flex items-center cursor-pointer">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                <h1 className="text-2xl font-bold text-neutral-900 ml-2">Poysa</h1>
              </a>
              <nav className="hidden md:flex items-center space-x-1 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
                {navLinks}
              </nav>
              <div className="hidden md:flex items-center justify-end space-x-3">
                <Button variant="ghost" size="sm">Log In</Button>
                <Button variant="primary" size="sm">Start Free Trial</Button>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-md text-neutral-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-primary" aria-label="Toggle menu" aria-expanded={isOpen}>
                   {isOpen ? (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                   ) : (
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                   )}
                </button>
              </div>
            </div>
             {/* Mobile Menu */}
            <div className={`transition-all duration-500 ease-in-out md:hidden overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="flex flex-col space-y-2 px-4 pb-6 pt-2 border-t border-neutral-200">
                    {navLinks}
                    <div className="flex flex-col items-center space-y-3 pt-4">
                        <Button variant="ghost" size="sm" className="w-full">Log In</Button>
                        <Button variant="primary" size="sm" className="w-full">Start Free Trial</Button>
                    </div>
                </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
