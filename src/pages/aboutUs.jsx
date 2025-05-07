import React from "react";
import { FaTelegramPlane, FaInstagram, FaPhoneAlt,} from "react-icons/fa";

const AboutUs = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen pt-11"
      style={{
        backgroundImage: `url('/images/Bolalar_kitoblari_image/homepage.jpg')`,
      }}
    >
      <div className="bg-black bg-opacity-60 min-h-screen py-12 sm:py-16 px-4 sm:px-8 lg:px-16">
        {/* Title Section */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center text-yellow-400 mb-8 sm:mb-10 tracking-wide uppercase">
          Biz Haqimizda
        </h2>
        <p className="text-lg sm:text-xl lg:text-2xl text-center text-gray-300 max-w-4xl mx-auto italic leading-relaxed font-medium">
          Bizning kutubxonamiz turli janrlarda bepul elektron kitoblar taqdim etuvchi ochiq jamoat loyihasidir. Drama, ilmiy, sarguzasht, tarixiy va fantastika janridagi kitoblar bilan tanishing va bilimlaringizni boyiting.
        </p>

        {/* Contact Section */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-300 mb-6">
            Aloqa Ma'lumotlari
          </h3>
          <div className="flex justify-center items-center gap-6 sm:gap-8 mt-4">
            <a
              href="https://t.me/yusup0v_2101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-400 hover:text-yellow-500 transition-transform duration-300 text-4xl sm:text-5xl lg:text-6xl hover:scale-110"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="https://instagram.com/yusup0v_2101"
              target="_blank"
              rel="noopener noreferrer"
              className="text-rose-400 hover:text-rose-500 transition-transform duration-300 text-4xl sm:text-5xl lg:text-6xl hover:scale-110"
            >
              <FaInstagram />
            </a>
            <a
              href="tel:+99893757201"
              className="text-emerald-400 hover:text-emerald-500 transition-transform duration-300 text-4xl sm:text-5xl lg:text-6xl hover:scale-110"
            >
              <FaPhoneAlt />
            </a>
          </div>
          <p className="mt-6 text-gray-300 text-lg sm:text-xl lg:text-2xl font-medium">
            Telefon:{" "}
            <span className="text-emerald-400 font-bold">+998 93 757 21 01</span>
          </p>
        </div>

        {/* About Section */}
        <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400 text-center mb-8">
            Kutubxona Haqida
          </h3>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed text-justify font-medium">
            <span className="text-yellow-400 font-bold">Kutubxonamizning asosiy maqsadi</span> bilim va adabiyotni hammaga bepul yetkazishdir. Bizning elektron platformamiz orqali siz nafaqat drama va fantastika janridagi kitoblardan foydalanishingiz, balki yangi ilmiy va tarixiy adabiyotlar bilan tanishishingiz mumkin.
          </p>
          <p className="text-gray-300 mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-justify font-medium">
            Jamoamiz siz uchun doim yangi{" "}
            <span className="text-rose-400 font-bold">kitoblar</span>, maqolalar va ta'limiy resurslar qo'shib boradi.{" "}
            <span className="text-yellow-300 font-bold">O'zingiz yoqtirgan janrni tanlang</span> va bilimingizni yanada boyiting.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
