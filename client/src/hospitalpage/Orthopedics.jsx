import React from "react";
import Footer from "../components/Footer";

const Orthopedics = () => {
  const services = [
    {
      title: "Joint Replacement",
      desc: "Hip, knee, and shoulder replacements for pain-free movement.",
    },
    {
      title: "Fracture Treatment",
      desc: "Casting, splints, and surgical care for all kinds of fractures.",
    },
    {
      title: "Arthroscopy",
      desc: "Minimally invasive surgeries for joint repair.",
    },
    {
      title: "Spinal Disorders",
      desc: "Treatment for back pain, scoliosis, and other spinal issues.",
    },
    {
      title: "Sports Injuries",
      desc: "Advanced solutions for ligament tears and muscle injuries.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-gray-100 to-gray-50 p-6 rounded-2xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Orthopedic Services
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Advanced bone and joint care to keep you moving comfortably.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <h2 className="text-xl font-semibold text-gray-700">{s.title}</h2>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Orthopedics;
