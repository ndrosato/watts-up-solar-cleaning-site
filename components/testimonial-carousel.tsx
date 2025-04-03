"use client"
import Image from "next/image"
import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Claudia A",
    role: "Homeowner in Northern Beaches",
    image: "/placeholder.svg?height=100&width=100",
    content: "Absolutely great (and affordable) service from these guys every year, I cannot recommend them enough!",
    rating: 5,
  },
  {
    id: 2,
    name: "Gordon Gordish",
    role: "Homeowner in Lawson",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "The professionalism and manner in which the crew conducted their service and business was greatly appreciated.",
    rating: 5,
  },
  {
    id: 3,
    name: "Darin Webb",
    role: "Business Owner in Parramatta",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Absolutely brilliant company, everything from initial enquiry to completion of work was handled on a professional level. Highly recommended.",
    rating: 5,
  },
  {
    id: 4,
    name: "Andrew Lawson",
    role: "Homeowner in Blue Mountains",
    image: "/placeholder.svg?height=100&width=100",
    content:
      "Would give them 6 stars if it was possible. They are so knowlegable about solar & power consumption that its scary! Couldnt do anymore to help & offered advice/guideance well above what was expected. Use these guys & you are in safe hands.",
    rating: 5,
  },
  {
    id: 5,
    name: "Dave Spencer",
    role: "Homeowner in Central Coast",
    image: "/placeholder.svg?height=100&width=100",
    content: "Nick's knowledge saved my family a lot of money, just wish I had gone to him first, highly recommended.",
    rating: 5,
  },
]

export default function TestimonialCarousel({ limitTestimonials }: { limitTestimonials?: number }) {
  // If limitTestimonials is provided, only show that many testimonials
  const displayedTestimonials = limitTestimonials ? testimonials.slice(0, limitTestimonials) : testimonials

  return (
    <div className="relative mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayedTestimonials.map((testimonial) => (
          <div key={testimonial.id} className="h-full">
            <Card className="h-full border-0 shadow-lg">
              <CardContent className="flex h-full flex-col p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className="mb-6 flex-grow text-gray-700">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}

