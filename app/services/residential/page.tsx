import Image from "next/image"
import {
  CheckCircle,
  FileText,
  Camera,
  BarChart2,
  Droplets,
  Search,
  ClipboardList,
  Calendar,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function ResidentialCleaningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image
            src="/images/technician-cleaning-solar-panels.png"
            alt="Technician cleaning residential solar panels"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Residential Solar Panel Cleaning
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Professional, eco-friendly cleaning services to maximize your home solar system's efficiency and lifespan.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Maximize Your Solar Investment</h2>
            <p className="mb-6 text-lg text-gray-700">
              Your solar panels represent a significant investment in sustainable energy and long-term savings. But did
              you know that dirty panels can reduce your system's efficiency by up to 30%? That's money literally
              disappearing from your pocket every sunny day.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              At Watts Up Solar Cleaning, we specialize in professional residential solar panel cleaning that restores
              your system to peak performance. Our thorough cleaning process removes all dirt, dust, bird droppings,
              salt spray, and other contaminants that block precious sunlight from reaching your panels.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <BarChart2 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Boost Efficiency</h3>
                <p className="text-gray-600">
                  Increase energy production by up to 30% with professionally cleaned panels.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Extend Lifespan</h3>
                <p className="text-gray-600">Prevent permanent damage and maintain manufacturer warranty compliance.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Regular Maintenance</h3>
                <p className="text-gray-600">Schedule routine cleanings to ensure consistent performance year-round.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Our Professional Cleaning Process
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Initial Assessment</h3>
                  <p className="text-lg text-gray-700">
                    We begin with a thorough inspection of your solar system, checking for any damage, identifying areas
                    of heavy soiling, and assessing access requirements. This helps us determine the best cleaning
                    approach for your specific setup.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Performance Measurement</h3>
                  <p className="text-lg text-gray-700">
                    Before cleaning, we take baseline performance readings from your system to document the current
                    output. This allows us to quantify the improvement after cleaning.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Eco-Friendly Cleaning</h3>
                  <p className="text-lg text-gray-700">
                    We use specialized equipment and purified water systems to gently but effectively remove all dirt
                    and contaminants. Our cleaning solutions are 100% biodegradable and safe for your panels, your
                    property, and the environment.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Detailed Inspection</h3>
                  <p className="text-lg text-gray-700">
                    After cleaning, we conduct a thorough inspection of your panels, checking for any damage,
                    microcracks, or issues that might affect performance. We also inspect mounting hardware, wiring, and
                    other components.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Performance Verification</h3>
                  <p className="text-lg text-gray-700">
                    We take post-cleaning performance readings to document the improvement in your system's output. Most
                    customers see a 15-30% increase in energy production after our professional cleaning.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">6</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Comprehensive Report</h3>
                  <p className="text-lg text-gray-700">
                    We provide you with a detailed report documenting the before and after condition of your system,
                    performance improvements, any issues identified, and recommendations for future maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Report Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Your Detailed Cleaning Report
            </h2>

            <p className="mb-8 text-center text-lg text-gray-700">
              Every residential cleaning includes a comprehensive report documenting the service and results:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <FileText className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Client & Job Info</h3>
                </div>
                <p className="text-gray-700">
                  Complete details including name, address, date, technician, weather conditions, and job ID for your
                  records.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <ClipboardList className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">System Overview</h3>
                </div>
                <p className="text-gray-700">
                  Documentation of your system specifications including number of panels, system size, inverter/brand,
                  and roof type.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Camera className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Before & After Photos</h3>
                </div>
                <p className="text-gray-700">
                  Visual documentation of your panels before and after cleaning, inverter/output screen readings, and
                  optional drone or close-up shots of any issues.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <BarChart2 className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Performance Readings</h3>
                </div>
                <p className="text-gray-700">
                  Detailed measurements of output before and after cleaning, with percentage improvement calculations
                  where measurable.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Droplets className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Cleaning Summary</h3>
                </div>
                <p className="text-gray-700">
                  Description of cleaning methods used, time spent, and any access or safety challenges encountered
                  during the service.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Search className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Inspection Notes</h3>
                </div>
                <p className="text-gray-700">
                  Detailed observations about panel condition, bird nests, debris, and any gutter or frame issues that
                  may require attention.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-lg bg-blue-50 p-8">
              <h3 className="mb-4 text-center text-xl font-bold">Maintenance Recommendations</h3>
              <p className="mb-6 text-center text-lg text-gray-700">
                Every report includes personalized recommendations for your next cleaning schedule and maintenance tips
                to keep your system performing at its best between professional cleanings.
              </p>
              <div className="flex justify-center">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-If3ooSgNXZqj2tM2Ve3Hy4Ib4PJQaQ.png"
                  alt="Detailed solar panel maintenance report showing inspection findings, bird nesting issues, and performance improvements after cleaning"
                  width={500}
                  height={700}
                  className="rounded-lg shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Friendly Approach */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Our Eco-Friendly Approach
            </h2>

            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-xl font-bold">Environmentally Responsible Cleaning</h3>
                <p className="text-lg text-gray-700">
                  At Watts Up Solar Cleaning, we're committed to environmental sustainability in everything we do. After
                  all, your choice to install solar panels was partly about reducing your environmental footprint—and
                  our cleaning services should support that goal.
                </p>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Biodegradable, phosphate-free cleaning solutions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Water-efficient purified water systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>No harsh chemicals that could damage your roof or garden</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Responsible waste management practices</span>
                  </li>
                </ul>
              </div>
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eFuQZqSsulPaiXcv9CLDz1ck5G5fZ4.png"
                  alt="Eco-friendly solar panel cleaning with water-fed pole system on a tiled roof"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-lg bg-green-50 p-8">
              <h3 className="mb-4 text-center text-xl font-bold text-green-800">Our Environmental Commitment</h3>
              <p className="text-center text-lg text-green-700">
                By choosing Watts Up Solar Cleaning, you're not just maximizing your energy production—you're also
                supporting environmentally responsible business practices that protect our planet for future
                generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Why Choose Watts Up Solar Cleaning
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Specialized Expertise</h3>
                <p className="text-gray-700">
                  We focus exclusively on solar panel cleaning, with specialized training, equipment, and techniques
                  designed specifically for residential solar systems.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Fully Insured</h3>
                <p className="text-gray-700">
                  Our comprehensive insurance coverage protects your property and gives you peace of mind throughout the
                  cleaning process.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Warranty-Safe Methods</h3>
                <p className="text-gray-700">
                  Our cleaning techniques comply with manufacturer guidelines to ensure your warranty remains valid
                  while achieving optimal results.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Transparent Reporting</h3>
                <p className="text-gray-700">
                  Our detailed reports show you exactly what we did, what we found, and the measurable improvement in
                  your system's performance.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Flexible Scheduling</h3>
                <p className="text-gray-700">
                  We offer convenient appointment times and maintenance plans that fit your schedule and budget.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Local Expertise</h3>
                <p className="text-gray-700">
                  As a Sydney-based company, we understand local environmental conditions and how they affect your solar
                  panels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Boost Your Solar Performance?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Schedule your professional residential solar panel cleaning today and start getting the most out of your
              solar investment.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-gray-200">
              {[
                {
                  question: "How often should I have my residential solar panels cleaned?",
                  answer:
                    "For most Sydney homes, we recommend professional cleaning 2-3 times per year. However, this can vary based on your location, nearby trees, bird activity, and local environmental conditions. Homes near the coast or in areas with high pollution may require more frequent cleaning.",
                },
                {
                  question: "Will cleaning really make a difference to my energy production?",
                  answer:
                    "Absolutely. Independent studies show that dirty solar panels can lose 15-30% of their efficiency. Our customers typically see a 20-25% increase in energy production after a professional clean, which translates directly to savings on your electricity bill.",
                },
                {
                  question: "Is it safe to clean solar panels myself?",
                  answer:
                    "While DIY cleaning is possible, we don't recommend it for several reasons: risk of personal injury from working at heights, potential damage to expensive panels from improper cleaning methods, and often incomplete results that don't fully restore performance. Our technicians are fully trained, insured, and use specialized equipment.",
                },
                {
                  question: "How long does a residential cleaning service take?",
                  answer:
                    "A typical residential system (10-20 panels) takes about 1-2 hours to clean thoroughly, inspect, and document. Larger systems or those with difficult access may take longer.",
                },
                {
                  question: "Do you offer maintenance plans?",
                  answer:
                    "Yes, we offer scheduled maintenance plans that provide regular cleanings at discounted rates. These plans ensure your system stays at peak performance year-round and can be customized to your specific needs and budget.",
                },
              ].map((faq, index) => (
                <div key={index} className="py-6">
                  <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

