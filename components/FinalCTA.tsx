import React from 'react';
import Button from './ui/Button';

const FinalCTA: React.FC = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl p-12 text-center overflow-hidden bg-gradient-to-r from-primary to-blue-500 animate-fade-in-up">
          <div className="absolute inset-0 bg-grid-neutral-900/[0.1] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Ready to Simplify Your Accounting?
            </h2>
            <p className="mt-4 text-lg text-blue-100 max-w-3xl mx-auto">
              Join thousands of Indian businesses switching to a smarter, simpler, and more efficient way to manage their finances.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-neutral-200">Start Your Free Trial</Button>
              <Button variant="ghost" size="lg" className="text-white hover:bg-white/10">Book a Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;