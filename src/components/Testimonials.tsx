// components/Testimonials.tsx
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    quote:
      "Harshi's DreamyPix made our baby's photoshoot an unforgettable experience. The themes and props were adorable!",
    name: "Ananya Gupta",
    image: "/images/client1.jpg",
  },
  {
    quote:
      "The maternity photoshoot was magical. The team was professional, and the photos turned out stunning!",
    name: "Priya Sharma",
    image: "/images/client2.jpg",
  },
  {
    quote:
      "Our couple photoshoot was beyond our expectations. The studio's ambiance and creativity were top-notch!",
    name: "Rahul and Anjali",
    image: "/images/client3.jpg",
  },
  {
    quote:
      "Shooting at Harshi's DreamyPix was an amazing experience. The studio's creativity and professionalism are unmatched.",
    name: "Bollywood Actor Name",
    image: "/images/celebrity1.jpg",
  },
  {
    quote:
      "I loved the themed sets and the attention to detail. Harshi's DreamyPix truly brings dreams to life.",
    name: "Bollywood Actor Name",
    image: "/images/celebrity2.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-ivory py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal text-center mb-8">
          What Our Clients Say
        </h2>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          showIndicators={true}
          showThumbs={false}
          interval={5000}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mb-4 object-cover"
              />
              <p className="text-lg md:text-xl text-charcoal italic mb-4">
                "{testimonial.quote}"
              </p>
              <p className="text-md font-bold text-lavender">
                - {testimonial.name}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
