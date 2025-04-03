import Link from "next/link"
import Image from "next/image"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Solar Panel Cleaning Blog | Watts Up Solar Cleaning Sydney",
  description:
    "Expert tips, insights and guides about solar panel maintenance, cleaning and efficiency for Sydney solar system owners.",
}

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "5 Signs Your Solar Panels Need Cleaning",
    excerpt: "Learn the telltale signs that indicate your solar panels are due for a professional clean.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yNGRJdvbD4gnXGM6mHxj9U3xcNbmzw.png",
    date: "June 15, 2023",
    slug: "/blog/5-signs-your-solar-panels-need-cleaning",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How Weather Affects Solar Panel Efficiency",
    excerpt: "Understand how different weather conditions impact your solar energy production throughout the year.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kjweKGGOMJstkjML2hcngT87GOCwEE.png",
    date: "May 28, 2023",
    slug: "/blog/how-weather-affects-solar-panel-efficiency",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Solar Panel Cleaning: DIY vs Professional",
    excerpt: "We compare the pros and cons of DIY cleaning versus hiring professionals for your solar panels.",
    image: "/images/diy-vs-professional-cleaning.png",
    date: "May 10, 2023",
    slug: "/blog/diy-vs-professional",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Why Solar Panel Maintenance Is Essential",
    excerpt: "Discover how regular maintenance protects your warranty and maximizes your solar investment.",
    image: "/images/technician-cleaning-solar-panels.png",
    date: "April 22, 2023",
    slug: "/blog/solar-panel-maintenance-warranty",
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "How Often Should You Clean Your Solar Panels?",
    excerpt: "Find out the optimal cleaning schedule for your solar panels based on your location and environment.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LP72pHz15v8oXotST8QiYt0T6O6Bpp.png",
    date: "April 5, 2023",
    slug: "/blog/how-often-clean-solar-panels",
    readTime: "4 min read",
  },
  {
    id: 6,
    title: "The Environmental Impact of Clean Solar Panels",
    excerpt: "Discover how regular solar panel cleaning contributes to a greener planet and higher energy efficiency.",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JWwNmjouXTZuh7hNk4ARWOMTD3z6io.png",
    date: "March 18, 2023",
    slug: "/blog/environmental-impact-clean-solar-panels",
    readTime: "5 min read",
  },
]

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center text-white md:px-6">
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Our Blog</h1>
          <p className="mx-auto max-w-2xl text-lg text-blue-100">
            Expert tips, insights, and news about solar panel maintenance and efficiency
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                <Link href={post.slug} className="relative block h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-2 flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-4 w-4" />
                    <time dateTime={post.date}>{post.date}</time>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h2 className="mb-2 text-xl font-bold leading-tight">
                    <Link href={post.slug} className="text-gray-900 hover:text-blue-600">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mb-4 flex-1 text-gray-600">{post.excerpt}</p>
                  <Link href={post.slug} className="inline-flex items-center text-blue-600 hover:text-blue-800">
                    Read more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-1 h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center flex flex-col items-center justify-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900">Subscribe to Our Newsletter</h2>
            <p className="mb-8 text-lg text-gray-600">
              Get the latest solar panel maintenance tips, industry news, and special offers delivered to your inbox.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:max-w-md"
              />
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto">Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight">Ready to Boost Your Solar Efficiency?</h2>
            <p className="mb-8 text-lg text-blue-100">
              Our professional cleaning services can increase your energy production by up to 30%.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

