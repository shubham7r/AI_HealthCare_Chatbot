import React from "react";
import Footer from "../components/Footer";

const Dental = () => {
  const services = [
    {
      title: "Dental Checkups",
      desc: "Routine examinations to maintain oral health.",
    },
    {
      title: "Teeth Cleaning",
      desc: "Professional scaling and polishing for healthy gums.",
    },
    {
      title: "Cavity Fillings",
      desc: "Quick and painless treatment for tooth decay.",
    },
    {
      title: "Root Canal Therapy",
      desc: "Advanced treatment for infected tooth pulp.",
    },
    {
      title: "Cosmetic Dentistry",
      desc: "Whitening, veneers, and smile makeover solutions.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 p-6 rounded-2xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-800">
            Dental Care
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Complete oral care for healthy teeth and a confident smile.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <h2 className="text-xl font-semibold text-cyan-700">{s.title}</h2>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dental;
