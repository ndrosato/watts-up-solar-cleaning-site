import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Leaf, Zap, Droplets, BarChart2, CloudRain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function EnvironmentalImpactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Featured Image */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GQ8t8dhMISq6NGNY1D0mcW0XdKRsBo.png"
          alt="Clean solar panels with green landscape in background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-8 md:px-6 md:py-12">
          {/* Back to Blog Link */}
          <Link href="/blog" className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>

          {/* Blog Header */}
          <div className="mb-8 border-b border-gray-200 pb-8">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              The Environmental Impact of Clean Solar Panels
            </h1>
            <h2 className="mb-4 text-xl text-gray-700 md:text-2xl">
              How Regular Cleaning Contributes to a Greener Planet
            </h2>
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime="2023-03-18">March 18, 2023</time>
            </div>
          </div>

          {/* Blog Content */}
          <article className="mx-auto max-w-3xl space-y-6 text-lg">
            <p>
              When you installed solar panels, you made a significant commitment to renewable energy and reducing your
              carbon footprint. But did you know that keeping those panels clean isn't just about saving money—it's also
              about maximizing your positive environmental impact?
            </p>

            <p>
              In this article, we'll explore how regular solar panel cleaning contributes to a greener planet, reduces
              waste, and helps your system deliver on its environmental promise.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">The Environmental Benefits of Solar Energy</h2>
            <p>
              Before diving into the impact of cleaning, let's quickly review why solar energy is so beneficial for our
              planet:
            </p>

            <div className="my-8 grid gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-green-50 p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-green-100 p-3">
                    <Leaf className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-center text-xl font-bold">Reduced Carbon Emissions</h3>
                <p className="text-center text-gray-700">
                  Solar energy produces no direct greenhouse gas emissions during operation.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-green-100 p-3">
                    <Droplets className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-center text-xl font-bold">Water Conservation</h3>
                <p className="text-center text-gray-700">
                  Unlike traditional power plants, solar doesn't require water for cooling or electricity generation.
                </p>
              </div>

              <div className="rounded-lg bg-green-50 p-6">
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-green-100 p-3">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <h3 className="mb-2 text-center text-xl font-bold">Energy Independence</h3>
                <p className="text-center text-gray-700">
                  Reduces reliance on fossil fuels and promotes sustainable energy production.
                </p>
              </div>
            </div>

            <p>
              However, these environmental benefits are directly tied to how efficiently your solar panels operate. This
              is where regular cleaning becomes crucial.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">How Dirty Panels Undermine Environmental Benefits</h2>

            <p>When solar panels become dirty, several environmental consequences occur:</p>

            <div className="my-6 rounded-lg border p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">1. Reduced Clean Energy Production</h3>
              <div className="flex flex-col md:flex-row">
                <div className="mb-4 md:mb-0 md:mr-6 md:w-1/3">
                  <div className="relative h-[200px] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/images/dirty-solar-panels.png"
                      alt="Dirty solar panels with reduced efficiency"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <p>
                    Dirty panels can lose 15-30% of their efficiency. This means that for every 10kW of potential clean
                    energy your system could produce, you're losing 1.5-3kW to dirt and grime.
                  </p>
                  <p className="mt-4">
                    <strong>Environmental Impact:</strong> This lost energy often needs to be compensated for by
                    traditional grid electricity, which typically comes from fossil fuels. In effect, dirty panels
                    indirectly increase carbon emissions.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-6 rounded-lg border p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">2. Shortened Panel Lifespan</h3>
              <p>
                Accumulated dirt, bird droppings, and debris can cause hot spots and permanent damage to solar cells.
                This can significantly reduce the lifespan of your panels.
              </p>
              <p className="mt-4">
                <strong>Environmental Impact:</strong> Solar panels have an embedded carbon footprint from their
                manufacturing process. When panels need to be replaced prematurely, this manufacturing footprint is
                spread over fewer years of clean energy production, reducing the net environmental benefit.
              </p>
              <div className="mt-4 rounded-lg bg-amber-50 p-4">
                <p className="text-amber-800">
                  <strong>Did you know?</strong> The typical carbon payback period for solar panels is 1-2 years. This
                  means it takes 1-2 years of clean energy production to offset the carbon emissions from manufacturing.
                  Maximizing panel lifespan is crucial to optimizing this environmental return on investment.
                </p>
              </div>
            </div>

            <div className="my-6 rounded-lg border p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-bold">3. Increased Water Usage</h3>
              <p>
                When panels become excessively dirty, they often require more intensive cleaning methods and more water
                to restore them to optimal condition.
              </p>
              <p className="mt-4">
                <strong>Environmental Impact:</strong> Regular, light cleaning uses less water overall than occasional
                deep cleaning of heavily soiled panels. Professional cleaning services like ours use water-efficient
                methods and equipment to minimize water usage.
              </p>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">The Environmental Benefits of Clean Panels</h2>

            <div className="my-8 space-y-6">
              <div className="flex items-start">
                <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <BarChart2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Maximized Clean Energy Production</h3>
                  <p className="text-gray-700">
                    Clean panels operate at peak efficiency, producing the maximum amount of renewable energy possible.
                    This directly translates to more fossil fuel-based electricity being displaced by your clean solar
                    power.
                  </p>
                  <p className="mt-2 text-gray-700">
                    A typical 6.6kW residential system in Sydney that's kept clean can generate approximately 9,500 kWh
                    of electricity annually, preventing about 8.2 tonnes of CO2 emissions each year compared to
                    coal-fired electricity.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Extended System Lifespan</h3>
                  <p className="text-gray-700">
                    Regular cleaning prevents the buildup of damaging substances and helps your panels reach their full
                    25-30 year potential lifespan. This maximizes the environmental return on the resources used to
                    manufacture your system.
                  </p>
                  <p className="mt-2 text-gray-700">
                    By extending your system's life from 20 to 30 years through proper maintenance, you're effectively
                    reducing the manufacturing carbon footprint by 33% when calculated on a per-year basis.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                  <CloudRain className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Optimized Water Usage</h3>
                  <p className="text-gray-700">
                    Professional cleaning services use specialized equipment and techniques that minimize water usage
                    while maximizing cleaning effectiveness. Our purified water systems use significantly less water
                    than typical household cleaning methods.
                  </p>
                  <p className="mt-2 text-gray-700">
                    Additionally, regular maintenance cleaning requires less water than removing heavy, baked-on grime
                    that has accumulated over long periods.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Eco-Friendly Cleaning Practices</h2>

            <p>At Watts Up Solar Cleaning, we're committed to environmentally responsible cleaning practices:</p>

            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>
                <strong>Biodegradable Cleaning Solutions:</strong> When cleaning agents are needed, we use only
                biodegradable, phosphate-free products that won't harm your garden or local waterways.
              </li>
              <li>
                <strong>Water Conservation:</strong> Our purified water systems and specialized equipment use minimal
                water while achieving maximum cleaning effectiveness.
              </li>
              <li>
                <strong>No Harsh Chemicals:</strong> We never use harsh chemicals that could damage your panels or harm
                the environment.
              </li>
              <li>
                <strong>Optimized Cleaning Schedule:</strong> We help you establish the ideal cleaning frequency to
                balance water usage with energy production benefits.
              </li>
            </ul>

            <div className="my-8 rounded-lg bg-green-50 p-6">
              <h3 className="mb-4 text-center text-xl font-bold text-green-800">
                The Environmental Math: Clean vs. Dirty Panels
              </h3>
              <p className="text-center text-green-700">
                A typical 6.6kW solar system in Sydney that loses 20% efficiency due to soiling effectively becomes a
                5.3kW system. This represents a loss of approximately 1,900 kWh of clean energy production annually,
                equivalent to adding 1.6 tonnes of CO2 to the atmosphere each year compared to a clean system.
              </p>
              <p className="mt-4 text-center text-green-700">
                Over a 25-year system lifespan, keeping your panels clean could prevent 40 tonnes of additional CO2
                emissions—equivalent to planting about 660 trees.
              </p>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">
              Beyond Energy Production: The Full Environmental Picture
            </h2>

            <p>The environmental benefits of clean solar panels extend beyond just energy production:</p>

            <div className="my-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 shadow-sm">
                <h3 className="mb-2 font-bold">Reduced E-Waste</h3>
                <p className="text-sm text-gray-700">
                  By extending panel lifespan through proper maintenance, you're reducing the amount of electronic waste
                  that will eventually need recycling or disposal.
                </p>
              </div>

              <div className="rounded-lg border p-4 shadow-sm">
                <h3 className="mb-2 font-bold">Lower Resource Consumption</h3>
                <p className="text-sm text-gray-700">
                  Fewer replacement panels means less demand for the raw materials (silicon, aluminum, glass, etc.)
                  needed to manufacture new panels.
                </p>
              </div>

              <div className="rounded-lg border p-4 shadow-sm">
                <h3 className="mb-2 font-bold">Reduced Transportation Emissions</h3>
                <p className="text-sm text-gray-700">
                  Fewer replacement parts means fewer shipping and transportation emissions associated with getting new
                  components to your location.
                </p>
              </div>

              <div className="rounded-lg border p-4 shadow-sm">
                <h3 className="mb-2 font-bold">Maximized Land Use Efficiency</h3>
                <p className="text-sm text-gray-700">
                  By getting more energy from your existing panels, you're maximizing the environmental return on the
                  space your system occupies.
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Conclusion: Clean Panels for a Cleaner Planet</h2>

            <p>
              Regular solar panel cleaning isn't just about saving money on your electricity bill—it's about maximizing
              your contribution to a cleaner, more sustainable planet. By maintaining your panels at peak efficiency,
              you're:
            </p>

            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>Maximizing clean energy production</li>
              <li>Displacing more fossil fuel-generated electricity</li>
              <li>Extending your system's lifespan</li>
              <li>Reducing waste and resource consumption</li>
              <li>Optimizing the environmental return on your solar investment</li>
            </ul>

            <p className="mt-4">
              Your decision to install solar panels was an environmentally responsible choice. Regular professional
              cleaning ensures that choice continues to deliver the maximum environmental benefit possible.
            </p>

            <div className="mt-10 rounded-lg bg-green-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Ready to maximize your environmental impact?</h3>
              <p className="mb-4">
                Contact us today to schedule an eco-friendly professional cleaning or learn about our maintenance plans
                that keep your system performing at its environmental best.
              </p>
              <Button className="bg-white text-green-600 hover:bg-green-50" asChild>
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

