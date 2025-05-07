import React, { useState, useRef } from "react";
import { FaEye } from "react-icons/fa";

const books = [
  {
    id: 1,
    title: "O'tkir Hoshimov: Daftar hoshiyasidagi bitiklar",
    genre: "Adabiyot",
    image: "./images/Ozbek_kitoblari_image/daftar.png",
    pdfLink: "/Ozbek_adabiyoti/Hoshimov Utkir. Daftar hoshiyasidagi bitiklar.pdf",
    bgColor: "from-blue-100 to-blue-200",
  },
  {
    id: 2,
    title: "Zamonaviy dasturlash tillari",
    genre: "Ilmiy",
    image: "./images/Ilmiy_kitoblar_image/photo_2025-01-08_10-01-53.jpg",
    pdfLink: "/Ilmiy_kitoblar/Dasturlash tillari.pdf",
    bgColor: "from-red-100 to-red-200",
  },
  {
    id: 3,
    title: "Yaralgan joyingdan gullaysan",
    pdfLink: "/Ozbek_adabiyoti/Yaralangan joyingizdan gullaysiz.pdf",
    genre: "Adabiyot",
    bgColor: "from-purple-100 to-purple-200",
    image: "./images/Ozbek_kitoblari_image/yaralgan.webp",
  },
  { 
    id: 4, 
    title: "Amir Temur:  Temur Tuzuklari", 
    pdfLink: "/Tarixiy_kitoblar/tuzuklar.pdf", 
    bgColor: "from-green-100 to-green-200", 
    image: "/images/Tarixiy_kitoblar_image/tuzuklar.webp" 
  },
  { 
    id: 5, 
    title: "Abdulla Oripov: She'rlar toplami", 
    pdfLink: "https://kh-davron.uz/kutubxona/multimedia/abdulla-oripov-sherlar-birinchi-muhabbatim.html",
    genre: "Poziya", 
    bgColor: "from-purple-100 to-purple-200", 
    image: "./images/Sheriy_kitoblar_image/Abdulla.webp"
  },
  { 
    id: 6, 
    title: "Mansur Usmonov: fizika qo'llanma", 
    pdfLink: "/Ilmiy_kitoblar/Mansur Usmonov fizikadan qo'lanma.pdf", 
    bgColor: "from-blue-100 to-blue-200", 
    image: "/images/Ilmiy_kitoblar_image/fizika.jpg"
  },
  { 
    id: 7, 
    title: "Xudayberdi:Sariq devni minib ", 
    file: "https://quvonch-books.uz/storage/uploads/files/sariq_devni_minib_roman.pdf", 
    bgColor: "from-red-100 to-red-200", 
    image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/10cfc258-54ee-4c95-82b5-185368edaa06/360" 
  },
  { 
    id: 8, 
    title: " Shari Perro: Qizil Qalpoqcha ertagi", 
    pdfLink: "/Bolalar_kitoblar/qizil.pdf", 
    bgColor: "from-pink-100 to-pink-200", 
    image: "https://cdn.culture.ru/images/7774c097-53fb-5f69-9d69-c5d52a10c155" 
  },
];

const HomePage = () => {
  const [hovered, setHovered] = useState(null);
  const scrollRef = useRef(null);

  const handleMouseEnter = (id) => setHovered(id);
  const handleMouseLeave = () => setHovered(null);

  const handleMouseMove = (e) => {
    const { clientX } = e;
    const screenWidth = window.innerWidth;

    const scrollContainer = scrollRef.current;

    if (clientX < 100) {
      scrollContainer.scrollLeft -= 10;
    } else if (clientX > screenWidth - 100) {
      scrollContainer.scrollLeft += 10;
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-blue-50 via-gray-100 to-blue-100 min-h-screen pt-11"
      onMouseMove={handleMouseMove}
    >
      {/* Header Section */}
      <header className="text-center py-16 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold drop-shadow-lg">
          Kutubxonaga Xush Kelibsiz
        </h1>
        <p className="mt-4 text-2xl font-light">
          Kashf eting, o'rganing va kitoblarni yuklab oling
        </p>
      </header>

      {/* Book Section */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 drop-shadow-lg">
          Eng Yaxshi Kitoblar
        </h2>
        <p className="text-center text-lg sm:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 mt-4 drop-shadow-md hover:scale-105 transition-transform duration-300">
          Bizning kolleksiyamizdan tanlang va zavqlaning
        </p>

        {/* Book List */}
        <div
          ref={scrollRef}
          className="flex gap-8 mt-12 overflow-x-auto px-4"
          style={{ scrollbarWidth: "none" }}
        >
          {books.map((book) => (
            <div
              key={book.id}
              onMouseEnter={() => handleMouseEnter(book.id)}
              onMouseLeave={handleMouseLeave}
              className={`flex-none group relative bg-gradient-to-r ${book.bgColor} p-6 rounded-lg shadow-lg transform transition-transform duration-300 ${
                hovered === book.id ? "scale-110 translate-y-[-10px]" : ""
              }`}
              style={{ width: "280px" }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center items-center">
                  <span className="text-white font-semibold text-xl">Ko'rish</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-6 text-gray-800">{book.title}</h3>
              <p className="text-gray-600 mt-2">Janr: {book.genre}</p>
              <div className="flex justify-center mt-6 gap-4">
                {/* Download Button */}
                <a
                  href={book.pdfLink}
                  download
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Yuklab Olish
                </a>

                {/* View Button */}
                <a
                  href={book.pdfLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 flex items-center"
                >
                  <FaEye className="inline-block h-6 w-6 mr-2 text-gray-700" />
                  Ko'rish
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
