// src/components/CardCarousel.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const CardCarousel = ({ cards }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-16 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Top Chatbot Use Cases
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="rounded-2xl"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="bg-pink-100
             shadow-md p-6 rounded-2xl transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl cursor-pointer">
              <img
                src={card.image}
                alt={card.title}
                className="rounded-lg mb-4 w-full h-60 object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CardCarousel;
