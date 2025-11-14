import React, { useState } from 'react';

type FaqItemData = {
  question: string;
  answer: string;
};

type FaqCategory = {
  category: string;
  items: FaqItemData[];
};

const faqData: FaqCategory[] = [
  {
    category: 'Getting Started & General Questions',
    items: [
      {
        question: 'How do I get started?',
        answer: "It's easy! Just sign up for an account, create your company profile, and you'll be guided through the setup. You can start a free trial instantly to explore all our features."
      },
      {
        question: 'Do you have a free trial?',
        answer: 'Yes! All new companies get a 7-day free trial with full access to all features, no credit card required. This lets you see if Poysa is the right fit for your business.'
      },
      {
        question: 'Can I add my team members?',
        answer: "Absolutely. You can invite other users to your company. Our system supports different roles like 'Manager' for full access and 'User' for more limited permissions, so you can control who sees what."
      },
      {
        question: 'Can I import my existing data?',
        answer: 'Yes, you can perform an initial import of your customer and supplier lists, your chart of accounts, and opening balances for your accounts and inventory to get started quickly.'
      }
    ]
  },
  {
    category: 'Sales & Invoicing',
    items: [
      {
        question: 'How do I create and send an invoice?',
        answer: 'You can create professional, GST-compliant invoices in just a few clicks. Add your customer, select your products or services, and the system calculates all the totals and taxes. You can then download it as a PDF to send to your client.'
      },
      {
        question: 'Can I record partial payments for an invoice?',
        answer: 'Yes. You can record as many partial payments as you need against a single invoice. The system will automatically track the "Amount Due" for you.'
      },
      {
        question: 'How do I handle a sales return or issue a refund?',
        answer: "You can easily create a Sales Credit Note for any returns. This automatically adjusts your revenue and tax liabilities correctly and can be used to track refunds or apply a credit to the customer's account."
      },
      {
        question: 'Can I send quotes or estimates before invoicing?',
        answer: 'Yes. Our "Estimates" feature lets you create and send quotes to your clients. Once they approve, you can convert an estimate into a sales invoice with a single click.'
      }
    ]
  },
  {
    category: 'Purchases & Expenses',
    items: [
      {
        question: 'How do I record a bill from a supplier?',
        answer: 'You can enter bills you receive from your suppliers into the "Purchase Bills" section. This helps you keep track of what you owe and when your payments are due.'
      },
      {
        question: 'Does the app support Purchase Orders (POs)?',
        answer: 'Yes. You can create and manage Purchase Orders to send to your suppliers. When you receive the goods, you can easily convert the PO into a bill, saving you time on data entry.'
      }
    ]
  },
  {
    category: 'Inventory Management',
    items: [
      {
        question: 'Does the software track my inventory levels?',
        answer: 'Yes. For any item you mark as a "Good," the system provides full stock tracking. You can see your quantity on hand at any time.'
      },
      {
        question: 'Will my stock automatically decrease when I create an invoice?',
        answer: 'Yes. When you create an invoice for a physical product, the system automatically reduces your stock levels and calculates the Cost of Goods Sold (COGS) for you, keeping your accounting and inventory perfectly in sync.'
      },
      {
        question: 'Can I manage stock in multiple locations or warehouses?',
        answer: 'Yes, our system supports multiple warehouses. You can manage and track your inventory levels across all your different locations.'
      },
      {
        question: 'I sell services, not physical products. Can I still use the app?',
        answer: 'Of course! When you create an item, you can specify whether it\'s a "Good" (for inventory) or a "Service." Services can be added to invoices just like products, but they don\'t affect your inventory levels.'
      }
    ]
  },
  {
    category: 'Banking & Accounting',
    items: [
      {
        question: 'Can I manage multiple bank and cash accounts?',
        answer: "Yes. You can set up all of your company's bank accounts and petty cash accounts in the system. All payments and receipts can be tagged to the correct account for easy tracking."
      },
      {
        question: 'What financial reports can I generate?',
        answer: "You can generate all the essential financial reports you need, including a Profit & Loss Statement, Balance Sheet, Cash Flow Statement, and a Trial Balance to see your company's performance and financial health."
      },
      {
        question: 'Is this based on a proper double-entry accounting system?',
        answer: 'Yes. Poysa is built on a powerful and accurate double-entry accounting engine. Every transaction is recorded in a journal, ensuring your financial records are always balanced and compliant.'
      }
    ]
  },
  {
    category: 'Taxes (GST)',
    items: [
      {
        question: 'Is the software compliant with Indian GST?',
        answer: 'Yes, completely. Our system is designed for Indian businesses. It handles IGST, CGST, and SGST calculations, HSN/SAC codes, and generates the data you need for your tax filings.'
      },
      {
        question: 'Can you help me file my GSTR-1 and GSTR-3B?',
        answer: "Our app automatically compiles all the data from your sales and purchases and presents it in a report format that matches the government's requirements. This makes it incredibly easy for you or your accountant to file your GSTR-1 and GSTR-3B returns on the official GST portal."
      }
    ]
  }
];

const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 text-primary transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
);


const FaqItem: React.FC<FaqItemData> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-neutral-200 rounded-xl overflow-hidden bg-white">
            <button
                className="w-full flex justify-between items-center text-left p-6"
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
            >
                <h3 className="text-lg font-semibold text-neutral-900">{question}</h3>
                <ChevronIcon isOpen={isOpen} />
            </button>
            <div
                className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-neutral-600">
                    {answer}
                </p>
              </div>
            </div>
        </div>
    );
}

const FAQ: React.FC = () => {
    return (
        <section className="py-24 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="max-w-3xl mx-auto space-y-12 animate-fade-in-up">
                    {faqData.map((category, catIndex) => (
                        <div key={catIndex}>
                            <h3 className="text-2xl font-bold text-neutral-800 mb-6 border-b border-neutral-200 pb-4">{category.category}</h3>
                            <div className="space-y-4">
                                {category.items.map((item, itemIndex) => (
                                    <FaqItem key={itemIndex} question={item.question} answer={item.answer} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-20 animate-fade-in-up">
                    <h3 className="text-2xl font-bold text-neutral-900">Have another question?</h3>
                    <p className="mt-3 text-lg text-neutral-600 max-w-2xl mx-auto">
                       If you can't find the answer you're looking for, please don't hesitate to contact our support team.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FAQ;