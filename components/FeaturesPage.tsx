import React from 'react';
import FinalCTA from './FinalCTA';

type Feature = {
  icon: JSX.Element;
  title: string;
  description: string;
};

type FeatureSectionProps = {
  category: string;
  title: string;
  description: string;
  features: Feature[];
  layout?: 'left' | 'right';
  bgColor?: string;
};

const icons: { [key: string]: JSX.Element } = {
  // Core Accounting
  ChartOfAccounts: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>,
  DoubleEntry: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 3h5v5"></path><path d="M8 3H3v5"></path><path d="M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3"></path><path d="m3 16 7-7 1.172 1.172a4 4 0 0 0 5.656 0L21 3"></path></svg>,
  JournalVouchers: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><rect width="16" height="20" x="4" y="2" rx="2"></rect><path d="M15 2v20"></path></svg>,
  // Sales
  CustomerManagement: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  Estimates: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.5A4.5 4.5 0 0 0 17.5 5c-1.5 0-2.75 1.06-4 1.06-3 0-6-8-6-12.5A4.5 4.5 0 0 0 3.5 5c-1.5 0-2.75 1.06-4 1.06-3 0-6-8-6-12.5A4.5 4.5 0 0 0 1.5 5"></path><path d="M12 3v1"></path></svg>,
  PaymentTracking: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m14.31 8 5.74 9.94"></path><path d="M9.69 8h11.48"></path><path d="m7.38 12 5.74-9.94"></path><path d="M9.69 16 3.95 6.06"></path><path d="M14.31 16H2.83"></path><path d="m21.62 12-5.74 9.94"></path></svg>,
  // Inventory
  StockTracking: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>,
  Warehouses: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>,
  StockLedger: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>,
  // Reports
  ProfitLoss: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18.7 8a6 6 0 0 0-9.3 0l-4.4 4.4"></path><path d="M14 17h5v-5"></path></svg>,
  BalanceSheet: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18"></path><path d="M3 7h18"></path><path d="M3 17h18"></path></svg>,
  CashFlow: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16"></path><path d="M4 12h16"></path><path d="M4 18h16"></path></svg>,
  // GST
  GSTReady: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>,
  HSNCode: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path></svg>,
  GSTRReports: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.2 15c.7-1.2 1-2.5.7-3.9-.6-2.4-3.4-4.3-6.4-3.9-2 .2-3.6 1.1-4.9 2.3-2.2 2.2-2.8 5.7-1.5 8.7 1.3 3.1 4.8 5.1 8.3 4.7 2.3-.3 4.3-1.7 5.7-3.5a.7.7 0 0 0-.2-1l-2.7-1.2c-.3-.1-.7 0-.9.3l-.2.3c-.2.4-.4.8-.7 1.1-.8 1.1-2.2 1.8-3.6 1.6-1.4-.2-2.5-1-3.2-2.2s-.8-2.7-.3-4.1c.5-1.4 1.7-2.4 3.1-2.7 1.4-.3 2.8.2 3.8 1.1.8.8 1.1 1.9 1 3.1-.1.9-.4 1.8-.8 2.5l-1.3 1.5c-.3.3-.3.7 0 1l2.7 1.2c.3.1.7 0 .9-.3z"></path></svg>,
  // User Management
  MultiUser: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
  MultiCompany: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="3" y="3" rx="2"></rect><path d="M17 17h4v-4"></path><path d="M17 3h4v4"></path></svg>,
  Subscription: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V8H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v4"></path><path d="M4 6v12h12"></path><path d="M18 22v-6"></path><path d="M21 19l-3-3-3 3"></path></svg>,
};


const FeatureCard: React.FC<Feature> = ({ icon, title, description }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0 bg-primary/10 text-primary p-3 rounded-full">
      {icon}
    </div>
    <div>
      <h4 className="text-lg font-bold text-neutral-900">{title}</h4>
      <p className="mt-1 text-neutral-600">{description}</p>
    </div>
  </div>
);

