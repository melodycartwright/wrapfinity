// src/sections/Services.jsx
import React from "react";

const services = [
  {
    title: "Full Car Wraps",
    description:
      "Transform your entire vehicle with a high-quality wrap in matte, gloss, or satin finish.",
    icon: "🚗",
  },
  {
    title: "Partial Wraps",
    description:
      "Customize specific areas like hoods, roofs, mirrors, or stripes for a bold look.",
    icon: "🎯",
  },
  {
    title: "Paint Protection Film",
    description:
      "Preserve your vehicle’s original paint with clear, durable protection film.",
    icon: "🛡️",
  },
  {
    title: "Fleet Branding",
    description:
      "Wrap company vehicles with branded graphics to boost business visibility on the road.",
    icon: "🚛",
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-20 px-6" id="services">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Our Services</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
