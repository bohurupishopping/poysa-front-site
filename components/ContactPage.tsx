import React from 'react';
import Button from './ui/Button';
import FinalCTA from './FinalCTA';

const ContactPage: React.FC = () => {
    // Contact Info items
    const contactInfo = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
            title: 'Email Us',
            content: 'support@poysa.com',
            link: 'mailto:support@poysa.com'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
            title: 'Call Us',
            content: '+91 80 1234 5678',
            link: 'tel:+918012345678'
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
            title: 'Find Us',
            content: 'Bangalore, India',
            link: '#'
        }
    ];

    return (
        <>
            <section className="relative pt-40 pb-24 text-center bg-white overflow-hidden">
                <div className="absolute inset-0 bg-grid-neutral-200/[0.4] [mask-image:linear-gradient(to_bottom,white_5%,transparent_80%)]"></div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto">
                        <div className="animate-fade-in-up">
                            <span className="text-primary font-bold uppercase tracking-wider">Contact Us</span>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 leading-tight mt-2">
                                We're Here to Help
                            </h1>
                            <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto">
                                Have a question, a suggestion, or need support? Reach out to us, and we'll get back to you as soon as possible.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-neutral-50">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24">
                        {contactInfo.map((item, index) => (
                            <a href={item.link} key={index} className="block p-8 bg-white rounded-2xl border border-neutral-200 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-neutral-300/50 hover:border-primary/50 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                                <div className="inline-block bg-primary/10 text-primary p-4 rounded-full mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
                                <p className="mt-2 text-primary hover:underline">{item.content}</p>
                            </a>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl border border-neutral-200 shadow-xl shadow-neutral-200/60 animate-fade-in-up" style={{animationDelay: `300ms`}}>
                        <h2 className="text-3xl font-bold text-neutral-900 text-center">Send us a Message</h2>
                        <form className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-700">Full Name</label>
                                <input type="text" name="name" id="name" required className="mt-1 block w-full px-4 py-3 rounded-lg border-neutral-300 focus:ring-primary focus:border-primary transition duration-150 ease-in-out" placeholder="John Doe" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-700">Email Address</label>
                                <input type="email" name="email" id="email" required className="mt-1 block w-full px-4 py-3 rounded-lg border-neutral-300 focus:ring-primary focus:border-primary transition duration-150 ease-in-out" placeholder="you@example.com" />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-neutral-700">Subject</label>
                                <input type="text" name="subject" id="subject" required className="mt-1 block w-full px-4 py-3 rounded-lg border-neutral-300 focus:ring-primary focus:border-primary transition duration-150 ease-in-out" placeholder="How can we help?" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-700">Message</label>
                                <textarea id="message" name="message" rows={4} required className="mt-1 block w-full px-4 py-3 rounded-lg border-neutral-300 focus:ring-primary focus:border-primary transition duration-150 ease-in-out" placeholder="Your message..."></textarea>
                            </div>
                            <div className="text-center">
                                <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">Send Message</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            <FinalCTA />
        </>
    );
};

export default ContactPage;
