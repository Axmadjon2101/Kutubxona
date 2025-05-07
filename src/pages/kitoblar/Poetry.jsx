import React, { useState } from "react";
import { FaEye , FaSearch} from "react-icons/fa";

const Poetry = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    {
      id: 1, 
      title: "Saylanma. Abdulla Oripov ", 
      file: "/sheriy_kitoblar/Abdulla_Oripov._Saylanma.pdf", 
      genre: "Poziya", 
      bgColor: "from-yellow-100 to-yellow-200",
      image: "./images/Sheriy_kitoblar_image/saylanma.jpg"
    },
    { 
      id: 2, 
      title: "Erkin Vohidov: Ruhlar isyoni", 
      file: "/sheriy_kitoblar/Ruhlar isyoni.pdf", 
      genre: "Poziya", 
      bgColor: "from-green-100 to-green-200", 
      image: "./images/Sheriy_kitoblar_image/ruhlar isyoni.jpg"
    },
    { 
      id: 3, 
      title: "Hamid Olimjon: Hayolimda bo'lding uzun kun", 
      file: "http://ilmiy.bmti.uz/blib/files/91/H.%20Olimjon%20-%20Xayolimda%20bo%60lding%20uzun%20kun.pdf", 
      genre: "Poziya", 
      bgColor: "from-blue-100 to-blue-200", 
      image: "./images/Sheriy_kitoblar_image/Xayolimda.jpg"
    },
    { 
      id: 4, 
      title: "Abdulla Oripov: She'rlar toplami", 
      file: "https://kh-davron.uz/kutubxona/multimedia/abdulla-oripov-sherlar-birinchi-muhabbatim.html",
      genre: "Poziya", 
      bgColor: "from-purple-100 to-purple-200", 
      image: "./images/Sheriy_kitoblar_image/Abdulla.webp"
    },
    { 
      id: 5, 
      title: "Uvaysiy Nodira : Haqiqatdan", 
      file: "https://edu.utu-ranch.uz/media/files/2024/08/02/Uvaysiy_Nodira2.pdf", 
      genre: "Poziya", 
      bgColor: "from-pink-100 to-pink-200", 
      image: "./images/Sheriy_kitoblar_image/Uvaysiy.jpg"
    },
    { 
      id: 6, 
      title: "Omon Matjon: She’rlar kitobi", 
      file: "https://kh-davron.uz/yangiliklar/muborak-kin/omon-matjon-75-yoshda.html", 
      genre: "Poziya", 
      bgColor: "from-orange-100 to-orange-200", 
      image: "./images/Sheriy_kitoblar_image/omon.webp"
    },
    {   
      id: 7, 
      title: "Usmon Azim: She'riy to'plam", 
      file: "/sheriy_kitoblar/Usmon Azim. Saylanma.pdf", 
      genre: "Poziya", 
      bgColor: "from-teal-100 to-teal-200", 
      image: "./images/Sheriy_kitoblar_image/Usmon Azim.webp"
    },
    { 
      id: 8, 
      title: "Rauf Parfi: She’rlar to'plami", 
      file: "https://kh-davron.uz/kutubxona/uzbek/memuarlar/rauf-parfi-sherlar-2.html", 
      genre: "Poziya", 
      bgColor: "from-red-100 to-red-200", 
      image: "./images/Sheriy_kitoblar_image/Rauf.webp"
    },
    { 
      id: 9, 
      title: "Omar Xayyam: She'rlar to'plami", 
      file: "https://kh-davron.uz/yangiliklar/muborak-kin/umar-hayyom-ruboiy-qoshiq.html", 
      genre: "Poziya", 
      bgColor: "from-indigo-100 to-indigo-200", 
      image: "./images/Sheriy_kitoblar_image/Umar.jpg"
    },
    { 
      id: 10, 
      title: "Shavkat Rahmon: She'rlar to'plami", 
      file: "https://kh-davron.uz/kutubxona/uzbek/shavkat-rahmon-sherlar-1.html", 
      genre: "Poziya", 
      bgColor: "from-gray-100 to-gray-200", 
      image: "./images/Sheriy_kitoblar_image/Shavkat.webp"
    },
    { 
      id: 11, 
      title: "Hofiz Sheroziy: G'azallar", 
      file: "https://kh-davron.uz/kutubxona/jahon/hofiz-sheroziy-gazallarruboiylarqitalar.html", 
      genre: "Poziya", 
      bgColor: "from-cyan-100 to-cyan-200", 
      image: "./images/Sheriy_kitoblar_image/Sheroziy.webp"
    },
    { 
      id: 12, 
      title: "Nodir Jonuzoq: She'rlar to'plami", 
      file: "https://kh-davron.uz/yangiliklar/muborak-kin/nodir-jonuzoq-sherlar.html", 
      genre: "Poziya", 
      bgColor: "from-lime-100 to-lime-200", 
      image: "./images/Sheriy_kitoblar_image/Nodir.jpg"
    },
    { 
      id: 13, 
      title: "Xurshid Davron: She’rlar to'plami", 
      file: "https://kh-davron.uz/ijod/sherlar/xurshid-davron-sherlar.html", 
      genre: "Poziya", 
      bgColor: "from-fuchsia-100 to-fuchsia-200", 
      image: "./images/Sheriy_kitoblar_image/Xurshid.jpg  "
    },
    { 
      id: 14, 
      title: "Jorj Gardon Bayron: She'riy to'plami", 
      file: "https://kh-davron.uz/yangiliklar/muborak-kin/lord-bayron-asarlaridan-namunalar.html", 
      genre: "Poziya", 
      bgColor: "from-yellow-300 to-yellow-400", 
      image: "./images/Sheriy_kitoblar_image/jorj.webp"
    },
    { 
      id: 15, 
      title: "Aleksandr Pushkin: She’rlar to'plami", 
      file: "https://kh-davron.uz/kutubxona/jahon/aleksandr-pushkin-sherlar.html", 
      genre: "Poziya", 
      bgColor: "from-red-300 to-red-400", 
      image: "./images/Sheriy_kitoblar_image/Pushkin.webp"
    },
    { 
      id: 16, 
      title: "Nodirabegim: G'azallar", 
      file: "https://kh-davron.uz/kutubxona/multimedia/nodira-firoqnoma.html", 
      genre: "Poziya", 
      bgColor: "from-green-300 to-green-400", 
      image: "./images/Sheriy_kitoblar_image/Nodira.webp"
    },
  ];
  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen pt-20 px-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
          She'riyat Olami
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Eng yaxshi she'riyat to'plamlarini ko'rib chiqing va yuklab oling.
        </p>
      </header>

      {/* Zamonaviy Qidiruv Paneli */}
      <div className="max-w-3xl mx-auto mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Kitob nomi bo'yicha qidiring..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
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
              <p className="text-gray-600 mt-2">Janr: {book.genre}</p>
              <div className="flex justify-between items-center mt-6">
                <a
                  href={book.file}
                  download
                  className="px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white font-medium rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-blue-500 hover:to-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  Yuklab Olish
                </a>
                <a
                  href={book.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-500 flex items-center"
                >
                  <FaEye className="inline-block h-6 w-6 mr-2 text-gray-700" />
                  Korish
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-full">
            Kitob topilmadi.
          </p>
        )}
      </div>
    </div>
  );
};

export default Poetry;