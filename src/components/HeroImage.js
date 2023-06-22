import React, { useState, useEffect } from "react";
import hero from "../Assets/hero.jpg";
import hero2 from "../Assets/hero2.jpg";
import hero3 from "../Assets/hero3.jpg";
import hero4 from "../Assets/hero4.jpg";
import "../css/Hero.css";

export default function HeroImage() {
  const images = [hero, hero2, hero3, hero4];
  const heading = ["Passanger Elevator", "Residential Elevator", "Hospital Elevtor", "Hydraulic Industrial Lift"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, [images.length]);

  return (
    <div>
      <div className="imageContainer">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`heroImage ${index === currentImageIndex ? "active" : ""}`}
            alt={`Image ${index + 1}`}
          />
        ))}
        <div className="imageHeading">
          {heading.map((heading, index) => (
            <p
              key={index}
              className={index === currentImageIndex ? "active" : ""}
            >
              {index === currentImageIndex && heading}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
          }