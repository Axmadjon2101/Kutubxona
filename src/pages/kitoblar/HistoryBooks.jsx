import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";

const HistoryBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    { 
      id: 1, 
      title: "Mustafo Chukay o'g'li:  Istiqlol jallodlari", 
      file: "/Tarixiy_kitoblar/Istiqlol jallodlari.pdf", 
      bgColor: "from-yellow-100 to-yellow-200", 
      image: "/images/Tarixiy_kitoblar_image/istiqlol.webp" 
    },
    { 
      id: 2, 
      title: "Bobur: Boburnoma kitobi", 
      file: "/Tarixiy_kitoblar/boburnoma.pdf", 
      bgColor: "from-blue-100 to-blue-200", 
      image: "/images/Tarixiy_kitoblar_image/boburnoma.webp" 
    },
    { 
      id: 3, 
      title: "Amir Temur:  Temur Tuzuklari", 
      file: "/Tarixiy_kitoblar/tuzuklar.pdf", 
      bgColor: "from-green-100 to-green-200", 
      image: "/images/Tarixiy_kitoblar_image/tuzuklar.webp" 
    },
    { 
      id: 4, 
      title: "Ibn Sino: Tibbiyot qonunlari", 
      file: "/Tarixiy_kitoblar/tibbiyot.pdf", 
      bgColor: "from-red-100 to-red-200", 
      image: "/images/Tarixiy_kitoblar_image/tibbiyot.jpg" 
    },
    { 
      id: 5, 
      title: "Abu Rayhon Beruniy: Qonuni Mas’udiy", 
      file: "/Tarixiy_kitoblar/qonuni_masudiy.pdf", 
      bgColor: "from-purple-100 to-purple-200", 
      image: "/images/Tarixiy_kitoblar_image/qonuni_masudiy.jpg" 
    },
    { 
      id: 6, 
      title: "Mirzo Ulug‘bek: Yulduzlar jadvali", 
      file: "/Tarixiy_kitoblar/yulduzlar.pdf", 
      bgColor: "from-indigo-100 to-indigo-200", 
      image: "/images/Tarixiy_kitoblar_image/yulduzlar.png" 
    },
    { 
      id: 7, 
      title: "Abu Nasr Forobiy: Falsafa asarlari", 
      file: "/Tarixiy_kitoblar/falsafa.pdf", 
      bgColor: "from-teal-100 to-teal-200", 
      image: "/images/Tarixiy_kitoblar_image/falsafa.webp" 
    },
    { 
      id: 8, 
      title: "Bako Umarov, Tolib Niyazxonov: Kimyo tarixi", 
      file: "/Tarixiy_kitoblar/Kimyo tarixi.pdf", 
      bgColor: "from-orange-100 to-orange-200", 
      image: "/images/Tarixiy_kitoblar_image/Kimyo_tarixi.png" 
    },
    { 
      id: 9, 
      title: "Jaloladdin Rumiy: Masnavi", 
      file: "/Tarixiy_kitoblar/rumiy.pdf", 
      bgColor: "from-cyan-100 to-cyan-200", 
      image: "/images/Tarixiy_kitoblar_image/rumiy.webp" 
    },
    { 
      id: 10, 
      title: "Jaloliddin Manguberdi: Hayot yo‘li", 
      file: "/Tarixiy_kitoblar/manguberdi.pdf.crdownload", 
      bgColor: "from-gray-100 to-gray-200", 
      image: "/images/Tarixiy_kitoblar_image/manguberdi.webp" 
    },
    { 
      id: 11, 
      title: "Said Ahmad: Toshkentning Tarixi", 
      file: "/Tarixiy_kitoblar/Said.pdf", 
      bgColor: "from-pink-100 to-pink-200", 
      image: "/images/Tarixiy_kitoblar_image/Said.webp" 
    },
    { 
      id: 12, 
      title: "Fitrat: Tarixiy hikoyalar kitobi", 
      file: "/Tarixiy_kitoblar/tarixiy_hikoyalar.pdf", 
      bgColor: "from-lime-100 to-lime-200", 
      image: "/images/Tarixiy_kitoblar_image/tarixiy_hikoyalar.jpg" 
    }
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen pt-20 px-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
          Tarixiy Kitoblar
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          O‘zbek tarixining eng yaxshi asarlarini o‘rganing va yuklab oling.
        </p>

        {/* Search Bar */}
        <div className="relative mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Kitob nomini kiriting..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          />
          <FaSearch className="absolute left-4 top-3 text-gray-400 text-lg pointer-events-none" />
        </div>
      </header>

      {/* Book Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className={`bg-gradient-to-r ${book.bgColor} p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105`}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-60 object-cover rounded-md mb-4"
              />
            </div>
            <h3 className="text-xl font-bold text-gray-800">{book.title}</h3>
            <div className="flex justify-between items-center mt-6">
              {/* Download Button */}
              <a
                href={book.file}
                download
                className="px-5 py-2 bg-gradient-to-r from-red-400 to-yellow-500 text-white font-medium rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-yellow-500 hover:to-red-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              >
                Yuklab olish
              </a>
              {/* View Button */}
              <a
                href={book.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-600 flex items-center"
              >
                <FaEye className="inline-block h-6 w-6 mr-2 text-gray-700" />
                Ko'rish
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryBooks;
