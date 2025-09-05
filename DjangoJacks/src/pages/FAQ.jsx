import React, { useState } from 'react';

// --- FAQ Data ---
// I've included all 10 questions to fully replicate the two-column layout.
const faqData = [
  {
    id: 1,
    question: 'How do I upgrade / downgrade my workspace plan?',
    answer: 'You can change the email address associated with your Airtable Account by going to airtable.com/account from a laptop or desktop.',
  },
  {
    id: 2,
    question: 'Can I add other information be added to an invoice?',
    answer: 'You can change the email address associated with your Airtable Account by going to airtable.com/account from a laptop or desktop.',
  },
  {
    id: 3,
    question: 'When should I use a new table vs. a view?',
    answer: 'You can change the email address associated with your Airtable Account by going to airtable.com/account from a laptop or desktop.',
  },
  {
    id: 4,
    question: 'How can I transfer data from one base to another?',
    answer: 'You can change the email address associated with your Airtable Account by going to airtable.com/account from a laptop or desktop.',
  },
  {
    id: 5,
    question: 'How do I change my account email address?',
    answer: 'You can change the email address associated with your Airtable Account by going to airtable.com/account from a laptop or desktop.',
  },
  {
    id: 6,
    question: 'How does billing work?',
    answer: 'We offer support over email, and the best way to contact us is through the in-app help menu.',
  },
  {
    id: 7,
    question: 'Can I share an individual app?',
    answer: 'We offer support over email, and the best way to contact us is through the in-app help menu.',
  },
  {
    id: 8,
    question: 'Can I export a list of all collaborators?',
    answer: 'We offer support over email, and the best way to contact us is through the in-app help menu.',
  },
  {
    id: 9,
    question: 'Can invoices be sent to other collaborators?',
    answer: 'We offer support over email, and the best way to contact us is through the in-app help menu.',
  },
  {
    id: 10,
    question: 'How do I contact support?',
    answer: 'We offer support over email, and the best way to contact us is through the in-app help menu.',
  },
];


// --- SVG Icons ---
const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
    <line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500">
    <line x1="5" y1="12" x2="19" y2="12"></line>
  </svg>
);

const ChevronDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ml-1 text-gray-700">
        <path d="m6 9 6 6 6-6" />
    </svg>
);

// --- Reusable Accordion Item Component ---
const FaqItem = ({ faq, isOpen, onClick }) => {
  return (
    <div className="bg-gray-50 border border-gray-200/80 rounded-lg">
      <button
        className="w-full flex justify-between items-center text-left py-4 px-5 focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-base font-medium text-gray-800">{faq.question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        <p className="px-5 pb-4 text-gray-600">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};

// --- Main App Component ---
export default function FaqPage()
 {
  const [openFaqId, setOpenFaqId] = useState(5); // Default open item

  const handleToggle = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };
  
  const midIndex = 5;
  const firstColumn = faqData.slice(0, midIndex);
  const secondColumn = faqData.slice(midIndex);

  return (
    <div className="bg-white min-h-screen font-sans">
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
            <div className="h-16 flex justify-between items-center">
              {/* Logo Placeholder */}
              <div className="flex items-center space-x-2">
                <img src="https://placehold.co/120x40/0A58D1/FFFFFF?text=Airtable&font=inter" alt="Airtable Logo" />
              </div>
              {/* Navigation */}
              <nav className="hidden md:flex items-center space-x-7">
                <a href="#" className="text-gray-800 hover:text-blue-600 flex items-center text-base"><span>Account</span> <ChevronDownIcon/></a>
                <a href="#" className="text-gray-800 hover:text-blue-600 flex items-center text-base"><span>Product</span> <ChevronDownIcon/></a>
                <a href="#" className="text-gray-800 hover:text-blue-600 flex items-center text-base"><span>Enterprise</span> <ChevronDownIcon/></a>
                <a href="#" className="text-gray-800 hover:text-blue-600 flex items-center text-base"><span>Contact</span> <ChevronDownIcon/></a>
              </nav>
               <button className="md:hidden p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>
               </button>
            </div>
        </div>
      </header>
      
      <main className="max-w-7xl mx-auto px-6 py-16 sm:py-20">
        <h1 className="text-4xl sm:text-5xl font-semibold text-gray-900 mb-10">
          Frequently asked questions
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-12 lg:gap-x-20 gap-y-2">
            <div className="space-y-2">
                 {firstColumn.map((faq) => (
                    <FaqItem
                        key={faq.id}
                        faq={faq}
                        isOpen={openFaqId === faq.id}
                        onClick={() => handleToggle(faq.id)}
                    />
                ))}
            </div>
            <div className="space-y-2">
                {secondColumn.map((faq) => (
                    <FaqItem
                        key={faq.id}
                        faq={faq}
                        isOpen={openFaqId === faq.id}
                        onClick={() => handleToggle(faq.id)}
                    />
                ))}
            </div>
        </div>
      </main>
    </div>
  );
}


