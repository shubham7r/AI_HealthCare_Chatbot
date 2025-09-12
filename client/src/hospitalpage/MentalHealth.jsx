import React from "react";
import Footer from "../components/Footer";

const MentalHealth = () => {
  const services = [
    {
      title: "Therapy & Counseling",
      desc: "Personal and group therapy sessions with licensed experts.",
    },
    {
      title: "Stress Management",
      desc: "Techniques and tools to reduce stress and improve focus.",
    },
    {
      title: "Depression Care",
      desc: "Comprehensive treatment for depression and mood disorders.",
    },
    {
      title: "Anxiety Treatment",
      desc: "Evidence-based approaches to manage anxiety.",
    },
    {
      title: "Mindfulness & Meditation",
      desc: "Improve mental clarity and calmness with mindfulness programs.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto w-full">
        <div className="bg-gradient-to-r from-purple-100 to-purple-50 p-6 rounded-2xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold text-purple-800">
            Mental Health Services
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Support for your emotional well-being with professional care.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <h2 className="text-xl font-semibold text-purple-700">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MentalHealth;
