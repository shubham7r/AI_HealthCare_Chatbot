import React from "react";
import Footer from "../components/Footer";

const Dermatology = () => {
  const services = [
    {
      title: "Acne Treatment",
      desc: "Customized solutions for acne and scarring.",
    },
    {
      title: "Skin Allergy Care",
      desc: "Diagnosis and treatment for skin allergies.",
    },
    {
      title: "Psoriasis & Eczema",
      desc: "Relief for chronic skin conditions.",
    },
    {
      title: "Laser Therapy",
      desc: "Advanced treatments for pigmentation and scars.",
    },
    {
      title: "Anti-Aging Solutions",
      desc: "Non-invasive methods for youthful skin.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-pink-100 to-pink-50 p-6 rounded-2xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold text-pink-800">
            Dermatology Services
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Expert solutions for healthy and glowing skin.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <h2 className="text-xl font-semibold text-pink-700">
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

export default Dermatology;
