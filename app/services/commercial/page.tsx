import Image from "next/image"
import { CheckCircle, ClipboardList, Calendar, Shield, Building, Users, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CommercialCleaningPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image
            src="/images/commercial-solar-cleaning.png"
            alt="Commercial solar panel cleaning on large building"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Commercial & Strata Solar Cleaning
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Professional, large-scale solar panel cleaning services for businesses, strata properties, and commercial
              buildings.
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
              Maximize Your Commercial Solar Investment
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              Commercial solar installations represent a significant investment in sustainable energy and long-term
              operational cost reduction. However, without proper maintenance, your system's performance can degrade by
              up to 30%, dramatically reducing your return on investment.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              At Watts Up Solar Cleaning, we specialize in commercial and strata solar panel cleaning services designed
              to restore and maintain your system's peak performance. Our commercial-grade equipment and experienced
              technicians can handle installations of any size—from small business rooftops to large industrial arrays.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Building className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Commercial Expertise</h3>
                <p className="text-gray-600">
                  Specialized equipment and techniques for large-scale installations and complex roof structures.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Strata Solutions</h3>
                <p className="text-gray-600">
                  Tailored maintenance programs for multi-unit properties with detailed reporting for all stakeholders.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">ROI Optimization</h3>
                <p className="text-gray-600">
                  Maximize energy production and accelerate your return on investment through regular maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Commercial Process Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Our Commercial Cleaning Process
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Site Assessment & Planning</h3>
                  <p className="text-lg text-gray-700">
                    We begin with a comprehensive site assessment to evaluate your system size, panel type, roof
                    structure, and access requirements. This allows us to develop a detailed cleaning plan that
                    minimizes disruption to your operations.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Baseline Performance Measurement</h3>
                  <p className="text-lg text-gray-700">
                    We document your system's current performance metrics to establish a baseline. This allows us to
                    quantify the improvement after cleaning and demonstrate the ROI of our services.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Commercial-Grade Cleaning</h3>
                  <p className="text-lg text-gray-700">
                    Our team uses specialized equipment designed for large-scale installations, including extended-reach
                    water-fed poles, purified water systems, and commercial-grade cleaning solutions when necessary. All
                    our methods comply with manufacturer guidelines to protect your warranty.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">System Inspection</h3>
                  <p className="text-lg text-gray-700">
                    During cleaning, our technicians conduct a thorough inspection of your entire system, checking for
                    damaged panels, loose connections, wiring issues, and other potential problems that could affect
                    performance.
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
                    After cleaning, we take post-cleaning performance measurements to document the improvement. Most
                    commercial systems see a 15-30% increase in energy production after our professional cleaning.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">6</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Detailed Reporting</h3>
                  <p className="text-lg text-gray-700">
                    We provide comprehensive documentation including before/after photos, performance data, inspection
                    findings, and maintenance recommendations. For strata properties, we can provide individual reports
                    for management committees and owners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Benefits for Commercial & Strata Properties
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Increased Energy Production</h3>
                </div>
                <p className="text-gray-700">
                  Clean panels can produce up to 30% more energy, significantly reducing your reliance on grid
                  electricity and lowering operational costs.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Shield className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Warranty Protection</h3>
                </div>
                <p className="text-gray-700">
                  Our professional cleaning helps maintain manufacturer warranty compliance, protecting your substantial
                  investment in solar technology.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Calendar className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Extended System Lifespan</h3>
                </div>
                <p className="text-gray-700">
                  Regular cleaning prevents permanent damage from bird droppings, salt, and pollution that can corrode
                  and degrade your panels over time.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <ClipboardList className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Detailed Documentation</h3>
                </div>
                <p className="text-gray-700">
                  Our comprehensive reports provide valuable documentation for strata meetings, financial reporting, and
                  sustainability initiatives.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Users className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Minimal Disruption</h3>
                </div>
                <p className="text-gray-700">
                  We schedule our services to minimize disruption to your business operations or residents, with options
                  for after-hours and weekend service.
                </p>
              </div>

              <div className="rounded-lg border p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <Building className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Enhanced Property Value</h3>
                </div>
                <p className="text-gray-700">
                  Well-maintained solar systems enhance property value and demonstrate your commitment to sustainability
                  and proper asset management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strata-Specific Section */}
      <section className="bg-gray-50 py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Specialized Solutions for Strata Properties
            </h2>

            <p className="mb-8 text-center text-lg text-gray-700">
              We understand the unique challenges of managing solar systems on strata properties. Our specialized strata
              services include:
            </p>

            <div className="space-y-6">
              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Customized Maintenance Programs</h3>
                <p className="text-gray-700">
                  We develop tailored maintenance schedules that align with your strata budget cycles and maintenance
                  plans, ensuring consistent system performance year-round.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Strata Committee Reporting</h3>
                <p className="text-gray-700">
                  We provide detailed reports suitable for strata committee meetings, including performance data,
                  maintenance records, and recommendations for future budgeting.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Multi-Building Management</h3>
                <p className="text-gray-700">
                  For strata managers overseeing multiple properties, we offer consolidated services and reporting
                  across your entire portfolio, simplifying your solar maintenance management.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-xl font-bold">Resident Communication</h3>
                <p className="text-gray-700">
                  We can provide communication materials to inform residents about scheduled maintenance, expected
                  benefits, and the importance of regular solar panel cleaning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Case Studies */}
      <section className="bg-gray-50 py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Commercial Success Stories
            </h2>

            <div className="space-y-8">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl font-bold">Sydney Office Complex</h3>
                <p className="mb-4 text-gray-700">
                  A 200kW system on a multi-story office building in Sydney CBD was showing significant performance
                  degradation. After our commercial cleaning service:
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Energy production increased by 27%</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Annual savings of approximately $12,000</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>ROI on cleaning service: 580%</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl font-bold">Northern Beaches Apartment Complex</h3>
                <p className="mb-4 text-gray-700">
                  A strata-managed apartment building with a 75kW system was experiencing issues with salt spray buildup
                  due to its coastal location. Our solution:
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Quarterly cleaning schedule implemented</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Performance improved by 32% after first cleaning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Strata committee received detailed reports for all owners</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-3 text-xl font-bold">Western Sydney Warehouse</h3>
                <p className="mb-4 text-gray-700">
                  A large distribution center with a 350kW system was experiencing significant dust buildup from nearby
                  construction. Our approach:
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Custom cleaning schedule during construction period</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Performance maintained within 5% of optimal levels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Prevented potential warranty issues from excessive dirt buildup</span>
                  </li>
                </ul>
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
              Ready to Maximize Your Commercial Solar Investment?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Contact us today for a customized quote for your commercial or strata property. Our team specializes in
              large-scale installations and can develop a maintenance plan that fits your specific needs and budget.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/quote">Get a Commercial Quote</Link>
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
              Commercial & Strata FAQs
            </h2>

            <div className="divide-y divide-gray-200">
              {[
                {
                  question: "How do you handle access for multi-story buildings?",
                  answer:
                    "We use specialized equipment including extended-reach water-fed poles that can reach up to 20 meters. For taller buildings, we coordinate with your facility management team to arrange roof access or use elevated work platforms when necessary. All our technicians are fully trained and certified for working at heights.",
                },
                {
                  question: "Can you clean our panels without disrupting our business operations?",
                  answer:
                    "Absolutely. We understand the importance of minimizing disruption to your business. We can schedule cleanings during off-hours, weekends, or other times that work best for your operation. Our commercial cleaning process is designed to be efficient and non-intrusive.",
                },
                {
                  question: "How do you handle reporting for strata committees?",
                  answer:
                    "We provide comprehensive reports suitable for strata meetings, including before/after photos, performance data, inspection findings, and maintenance recommendations. These reports can be customized to include specific information required by your strata committee or management.",
                },
                {
                  question: "Do you offer maintenance contracts for commercial properties?",
                  answer:
                    "Yes, we offer flexible maintenance contracts tailored to your specific needs. These can include quarterly, bi-annual, or custom cleaning schedules, as well as regular inspections and performance reporting. Maintenance contracts typically include priority scheduling and discounted rates.",
                },
                {
                  question: "How do you ensure safety when working on commercial buildings?",
                  answer:
                    "Safety is our top priority. All our technicians are fully trained and certified for working at heights and on commercial properties. We carry comprehensive insurance, conduct thorough risk assessments before each job, and use appropriate safety equipment and procedures at all times.",
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

