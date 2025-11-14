import React from 'react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-neutral-200/[0.4] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 leading-tight">
              Accounting & GST, Reimagined for India
            </h1>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
              The smarter, simpler & affordable alternative to Tally Prime and Zoho Books.
            </p>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
            <a href="https://app.poysa.de" target="_blank" rel="noopener noreferrer">
              <Button variant="primary" size="lg">Start Your Free Trial</Button>
            </a>
            <a href="https://groups.google.com/g/bohurupi-services/c/J0wzuC5gtYw" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="lg">Download App</Button>
            </a>
          </div>
        </div>
        
        <div className="relative mt-16 md:mt-20 max-w-6xl mx-auto animate-fade-in-up" style={{ animationDelay: '400ms' }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-3xl -z-10"></div>
            <div className="p-2 bg-white/60 rounded-2xl shadow-2xl shadow-neutral-300/60 border border-neutral-200/80 backdrop-blur-sm">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Poysa Dashboard" className="rounded-xl object-cover w-full h-full" />
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
