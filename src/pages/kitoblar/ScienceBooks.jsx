import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";

const ScienceBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    { id: 1,
       title: "Zamonaviy dasturlash tillari",
       file: "/Ilmiy_kitoblar/Dasturlash tillari.pdf", 
       bgColor: "from-indigo-100 to-indigo-200", 
       image: "/images/Ilmiy_kitoblar_image/photo_2025-01-08_10-01-53.jpg" 
    },
    { 
      id: 2, 
      title: " 4000 Essental English Words 1", 
      file: "/Ilmiy_kitoblar/essential.pdf", 
      bgColor: "from-green-100 to-green-200", 
      image: "/images/Ilmiy_kitoblar_image/words 1.jpg" 
    },
    { 
      id: 3, 
      title: "Mansur Usmonov: fizika qo'llanma", 
      file: "/Ilmiy_kitoblar/Mansur Usmonov fizikadan qo'lanma.pdf", 
      bgColor: "from-blue-100 to-blue-200", 
      image: "/images/Ilmiy_kitoblar_image/fizika.jpg"
    },
    { 
      id: 4, 
      title: "Isaak Nyuton: Princhipiya Matematika", 
      file: "/Ilmiy_kitoblar/Madraximov+Tohirjon+Isroilovich.pdf", 
      bgColor: "from-yellow-100 to-yellow-200", 
      image: "/images/Ilmiy_kitoblar_image/isak.webp" 
    },
    { 
      id: 5, 
      title: "Farruxbek Abdumalikov: matematika qo'llanma", 
      file: "/Ilmiy_kitoblar/Formula-kitob.pdf.crdownload", 
      bgColor: "from-red-100 to-red-200", 
      image: "./images/Ilmiy_kitoblar_image/matematika.jpg"
    },
    { 
      id: 6, 
      title: "M.T Abdullayev va B.A.Hayitov: kimyo", 
      file: "/Ilmiy_kitoblar/kimyo.pdf", 
      bgColor: "from-teal-100 to-teal-200", 
      image: "./images/Ilmiy_kitoblar_image/kimyo.jpg" 
    },
    { 
      id: 7, 
      title: "4000 Essential English Words 2", 
      file: "/Ilmiy_kitoblar/4000 Essential English Words  Book 2.pdf", 
      bgColor: "from-cyan-100 to-cyan-200", 
      image: "./images/Ilmiy_kitoblar_image/essential 2.webp" 
    },
    { 
      id: 8, 
      title: "A.G'ofurov: Umumiy bialogiya", 
      file: "/Ilmiy_kitoblar/bialogiya.pdf", 
      bgColor: "from-green-100 to-green-200", 
      image: "./images/Ilmiy_kitoblar_image/bialogiya.png" 
    },
    { 
      id: 9, 
      title: " B. N. Sirliyev va A. A. Beknazarov: Psixalogiya", 
      file: "/Ilmiy_kitoblar/pisixalogiya.pdf", 
      bgColor: "from-purple-100 to-purple-200", 
      image: "./images/Ilmiy_kitoblar_image/psix.webp" 
    },
    { 
      id: 10, 
      title: "Javascript dasturlash tili", 
      file: "/Ilmiy_kitoblar/javascript.pdf", 
      bgColor: "from-gray-100 to-gray-200", 
      image: "./images/Ilmiy_kitoblar_image/javascript.jpg" 
    },
    { 
      id: 11, 
      title: "Galiley Galiley: Ikki yangi fan haqida suhbatlar", 
      file: "/Ilmiy_kitoblar/galeliy.pdf", 
      bgColor: "from-teal-100 to-teal-200", 
      image: "/images/Ilmiy_kitoblar_image/galeliy.jpg" 
    },
    { 
      id: 12, 
      title: "Albert Eynshteyn: Nisbiylik nazariyasi", 
      file: "/Ilmiy_kitoblar/nisbiylik.pdf", 
      bgColor: "from-orange-100 to-orange-200", 
      image: "./images/Ilmiy_kitoblar_image/albert.jpg" 
    },
  ];
  

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen pt-20 px-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
          Ilmiy Kitoblar
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Ilm-fan va texnologiya sohasidagi eng yaxshi asarlarni o'rganing va yuklab oling.
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
  <a
    href={book.file}
    download
    className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-medium rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-orange-500 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
  >
    Yuklab olish
  </a>
  <a
    href={book.file}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-600 hover:text-red-500 flex items-center"
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

export default ScienceBooks;
