import React, { SVGProps } from 'react';
import { motion } from 'framer-motion';

const icons: { [key: string]: React.ReactElement<SVGProps<SVGSVGElement>> } = {
  Rocket: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-primary animate-pulse-slow">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.3.05-3.11.63-1.4 1.84-2.43 3.45-3.45-1.02-1.61-2.05-2.82-3.45-3.45-.81.65-2.27.66-3.11.05-1.26-1.5-2-5-2-5s.5 3.74 2 5zM9 12c0 .55.45 1 1 1h5v5c0 .55.45 1 1 1s1-.45 1-1v-5h5c.55 0 1-.45 1-1s-.45-1-1-1h-5V6c0-.55-.45-1-1-1s-1 .45-1 1v5h-5c-.55 0-1 .45-1 1z"/>
    </svg>
  ),
  Cloud: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-secondary animate-float-medium">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>
    </svg>
  ),
  Money: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-emerald-500 animate-pulse-glow">
      <circle cx="12" cy="12" r="8"/>
      <path d="M12 18V6"/>
      <path d="m8 10 4 4 4-4"/>
    </svg>
  ),
  Check: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-green-500 animate-bounce-slow">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  ),
  Lock: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-purple-500 animate-shake">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
    </svg>
  ),
  Lightning: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500 animate-pulse-slow">
      <path d="M13 2L3 14h9v6l10-12h-9v-6z"/>
    </svg>
  ),
  Chart: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-orange-500 animate-float-fast">
      <rect x="3" y="3" width="7" height="9"/>
      <rect x="3" y="14" width="7" height="7"/>
      <rect x="14" y="8" width="7" height="5"/>
      <rect x="14" y="16" width="7" height="5"/>
    </svg>
  ),
};

const USPItem: React.FC<{ icon: React.ReactNode; title: string; description: string, delay: number }> = ({ icon, title, description, delay }) => (
  <motion.div 
    className="p-6 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border border-neutral-200/60 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/30 card-hover animate-fade-in-up text-center"
    style={{animationDelay: `${delay}ms`}}
    initial={{ opacity: 0, y: 30 }}
    whileHover={{ 
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" }
    }}
    transition={{ 
      type: "spring",
      damping: 25,
      stiffness: 300
    }}
  >
    <motion.div 
      className="bg-gradient-to-br from-primary/10 to-primary/5 text-primary p-4 rounded-xl mb-5 inline-block mx-auto"
      whileHover={{ 
        scale: 1.1,
        rotate: 5,
        transition: { duration: 0.3 }
      }}
    >
      {icon}
    </motion.div>
    <h3 className="text-xl font-bold text-neutral-900 mb-3">{title}</h3>
    <p className="text-neutral-600 leading-relaxed">{description}</p>
  </motion.div>
);

const USP: React.FC = () => {
  const uspData = [
    { icon: icons.Rocket, title: 'Tally Prime Alternative', description: 'Same power, less complexity' },
    { icon: icons.Cloud, title: 'Cloud-Based', description: 'Access anytime, anywhere' },
    { icon: icons.Money, title: 'Affordable & Scalable', description: 'Designed for Indian SMBs' },
    { icon: icons.Check, title: '100% GST-Ready', description: 'Fully compliant with regulations' },
    { icon: icons.Lock, title: 'Secure & Reliable', description: 'Cloud backup + encryption' },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-neutral-50 via-white to-neutral-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl animate-float-medium"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 gradient-text">
            Why Businesses Choose Poysa
          </h2>
          <p className="mt-4 text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A modern, efficient, and user-friendly platform built for the unique needs of Indian businesses.
          </p>
        </div>
        
        {/* Compact grid layout: 2 cols on mobile, 5 cols on PC */}
        <div className="grid grid-cols-2 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-5xl xl:max-w-6xl mx-auto">
          {uspData.map((item, index) => (
            <USPItem key={index} icon={item.icon} title={item.title} description={item.description} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default USP;
