import React from 'react';
import Button from './ui/Button';

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary mr-3 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  popular: boolean;
  originalPrice?: string;
};

const pricingPlans: Plan[] = [
  {
    name: 'Standard Plan',
    price: '₹529',
    period: '/month',
    originalPrice: '₹599',
    description: 'Discounted for 6 months! Full access to advanced accounting & GST.',
    features: ['Advanced Accounting & GST', 'Up to 2 Users', 'Email & Phone Support', '7-Day Free Trial'],
    cta: 'Start 7-Day Trial',
    variant: 'outline',
    popular: false
  },
  {
    name: 'Premium Plan',
    price: '₹5999',
    period: '/year',
    description: 'Best value! Includes migration help and more users.',
    features: ['All Standard Plan Features', 'Up to 5 Users', 'Migration & Setup Assistance', 'Priority Support'],
    cta: 'Choose Premium',
    variant: 'primary',
    popular: true
  },
  {
    name: 'Enterprise Plan',
    price: 'Custom',
    period: '',
    description: 'Dedicated solutions with private servers and custom features.',
    features: ['All Premium Plan Features', 'Unlimited Users', 'Dedicated Server & Private Data', 'API Access & Integrations'],
    cta: 'Contact Sales',
    variant: 'secondary',
    popular: false
  }
];

const PricingCard: React.FC<Plan> = ({ name, price, period, originalPrice, description, features, cta, variant, popular }) => (
    <div className={`rounded-2xl p-8 flex flex-col h-full relative overflow-hidden ${popular ? 'bg-white border-2 border-primary shadow-2xl shadow-primary/20' : 'bg-neutral-50 border border-neutral-200'}`}>
        {popular && (
            <div className="absolute top-0 right-0 text-xs font-bold uppercase tracking-wider px-4 py-1.5 bg-primary text-white rounded-bl-lg rounded-tr-xl">Most Popular</div>
        )}
        <h3 className="text-2xl font-bold text-neutral-900">{name}</h3>
        <div className="mt-4 flex items-baseline">
            {originalPrice && (
                <span className="text-2xl font-medium text-neutral-400 line-through mr-2">
                    {originalPrice}
                </span>
            )}
            <span className="text-5xl font-extrabold text-neutral-900">{price}</span>
            <span className="text-lg text-neutral-500 ml-1">{period}</span>
        </div>
        <p className="mt-2 text-neutral-600 min-h-[3rem]">{description}</p>
        <div className="w-full h-px bg-neutral-200 my-8"></div>
        <ul className="space-y-4 flex-grow text-neutral-700">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                    <CheckCircleIcon />
                    <span>{feature}</span>
                </li>
            ))}
        </ul>
        <div className="mt-10">
            <Button variant={variant} size="lg" className="w-full">{cta}</Button>
        </div>
    </div>
);


const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-neutral-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Transparent Pricing for Every Business</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Simple, transparent pricing with no hidden fees. Start your 7-day free trial today.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {pricingPlans.map((plan, index) => (
                <div className="animate-fade-in-up" key={index} style={{ animationDelay: `${index * 100}ms`}}>
                    <PricingCard {...plan} />
                </div>
            ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden max-w-6xl mx-auto">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mb-8 gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {pricingPlans.map((plan, index) => (
                     <div key={index} className="snap-center flex-shrink-0 w-[90%] sm:w-3/4 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <PricingCard {...plan} />
                    </div>
                ))}
            </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;