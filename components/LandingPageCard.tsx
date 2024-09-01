"use client"

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"

const images = [
  "national-cancer-institute-xDSD3Vmzh70-unsplash.jpg",
  "outdoor-portrait-of-cheerful-indian-family-sitting-2024-02-13-02-17-57-utc.jpg",
  "one-big-happy-family-cropped-shot-of-a-happy-dive-2023-11-27-04-53-51-utc.jpg"
]

export default function LandingPageCard() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isZoomedIn, setIsZoomedIn] = useState(false)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsZoomedIn(true)
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsZoomedIn(false)
      }, 2700) 
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-all duration-3000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: isZoomedIn ? 'scale(1.1)' : 'scale(1)',
            transition: 'transform 3s ease-in-out, opacity 0.5s ease-in-out',
          }}
        />
      ))}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white p-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-center">Empowering Financial Security For Everyone.</h1>
        <p className="text-xs md:text-xs mb-8 text-center max-w-xl">
          We are commited to provide acessible and reliable financial services to help individuals and families.
        </p>
        <Button size="lg" className="bg-white text-black hover:bg-gray-200">
          Get Started
        </Button>
      </div>
    </div>
  )
}