import React from 'react';
import Button from './ui/Button';

interface FeaturesProps {
  navigate: (page: 'features') => void;
}

const icons: { [key: string]: JSX.Element } = {
  Invoice: (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>),
  Inventory: (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>),
  Report: (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18" /><path d="m19 9-5 5-4-4-3 3" /></svg>),
  Purchase: (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" /></svg>),
  Cloud: (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>),
  Migration: (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22.5V15" /><path d="m9 12 3-3 3 3" /><path d="M14.5 6.5a6.5 6.5 0 1 0-9 5.19" /></svg>),
};

const featuresData = [
  { icon: icons.Invoice, title: 'Effortless GST Compliance', description: 'Create GST-compliant invoices and automatically generate GSTR reports in seconds.' },
  { icon: icons.Inventory, title: 'Real-Time Inventory', description: 'Track stock, manage warehouses, and view complete item histories automatically.' },
  { icon: icons.Report, title: 'Powerful Financial Reports', description: 'Instantly generate P&L statements, Balance Sheets, and Cash Flow reports.' },
  { icon: icons.Purchase, title: 'Sales & Purchase Control', description: 'Manage customers, suppliers, quotes, and purchase orders from one place.' },
  { icon: icons.Cloud, title: 'Cloud Access & Multi-User', description: 'Access your data anywhere and collaborate securely with your team.' },
  { icon: icons.Migration, title: 'Easy Data Migration', description: 'Seamlessly import your existing data from Tally or Excel with our help.' },
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => (
  <div className="p-8 rounded-2xl bg-white border border-neutral-200 relative overflow-hidden group transition-all duration-300 hover:border-primary/50 hover:shadow-lg hover:shadow-neutral-200/80 animate-fade-in-up" style={{ animationDelay: `${delay}ms`}}>
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    <div className="text-primary mb-5">{icon}</div>
    <h3 className="text-xl font-bold text-neutral-900 mb-2">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </div>
);

const Features: React.FC<FeaturesProps> = ({ navigate }) => {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
            An <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">All-in-One</span> Accounting Suite
          </h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
            Poysa brings all your essential business finance tools under one roof, making management simpler and more efficient than ever.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 100}
            />
          ))}
        </div>
        <div className="text-center mt-16 animate-fade-in-up">
            <Button variant="outline" size="lg" onClick={() => navigate('features')}>
                View All Features
            </Button>
        </div>
      </div>
    </section>
  );
};

export default Features;