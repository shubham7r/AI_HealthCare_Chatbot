import React from "react";
import Footer from "../components/Footer";

const Cardiology = () => {
  const services = [
    {
      title: "Heart Checkups",
      desc: "Comprehensive cardiac health evaluations to detect early issues.",
    },
    {
      title: "ECG & Stress Test",
      desc: "Electrocardiograms and stress testing to monitor heart rhythms.",
    },
    {
      title: "Angiography & Angioplasty",
      desc: "Advanced imaging and treatment for blocked arteries.",
    },
    {
      title: "Heart Surgery",
      desc: "Bypass surgery, valve replacement, and other cardiac procedures.",
    },
    {
      title: "Blood Pressure Management",
      desc: "Specialized plans to maintain healthy blood pressure levels.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 rounded-2xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold text-red-800">
            Cardiology Services
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Expert heart care with advanced diagnostic and surgical solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <h2 className="text-xl font-semibold text-red-700">{s.title}</h2>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cardiology;
