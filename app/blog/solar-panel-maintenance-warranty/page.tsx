import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, Shield, AlertTriangle, CheckCircle, Clock, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SolarMaintenanceWarrantyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Featured Image */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="/images/technician-cleaning-solar-panels.png"
          alt="Professional technician performing solar panel maintenance"
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
              Why Solar Panel Maintenance Is Essential (Even When You Think It's Not)
            </h1>
            <h2 className="mb-4 text-xl text-gray-700 md:text-2xl">
              Protecting Your Warranty and Investment Through Regular Maintenance
            </h2>
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime="2023-04-22">April 22, 2023</time>
            </div>
          </div>

          {/* Blog Content */}
          <article className="mx-auto max-w-3xl space-y-6 text-lg">
            <p>
              You've made a significant investment in solar panels—likely $10,000 to $30,000 for a typical residential
              system. They're designed to last 25-30 years with minimal intervention. So why should you spend money on
              regular maintenance when the rain should wash them clean?
            </p>

            <p>
              This common misconception could be costing you thousands in lost energy production and potentially voiding
              your warranty protection. Let's explore why regular professional maintenance isn't just an optional
              extra—it's essential protection for your solar investment.
            </p>

            <div className="my-8 rounded-lg bg-red-50 p-6">
              <div className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 h-6 w-6 text-red-600" />
                <div>
                  <h3 className="text-xl font-bold">Warranty Alert</h3>
                  <p className="text-gray-700">
                    Did you know? Most solar panel manufacturers require documented regular maintenance to keep your
                    warranty valid. Without it, you could be left covering the full cost of repairs or replacements.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">The Hidden Warranty Requirements</h2>
            <p>
              When you purchased your solar system, it came with impressive warranty coverage—typically 10-12 years for
              product defects and 25-30 years for performance. What many solar owners don't realize is that these
              warranties come with maintenance requirements buried in the fine print.
            </p>

            <p>Most major manufacturers including LG, SunPower, Jinko, and Canadian Solar require:</p>
            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>Regular cleaning (typically 2-4 times per year depending on your location)</li>
              <li>Professional inspection of mounting hardware and electrical connections</li>
              <li>Documentation of maintenance for warranty claims</li>
              <li>Use of approved cleaning methods and materials</li>
            </ul>

            <p className="mt-4">
              Failing to meet these requirements can give manufacturers grounds to deny warranty claims—potentially
              leaving you to cover thousands in repair or replacement costs.
            </p>

            <div className="my-8 rounded-lg bg-blue-50 p-6">
              <div className="flex items-start">
                <Shield className="mr-3 mt-1 h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold">Warranty Protection Tip</h3>
                  <p className="text-gray-700">
                    Always keep records of professional maintenance visits. At Watts Up Solar Cleaning, we provide
                    detailed maintenance reports after every service that document the condition of your panels,
                    cleaning performed, and any issues identified—perfect documentation for warranty claims.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">"But My Panels Look Clean From the Ground..."</h2>
            <p>
              One of the most common objections we hear is: "My panels look clean from the ground, so they don't need
              cleaning." This visual assessment is dangerously misleading for several reasons:
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Invisible Contaminants:</strong> A thin layer of dust, pollen, or pollution can reduce
                  efficiency by 5-10% without being visible from the ground
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Edge Soiling:</strong> Dirt often accumulates at panel edges, creating "dead zones" that
                  affect the entire panel string
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Bird Droppings:</strong> Even small spots can create hot spots that damage cells and reduce
                  output
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Salt Film:</strong> Coastal homes develop a nearly invisible salt film that significantly
                  reduces light transmission
                </span>
              </li>
            </ul>

            <div className="my-8 rounded-lg bg-yellow-50 p-6">
              <div className="flex items-start">
                <Zap className="mr-3 mt-1 h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="text-xl font-bold">Performance Impact</h3>
                  <p className="text-gray-700">
                    Our customers are often shocked to see their energy production increase by 15-30% after professional
                    cleaning—even when they thought their panels looked "clean enough."
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">"Doesn't Rain Clean My Panels?"</h2>
            <p>
              Another common misconception is that rain keeps panels clean. While rain does help with loose dust, it's
              far from sufficient for several reasons:
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Mineral Deposits:</strong> Rain leaves behind mineral deposits as it dries, creating a film
                  that blocks sunlight
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Stubborn Contaminants:</strong> Bird droppings, tree sap, and pollen are sticky and won't wash
                  away with rain
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Insufficient Pressure:</strong> Rain lacks the pressure needed to properly clean panels,
                  especially on low-pitch roofs
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Irregular Coverage:</strong> Rain doesn't clean evenly, leaving streaks and spots
                </span>
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">
              Beyond Cleaning: What Professional Maintenance Includes
            </h2>
            <p>
              Professional solar maintenance isn't just about cleaning—it's a comprehensive service that protects your
              entire system:
            </p>

            <div className="my-8 grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border p-4 shadow-sm">
                <div className="mb-3 flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-blue-600" />
                  <h3 className="font-bold">System Inspection</h3>
                </div>
                <p className="text-gray-700">
                  Checking for loose mounting hardware, damaged frames, and potential water ingress points that could
                  lead to serious problems.
                </p>
              </div>

              <div className="rounded-lg border p-4 shadow-sm">
                <div className="mb-3 flex items-center">
                  <Zap className="mr-2 h-5 w-5 text-blue-600" />
                  <h3 className="font-bold">Performance Verification</h3>
                </div>
                <p className="text-gray-700">
                  Measuring output before and after cleaning to document the improvement and identify any
                  underperforming panels.
                </p>
              </div>

              <div className="rounded-lg border p-4 shadow-sm">
                <div className="mb-3 flex items-center">
                  <AlertTriangle className="mr-2 h-5 w-5 text-blue-600" />
                  <h3 className="font-bold">Issue Identification</h3>
                </div>
                <p className="text-gray-700">
                  Spotting microcracks, hot spots, or damaged cells that might be reducing performance or posing safety
                  risks.
                </p>
              </div>

              <div className="rounded-lg border p-4 shadow-sm">
                <div className="mb-3 flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-blue-600" />
                  <h3 className="font-bold">Preventative Care</h3>
                </div>
                <p className="text-gray-700">
                  Addressing issues before they become major problems, potentially saving thousands in repair costs.
                </p>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">The Real Cost of Neglect</h2>
            <p>
              Skipping regular maintenance might seem like a cost-saving measure, but the financial reality tells a
              different story:
            </p>

            <div className="my-6 overflow-hidden rounded-lg border">
              <table className="w-full border-collapse">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border-b p-3 text-left">Issue</th>
                    <th className="border-b p-3 text-left">Potential Cost</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-3">Lost energy production (15-30%)</td>
                    <td className="p-3">$300-$600 per year</td>
                  </tr>
                  <tr>
                    <td className="p-3">Voided warranty claim</td>
                    <td className="p-3">$1,000-$5,000+ per incident</td>
                  </tr>
                  <tr>
                    <td className="p-3">Premature panel replacement</td>
                    <td className="p-3">$300-$500 per panel</td>
                  </tr>
                  <tr>
                    <td className="p-3">Reduced system lifespan</td>
                    <td className="p-3">$5,000-$15,000 over time</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Compare these potential costs to professional maintenance at $150-$300 per service (2-4 times per year),
              and the value becomes clear. Regular maintenance isn't an expense—it's an investment that pays for itself
              many times over.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">How Often Should You Schedule Maintenance?</h2>
            <p>The optimal maintenance schedule depends on your specific situation:</p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Standard Recommendation:</strong> 2-3 times per year for most Sydney homes
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Coastal Properties:</strong> 3-4 times per year due to salt spray
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Near Trees or High Pollen:</strong> 3-4 times per year
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Industrial Areas:</strong> 4 times per year due to pollution
                </span>
              </li>
            </ul>

            <p className="mt-4">
              At Watts Up Solar Cleaning, we offer customized maintenance plans based on your specific location, system
              type, and environmental factors to ensure optimal performance while meeting warranty requirements.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Conclusion: Protect Your Investment</h2>
            <p>
              Your solar system represents a significant investment designed to provide decades of clean energy and
              financial savings. Regular professional maintenance isn't an optional extra—it's essential protection for
              that investment.
            </p>

            <p>
              By maintaining your system properly, you're not just keeping your warranty valid and maximizing energy
              production—you're ensuring your system reaches its full 25-30 year potential lifespan, delivering the best
              possible return on your investment.
            </p>

            <div className="mt-10 rounded-lg bg-blue-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Ready to protect your solar investment?</h3>
              <p className="mb-4">
                Contact us today to schedule a professional maintenance service or learn about our customized
                maintenance plans that keep your system performing at its best while maintaining warranty compliance.
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

