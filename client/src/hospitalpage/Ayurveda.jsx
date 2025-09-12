// src/pages/Ayurveda.jsx
import React from "react";
import Footer from "../components/Footer";

const Ayurveda = () => {
  const treatments = [
    {
      title: "Panchakarma",
      desc: "A detox therapy that restores balance in the body.",
    },
    {
      title: "Abhyanga",
      desc: "A warm oil massage to improve circulation & calm the mind.",
    },
    {
      title: "Shirodhara",
      desc: "A relaxing therapy where warm oil is poured on the forehead.",
    },
    {
      title: "Herbal Remedies",
      desc: "Personalized herbal medicines for various conditions.",
    },
    {
      title: "Yoga & Meditation",
      desc: "Mind–body techniques for overall wellness.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-6 rounded-2xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold text-green-800">
            Ayurveda Treatments
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Discover ancient Ayurvedic therapies that focus on holistic healing,
            balancing body, mind, and spirit.
          </p>
        </div>

        {/* Treatments Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {treatments.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <h2 className="text-xl font-semibold text-green-700">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full bg-green-600 text-white hover:bg-green-700 transition">
            Book Ayurveda Consultation
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ayurveda;
