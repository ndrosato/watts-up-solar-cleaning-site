"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      const position = (x / rect.width) * 100
      setSliderPosition(Math.min(Math.max(position, 0), 100))
    }
  }

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.touches[0].clientX - rect.left
      const position = (x / rect.width) * 100
      setSliderPosition(Math.min(Math.max(position, 0), 100))
    }
  }

  useEffect(() => {
    const handleMouseUpGlobal = () => {
      setIsDragging(false)
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative h-[400px] w-full cursor-ew-resize select-none overflow-hidden"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Dirty Panels) */}
      <div className="absolute inset-0 h-full w-full">
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

      {/* After Image (Clean Panels) */}
      <div className="absolute inset-0 h-full w-full overflow-hidden" style={{ width: `${sliderPosition}%` }}>
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

      {/* Slider */}
      <div
        className="absolute bottom-0 top-0 z-10 w-1 cursor-ew-resize bg-white"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-blue-600 text-white shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 9l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Instructions */}
      <div className="absolute bottom-4 left-0 right-0 text-center text-sm font-medium text-white">
        <span className="rounded bg-black/50 px-2 py-1">Drag slider to compare</span>
      </div>
    </div>
  )
}

