// components/FeaturedServices.tsx
import React from "react";

const services = [
  {
    title: "Infant Photoshoots",
    description:
      "Capture the early days and precious moments of your newborn with our creative themes and props.",
    image: "/images/infant.jpg",
  },
  {
    title: "Pregnancy Photoshoots",
    description:
      "Celebrate the beautiful journey of motherhood with our elegant and thematic pregnancy photography.",
    image: "/images/pregnancy.jpg",
  },
  {
    title: "Couple Photoshoots",
    description:
      "Create romantic and memorable photoshoots that capture the special bond between you and your partner.",
    image: "/images/couple.jpg",
  },
  {
    title: "Milestone Photoshoots",
    description:
      "Document significant milestones in your baby’s first year, from sitting up and crawling to first steps and birthdays.",
    image: "/images/milestone.jpg",
  },
];

const FeaturedServices = () => {
  return (
    <section className="bg-ivory py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-charcoal text-center mb-8">
          Our Featured Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:scale-105"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-2xl font-serif text-lavender mb-2">
                  {service.title}
                </h3>
                <p className="text-lg text-charcoal">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
