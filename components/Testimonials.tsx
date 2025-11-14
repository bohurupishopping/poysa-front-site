import React from 'react';

const testimonials = [
  {
    quote: "We switched from Tally to Poysa and saved hours every week. GST filing is now effortless.",
    name: "Rajesh Kumar",
    title: "Trader, Mumbai",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Poysa is simple and affordable. Works perfectly for our retail store. No training needed.",
    name: "Anjali Sharma",
    title: "Retailer, Delhi",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "No training needed. My staff started using it from day one. The support is fantastic!",
    name: "Amit Patel",
    title: "Entrepreneur, Bangalore",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg"
  },
  {
    quote: "The cloud features are a game-changer for my multi-location business. Highly recommend Poysa.",
    name: "Priya Singh",
    title: "Business Owner, Chennai",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];

const TestimonialCard: React.FC<{ quote: string; name: string; title: string; avatar: string }> = ({ quote, name, title, avatar }) => (
    <div className="bg-white p-8 rounded-2xl border border-neutral-200 h-full flex flex-col relative overflow-hidden shadow-lg shadow-neutral-200/40">
        <svg className="absolute top-6 left-6 w-16 h-16 text-neutral-100" fill="currentColor" viewBox="0 0 32 32"><path d="M9.333 22.667h4L16 16V9.333H9.333v13.334zM22.667 22.667h4L29.333 16V9.333h-6.666v13.334z"></path></svg>
        <div className="relative z-10">
            <p className="text-lg text-neutral-700 flex-grow mb-6">“{quote}”</p>
            <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4 border-2 border-primary/50" src={avatar} alt={name} />
                <div>
                    <p className="font-bold text-neutral-900">{name}</p>
                    <p className="text-neutral-600">{title}</p>
                </div>
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">Loved by Businesses Across India</h2>
          <p className="mt-4 text-lg text-neutral-600 max-w-2xl mx-auto">
            Trusted by traders, retailers, and entrepreneurs for its simplicity and power.
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
                <div className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}} key={index}>
                    <TestimonialCard {...testimonial} />
                </div>
            ))}
        </div>

        {/* Mobile/Tablet Slider */}
        <div className="lg:hidden">
            <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth pb-8 -mb-8 gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="snap-center flex-shrink-0 w-[90%] sm:w-3/4 md:w-2/3 animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                        <TestimonialCard {...testimonial} />
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
