"use client"

import { useState, useEffect } from "react"
import "../styles/carousel.css"

const carouselItems = [
  {
    id: 1,
    image: "/images/bonds-banner.png",
    alt: "Get Fixed Returns with Bonds",
  },
  {
    id: 2,
    image: "/images/credit-score-banner.png",
    alt: "Get Credit Score Report Free",
  },
  {
    id: 3,
    image: "/images/personal-loan-banner.png",
    alt: "Get Personal Loan up to 50 Lakhs",
  },
  {
    id: 4,
    image: "/images/cashback-banner.png",
    alt: "Earn Cashback on Credit Card Spends",
  },
]

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlay])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length)
    setIsAutoPlay(false)
    setTimeout(() => setIsAutoPlay(true), 5000)
  }

  return (
    <div className="carousel">
      <div className="carousel-main">
        {carouselItems.map((item, index) => (
          <div key={item.id} className={`carousel-slide ${index === currentIndex ? "active" : ""}`}>
            <img src={item.image || "/placeholder.svg"} alt={item.alt} className="carousel-full-image" />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="carousel-dots">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
        ‹
      </button>
      <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
        ›
      </button>
    </div>
  )
}