const FeatureSection: React.FC<FeatureSectionProps> = ({ category, title, description, features, layout = 'left', bgColor = 'bg-white' }) => {
  const isLeftLayout = layout === 'left';
  return (
    <section className={`py-24 ${bgColor}`}>
      <div className="container mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-12 lg:gap-24 items-center`}>
          <div className={`animate-fade-in-up ${isLeftLayout ? 'md:order-1' : 'md:order-2'}`}>
            <span className="text-primary font-bold uppercase tracking-wider">{category}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-2">{title}</h2>
            <p className="mt-4 text-lg text-neutral-600">{description}</p>
          </div>
          <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-0 animate-fade-in-up ${isLeftLayout ? 'md:order-2' : 'md:order-1'}`} style={{ animationDelay: '200ms' }}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const allFeatures: Omit<FeatureSectionProps, 'layout'>[] = [
  {
    category: 'Core Accounting',
    title: 'The Rock-Solid Foundation Your Business Needs',
    description: 'Every financial transaction is accurately and automatically recorded using a professional-grade, double-entry system.',
    features: [
      { icon: icons.ChartOfAccounts, title: 'Chart of Accounts', description: 'A full, customizable list of all financial accounts (Assets, Liabilities, etc.).' },
      { icon: icons.DoubleEntry, title: 'Double-Entry System', description: 'Correctly record debits and credits for every transaction in a journal.' },
      { icon: icons.JournalVouchers, title: 'Manual Journal Vouchers', description: 'Empower accountants to make manual adjustments and corrections as needed.' }
    ],
    bgColor: 'bg-neutral-50'
  },
  {
    category: 'Sales & Receivables',
    title: 'Get Paid Faster and Manage Customers with Ease',
    description: 'From the first quote to the final payment, streamline your entire sales cycle and maintain healthy cash flow.',
    features: [
      { icon: icons.CustomerManagement, title: 'Customer Management', description: 'Create and maintain a complete directory of all your customers.' },
      { icon: icons.Estimates, title: 'Estimates & Invoicing', description: 'Send professional quotes and convert them to GST-ready invoices in one click.' },
      { icon: icons.PaymentTracking, title: 'Payment Tracking', description: 'Record full or partial payments against invoices and track outstanding balances.' },
      { icon: icons.SalesReturns, title: 'Sales Returns', description: 'Easily issue credit notes to handle customer returns and refunds accurately.' }
    ]
  },
    {
    category: 'Purchases & Payables',
    title: 'Master Your Expenses and Supplier Relations',
    description: 'Keep track of every purchase, manage bills efficiently, and ensure you pay your suppliers on time, every time.',
    features: [
      { icon: icons.CustomerManagement, title: 'Supplier Management', description: 'Keep a centralized list of all your suppliers and their details.' },
      { icon: icons.Estimates, title: 'Purchase Orders (POs)', description: 'Create and send professional purchase orders to your suppliers.' },
      { icon: icons.StockLedger, title: 'Bill Entry & Payments', description: 'Convert POs into bills, record expenses, and track payments made to suppliers.' },
      { icon: icons.SalesReturns, title: 'Purchase Returns', description: 'Generate debit notes when you return goods to a supplier for accurate records.' }
    ],
    bgColor: 'bg-neutral-50'
  },
  {
    category: 'Inventory Management',
    title: 'Total Control Over Your Stock',
    description: 'Never lose track of your products. Our inventory system provides real-time updates and historical data for complete oversight.',
    features: [
      { icon: icons.StockTracking, title: 'Automated Stock Tracking', description: 'Inventory levels automatically update when you buy or sell goods.' },
      { icon: icons.StockLedger, title: 'Product & Service Listing', description: 'Manage a catalog of items, distinguishing between physical goods and services.' },
      { icon: icons.Warehouses, title: 'Multiple Warehouses', description: 'Manage and track your stock across different business locations seamlessly.' },
      { icon: icons.JournalVouchers, title: 'Stock Ledger', description: 'View the complete transaction history and adjustments for any inventory item.' }
    ]
  },
  {
    category: 'Financial Reporting',
    title: 'Insights That Drive Growth',
    description: 'Generate powerful, easy-to-understand financial reports in seconds to make smarter business decisions.',
    features: [
      { icon: icons.ProfitLoss, title: 'Profit & Loss Statement', description: 'See your company\'s revenue, expenses, and profit for any period.' },
      { icon: icons.BalanceSheet, title: 'Balance Sheet', description: 'Get a snapshot of your company\'s financial health (Assets vs. Liabilities).' },
      { icon: icons.CashFlow, title: 'Cash Flow Statement', description: 'Track how cash moves in and out of your business to manage liquidity.' },
      { icon: icons.StockLedger, title: 'Account Ledger', description: 'View a detailed statement for any single account (e.g., a specific bank account).' }
    ],
    bgColor: 'bg-neutral-50'
  },
  {
    category: 'Tax & Compliance (India GST)',
    title: 'Effortless GST Compliance',
    description: 'Stay 100% compliant with Indian tax regulations. Poysa simplifies GST calculations and report generation.',
    features: [
      { icon: icons.GSTReady, title: 'GST Ready', description: 'Automatically handles IGST, CGST, and SGST on both sales and purchases.' },
      { icon: icons.HSNCode, title: 'HSN/SAC Codes', description: 'Store and manage tax codes for all your products and services.' },
      { icon: icons.GSTRReports, title: 'GSTR-1 & GSTR-3B Reports', description: 'Instantly generate the data needed for your monthly GST filings.' }
    ]
  },
    {
    category: 'Platform & User Management',
    title: 'Secure, Collaborative, and Scalable',
    description: 'Our platform is built to grow with your business, offering robust tools for team collaboration and company management.',
    features: [
      { icon: icons.MultiUser, title: 'Multi-User Support', description: 'Assign different roles and permissions to your team members (admin, manager, etc.).' },
      { icon: icons.MultiCompany, title: 'Multi-Company System', description: 'Securely manage the books for multiple different companies from one account.' },
      { icon: icons.Subscription, title: 'Subscription Plans', description: 'Built-in support for different subscription levels and automated role promotions.' }
    ],
    bgColor: 'bg-neutral-50'
  }
];

const FeaturesPage: React.FC = () => {
  return (
    <>
      <section className="relative pt-40 pb-24 text-center bg-neutral-50 overflow-hidden">
         <div className="absolute inset-0 bg-grid-neutral-200/[0.4] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
             <div className="animate-fade-in-up">
                <span className="text-primary font-bold uppercase tracking-wider">Poysa Features</span>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 leading-tight mt-2">
                The Power Behind Your Business
                </h1>
                <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                    Explore the comprehensive suite of tools designed to simplify your accounting, streamline operations, and drive growth.
                </p>
             </div>
          </div>
        </div>
      </section>

      {allFeatures.map((section, index) => (
        <FeatureSection
          key={index}
          {...section}
          layout={index % 2 === 0 ? 'right' : 'left'}
        />
      ))}
      
      <FinalCTA />
    </>
  );
};

export default FeaturesPage;