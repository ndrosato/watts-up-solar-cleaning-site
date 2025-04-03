import Image from "next/image"

export default function ServiceAreaMap() {
  return (
    <div className="relative w-full h-[500px] bg-white overflow-hidden rounded-lg">
      <Image
        src="/images/sydney-stylized-map.png"
        alt="Solar panel cleaning service areas in Sydney including Northern Beaches, North Shore, Eastern Suburbs, Inner West, Western Sydney, and Sutherland Shire"
        fill
        className="object-contain"
        priority
      />

      {/* Service areas legend */}
      <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-md shadow-md">
        <h4 className="text-base font-semibold mb-2">Service Areas</h4>
        <ul className="space-y-1 text-sm text-gray-700">
          <li>Northern Beaches</li>
          <li>North Shore</li>
          <li>Eastern Suburbs</li>
          <li>Inner West</li>
          <li>Western Sydney</li>
          <li>Sutherland Shire</li>
        </ul>
      </div>
    </div>
  )
}

