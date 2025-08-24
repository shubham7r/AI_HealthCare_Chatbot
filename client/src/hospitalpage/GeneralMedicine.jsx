import React from "react";

const GeneralMedicine = () => {
  const medicalStores = [
    {
      name: "Deami Medical Store - Downtown",
      address: "123 Main Street, Downtown, City",
      phone: "+91 98765 43210",
      openHours: "9:00 AM - 9:00 PM",
    },
    {
      name: "Deami Medical Store - City Center",
      address: "45 City Center Road, City",
      phone: "+91 98765 67890",
      openHours: "8:30 AM - 10:00 PM",
    },
    {
      name: "Deami Medical Store - Near Hospital",
      address: "Near Civil Hospital, City",
      phone: "+91 91234 56789",
      openHours: "24 Hours",
    },
    {
      name: "Deami Medical Store - Near Hospital",
      address: "G.H. Raisoni College of Engineering and Management, Pune",
      phone: "+91 91234 56789",
      openHours: "24 Hours",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        General Medicine
      </h1>
      <p className="text-gray-700 mb-4">
        Find the best general medicine facilities and medical stores near you.
        Below is the list of Deami Medical Stores:
      </p>

      {/* Medical Stores List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {medicalStores.map((store, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {store.name}
            </h2>
            <p className="text-gray-600">{store.address}</p>
            <p className="text-gray-600">📞 {store.phone}</p>
            <p className="text-gray-600">🕒 {store.openHours}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                store.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Get Directions
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralMedicine;
