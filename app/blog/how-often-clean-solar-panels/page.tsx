import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, MapPin, Cloud, Sun, Leaf, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HowOftenCleanPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Featured Image */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LP72pHz15v8oXotST8QiYt0T6O6Bpp.png"
          alt="Clean solar panels on a tiled roof with sunlight reflection and green trees in background"
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
              How Often Should You Clean Your Solar Panels?
            </h1>
            <h2 className="mb-4 text-xl text-gray-700 md:text-2xl">
              The Definitive Guide to Solar Panel Cleaning Frequency
            </h2>
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime="2023-04-05">April 5, 2023</time>
            </div>
          </div>

          {/* Blog Content */}
          <article className="mx-auto max-w-3xl space-y-6 text-lg">
            <p>
              One of the most common questions we receive from solar system owners is: "How often should I clean my
              solar panels?" It's a great question, and the answer isn't one-size-fits-all. The optimal cleaning
              frequency depends on several factors specific to your location, environment, and system.
            </p>

            <p>
              In this guide, we'll help you determine the ideal cleaning schedule for your solar panels to maximize
              energy production, maintain warranty compliance, and extend the life of your investment.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">The General Rule of Thumb</h2>
            <p>
              For most residential solar systems in Sydney, we recommend professional cleaning 2-4 times per year.
              However, this baseline recommendation should be adjusted based on your specific circumstances.
            </p>

            <div className="my-8 rounded-lg bg-blue-50 p-6">
              <h3 className="mb-4 text-xl font-bold">Quick Reference Guide</h3>
              <div className="overflow-hidden rounded-lg border">
                <table className="w-full border-collapse">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="border-b p-3 text-left">Location/Condition</th>
                      <th className="border-b p-3 text-left">Recommended Cleaning Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    <tr>
                      <td className="p-3">Standard suburban area</td>
                      <td className="p-3">2-3 times per year</td>
                    </tr>
                    <tr>
                      <td className="p-3">Coastal areas (within 5km of ocean)</td>
                      <td className="p-3">3-4 times per year</td>
                    </tr>
                    <tr>
                      <td className="p-3">Near trees or high pollen areas</td>
                      <td className="p-3">3-4 times per year</td>
                    </tr>
                    <tr>
                      <td className="p-3">Industrial areas or high traffic roads</td>
                      <td className="p-3">4 times per year</td>
                    </tr>
                    <tr>
                      <td className="p-3">Rural areas with minimal pollution</td>
                      <td className="p-3">2 times per year</td>
                    </tr>
                    <tr>
                      <td className="p-3">Areas with frequent dust storms</td>
                      <td className="p-3">After each major event + regular schedule</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Location Factors That Affect Cleaning Frequency</h2>

            <div className="space-y-6">
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-start">
                  <MapPin className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Coastal Proximity</h3>
                </div>
                <p>
                  If you live within 5km of the ocean, salt spray is a significant concern. Salt creates a film on your
                  panels that's difficult to see but significantly reduces efficiency. The closer you are to the coast,
                  the more frequently you'll need cleaning—typically every 3 months for beachfront properties.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-start">
                  <Cloud className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Urban/Industrial Areas</h3>
                </div>
                <p>
                  Homes near industrial zones, major highways, or in urban centers with high pollution levels accumulate
                  a layer of particulate matter and grime more quickly. If you're in these areas, quarterly cleaning (4
                  times per year) is often necessary to maintain optimal performance.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-start">
                  <Leaf className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Tree Coverage</h3>
                </div>
                <p>
                  Properties with overhanging trees or surrounded by vegetation face challenges from falling leaves,
                  sap, pollen, and increased bird activity. These conditions typically require cleaning every 3-4
                  months, with additional attention during autumn leaf fall and spring pollen seasons.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-start">
                  <Sun className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Rural/Open Areas</h3>
                </div>
                <p>
                  Rural properties with minimal nearby pollution sources may require less frequent cleaning—often just
                  twice yearly. However, agricultural areas can experience dust from plowing and harvesting, which might
                  necessitate additional cleanings during these seasons.
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">System-Specific Considerations</h2>

            <p>
              Beyond location, your specific solar system has characteristics that affect optimal cleaning frequency:
            </p>

            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>
                <strong>Panel Tilt:</strong> Flatter panels (less than 10° tilt) don't self-clean with rain as
                effectively and typically need more frequent cleaning than steeply tilted panels.
              </li>
              <li>
                <strong>System Age:</strong> Newer panels with advanced anti-soiling coatings may stay cleaner longer
                than older models.
              </li>
              <li>
                <strong>Panel Type:</strong> Some panel technologies (like thin-film) are more sensitive to soiling than
                others.
              </li>
              <li>
                <strong>System Size:</strong> Larger systems with more panels may justify more frequent cleaning as the
                potential energy gains are greater.
              </li>
            </ul>

            <div className="my-8 rounded-lg bg-yellow-50 p-6">
              <div className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="text-xl font-bold">Warranty Considerations</h3>
                  <p className="text-gray-700">
                    Many solar panel manufacturers specify minimum cleaning requirements in their warranty terms. Check
                    your warranty documentation—some require cleaning at least twice yearly to maintain coverage.
                    Professional cleaning with documentation helps ensure warranty compliance.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Seasonal Cleaning Strategy</h2>

            <p>For many Sydney homeowners, a seasonal approach works well:</p>

            <div className="my-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg bg-blue-50 p-4">
                <h4 className="mb-2 font-bold">Early Spring (September)</h4>
                <p className="text-sm">
                  Remove winter grime and prepare for peak solar production season. Addresses buildup from winter storms
                  and pollution.
                </p>
              </div>

              <div className="rounded-lg bg-yellow-50 p-4">
                <h4 className="mb-2 font-bold">Early Summer (December)</h4>
                <p className="text-sm">
                  Clean off spring pollen and ensure maximum efficiency during the highest production months with
                  longest daylight hours.
                </p>
              </div>

              <div className="rounded-lg bg-orange-50 p-4">
                <h4 className="mb-2 font-bold">Autumn (March)</h4>
                <p className="text-sm">
                  Remove summer dust and prepare for autumn. Particularly important if you have deciduous trees nearby.
                </p>
              </div>

              <div className="rounded-lg bg-gray-50 p-4">
                <h4 className="mb-2 font-bold">Mid-Winter (June)</h4>
                <p className="text-sm">
                  Optional for most areas but recommended for coastal or high-pollution zones to maintain efficiency
                  during lower production months.
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Signs Your Panels Need Cleaning</h2>

            <p>Beyond a regular schedule, watch for these indicators that your panels need immediate cleaning:</p>

            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>Visible dirt, dust, or bird droppings when viewing panels from the ground</li>
              <li>Unexplained drop in energy production (check your monitoring system)</li>
              <li>After extended periods without rain</li>
              <li>Following nearby construction, road works, or dust storms</li>
              <li>After heavy bird activity on or near your roof</li>
              <li>Following bushfire season when ash may have settled on panels</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">The Value of Professional Cleaning</h2>

            <p>While some homeowners attempt DIY cleaning, professional service offers several advantages:</p>

            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>
                <strong>Safety:</strong> Eliminates the risk of working at heights on potentially slippery surfaces
              </li>
              <li>
                <strong>Effectiveness:</strong> Specialized equipment and purified water systems remove all contaminants
                without leaving residue
              </li>
              <li>
                <strong>Warranty Protection:</strong> Professional documentation helps maintain manufacturer warranty
                compliance
              </li>
              <li>
                <strong>System Inspection:</strong> Technicians can identify potential issues beyond just dirt
              </li>
              <li>
                <strong>Performance Verification:</strong> Before and after measurements quantify the improvement
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Maintenance Plans: The Hassle-Free Solution</h2>

            <p>
              At Watts Up Solar Cleaning, we offer customized maintenance plans that take the guesswork out of solar
              panel cleaning. Based on your specific location, system characteristics, and environmental factors, we'll
              recommend an optimal cleaning schedule and handle all the details.
            </p>

            <p>Our maintenance plans include:</p>

            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>Scheduled cleanings at the optimal frequency for your system</li>
              <li>Priority booking during peak seasons</li>
              <li>Discounted rates compared to one-off cleanings</li>
              <li>Detailed documentation for warranty purposes</li>
              <li>Regular performance reports tracking efficiency improvements</li>
              <li>Flexibility to add additional cleanings after extreme weather events</li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Conclusion: Finding Your Optimal Schedule</h2>

            <p>
              The right cleaning frequency balances cost with performance benefits. For most Sydney homeowners, 2-4
              professional cleanings per year provides the best return on investment, with specific timing based on your
              local conditions.
            </p>

            <p>
              Remember that regular cleaning isn't just about immediate energy production—it's about protecting your
              long-term investment, maintaining warranty coverage, and ensuring your system reaches its full 25-30 year
              potential lifespan.
            </p>

            <div className="mt-10 rounded-lg bg-blue-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Ready for a customized cleaning schedule?</h3>
              <p className="mb-4">
                Contact us today for a free assessment of your solar system and location. We'll recommend the optimal
                cleaning frequency for your specific situation and provide a no-obligation quote.
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

