import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

// FAQ Component
const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Do I need to be physically fit to join an ecotrip tour?",
      answer: "Our tours are designed for various fitness levels. We offer different difficulty levels from easy nature walks to more challenging treks. Please check the specific requirements for each tour or contact us for personalized recommendations."
    },
    {
      question: "What kind of accommodations do you offer?",
      answer: "We offer a range of accommodations from comfortable eco-lodges to luxury safari camps, all carefully selected for their commitment to sustainability and guest comfort."
    },
    {
      question: "Are your tours family-friendly?",
      answer: "Yes! We have many family-friendly tours designed for all ages. Our guides are experienced in working with children and ensuring everyone has a safe and enjoyable experience."
    },
    {
      question: "What's your cancellation policy?",
      answer: "Our cancellation policy varies by tour and booking date. Generally, we offer full refunds for cancellations made 30+ days in advance. Please refer to your booking terms or contact us for specific details."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 w-full">
      <div className="w-full p-6 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-12">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Frequently Asked<br />
              Question
            </h2>
            <p className="text-gray-600 mb-4">
              or drop email at
            </p>
            <a href="mailto:contact@ecotrip.com" className="text-blue-600 hover:underline">
              contact@ecotrip.com
            </a>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 flex justify-between items-center text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  {openFAQ === index ? (
                    <ChevronUp size={20} className="text-gray-600 flex-shrink-0 ml-4" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-600 flex-shrink-0 ml-4" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="pb-4 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQSection;