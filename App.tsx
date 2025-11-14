import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import FeaturesPage from './components/FeaturesPage';
import ContactPage from './components/ContactPage';
import FAQPage from './components/FAQPage';

export type Page = 'home' | 'features' | 'faq' | 'contact';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = (page: Page) => {
    setIsLoading(true);
    setCurrentPage(page);
    window.scrollTo(0, 0); // Scroll to top on page change
    
    // Simulate loading transition
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'features':
        return <FeaturesPage />;
      case 'faq':
        return <FAQPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  // Page transition variants
  const pageVariants = {
    initial: { 
      opacity: 0, 
      x: 50,
      scale: 0.98
    },
    in: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.5
      }
    },
    out: { 
      opacity: 0, 
      x: -50,
      scale: 0.98,
      transition: { 
        type: "spring",
        damping: 25,
        stiffness: 300,
        duration: 0.3
      }
    }
  };

  // Loading animation variants
  const loadingVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { duration: 0.2 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-neutral-50 to-neutral-100 overflow-x-hidden relative">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/3 -left-4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float-medium"></div>
        <div className="absolute bottom-20 right-1/3 w-64 h-64 bg-primary/3 rounded-full blur-2xl animate-float-fast"></div>
      </div>

      {/* Loading indicator */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={loadingVariants}
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary z-50"
          >
            <motion.div
              initial={{ width: '0%' }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-primary to-blue-400 animate-pulse"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Header navigate={navigate} />
      
      <main className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="in"
            exit="out"
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer navigate={navigate} />
    </div>
  );
};

export default App;
