import Image from "next/image"
import { CheckCircle, ClipboardList, Calendar, Shield, Camera, BarChart2, Zap, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function MaintenanceInspectionPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image
            src="/images/thermal-inspection.png"
            alt="Solar panel maintenance and thermal inspection"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Solar Panel Maintenance & Inspection
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Comprehensive maintenance services to maximize performance, extend system lifespan, and protect your solar
              investment.
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
              Beyond Cleaning: Complete Solar Care
            </h2>
            <p className="mb-6 text-lg text-gray-700">
              While regular cleaning is essential, comprehensive maintenance and inspection services are crucial to
              ensuring your solar system's long-term health and optimal performance. Our maintenance services go beyond
              surface cleaning to identify and address potential issues before they affect your system's efficiency or
              cause costly damage.
            </p>
            <p className="mb-6 text-lg text-gray-700">
              At Watts Up Solar Cleaning, we offer detailed inspections and preventative maintenance that help extend
              your system's lifespan, maintain warranty compliance, and maximize your return on investment. Our
              certified technicians use advanced diagnostic tools to assess every aspect of your solar installation.
            </p>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Warranty Protection</h3>
                <p className="text-gray-600">
                  Regular maintenance ensures compliance with manufacturer warranty requirements.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Performance Optimization</h3>
                <p className="text-gray-600">
                  Identify and resolve issues that could be reducing your system's energy output.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Calendar className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Extended Lifespan</h3>
                <p className="text-gray-600">
                  Preventative maintenance helps your system reach its full 25-30 year potential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Maintenance Services */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Our Comprehensive Maintenance Services
            </h2>

            <div className="space-y-8">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <Camera className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Thermal Imaging Inspection</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Our advanced thermal imaging cameras detect hot spots, microcracks, and other issues invisible to the
                  naked eye. This non-invasive technology allows us to identify potential problems before they cause
                  significant damage or performance loss.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Identifies cell damage and hot spots</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Detects potential electrical issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Provides visual documentation for warranty claims</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <ClipboardList className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">System Performance Analysis</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  We conduct detailed performance testing to measure your system's actual output against its expected
                  production. This analysis helps identify underperforming panels or components that may need attention.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Measures actual vs. expected output</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Identifies underperforming components</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Provides performance optimization recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <BarChart2 className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Electrical Connection Inspection</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Loose or corroded electrical connections can cause significant performance issues and pose safety
                  risks. Our technicians inspect all accessible wiring, connections, and junction boxes to ensure
                  everything is secure and functioning properly.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Checks for loose or corroded connections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Inspects junction boxes and conduit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Identifies potential safety hazards</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-center">
                  <AlertTriangle className="mr-3 h-6 w-6 text-blue-600" />
                  <h3 className="text-xl font-bold">Mounting Hardware Inspection</h3>
                </div>
                <p className="mb-4 text-gray-700">
                  Over time, mounting hardware can loosen due to thermal expansion and contraction, wind, or other
                  factors. We inspect all accessible mounting components to ensure your panels remain securely attached
                  to your roof.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Checks for loose mounting hardware</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Inspects roof penetrations and flashing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Ensures proper panel alignment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Process */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Our Maintenance Process
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Initial Assessment</h3>
                  <p className="text-lg text-gray-700">
                    We begin with a comprehensive assessment of your solar system, including its age, type, and any
                    specific concerns you may have. This helps us tailor our maintenance approach to your system's
                    specific needs.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Professional Cleaning</h3>
                  <p className="text-lg text-gray-700">
                    We thoroughly clean your panels using our specialized equipment and eco-friendly methods to remove
                    all dirt, debris, and contaminants that could be affecting performance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Detailed Inspection</h3>
                  <p className="text-lg text-gray-700">
                    Our technicians conduct a thorough inspection of your entire system, using thermal imaging and other
                    diagnostic tools to identify any issues that could affect performance or safety.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Performance Testing</h3>
                  <p className="text-lg text-gray-700">
                    We measure your system's performance before and after maintenance to quantify improvements and
                    identify any remaining issues that may require attention.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Comprehensive Reporting</h3>
                  <p className="text-lg text-gray-700">
                    We provide a detailed report documenting our findings, including before/after performance data,
                    identified issues, completed maintenance, and recommendations for future care.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Protect Your Solar Investment</h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Regular maintenance is essential for maximizing the performance and lifespan of your solar system. Contact
              us today to schedule a comprehensive inspection or learn about our maintenance plans.
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
                  question: "How often should I have my solar system inspected?",
                  answer:
                    "We recommend a comprehensive inspection at least once per year, in addition to regular cleaning. Systems in harsh environments or those showing signs of performance issues may benefit from more frequent inspections.",
                },
                {
                  question: "What are the signs that my solar system needs maintenance?",
                  answer:
                    "Common signs include decreased energy production, error messages on your inverter, visible damage to panels or mounting hardware, and unexplained increases in your electricity bill. If you notice any of these issues, it's best to schedule an inspection promptly.",
                },
                {
                  question: "Can maintenance help extend the life of my solar panels?",
                  answer:
                    "Absolutely. Regular maintenance helps prevent permanent damage from dirt buildup, identifies potential issues before they become serious, and ensures all components are functioning properly. This can significantly extend the useful life of your system.",
                },
                {
                  question: "Is maintenance covered by my solar panel warranty?",
                  answer:
                    "While maintenance itself is typically not covered by warranties, regular professional maintenance is often required to maintain warranty coverage. Many manufacturers specify maintenance requirements in their warranty terms, and failure to meet these requirements could void your warranty.",
                },
                {
                  question: "What does thermal imaging inspection reveal that regular inspection doesn't?",
                  answer:
                    "Thermal imaging can detect issues invisible to the naked eye, such as hot spots, microcracks, faulty cells, and connection problems. These issues can significantly impact performance and, if left unaddressed, can lead to permanent damage or even safety hazards.",
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

