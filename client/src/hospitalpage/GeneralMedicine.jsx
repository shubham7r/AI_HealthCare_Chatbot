import React, { useState } from "react";

const medicalStores = [
  {
    name: "Deami Medical Store - Downtown",
    address: "123 Main Street, Downtown, City",
    phone: "+91 98765 43210",
  },
  {
    name: "Deami Medical Store - City Center",
    address: "45 City Center Road, City",
    phone: "+91 98765 67890",
  },
  {
    name: "Deami Medical Store - Near Hospital",
    address: "Near Civil Hospital, City",
    phone: "+91 91234 56789",
  },
{
  name: "Deami Medical Store - G.H. Raisoni College",
  address: "Brandz God Raisoni College Rd, near G.H.Raisoni College of Engineering and Management (F.E., Civil, Mechanical Department), Wagholi, Pune",
  phone: "+91 91234 56789",
},
];

const GeneralMedicine = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  const filteredStores = medicalStores.filter(
    (store) =>
      store.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      store.address.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const findNearbyStores = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
        // Open Google Maps in new tab showing all stores
        const query = filteredStores
          .map((store) => encodeURIComponent(store.address))
          .join("|");
        const url = `https://www.google.com/maps/dir/?api=1&origin=${latitude},${longitude}&destination=${query}`;
        window.open(url, "_blank");
      });
    } else {
      alert("Geolocation is not supported by your browser");
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">
        General Medicine
      </h1>

      {/* Search + Find Nearby */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search medical store or city..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 rounded w-full md:w-1/2"
        />
        <button
          onClick={findNearbyStores}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Find Near Me
        </button>
      </div>

      {/* Medical Stores List */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredStores.map((store, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {store.name}
            </h2>
            <p className="text-gray-600">{store.address}</p>
            <p className="text-gray-600">📞 {store.phone}</p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                store.address
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            >
              Open in Maps
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralMedicine;
