import React, { useState } from 'react';

const CheckIcon = () => (
  <svg className="h-6 w-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg className="h-6 w-6 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const LimitedIcon = () => (
    <span className="text-yellow-500 font-semibold text-sm">Limited</span>
);

const comparisonData = [
  { feature: 'GST-Ready for India', tally: <CheckIcon />, zoho: <CheckIcon />, poysa: <CheckIcon /> },
  { feature: 'Cloud-Based Access', tally: <CrossIcon />, zoho: <CheckIcon />, poysa: <CheckIcon /> },
  { feature: 'Easy Migration', tally: <CrossIcon />, zoho: <CrossIcon />, poysa: <CheckIcon /> },
  { feature: 'Affordable Pricing', tally: <CrossIcon />, zoho: <CrossIcon />, poysa: <CheckIcon /> },
  { feature: '24/7 Support', tally: <LimitedIcon />, zoho: <LimitedIcon />, poysa: <CheckIcon /> },
];

type Product = 'poysa' | 'tally' | 'zoho';

const Comparison: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>('poysa');

  const productNames: {key: Product, name: string}[] = [
      { key: 'tally', name: 'Tally Prime' },
      { key: 'zoho', name: 'Zoho Books' },
      { key: 'poysa', name: 'Poysa' },
  ];

  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">How Poysa Compares</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">See how Poysa stacks up against the competition and why it's the smarter choice for your business.</p>
        </div>
        
        {/* Desktop Table */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl shadow-neutral-200/80 overflow-hidden border border-neutral-200 animate-fade-in-up hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="p-6 text-lg font-semibold text-neutral-900">Feature</th>
                  <th className="p-6 text-center text-lg font-semibold text-neutral-600">Tally Prime</th>
                  <th className="p-6 text-center text-lg font-semibold text-neutral-600">Zoho Books</th>
                  <th className="p-6 text-center text-lg font-bold text-primary bg-primary/5">Poysa</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className="border-b border-neutral-200 last:border-b-0">
                    <td className="p-6 font-medium text-neutral-700">{row.feature}</td>
                    <td className="p-6 text-center">{row.tally}</td>
                    <td className="p-6 text-center">{row.zoho}</td>
                    <td className="p-6 text-center bg-primary/5">{row.poysa}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden max-w-md mx-auto animate-fade-in-up">
          <div className="flex justify-center p-1 bg-neutral-200 rounded-full mb-8">
              {productNames.map(product => (
                  <button 
                      key={product.key}
                      onClick={() => setSelectedProduct(product.key)}
                      className={`w-1/3 py-2.5 text-sm font-bold rounded-full transition-colors duration-300 focus:outline-none ${selectedProduct === product.key ? 'bg-primary text-white shadow' : 'text-neutral-600'}`}>
                      {product.name}
                  </button>
              ))}
          </div>
          <div className="space-y-3">
              {comparisonData.map((row, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-neutral-200 flex justify-between items-center text-left">
                      <span className="font-medium text-neutral-700">{row.feature}</span>
                      <div className="w-16 flex justify-center">
                        {row[selectedProduct]}
                      </div>
                  </div>
              ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;
