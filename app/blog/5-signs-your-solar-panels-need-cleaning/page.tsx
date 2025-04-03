import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CleaningSigns() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Featured Image */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yNGRJdvbD4gnXGM6mHxj9U3xcNbmzw.png"
          alt="Dirty solar panels needing cleaning"
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
          {/* Back to Blog Link */}
          <Link href="/" className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>

          {/* Blog Header */}
          <div className="mb-8 border-b border-gray-200 pb-8">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              5 Signs Your Solar Panels Need Cleaning
            </h1>
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime="2023-06-15">June 15, 2023</time>
            </div>
          </div>

          {/* Blog Content */}
          <article className="mx-auto max-w-3xl space-y-6 text-lg">
            <p>
              Solar panels are a fantastic investment—they save money, reduce your carbon footprint, and increase the
              value of your property. But just like your windows or your car, they need a little TLC to keep performing
              at their best.
            </p>

            <p>
              Whether you're a homeowner or manage a commercial property, keeping your solar panels clean is essential
              for efficiency. Here are five clear signs it's time to book a professional clean:
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">1. Your Power Bill Has Gone Up</h2>
            <p>
              One of the first things people notice is a spike in their electricity bill. If your solar panels aren't
              producing as much power as they used to—and there's no change in weather, usage, or system hardware—it
              might be because they're covered in dirt, dust, or bird droppings. A professional clean can help restore
              their full performance.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">2. You Can See Visible Dirt or Debris</h2>
            <p>
              It might sound obvious, but if you can see grime on your panels from the ground, chances are they're well
              overdue for a clean. Leaves, pollen, salt spray (especially near the coast), and even air pollution can
              create a film that blocks sunlight. A layer of dust can reduce efficiency by up to 30%—and even more if
              there are concentrated spots of grime.
            </p>

            <div className="my-8 rounded-lg bg-blue-50 p-6">
              <p className="text-blue-800 font-medium">
                Did you know? A layer of dust can reduce solar panel efficiency by up to 30%!
              </p>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">
              3. You're Near Construction, Trees, or High-Traffic Areas
            </h2>
            <p>
              Homes or buildings near construction sites, major roads, or industrial areas tend to get dirty faster.
              Dust, smoke, and airborne particles settle on your panels without you even noticing. Similarly, if your
              panels are under or near trees, sap, leaves, and bird mess can pile up quickly. More debris = less
              sunlight = lower output.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">4. It's Been 6+ Months Since Your Last Clean</h2>
            <p>
              Even in ideal conditions, solar panels should be professionally cleaned every 6 to 12 months. It's easy to
              forget—they're up on the roof and out of sight. But like changing your car's oil or servicing your air
              conditioning, regular cleaning is part of routine maintenance that pays off in performance and lifespan.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">5. You're Noticing Patchy Shading or Hot Spots</h2>
            <p>
              If you're using a monitoring system and notice specific panels underperforming, or your installer has
              mentioned "hot spots," dirt could be the culprit. Uneven buildup of grime causes uneven sunlight
              absorption, which leads to inconsistent output and can even damage the panel over time.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Why DIY Isn't Always Enough</h2>
            <p>
              Sure, you could climb up there with a hose and a sponge—but it's risky and might void your warranty.
              Professional solar panel cleaners (like us!) use the right equipment, purified water systems, and
              techniques that are safe, fast, and effective.
            </p>

            <div className="mt-10 rounded-lg bg-blue-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Ready to restore your solar panels to peak performance?</h3>
              <p className="mb-4">
                Our professional cleaning service can increase your energy production by up to 30%. Contact us today for
                a free quote!
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}

