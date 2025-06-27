
import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Clock, Phone, CreditCard, Users } from 'lucide-react';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqCategories = [
    {
      title: 'General Information',
      icon: Users,
      questions: [
        {
          question: 'What are your visiting hours?',
          answer: 'General visiting hours are Monday-Friday 8AM-8PM, and weekends 9AM-5PM. ICU visiting hours are more restricted - please call (555) 123-4567 for specific times.'
        },
        {
          question: 'Where is the hospital located?',
          answer: 'MediCare Hospital is located at 123 Healthcare Avenue, Medical District, City 12345. We offer free patient parking in our main garage with valet service available.'
        },
        {
          question: 'How do I get medical records?',
          answer: 'You can request medical records through our Patient Portal, by visiting our Medical Records department on the first floor, or by calling (555) 123-RECORDS. Please bring valid ID.'
        }
      ]
    },
    {
      title: 'Appointments & Services',
      icon: Clock,
      questions: [
        {
          question: 'How do I schedule an appointment?',
          answer: 'You can schedule appointments online through our website, call (555) 123-BOOK, or visit our registration desk. We recommend booking 1-2 weeks in advance for routine appointments.'
        },
        {
          question: 'Do I need a referral to see a specialist?',
          answer: 'This depends on your insurance plan. Some plans require referrals from your primary care physician, while others allow direct specialist visits. Please check with your insurance provider.'
        },
        {
          question: 'What should I bring to my appointment?',
          answer: 'Please bring your insurance card, valid ID, list of current medications, and any relevant medical records. Arrive 15 minutes early for check-in.'
        }
      ]
    },
    {
      title: 'Insurance & Billing',
      icon: CreditCard,
      questions: [
        {
          question: 'What insurance plans do you accept?',
          answer: 'We accept most major insurance plans including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Medicare, and Medicaid. Please verify coverage before your visit.'
        },
        {
          question: 'What are your payment options?',
          answer: 'We accept cash, checks, credit cards, debit cards, and offer payment plans for larger bills. Financial assistance programs are available for qualifying patients.'
        },
        {
          question: 'How do I understand my bill?',
          answer: 'Our Patient Financial Services team can explain your bill in detail. Call (555) 123-BILL or visit our billing office on the first floor for assistance.'
        }
      ]
    },
    {
      title: 'Emergency Services',
      icon: Phone,
      questions: [
        {
          question: 'When should I go to the emergency room?',
          answer: 'Visit the ER for life-threatening conditions: chest pain, difficulty breathing, severe injuries, stroke symptoms, or severe allergic reactions. For non-urgent care, consider urgent care or your primary physician.'
        },
        {
          question: 'What is the wait time in the emergency room?',
          answer: 'Wait times vary based on severity of cases and current volume. Life-threatening conditions are seen immediately. Current wait times are available on our website and mobile app.'
        },
        {
          question: 'Do you accept walk-in emergency patients?',
          answer: 'Yes, our Emergency Department is open 24/7 and accepts all patients regardless of insurance status. We are equipped to handle all types of medical emergencies.'
        }
      ]
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Find answers to common questions about our services, appointments, and policies.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {filteredFAQs.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-50 px-6 py-4 border-b">
                  <div className="flex items-center">
                    <Icon className="w-6 h-6 text-blue-600 mr-3" />
                    <h2 className="text-xl font-semibold text-gray-900">{category.title}</h2>
                  </div>
                </div>

                <div className="divide-y divide-gray-200">
                  {category.questions.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 100 + faqIndex;
                    const isOpen = openItems.includes(itemIndex);
                    
                    return (
                      <div key={faqIndex}>
                        <button
                          onClick={() => toggleItem(itemIndex)}
                          className="w-full px-6 py-4 text-left hover:bg-gray-50 focus:outline-none focus:bg-gray-50 transition-colors"
                        >
                          <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-gray-900 pr-4">
                              {faq.question}
                            </h3>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {filteredFAQs.length === 0 && searchTerm && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No FAQs found matching your search.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="mt-4 text-blue-600 hover:text-blue-700"
            >
              Clear search
            </button>
          </div>
        )}

        {/* Contact Section */}
        <div className="mt-12 bg-blue-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-blue-100 mb-6">
            Our patient services team is here to help you with any additional questions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:555-123-4567"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (555) 123-4567
            </a>
            <a
              href="/contact"
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              Contact Us Online
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
