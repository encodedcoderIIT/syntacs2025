"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Carousel.module.css";

export default function Carousel() {
  const slides = [
    {
      src: "/assets/carousels/carousel-1.png",
      alt: "Carousel Image 1",
    },
    {
      src: "/assets/carousels/carousel-2.png",
      alt: "Carousel Image 2",
    },
    {
      src: "/assets/carousels/carousel-3.png",
      alt: "Carousel Image 3",
    },
    {
      src: "/assets/carousels/carousel-4.png",
      alt: "Carousel Image 4",
    },
    {
      src: "/assets/carousels/carousel-5.png",
      alt: "Carousel Image 5",
    },
    {
      src: "/assets/carousels/carousel-6.png",
      alt: "Carousel Image 6",
    },
    // {
    //   src: "/assets/carousels/carousel-7.png",
    //   alt: "Carousel Image 7",
    // },
    // {
    //   src: "/assets/carousels/carousel-8.png",
    //   alt: "Carousel Image 8",
    // },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Simple auto-play for demonstration
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.slide} ${
              index === activeIndex ? styles.active : ""
            }`}
          >
            <Image
              width={800}
              height={600}
              className={styles.image}
              src={slide.src}
              alt={slide.alt}
            />
          </div>
        ))}
      </div>
      <div className={styles.textOverlay}>
        <h1>SYNTACS 2025</h1>
        <h4>
          Department of Computer Science &amp; Engineering, IIT Ropar | 8
          <sup>th</sup> March 2025
        </h4>
      </div>
    </div>
  );
}
