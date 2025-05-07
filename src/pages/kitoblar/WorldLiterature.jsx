import React, { useState } from "react";
import { FaEye, FaSearch } from "react-icons/fa";

const WorldLiterature = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const books = [
    {
      id: 1,
      title: "Leo Tolstoy: War and Peace",
      file: "/World_Literature/war-and-peace.pdf",
      genre: "Classic",
      bgColor: "from-yellow-100 to-yellow-200",
      image: "./images/World_Literature/war_and_peace.jpg",
    },
    {
      id: 2,
      title: "Victor Hugo: Les Misérables",
      file: "/World_Literature/les-miserables.pdf",
      genre: "Classic",
      bgColor: "from-green-100 to-green-200",
      image: "./images/World_Literature/les_miserables.jpg",
    },
    {
      id: 3,
      title: "Gabriel García Márquez: One Hundred Years of Solitude",
      file: "/World_Literature/one-hundred-years.pdf",
      genre: "Magical Realism",
      bgColor: "from-blue-100 to-blue-200",
      image: "./images/World_Literature/one_hundred_years.jpg",
    },
    {
      id: 4,
      title: "Fyodor Dostoevsky: Crime and Punishment",
      file: "/World_Literature/crime-and-punishment.pdf",
      genre: "Psychological Fiction",
      bgColor: "from-purple-100 to-purple-200",
      image: "./images/World_Literature/crime_and_punishment.jpg",
    },
    {
      id: 5,
      title: "Jane Austen: Pride and Prejudice",
      file: "/World_Literature/pride-and-prejudice.pdf",
      genre: "Romance",
      bgColor: "from-red-100 to-red-200",
      image: "./images/World_Literature/pride_and_prejudice.jpg",
    },
    {
      id: 6,
      title: "Franz Kafka: The Metamorphosis",
      file: "/World_Literature/the-metamorphosis.pdf",
      genre: "Absurdist Fiction",
      bgColor: "from-indigo-100 to-indigo-200",
      image: "./images/World_Literature/the_metamorphosis.jpg",
    },
    {
      id: 7,
      title: "George Orwell: 1984",
      file: "/World_Literature/1984.pdf",
      genre: "Dystopian",
      bgColor: "from-teal-100 to-teal-200",
      image: "./images/World_Literature/1984.jpg",
    },
    {
      id: 8,
      title: "Homer: The Odyssey",
      file: "/World_Literature/the-odyssey.pdf",
      genre: "Epic Poetry",
      bgColor: "from-gray-100 to-gray-200",
      image: "./images/World_Literature/the_odyssey.jpg",
    },
    {
      id: 9,
      title: "Charles Dickens: Great Expectations",
      file: "/World_Literature/great-expectations.pdf",
      genre: "Classic",
      bgColor: "from-orange-100 to-orange-200",
      image: "./images/World_Literature/great_expectations.jpg",
    },
    {
      id: 10,
      title: "Hermann Hesse: Siddhartha",
      file: "/World_Literature/siddhartha.pdf",
      genre: "Philosophical Fiction",
      bgColor: "from-pink-100 to-pink-200",
      image: "./images/World_Literature/siddhartha.jpg",
    },
    {
      id: 11,
      title: "J.R.R. Tolkien: The Hobbit",
      file: "/World_Literature/the-hobbit.pdf",
      genre: "Fantasy",
      bgColor: "from-cyan-100 to-cyan-200",
      image: "./images/World_Literature/the_hobbit.jpg",
    },
    {
      id: 12,
      title: "William Shakespeare: Hamlet",
      file: "/World_Literature/hamlet.pdf",
      genre: "Tragedy",
      bgColor: "from-yellow-100 to-yellow-200",
      image: "./images/World_Literature/hamlet.jpg",
    },
    {
      id: 13,
      title: "Albert Camus: The Stranger",
      file: "/World_Literature/the-stranger.pdf",
      genre: "Existential Fiction",
      bgColor: "from-green-100 to-green-200",
      image: "./images/World_Literature/the_stranger.jpg",
    },
    {
      id: 14,
      title: "Harper Lee: To Kill a Mockingbird",
      file: "/World_Literature/to-kill-a-mockingbird.pdf",
      genre: "Drama",
      bgColor: "from-blue-100 to-blue-200",
      image: "./images/World_Literature/to_kill_a_mockingbird.jpg",
    },
    {
      id: 15,
      title: "Mark Twain: Adventures of Huckleberry Finn",
      file: "/World_Literature/huckleberry-finn.pdf",
      genre: "Adventure",
      bgColor: "from-purple-100 to-purple-200",
      image: "./images/World_Literature/huckleberry_finn.jpg",
    },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gradient-to-b from-gray-50 via-gray-100 to-gray-200 min-h-screen pt-20 px-6">
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500">
          Jahon Adabiyoti
        </h1>
        <p className="text-lg text-gray-700 mt-4">
          Dunyo adabiyotining eng sara asarlarini ko'rib chiqing va yuklab oling.
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
            <p className="text-gray-600 mt-2">Janr: {book.genre}</p>
            <div className="flex justify-between items-center mt-6">
              <a
                href={book.file}
                download
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-green-500 text-white font-medium rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:from-green-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Yuklab olish
              </a>
              <button
                className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-200 to-gray-300 text-gray-700 font-medium rounded-lg shadow-md transform transition-all duration-300 hover:scale-105 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
              >
                <FaEye className="text-gray-600" />
                Ko'rish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldLiterature;
