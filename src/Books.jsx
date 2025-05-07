import React, { useState } from "react";
import { Link } from "react-router-dom";

const genres = [
  {
    name: "O'zbek adabiyoti",
    description: "O'zbek adabiyotiga oid kitoblar",
    path: "/uzbek-literature",
    gradient: "bg-gradient-to-r from-teal-400 to-teal-600",
    hoverGradient: "hover:from-teal-500 hover:to-teal-700",
  },
  {
    name: "Jahon adabiyoti",
    description: "Jahon adabiyotiga oid kitoblar",
    path: "/world-literature",
    gradient: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    hoverGradient: "hover:from-indigo-500 hover:to-indigo-700",
  },
  {
    name: "Sheriy kitoblar",
    description: "Sheriy kitoblar to'plami",
    path: "/poetry",
    gradient: "bg-gradient-to-r from-purple-400 to-purple-600",
    hoverGradient: "hover:from-purple-500 hover:to-purple-700",
  },
  {
    name: "Ilmiy kitoblar",
    description: "Ilm-fanga oid kitoblar",
    path: "/science-books",
    gradient: "bg-gradient-to-r from-yellow-400 to-yellow-600",
    hoverGradient: "hover:from-yellow-500 hover:to-yellow-700",
  },
  {
    name: "Tarixiy kitoblar",
    description: "Tarixga oid kitoblar",
    path: "/history-books",
    gradient: "bg-gradient-to-r from-pink-400 to-pink-600",
    hoverGradient: "hover:from-pink-500 hover:to-pink-700",
  },
  {
    name: "Bolalar kitoblari",
    description: "Bolalar uchun mo'ljallangan kitoblar",
    path: "/children-books",
    gradient: "bg-gradient-to-r from-orange-400 to-orange-600",
    hoverGradient: "hover:from-orange-500 hover:to-orange-700",
  },
];

const Books = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter genres based on the search query
  const filteredGenres = genres.filter((genre) =>
    genre.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-16 py-20 px-6">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8 tracking-wide hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
        Kitoblar Kollektsiyasi
      </h2>
      <p className="text-center text-gray-700 text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto mb-12 tracking-wide leading-relaxed font-medium">
        Har xil janrlarni o'z ichiga olgan kitoblar kolleksiyasi bilan tanishing. Sevimli kitoblaringizni tanlab, bilim olishingiz mumkin.
        Har bir kitobni o‘rganing va yangi bilimlarni kashf eting.
      </p>

      {/* Search */}
      <div className="mb-10 text-center relative max-w-lg mx-auto">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Janrni izlash..."
          className="w-full px-12 py-3 border border-gray-300 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-300 text-gray-700"
        />
        <span className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1116.5 3a7.5 7.5 0 010 15z"
            />
          </svg>
        </span>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredGenres.length > 0 ? (
          filteredGenres.map((genre, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl shadow-xl transform transition-transform duration-300 hover:scale-105 ${genre.gradient}`}
            >
              <h3 className="text-3xl font-semibold text-white mb-4">{genre.name}</h3>
              <p className="text-gray-100 text-lg mb-6">{genre.description}</p>
              <Link to={genre.path}>
                <button
                  className={`mt-6 w-full px-6 py-3 text-lg text-white font-bold rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 ${genre.hoverGradient}`}
                  style={{
                    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)", // Tugma tagiga tushadigan soya
                    textShadow: "0 2px 5px rgba(0, 0, 0, 0.3)", // Tugma matniga soya
                  }}
                >
                  Ko'rish
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="col-span-3 text-center text-lg text-gray-600">Hech qanday janr topilmadi.</p>
        )}
      </div>
    </div>
  );
};

export default Books;
