import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, ArrowRight, Shield, Award, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Solar Panel Cleaning Services Sydney | Watts Up Solar Cleaning",
  description:
    "Professional solar panel cleaning services for residential, commercial and strata properties across Sydney. Boost efficiency by up to 30%.",
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image
            src="/images/technician-cleaning-solar-panels.png"
            alt="Professional solar panel cleaning services"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Our Solar Panel Cleaning Services
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Professional, eco-friendly cleaning and maintenance services to maximize your solar investment
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
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Comprehensive Solar Panel Services</h2>
            <p className="mb-8 text-lg text-gray-700">
              At Watts Up Solar Cleaning, we offer a complete range of professional services designed to keep your solar
              system operating at peak efficiency. From residential cleaning to commercial maintenance, our expert
              technicians use specialized equipment and eco-friendly methods to deliver superior results.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                <Shield className="mr-2 h-4 w-4" />
                <span>Fully Insured</span>
              </div>
              <div className="flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                <Award className="mr-2 h-4 w-4" />
                <span>Certified Technicians</span>
              </div>
              <div className="flex items-center rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                <Clock className="mr-2 h-4 w-4" />
                <span>Prompt Service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">Our Services</h2>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Residential Service */}
            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src="/images/technician-cleaning-solar-panels.png"
                  alt="Residential solar panel cleaning"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-2xl font-bold">Residential Solar Cleaning</h3>
                <p className="mb-4 text-gray-600">
                  Our residential cleaning service is designed to restore your home solar system to peak performance.
                  Using specialized equipment and purified water, we safely remove all dirt, dust, bird droppings, and
                  other contaminants.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Thorough cleaning of all panels and frames</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Performance measurement before and after</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Detailed inspection report</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="/services/residential">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Commercial Service */}
            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-06wTzTnQ7886mTyAaoOxz4YqxrTvJs.png"
                  alt="Aerial view of commercial building with large solar panel installation"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-2xl font-bold">Commercial & Strata Cleaning</h3>
                <p className="mb-4 text-gray-600">
                  Our commercial services cater to businesses, strata properties, and large-scale installations. We
                  understand the unique challenges of commercial systems and provide tailored solutions to maximize your
                  return on investment.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Scheduled maintenance programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Minimal disruption to operations</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Comprehensive reporting for stakeholders</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="/services/commercial">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Maintenance Service */}
            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src="/images/thermal-inspection.png"
                  alt="Solar panel maintenance and inspection"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-2xl font-bold">Maintenance & Inspection</h3>
                <p className="mb-4 text-gray-600">
                  Our comprehensive maintenance service goes beyond cleaning to ensure your entire solar system is
                  operating at its best. We identify and address potential issues before they affect performance or
                  cause damage.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Thermal imaging inspection</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Connection and wiring check</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Performance optimization</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="/services/maintenance">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bird Proofing Service */}
            <Card className="overflow-hidden border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
              <div className="relative h-64">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vgJ7DSR4uOTbffpRpcKaC11vfaUlNK.png"
                  alt="Birds sitting on solar panels demonstrating the need for bird proofing"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="mb-3 text-2xl font-bold">Bird Proofing</h3>
                <p className="mb-4 text-gray-600">
                  Birds nesting under solar panels can cause significant damage and reduce efficiency. Our bird proofing
                  service prevents birds from accessing the space beneath your panels while maintaining proper
                  ventilation.
                </p>
                <ul className="mb-6 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Humane bird deterrent systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Removal of existing nests and debris</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Protective mesh installation</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="/services/bird-proofing">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">Our Service Process</h2>

            <div className="space-y-12">
              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Initial Assessment</h3>
                  <p className="text-lg text-gray-700">
                    We begin with a thorough inspection of your solar system, checking for damage, soiling, and access
                    requirements. This helps us determine the best approach for your specific setup.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Customized Service Plan</h3>
                  <p className="text-lg text-gray-700">
                    Based on our assessment, we create a tailored service plan that addresses your specific needs,
                    whether it's a one-time cleaning or an ongoing maintenance program.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Professional Execution</h3>
                  <p className="text-lg text-gray-700">
                    Our trained technicians use specialized equipment and eco-friendly methods to clean and maintain
                    your system, ensuring optimal performance without risk of damage.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Detailed Reporting</h3>
                  <p className="text-lg text-gray-700">
                    After service completion, we provide a comprehensive report documenting the work performed, system
                    condition, performance improvements, and recommendations for future maintenance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Transparent Pricing</h2>
            <p className="mb-12 text-lg text-gray-700">
              Our pricing is based on several factors to ensure you get the most value for your investment. We provide
              detailed quotes with no hidden fees or surprises.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">Factors That Affect Pricing</h3>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Number and size of panels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Roof type and accessibility</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Level of soiling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Service frequency</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Additional services required</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">Maintenance Plans</h3>
                <p className="mb-4 text-gray-700">
                  Save with our scheduled maintenance plans. Regular customers receive:
                </p>
                <ul className="space-y-3 text-left">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Discounted service rates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Free system inspections</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Performance tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <Button className="mt-10 bg-blue-600 text-white hover:bg-blue-700" size="lg" asChild>
              <Link href="/quote">Get a Personalized Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900">What Our Customers Say</h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">
                  "I was amazed at the difference after Watts Up cleaned our solar panels. Our energy production
                  increased by 27% and our electricity bill dropped significantly. The team was professional, on time,
                  and left everything spotless."
                </p>
                <div className="flex items-center">
                  <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Sarah Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Sarah Johnson</h4>
                    <p className="text-sm text-gray-600">Homeowner in Northern Beaches</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">
                  "As a business owner, I'm always looking for ways to reduce costs. The team at Watts Up showed me
                  exactly how much energy I was losing due to dirty panels. After their cleaning service, our system
                  efficiency improved dramatically. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Michael Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Michael Chen</h4>
                    <p className="text-sm text-gray-600">Business Owner in Sydney CBD</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-6 text-gray-700">
                  "Managing a large apartment complex with solar installations was challenging until we found Watts Up.
                  Their scheduled maintenance program has kept our system running at peak efficiency, and the detailed
                  reports they provide make my job so much easier."
                </p>
                <div className="flex items-center">
                  <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Emma Williams"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">Emma Williams</h4>
                    <p className="text-sm text-gray-600">Strata Manager in Eastern Suburbs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to Maximize Your Solar Investment?
            </h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Contact us today for a free, no-obligation quote. Our team is ready to help you get the most out of your
              solar panels.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Star component for testimonials
function Star(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

