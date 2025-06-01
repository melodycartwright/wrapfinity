
import React from "react";
//replace later with images
const galleryImages = [
  "/images/wrap1.jpg",
  "/images/wrap2.jpg",
  "/images/wrap3.jpg",
  "/images/wrap4.jpg",
  "/images/wrap5.jpg",
  "/images/wrap6.jpg",
];

const Gallery = () => {
  return (
    <section className="bg-white py-20 px-6" id="gallery">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Gallery</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {galleryImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Wrapped vehicle ${index + 1}`}
              className="rounded-lg shadow hover:scale-105 transition-transform duration-300 object-cover h-60 w-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
