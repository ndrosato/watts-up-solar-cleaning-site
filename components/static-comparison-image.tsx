import Image from "next/image"

export default function StaticComparisonImage() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden rounded-lg shadow-xl">
      <Image
        src="/images/solar-panels-comparison.png"
        alt="Before and after solar panel cleaning comparison in Sydney showing 30% efficiency improvement"
        fill
        className="object-cover"
        priority
      />

      {/* Optional labels for clarity */}
      <div className="absolute bottom-4 left-8">
        <span className="rounded bg-blue-600/90 px-3 py-1 text-sm font-bold text-white">CLEAN</span>
      </div>

      <div className="absolute bottom-4 right-8">
        <span className="rounded bg-black/70 px-3 py-1 text-sm font-bold text-white">DIRTY</span>
      </div>
    </div>
  )
}

