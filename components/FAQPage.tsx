import React from 'react';
import FAQ from './FAQ';
import FinalCTA from './FinalCTA';

const FAQPage: React.FC = () => {
  return (
    <>
        <section className="relative pt-40 pb-24 text-center bg-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-neutral-200/[0.4] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="animate-fade-in-up">
                        <span className="text-primary font-bold uppercase tracking-wider">FAQ</span>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 leading-tight mt-2">
                            Frequently Asked Questions
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                            Welcome to Poysa! Here are some answers to our most common questions. If you can't find what you're looking for, feel free to contact us directly.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="bg-neutral-50">
            <FAQ />
        </section>

        <FinalCTA />
    </>
  );
};

export default FAQPage;