import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";

const ChildrenBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    { 
      id: 1, 
      title: "Qizil Qalpoqcha ertagi", 
      file: "/Bolalar_kitoblar/qizil.pdf", 
      bgColor: "from-pink-100 to-pink-200", 
      image: "https://cdn.culture.ru/images/7774c097-53fb-5f69-9d69-c5d52a10c155" 
    },
    { 
      id: 2, 
      title: "Mamasoli Jumaboyev: Bolalar adabiyoti", 
      file: "/Bolalar_kitoblar/adabiyot.pdf", 
      bgColor: "from-blue-100 to-blue-200", 
      image: "https://avatars.mds.yandex.net/i?id=408c16e7ab7f62f85cbdb6b29ee9b14c5eab8fa6-5345859-images-thumbs&n=13" 
    },
    { 
      id: 3, 
      title: "Ezop masallari ", 
      file: "/Bolalar_kitoblari/tulki.pdf", 
      bgColor: "from-green-100 to-green-200", 
      image: "https://avatars.mds.yandex.net/i?id=610afb49ca225836ed26d04e408d7e4d-5226442-images-thumbs&n=13" 
    },
    { 
      id: 4, 
      title: "Xudayberdi To'xtaboyev:Sariq devni minib ", 
      file: "https://quvonch-books.uz/storage/uploads/files/sariq_devni_minib_roman.pdf", 
      bgColor: "from-red-100 to-red-200", 
      image: "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/10cfc258-54ee-4c95-82b5-185368edaa06/360" 
    },
    { 
      id: 5, 
      title: "Zumrat va Qimmat ertagi", 
      file: "https://tafakkur.net/zumrad-va-qimmat/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-yellow-100 to-yellow-200", 
      image: "https://files.itv.uz/uploads/content/poster/2021/10/03/d24a2deede17e61eb8e39442db77a6d5-q-700x1002.jpeg" 
    },
    { 
      id: 6, 
      title: "Bo'g'irsoq", 
      file: "https://tafakkur.net/bogirsoq/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-purple-100 to-purple-200", 
      image: "https://avatars.mds.yandex.net/i?id=008f161d31512f486075a01fad245a1f51762c29-9043076-images-thumbs&n=13" 
    },
    { 
      id: 7, 
      title: "Susanbil", 
      file: "https://tafakkur.net/susambil/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-teal-100 to-teal-200", 
      image: "https://play-lh.googleusercontent.com/sf7z-bJkFnXnJeHMlkQ86lIg0DcgfInHtU2pnt_AApn3EsiOIs5PT02aNt0vVvzFZr4o" 
    },
    { 
      id: 8, 
      title: "Tulkiboy", 
      file: "https://tafakkur.net/tulkiboy/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-orange-100 to-orange-200", 
      image: "https://avatars.mds.yandex.net/i?id=3c72a9be18cfdbe1f4cde6a111d5348c23c5a1e3-5337839-images-thumbs&n=13" 
    },
    { 
      id: 9, 
      title: "Tohir va Zuhra", 
      file: "https://tafakkur.net/tohir-va-zuhra/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-cyan-100 to-cyan-200", 
      image: "https://i.imgur.com/7wthtNa.jpg?1" 
    },
    { 
      id: 10, 
      title: "Jonon piyola", 
      file: "https://tafakkur.net/jonon-piyola/xalq-ogzaki-ijodi.uz ",
      bgColor: "from-gray-100 to-gray-200", 
      image: "https://i.ytimg.com/vi/_17OBrd3mL4/maxresdefault.jpg" 
    },
    { 
      id: 11, 
      title: "Oppog'oy va yetti gnom", 
      file: "https://tafakkur.net/oppogoy-va-yetti-gnom/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-lime-100 to-lime-200", 
      image: "https://i.ytimg.com/vi/XkQrIeZrqgg/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHeA4AC8AKKAgwIABABGGIgYihiMA8=&rs=AOn4CLB4VU5fhHprrNcdLBVPlIfnw9tkfQ" 
    },
    { 
      id: 12, 
      title: "Chol bilan dev", 
      file: "https://tafakkur.net/chol-bilan-dev/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-indigo-100 to-indigo-200", 
      image: "https://avatars.mds.yandex.net/i?id=29b0f6f967aab8a741899d0cc5a18fbdc1461226-9145122-images-thumbs&n=13" 
    },
    { 
      id: 13, 
      title: "Lopchi", 
      file: "https://tafakkur.net/lopchi/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-teal-200 to-teal-400", 
      image: "https://avatars.mds.yandex.net/i?id=a675a0c3a60b05ed8f65a4363c78de374af8c766-10637411-images-thumbs&n=13" 
    },
    { 
      id: 14, 
      title: "Uch og'ayni botirlar", 
      file: "https://tafakkur.net/uch-ogaini-botirlar/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-blue-200 to-blue-400", 
      image: "https://avatars.mds.yandex.net/i?id=efa3e544d01a3e0bf69fe001d4aa207aeba20f65-5109844-images-thumbs&n=13" 
    },
    { 
      id: 15, 
      title: "Hurmatli yigit", 
      file: "https://tafakkur.net/hunarli-yigit/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-purple-200 to-purple-400", 
      image: "https://avatars.mds.yandex.net/i?id=3ab675511a1f02c1b6298b5c7178a8463b8e58e9-10805535-images-thumbs&n=13" 
    },
    { 
      id: 16, 
      title: "Ziyod botir", 
      file: "https://tafakkur.net/ziyod-botir/xalq-ogzaki-ijodi.uz", 
      bgColor: "from-yellow-200 to-yellow-400", 
      image: "https://avatars.mds.yandex.net/i?id=32168e2681b89af5d208dcc7c92b9fe9-6235762-images-thumbs&n=13" 
    }
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen pt-20 px-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-500">
          Bolalar Kitoblari
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Bolalar uchun eng yaxshi ertaklar va hikoyalarni o'qing va yuklab oling.
        </p>

        {/* Search Bar */}
        <div className="relative mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Kitob nomini kiriting..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
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
                className="px-5 py-2 bg-gradient-to-r from-pink-400 to-yellow-500 text-white font-medium rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-yellow-500 hover:to-pink-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
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

export default ChildrenBooks;
