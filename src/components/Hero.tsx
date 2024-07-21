// components/Hero.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
        className="h-full"
      >
        <div className="relative h-screen">
          <img
            src="/images/hero1.jpg"
            alt="Hero Image 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              Capturing Your Precious Moments
            </h1>
            <p className="text-lg md:text-2xl mb-8">With Creativity and Care</p>
            <a
              href="#services"
              className="bg-mintGreen text-charcoal px-6 py-3 rounded-full font-sans text-lg transition hover:bg-gold"
            >
              Explore Our Services
            </a>
          </div>
        </div>
        <div className="relative h-screen">
          <img
            src="/images/hero2.jpg"
            alt="Hero Image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center text-white px-4">
            <h1 className="text-4xl md:text-6xl font-serif mb-4">
              Elegance in Every Click
            </h1>
            <p className="text-lg md:text-2xl mb-8">
              Experience the Premium Studio
            </p>
            <a
              href="#services"
              className="bg-mintGreen text-charcoal px-6 py-3 rounded-full font-sans text-lg transition hover:bg-gold"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </Carousel>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-4 h-4 bg-lavender rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-mintGreen rounded-full animate-bounce delay-100"></div>
        <div className="w-4 h-4 bg-charcoal rounded-full animate-bounce delay-200"></div>
      </div>
    </section>
  );
};

export default Hero;
