// components/Introduction.tsx
import React from "react";

const Introduction = () => {
  return (
    <section className="bg-ivory py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img
            src="/images/studio.jpg"
            alt="Studio Image"
            className="rounded-lg shadow-lg transition transform hover:scale-105"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-serif text-charcoal mb-4">
            Welcome to Harshi's DreamyPix
          </h2>
          <p className="text-lg md:text-xl text-charcoal mb-4">
            We specialize in capturing the most precious moments of your life
            with creativity and care. Our premium studio, loved by celebrities,
            is equipped with state-of-the-art facilities and a wide range of
            themes and props to ensure a unique and memorable photoshoot
            experience.
          </p>
          <ul className="list-disc list-inside text-lg text-charcoal">
            <li>Premium studio experience with various themes and props</li>
            <li>High-quality photography equipment and skilled team</li>
            <li>Celebrity clientele adding a touch of glamour</li>
            <li>Comprehensive digital solutions for enhanced convenience</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
