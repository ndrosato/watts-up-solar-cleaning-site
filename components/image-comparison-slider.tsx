"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function ImageComparisonSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  const updateSliderPosition = (clientX: number) => {
    if (!sliderRef.current) return

    const rect = sliderRef.current.getBoundingClientRect()
    const offset = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (offset / rect.width) * 100

    setSliderPosition(percentage)
  }

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e.clientX)
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging) {
      updateSliderPosition(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener("mouseup", handleGlobalMouseUp)
    return () => {
      window.removeEventListener("mouseup", handleGlobalMouseUp)
    }
  }, [])

  return (
    <div
      ref={sliderRef}
      className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-xl cursor-ew-resize"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchStart={handleMouseDown}
      onTouchEnd={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (Clean Panels) - Left Side */}
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/images/solar-panels-before-after.png"
          alt="Clean solar panels after professional cleaning"
          fill
          className="object-cover object-right"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-blue-500/20 p-4">
          <span className="rounded bg-blue-600/90 px-4 py-2 text-xl font-bold text-white">AFTER</span>
        </div>
      </div>

      {/* Before Image (Dirty Panels) - Right Side */}
      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <Image
          src="/images/solar-panels-before-after.png"
          alt="Dirty solar panels before cleaning"
          fill
          className="object-cover object-left"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 p-4">
          <span className="rounded bg-black/70 px-4 py-2 text-xl font-bold text-white">BEFORE</span>
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white z-10 cursor-ew-resize"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white font-bold px-4 py-1 rounded-full text-sm z-20 pointer-events-none">
          Drag
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-white">
        <span className="rounded bg-black/50 px-2 py-1">Drag slider to compare</span>
      </div>
    </div>
  )
}

