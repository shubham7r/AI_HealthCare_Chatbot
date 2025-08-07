import React, { useState } from "react";

const TableOfContents = () => {
  const sections = [
    {
      title: "How Does WhatsApp Chatbot Improve Customer Support?",
      content: `WhatsApp bots can engage with customers in personalized conversations. They enhance long-term retention by offering product updates, recommendations, and timely communication.`,
    },
    {
      title: "What are the Use Cases of WhatsApp Chatbot?",
      content: `WhatsApp chatbots are used in customer service, order tracking, appointment booking, and lead generation. Businesses can automate FAQs and provide 24/7 support.`,
    },
    {
      title: "What are the Challenges, and How Can They be Mitigated?",
      content: `Some challenges include integration complexity, maintaining human-like conversations, and data privacy. These can be mitigated through AI enhancements and compliance frameworks.`,
    },
    {
      title: "How to Get Started with WhatsApp Chatbot?",
      content: `Start by identifying your business goal, choose a platform like Twilio or Exotel, build conversational flows, and test thoroughly before going live.`,
    },
    {
      title: "How Can Exotel Transform Your Business?",
      content: `Exotel provides scalable, reliable WhatsApp API integration with advanced analytics, voice call support, and CRM integrations to streamline customer communication.`,
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0); // Default to first item

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-center">
        Purpose in Healthcare
      </h2> 
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left: Table of Contents */}
        <div className="md:col-span-1">
          <div className="bg-gray-500 p-4 rounded-xl shadow-md sticky top-20">
            <h2 className="font-semibold text-lg mb-4">Table of Contents</h2>
            <ul className="space-y-2 text-sm">
              {sections.map((section, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`cursor-pointer px-3 py-2 rounded-lg transition-all duration-200 ${
                    index === selectedIndex
                      ? "bg-purple-200 text-purple-900 font-medium"
                      : "hover:text-purple-700"
                  }`}
                >
                  {section.title}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Content Area */}
        <div className="md:col-span-3">
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">
              {sections[selectedIndex].title}
            </h2>
            <p className="text-gray-700">{sections[selectedIndex].content}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TableOfContents;
