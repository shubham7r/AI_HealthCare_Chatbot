// src/pages/Bones.jsx
import React from "react";
import Footer from "../components/Footer";

const Bones = () => {
  const services = [
    {
      title: "Fracture Management",
      desc: "Comprehensive care for fractures including casting, splinting, and surgical fixation.",
    },
    {
      title: "Joint Replacement",
      desc: "Advanced knee, hip, and shoulder replacement surgeries for better mobility.",
    },
    {
      title: "Arthroscopy",
      desc: "Minimally invasive procedures to diagnose and treat joint issues.",
    },
    {
      title: "Spinal Surgery",
      desc: "Specialized treatments for spine injuries and deformities.",
    },
    {
      title: "Pediatric Orthopedics",
      desc: "Bone and joint care for children, including growth-related disorders.",
    },
    {
      title: "Osteoporosis Care",
      desc: "Diagnosis and management of brittle bones to prevent fractures.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow px-6 py-10 max-w-6xl mx-auto w-full">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-2xl shadow">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-800">
            Bones & Orthopedic Care
          </h1>
          <p className="mt-3 text-gray-700 text-lg">
            Explore our comprehensive services for bone, joint, and spine
            health.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-5"
            >
              <h2 className="text-xl font-semibold text-blue-700">
                {item.title}
              </h2>
              <p className="mt-2 text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition">
            Book Orthopedic Consultation
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Bones;
