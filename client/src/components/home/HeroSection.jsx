// src/components/HeroSection.jsx
import React, { useRef, useEffect, useState } from "react";

import VanillaTilt from "vanilla-tilt";
import { ShieldCheck, CalendarDays, Clock3 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import LoginModal from "../LoginModal"; 

const HeroSection = () => {
  const navigate = useNavigate();
  const tiltRef = useRef(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false); 

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.3,
      });
    }
  }, []);

  return (
    <div>
      <div className="w-full bg-gradient-to-r from-purple-100 via-purple-200 to-purple-300 pt-15 px-6 md:px-16 shadow-none">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 py-10">
          {/* Left: Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900">
              AI Healthcare Chatbots{" "}
              <span className="text-purple-600">
                Instant Medical Help, Anytime, Anywhere.
              </span>
            </h1>

            <div className="text-gray-800 space-y-2">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-purple-600 w-5 h-5" />
                <span>AI & Solutions</span>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays className="text-purple-600 w-5 h-5" />
                <span>Aug 26, 2025</span>
              </div>

              <div className="flex items-center gap-3">
                <Clock3 className="text-purple-600 w-5 h-5" />
                <span>6 mins read</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
              <button
                onClick={() => setIsLoginOpen(true)}
                className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md transition text-white"
              >
                Get Started
              </button>

              {/* Conditionally render modal */}
              {isLoginOpen && (
                <LoginModal onClose={() => setIsLoginOpen(false)} />
              )}
            </div>
          </div>

          {/* Right: Banner Image */}
          <div className="md:w-1/2 flex items-end">
            <div ref={tiltRef}>
              <img
                src="https://static.vecteezy.com/system/resources/previews/054/587/264/non_2x/isolated-ai-chatbot-interaction-a-design-innovation-free-png.png"
                alt="Healthcare Chatbot"
                className="rounded-2xl w-[300px]  h-auto object-cover 
                 shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] 
                 transition-all duration-300 hover:scale-105 hover:shadow-[0_30px_60px_rgba(8,_112,_184,_0.8)] 
                 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Info Paragraph */}
      <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 text-center">
        Why Healthcare Chatbots Are Transforming Patient Care in 2025
      </h2>
      <div className="mt-4 text-gray-700 text-base leading-relaxed px-6 md:px-5 max-w-7xl mx-auto">
        Our AI-powered healthcare chatbot comparison highlights the most
        efficient, secure, and user-friendly conversational agents in 2025.
        These tools revolutionize patient engagement, simplify scheduling, and
        provide 24/7 support while ensuring HIPAA compliance and data privacy.
        Whether you’re a developer, healthcare provider, or just curious, this
        guide is for you.
        <br />
        <br />
        With advancements in natural language processing and machine learning,
        modern healthcare chatbots now offer functionalities such as appointment
        booking, symptom analysis, medication reminders, and even mental health
        support. These systems not only boost operational efficiency for
        hospitals and clinics but also significantly improve patient
        satisfaction and outcomes.
        <br />
        <br />
        Our guide evaluates each chatbot on key criteria like accuracy,
        scalability, integration capabilities, user interface, and data
        security—including strict adherence to HIPAA compliance. Whether you’re
        a healthcare provider exploring digital transformation, a developer
        building the next-gen chatbot, or simply an enthusiast curious about AI
        in healthcare, this comprehensive analysis is tailored for you.
      </div>
    </div>
  );
};

export default HeroSection;
