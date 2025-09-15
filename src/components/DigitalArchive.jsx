import React from "react";
import "./DigitalArchive.css";

const archives = [
  {
    title: "Ancient Manuscript",
    description: "A rare Buddhist scripture preserved from the 17th century.",
    imageUrl:
      "https://www.shutterstock.com/image-photo/prague-czech-republic-may-30-600nw-2515480013.jpg",
  },
  {
    title: "Murals of Rumtek Monastery",
    description:
      "Vibrant mural depicting Buddhist legends, carefully restored.",
    imageUrl: "https://live.staticflickr.com/219/489542472_6e0a530e7b_b.jpg",
  },
  {
    title: "Historical Document",
    description: "Ancient record of monastery construction and history.",
    imageUrl:
      "https://serindia.com/cdn/shop/products/Sikkim00_1200x1200.jpg?v=1621693946",
  },
  {
    title: "Tibetan Thangka",
    description: "Traditional religious painting used in monastery rituals.",
    imageUrl:
      "https://c9admin.cottage9.com/uploads/5116/thangka-painting-as-a-form-of-cultural-expression.jpg",
  },
];

const DigitalArchive = () => {
  return (
    <section className="DigitalArchive" id="digital-archive">
      <h2 className="DigitalArchive__title">Digital Archives</h2>
      <p className="DigitalArchive__description">
        Explore scanned manuscripts, murals, and historical documents digitally
        preserved for posterity.
      </p>

      <div className="DigitalArchive__grid">
        {archives.map((item, index) => (
          <div className="DigitalArchive__card" key={index}>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="DigitalArchive__image"
            />
            <h3 className="DigitalArchive__card-title">{item.title}</h3>
            <p className="DigitalArchive__card-description">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalArchive;
