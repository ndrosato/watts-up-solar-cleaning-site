import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Sun, CloudRain, Cloud, Wind, Snowflake, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WeatherEffectsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Featured Image */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kjweKGGOMJstkjML2hcngT87GOCwEE.png"
          alt="Solar panels under different weather conditions"
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
              How Weather Affects Solar Panel Efficiency
            </h1>
            <h2 className="mb-4 text-xl text-gray-700 md:text-2xl">
              And Why Regular Cleaning & Maintenance Matters More Than You Think
            </h2>
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime="2023-05-28">May 28, 2023</time>
            </div>
          </div>

          {/* Blog Content */}
          <article className="mx-auto max-w-3xl space-y-6 text-lg">
            <p>
              If you've installed solar panels, you already know it's a smart, sustainable move—both for your wallet and
              the planet. But while solar systems are designed to last for decades, many people don't realise just how
              much weather conditions can impact their performance.
            </p>

            <p>
              In this article, we'll break down how different weather affects solar panel efficiency—and why regular
              cleaning and maintenance is key to keeping your system running at full power all year round.
            </p>

            <div className="rounded-lg bg-yellow-50 p-6">
              <div className="flex items-center">
                <Sun className="mr-3 h-8 w-8 text-yellow-500" />
                <h2 className="text-2xl font-bold text-gray-900">Sunny Days – Your Solar Sweet Spot</h2>
              </div>
              <p className="mt-3">
                Solar panels love direct sunlight. It's when they operate at their peak and generate the most
                electricity. But here's something surprising: solar panels don't love heat.
              </p>
              <p className="mt-3">
                Once temperatures soar past 25°C, panel efficiency can actually drop slightly. Dust, bird droppings, and
                other buildup can also block sunlight from reaching the cells, reducing output—even on the sunniest
                days.
              </p>
              <div className="mt-4 rounded-md bg-blue-100 p-4">
                <p className="font-medium text-blue-800">
                  <span className="font-bold">Our Tip:</span> Clean panels = more sunlight = more energy. A professional
                  clean will remove layers of grime that a hose or rain simply won't fix.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6">
              <div className="flex items-center">
                <CloudRain className="mr-3 h-8 w-8 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900">Rain – Helpful, But Not Enough</h2>
              </div>
              <p className="mt-3">
                Rain does offer a light rinse, but think of it like a splash of water on a dirty windscreen. It might
                help, but it won't remove baked-on dirt, salt from coastal air, or bird mess. These stick around and
                gradually lower your panel's performance.
              </p>
              <div className="mt-4 rounded-md bg-blue-100 p-4">
                <p className="font-medium text-blue-800">
                  <span className="font-bold">Our Tip:</span> Don't wait for rain. We recommend scheduled cleanings,
                  especially after long dry spells, bushfire seasons, or heavy storms.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center">
                <Cloud className="mr-3 h-8 w-8 text-gray-500" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Cloudy & Overcast Weather – Still Working, Just Slower
                </h2>
              </div>
              <p className="mt-3">
                Solar panels don't shut off when the sky goes grey. They still work—just at reduced capacity (think
                10–60% of typical output). The real problem is if your panels are already dirty. On cloudy days, dirty
                panels struggle even more to absorb what little light is available.
              </p>
              <div className="mt-4 rounded-md bg-blue-100 p-4">
                <p className="font-medium text-blue-800">
                  <span className="font-bold">Our Tip:</span> A clean panel captures more light, even on overcast
                  days—helping you make the most of Sydney's varied climate.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-gray-50 p-6">
              <div className="flex items-center">
                <Wind className="mr-3 h-8 w-8 text-gray-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Wind, Dust & Storms – The Silent Performance Killers
                </h2>
              </div>
              <p className="mt-3">
                Strong winds can whip up dust, salt, pollen, and leaves—all of which settle on your panels. Over time,
                this debris forms a thin film that blocks light and reduces efficiency. Storms can also shift panel
                angles or wiring, and debris may cause micro-scratches.
              </p>
              <div className="mt-4 rounded-md bg-blue-100 p-4">
                <p className="font-medium text-blue-800">
                  <span className="font-bold">Our Tip:</span> After major storms or high-wind days, consider booking an
                  inspection and clean to ensure everything is safe and operating smoothly.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-6">
              <div className="flex items-center">
                <Snowflake className="mr-3 h-8 w-8 text-blue-500" />
                <h2 className="text-2xl font-bold text-gray-900">Cool Weather – Great for Panels (Until It Snows)</h2>
              </div>
              <p className="mt-3">
                While we don't deal with heavy snow in Sydney, solar panels actually work best in cool temperatures with
                clear sunlight. But even in mild winters, grime builds up from damp air, chimney smoke, or shaded trees.
              </p>
              <div className="mt-4 rounded-md bg-blue-100 p-4">
                <p className="font-medium text-blue-800">
                  <span className="font-bold">Our Tip:</span> Give your panels a good post-winter clean to clear away
                  seasonal buildup.
                </p>
              </div>
            </div>

            <div className="rounded-lg bg-red-50 p-6">
              <h2 className="text-2xl font-bold text-gray-900">Why It All Comes Down to Maintenance</h2>
              <p className="mt-3">
                Weather isn't something you can control—but maintenance is. A well-maintained solar system can deliver
                20–30% more efficiency than a neglected one.
              </p>
              <p className="mt-3">At Watts Up Solar Cleaning, we specialise in:</p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Residential & commercial solar panel cleaning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Bird proofing and debris removal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Scheduled maintenance programs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-green-500" />
                  <span>Performance reports so you know your system's health</span>
                </li>
              </ul>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Stay Efficient Year-Round</h2>
            <p>
              Whether you've got a few panels on your home or a large commercial array, weather will impact performance.
              But you don't have to let it steal your savings.
            </p>

            <div className="mt-10 rounded-lg bg-blue-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Ready to maximize your solar investment?</h3>
              <p className="mb-4">
                Book your solar panel clean or inspection today and make sure your system is ready for whatever the
                forecast brings.
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

