import React, { useState } from "react";
import { FaEye , FaSearch} from "react-icons/fa"; // Import FaEye from react-icons

const UzbekLiterature = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  const books = [
  {
    id: 1,
    title: "Alisher Navoiy: Xamsa Layli va Majnun dostoni",
    file: "/Ozbek_adabiyoti/Alisher Navoiy - Xamsa. Layli va Majnun.pdf",
    genre: "Adabiyot",
    bgColor: "from-yellow-100 to-yellow-200",
    image: "./images/Ozbek_kitoblari_image/layli_Majnun.jpg",
  },
  {
    id: 2,
    title: "Abdulla Qodiriy: O‘tgan Kunlar",
    file: "/Ozbek_adabiyoti/A.Qodiriy-O'tgan kunlar.pdf",
    genre: "Adabiyot",
    bgColor: "from-green-100 to-green-200",
    image: "./images/Ozbek_kitoblari_image/Otgan_kunlar.webp",
  },
  {
    id: 3,
    title: "Cho'lpon: Kecha va Kunduz",
    file: "/Ozbek_adabiyoti/Cho'lpon - Kecha va kunduz (roman).pdf",
    genre: "Adabiyot",
    bgColor: "from-blue-100 to-blue-200",
    image: "./images/Ozbek_kitoblari_image/kecha va kunduzi.jpg",
  },
  {
    id: 4,
    title: "Yaralgan joyingdan gullaysan",
    file: "/Ozbek_adabiyoti/Yaralangan joyingizdan gullaysiz.pdf",
    genre: "Adabiyot",
    bgColor: "from-purple-100 to-purple-200",
    image: "./images/Ozbek_kitoblari_image/yaralgan.webp",
  },
  {
    id: 5,
    title: "Tog‘ay Murod: Ot kishnagan oqshom",
    file: "/Ozbek_adabiyoti/Ot kishnagan oqshom.pdf",
    genre: "Adabiyot",
    bgColor: "from-red-100 to-red-200",
    image: "./images/Ozbek_kitoblari_image/ot kishnagan oqshom.png",
  },
  {
    id: 6,
    title: "Abduraxmon Jomiy: Yusuf va Zulayho",
    file: "/Ozbek_adabiyoti/Yusuf va Zulayho.pdf",
    genre: "Adabiyot",
    bgColor: "from-indigo-100 to-indigo-200",
    image: "./images/Ozbek_kitoblari_image/Yusuf_va_zulayxo.jpg",
  },
  {
    id: 7,
    title: "O‘lmas Umarbekov:  Ufq asari",
    file: "/Ozbek_adabiyoti/Ufq.pdf",
    genre: "Adabiyot",
    bgColor: "from-teal-100 to-teal-200",
    image: "./images/Ozbek_kitoblari_image/ufq.png",
  },
  {
    id: 8,
    title: "Abdulla Qahhor: Anor asari",
    file: "/Ozbek_adabiyoti/Abdulla Qahhor. Anor.pdf",
    genre: "Adabiyot",
    bgColor: "from-gray-100 to-gray-200",
    image: "./images/Ozbek_kitoblari_image/anor.jpg",
  },
  {
    id: 9,
    title: "Alisher Navoiy: Saddi Iskandariy dostoni",
    file: "/Ozbek_adabiyoti/Alisher Navoiy - Xamsa. Saddi Iskandariy.pdf",
    genre: "Adabiyot",
    bgColor: "from-orange-100 to-orange-200",
    image: "./images/Ozbek_kitoblari_image/saddiy_iskandariy.jpg",
  },
  {
    id: 10,
    title: "Alisher Navoiy: Farhod va Shirin dostoni",
    file: "/Ozbek_adabiyoti/Alisher Navoiy. Xamsa. Farhod va Shirin.pdf",
    genre: "Adabiyot",
    bgColor: "from-pink-100 to-pink-200",
    image: "./images/Ozbek_kitoblari_image/Fargod_shirin.jpg",
  },
  {
    id: 11,
    title: "Alisher Navoiy: Hayratul-abror dostoni",
    file: "/Ozbek_adabiyoti/Alisher Navoiy. Xamsa. Hayratul-abror.pdf",
    genre: "Adabiyot",
    bgColor: "from-cyan-100 to-cyan-200",
    image: "./images/Ozbek_kitoblari_image/hayratul_abror.jpg",
  },
  {
    id: 12,
    title: "Alisher Navoiy: sab'ai sayyor dostoni",
    file: "/Ozbek_adabiyoti/Alisher_Navoiy_Xamsa_Sab'ai.pdf",
    genre: "Adabiyot",
    bgColor: "from-yellow-100 to-yellow-200",
    image: "./images/Ozbek_kitoblari_image/sayyor.jpeg",
  },
  {
    id: 13,
    title: "Tohir Malik: Alvido bolalik ",
    file: "/Ozbek_adabiyoti/Alvido bolalik.pdf",
    genre: "Adabiyot",
    bgColor: "from-green-100 to-green-200",
    image: "./images/Ozbek_kitoblari_image/alvido_bolalik.jpg",
  },
  {
    id: 14,
    title: "Chingiz Aytmatov: Erta qaytgan turnalar",
    file: "/Ozbek_adabiyoti/Erta qaytgan turnalar.pdf",
    genre: "Adabiyot",
    bgColor: "from-blue-100 to-blue-200",
    image: "./images/Ozbek_kitoblari_image/turna.jpg",
  },
  {
    id: 15,
    title: "O'tkir Hoshimov: Daftar hoshiyasidagi bitiklar",
    file: "/Ozbek_adabiyoti/Hoshimov Utkir. Daftar hoshiyasidagi bitiklar.pdf",
    genre: "Adabiyot",
    bgColor: "from-purple-100 to-purple-200",
    image: "./images/Ozbek_kitoblari_image/daftar.png",
  },
  {
    id: 16,
    title: "Abdulla Qahhor: Mehrobdan chayon",
    file: "/Ozbek_adabiyoti/Mehrobdan chayon.pdf",
    genre: "Adabiyot",
    bgColor: "from-red-100 to-red-200",
    image: "./images/Ozbek_kitoblari_image/Mehrobdan_chayon.webp",
  },
  {
    id: 17,
    title: " Abdulla Qahhor: Odamiylik mulki",
    file: "/Ozbek_adabiyoti/Odamiylik mulki.pdf",
    genre: "Adabiyot",
    bgColor: "from-indigo-100 to-indigo-200",
    image: "./images/Ozbek_kitoblari_image/Odamiylik_mulki.png",
  },
  {
    id: 18,
    title: "Oybek: Bolalik xotiralarim",
    file: "/Ozbek_adabiyoti/Oybek. Bolalik xotiralarim.pdf",
    genre: "Adabiyot",
    bgColor: "from-teal-100 to-teal-200",
    image: "./images/Ozbek_kitoblari_image/bolalik_xotiralarim.webp",
  },
  {
    id: 19,
    title: "Oybek: Qutlug‘ qon",
    file: "/Ozbek_adabiyoti/Qutlug‘ qon.pdf",
    genre: "Adabiyot",
    bgColor: "from-gray-100 to-gray-200",
    image: "./images/Ozbek_kitoblari_image/qutlug.jpg",
  },
  {
    id: 20,
    title: "Erkin Vohidov: Ruhlar isyoni ",
    file: "/Ozbek_adabiyoti/Ruhlar isyoni.pdf",
    genre: "Adabiyot",
    bgColor: "from-orange-100 to-orange-200",
    image: "./images/Ozbek_kitoblari_image/ruhlar isyoni.jpg",
  },
  {
    id: 21,
    title: "Chingiz Aytmatov: Sarvqomat dilbarim ",
    file: "/Ozbek_adabiyoti/Sarvqomat dilbarim_Ch.Aytmatov.pdf",
    genre: "Adabiyot",
    bgColor: "from-pink-100 to-pink-200",
    image: "./images/Ozbek_kitoblari_image/sarviqomat.jpg",
  },
  {
    id: 22,
    title: "O'tkir Hoshimov: Bahor qaytmaydi",
    file: "https://edu.utu-ranch.uz/media/files/2024/07/26/Otkir-Hoshimov-Bahor-qaytmaydi.pdf",
    genre: "Adabiyot",
    bgColor: "from-cyan-100 to-cyan-200",
    image: "https://i.ytimg.com/vi/9bxhMD3SAOk/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AHkAYAC6AKKAgwIABABGGIgYihiMA8=&amp;rs=AOn4CLC_vmgZRygJeSiqR1aJWDDZK6Yvgw",
  },
  {
    id: 23,
    title: "Placeholder Title 16",
    file: "/Ozbek_adabiyoti/placeholder-16.pdf",
    genre: "Adabiyot",
    bgColor: "from-yellow-100 to-yellow-200",
    image: "./images/Ozbek_kitoblari_image/placeholder-16.jpg",
  },
  {
    id: 24,
    title: "Placeholder Title 17",
    file: "/Ozbek_adabiyoti/placeholder-17.pdf",
    genre: "Adabiyot",
    bgColor: "from-green-100 to-green-200",
    image: "./images/Ozbek_kitoblari_image/placeholder-17.jpg",
  },
]


  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen pt-20 px-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-red-500">
          O'zbek Adabiyoti
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          O'zbek adabiyotining eng sara asarlarini ko'rib chiqing va yuklab oling.
        </p>

        {/* Search Bar */}
        <div className="relative mt-6 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Kitob nomini kiriting..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 text-gray-700 bg-white border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
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
            <p className="text-gray-600 mt-2">Janr: {book.genre}</p>
            <div className="flex justify-between items-center mt-6">
              <a
                href={book.file}
                download
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-yellow-500 text-white font-medium rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-yellow-500 hover:to-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Yuklab Olish
              </a>
              <a
                href={book.file}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-500 flex items-center"
              >
                <FaEye className="inline-block h-6 w-6 mr-2 text-gray-700" />
                Korish
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UzbekLiterature;