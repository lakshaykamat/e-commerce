"use client"
import  { useEffect, useState } from "react";
import Image from "next/image";
import { FcNext, FcPrevious } from "react-icons/fc";
import { carouselData } from "../data";



const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === carouselData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? carouselData.length - 1 : prevSlide - 1
    );
  };

  // Autoplay settings
  const autoplayInterval = 5000;

  useEffect(() => {
    const autoplayTimer = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => clearInterval(autoplayTimer);
  }, [currentSlide,setCurrentSlide]);

  return (
    <div className="bg-slate-100 relative drop-shadow">
      <button
        onClick={prevSlide}
        className="carousel-btn p-1 bg-blue-100 absolute top-1/2 left-5  prev-btn transition-transform transform hover:scale-105"
      >
        <FcPrevious className="w-6 h-6 sm:w-12 sm:h-12" />
      </button>
      <div  className={`max-w-7xl flex flex-col sm:flex-row  gap-10 justify-center items-center py-12 mx-auto`}>
        <Image
          src={`/assets/${carouselData[currentSlide].image}`}
          width={300}
          height={300}
          alt="Banner Image"
        />
        <div className="flex px-16 flex-col gap-4">
          <h1 className="text-5xl font-bold">
            {carouselData[currentSlide].heading}
          </h1>
          <p>{carouselData[currentSlide].description}</p>
          <button className="w-fit px-3 py-2 text-white rounded-md bg-blue-500 transition transform hover:scale-105">
            {carouselData[currentSlide].buttonLabel}
          </button>
        </div>
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 bg-blue-100 p-1 carousel-btn next-btn transition-transform transform hover:scale-105"
      >
        <FcNext className="w-6 h-6 sm:w-12 sm:h-12" />
      </button>
    </div>
  );
};

export default Carousel;
