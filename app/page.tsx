"use client"

import Image from "next/image"
import Link from "next/link"
import { MapPin, Star, ArrowRight, CheckCircle, Shield, Award, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import StaticComparisonImage from "@/components/static-comparison-image"
import TestimonialCarousel from "@/components/testimonial-carousel"
import ServiceAreaMap from "@/components/service-area-map"
import ContactForm from "@/components/contact-form"
import ProcessSteps from "@/components/process-steps"
import TrustBadges from "@/components/trust-badges"
import Header from "@/components/header"
import Footer from "@/components/footer"
import HowItWorksSection from "@/components/how-it-works-section"
import { subscribeToNewsletter } from "./actions/newsletter"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image
            src="/images/hero-solar-technician.png"
            alt="Professional solar panel cleaner in Sydney cleaning rooftop solar panels"
            fill
            className="object-cover"
            style={{ objectPosition: "center 25%" }}
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <div className="mx-auto max-w-3xl">
            <TrustBadges className="mb-6" />
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Trusted Solar Panel Cleaners in Sydney
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Boost your solar efficiency by up to 30% with professional cleaning services. Trusted by Sydney homeowners
              and businesses.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/quote">
                  Get a Free Quote Today
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Underperformance Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                Is Your Solar System Underperforming?
              </h2>
              <p className="text-xl text-gray-700 md:text-2xl max-w-3xl mx-auto">
                You could be losing up to 30% of your solar output — and over $1,200 a year — without even knowing it.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  Most Australian homeowners assume their solar panels are self-maintaining. But dirt, pollen, bird
                  droppings, and grime build up fast — especially in areas with strong sun and coastal wind.
                </p>
                <p>
                  This buildup blocks sunlight and reduces the efficiency of your system. In fact, a dirty panel array
                  can lose 20–30% of its output.
                </p>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Zap className="mr-2 h-6 w-6 text-blue-600" />
                    Regular professional cleaning helps:
                  </h3>

                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Prevent long-term system damage</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Maximise your energy output</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Keep your warranty valid</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="mr-3 mt-1 h-5 w-5 text-green-500 flex-shrink-0" />
                      <span>Extend the life of your solar system</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-600 to-blue-500">
                <div className="p-8 text-white">
                  <div className="mb-6 flex justify-center">
                    <div className="h-16 w-16 rounded-full bg-white flex items-center justify-center">
                      <Shield className="h-8 w-8 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">Free Solar Health Check</h3>
                  <p className="mb-6 text-blue-100 text-center">
                    Let us assess your system's performance and show you exactly how much energy you could be missing.
                  </p>
                  <div className="flex justify-center">
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg" asChild>
                      <Link href="/quote">
                        Book Your Free Solar Checkup
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="pt-16 pb-[44px] md:pt-24 md:pb-[76px]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Why Clean Your Solar Panels?
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Dirty panels can reduce efficiency by up to 30%. Regular cleaning ensures maximum energy production and
              extends the life of your investment.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
              <CardContent className="p-6">
                <Zap className="mb-4 h-12 w-12 text-blue-500" />
                <h3 className="mb-2 text-xl font-bold">Improved Efficiency</h3>
                <p className="text-gray-600">
                  Clean panels capture more sunlight, generating up to 30% more electricity and reducing your energy
                  bills.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
              <CardContent className="p-6">
                <Shield className="mb-4 h-12 w-12 text-blue-500" />
                <h3 className="mb-2 text-xl font-bold">Warranty Protection</h3>
                <p className="text-gray-600">
                  Most manufacturers require regular cleaning to maintain warranty coverage. Our service keeps you
                  compliant.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg transition-all duration-200 hover:shadow-xl">
              <CardContent className="p-6">
                <Award className="mb-4 h-12 w-12 text-blue-500" />
                <h3 className="mb-2 text-xl font-bold">Extended Lifespan</h3>
                <p className="text-gray-600">
                  Prevent permanent damage from bird droppings, salt, and pollution that can corrode and degrade your
                  panels over time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Process Section */}
      <section className="bg-gray-50 pt-6 pb-6 md:pt-14 md:pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Our Simple 3-Step Process
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              We make solar panel cleaning easy, efficient, and hassle-free
            </p>
          </div>

          <ProcessSteps />

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get a Free Quote Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="pt-6 pb-0 md:pt-14 md:pb-3">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">See the Difference</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              See the dramatic before and after results of our professional cleaning
            </p>
          </div>

          <div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-xl">
            <StaticComparisonImage />
          </div>

          <div className="mt-8 text-center">
            <p className="mb-4 text-lg font-medium text-gray-900">
              Average efficiency increase after cleaning: <span className="text-blue-600">30%</span>
            </p>
          </div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="bg-white pt-5 pb-6 md:pt-12 md:pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Tailored solutions for every type of solar installation
            </p>
          </div>

          <Tabs defaultValue="residential" className="mx-auto max-w-4xl">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3">
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
              <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            </TabsList>
            <TabsContent value="residential" className="mt-6 rounded-lg border p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Residential Solar Panel Cleaning</h3>
                  <p className="mb-4 text-gray-600">
                    Our gentle, thorough cleaning process removes all dirt, bird droppings, salt, and pollution from
                    your home solar system.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Safe, eco-friendly cleaning solutions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Fully insured technicians</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Performance report included</span>
                    </li>
                  </ul>
                  <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Get a Quote</Button>
                </div>
                <div className="relative min-h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/technician-cleaning-solar-panels.png"
                    alt="Sydney solar panel cleaning technician using specialized equipment on residential panels"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="commercial" className="mt-6 rounded-lg border p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Commercial & Strata Solar Cleaning</h3>
                  <p className="mb-4 text-gray-600">
                    Specialized equipment and techniques for large-scale installations on commercial buildings and
                    strata properties.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Scheduled maintenance programs</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Minimal disruption to operations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Detailed efficiency reporting</span>
                    </li>
                  </ul>
                  <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Get a Quote</Button>
                </div>
                <div className="relative min-h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/commercial-solar-cleaning.png"
                    alt="Commercial solar panel cleaning service in Sydney for large-scale installations"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="maintenance" className="mt-6 rounded-lg border p-6 shadow-sm">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-bold">Solar Maintenance & Inspection</h3>
                  <p className="mb-4 text-gray-600">
                    Comprehensive check-ups to identify and address potential issues before they affect performance.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Thermal imaging inspection</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Connection and wiring check</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                      <span>Performance optimization</span>
                    </li>
                  </ul>
                  <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700" asChild>
                    <Link href="/book-inspection">Book an Inspection</Link>
                  </Button>
                </div>
                <div className="relative min-h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src="/images/thermal-inspection.png"
                    alt="Solar panel maintenance inspection with thermal imaging in Sydney"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 pt-6 pb-6 md:pt-14 md:pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">What Our Customers Say</h2>
            <div className="mx-auto mb-6 flex items-center justify-center">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="ml-2 text-lg font-medium">5/5 star reviews</span>
            </div>
          </div>

          <div className="mx-auto max-w-4xl">
            <TestimonialCarousel limitTestimonials={4} />
          </div>
        </div>
      </section>

      {/* Service Area Map */}
      <section className="pt-6 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Our Service Areas</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">Serving all of Sydney and surrounding suburbs</p>
          </div>

          <div className="mx-auto max-w-5xl overflow-hidden rounded-lg shadow-xl">
            <ServiceAreaMap />
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
            <p className="mb-8 text-lg md:text-xl">
              Get a free, no-obligation quote in just 60 seconds. Our team is ready to help you get the most out of your
              solar panels.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/quote">
                Get Your Free Quote Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="pt-16 pb-6 md:pt-24 md:pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Contact Us</h2>
              <p className="mb-8 text-lg text-gray-600">
                Have questions or ready to book? Fill out the form and we'll get back to you within 2 hours during
                business hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Location</h3>
                    <p className="text-gray-600">Sydney, NSW</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-600">0450 872 806</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600">service@wattsupsolarcleaning.com.au</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 pt-6 pb-6 md:pt-14 md:pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Everything you need to know about our solar panel cleaning services
            </p>
          </div>

          <div className="mx-auto max-w-3xl divide-y divide-gray-200">
            {[
              {
                question: "Why should I pay for solar panel cleaning?",
                answer:
                  "Great question. It's not just about saving a few hundred dollars in electricity — it's about protecting your solar investment. Solar systems cost $15,000–$30,000+. Dirt, dust, pollen, and grime can cut efficiency by up to 30%. Long-term buildup leads to wear and tear, hot spots, and even voided warranties. You pay a mechanic to maintain your car. This is how you maintain your solar system — and keep it running like the day it was installed.",
              },
              {
                question: "How often should I clean my solar panels?",
                answer:
                  "For optimal performance, we recommend cleaning your solar panels 2-4 times per year, depending on your location and local conditions. Areas with high pollution, near the coast, or with significant bird activity may require more frequent cleaning.",
              },
              {
                question: "Will cleaning really make a difference to my energy production?",
                answer:
                  "Absolutely. Independent studies show that dirty solar panels can lose 15-30% of their efficiency. Our customers typically see a 20-25% increase in energy production after a professional clean.",
              },
              {
                question: "Is it safe to clean solar panels myself?",
                answer:
                  "While it's possible, we don't recommend it. DIY cleaning risks personal injury from working at heights, potential damage to expensive panels, and often doesn't achieve professional results. Our technicians are fully trained, insured, and use specialized equipment.",
              },
              {
                question: "What cleaning methods do you use?",
                answer:
                  "We use a combination of purified water technology and soft brushes specifically designed for solar panels. Our cleaning solutions are 100% biodegradable and won't damage your panels or void warranties.",
              },
              {
                question: "How long does the cleaning process take?",
                answer:
                  "A typical residential system (10-20 panels) takes about 1-2 hours to clean thoroughly. Commercial systems vary based on size and accessibility.",
              },
            ].map((faq, index) => (
              <div key={index} className="py-6">
                <h3 className="text-lg font-medium text-gray-900">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/faq" className="text-blue-600 hover:underline">
              View all FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="pt-6 pb-6 md:pt-14 md:pb-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Latest from Our Blog</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Tips, insights, and news about solar panel maintenance
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "How Dirty Solar Panels Affect Efficiency and Output",
                excerpt:
                  "Learn how dirt and debris can reduce your solar system's performance by up to 30% and what you can do about it.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yNGRJdvbD4gnXGM6mHxj9U3xcNbmzw.png",
                date: "June 15, 2023",
                slug: "/blog/5-signs-your-solar-panels-need-cleaning",
              },
              {
                title: "How Often Should You Clean Your Solar Panels in Sydney?",
                excerpt:
                  "Discover the ideal cleaning schedule for Sydney solar panels based on your location and local environmental factors.",
                image:
                  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kjweKGGOMJstkjML2hcngT87GOCwEE.png",
                date: "May 28, 2023",
                slug: "/blog/how-weather-affects-solar-panel-efficiency",
              },
              {
                title: "Professional vs DIY Solar Panel Cleaning: What's Best?",
                excerpt:
                  "Compare the benefits and risks of DIY cleaning versus hiring professional solar panel cleaners in Sydney.",
                image: "/images/diy-vs-professional-cleaning.png",
                date: "May 10, 2023",
                slug: "/blog/diy-vs-professional",
              },
            ].map((post, index) => (
              <Card
                key={index}
                className="overflow-hidden border-0 shadow-lg transition-all duration-200 hover:shadow-xl"
              >
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <p className="mb-2 text-sm text-gray-500">{post.date}</p>
                  <h3 className="mb-2 text-xl font-bold">{post.title}</h3>
                  <p className="mb-4 text-gray-600">{post.excerpt}</p>
                  <Link href={post.slug} className="text-blue-600 hover:underline">
                    Read more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              View All Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-50 pt-6 pb-16 md:pt-14 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Stay Updated</h2>
            <p className="mb-8 text-lg text-gray-600">
              Subscribe to our newsletter for seasonal maintenance tips, special offers, and solar energy insights
            </p>

            <div className="flex justify-center items-center">
              <form
                action={async (formData) => {
                  const result = await subscribeToNewsletter(formData)
                  if (result.success) {
                    // Show success message
                    document.getElementById("newsletter-result")!.textContent = result.message
                    document.getElementById("newsletter-result")!.className = "mt-4 text-sm text-green-600"
                    // Clear the input
                    const input = document.getElementById("newsletter-email") as HTMLInputElement
                    if (input) input.value = ""
                  } else {
                    // Show error message
                    document.getElementById("newsletter-result")!.textContent = result.message
                    document.getElementById("newsletter-result")!.className = "mt-4 text-sm text-red-600"
                  }
                }}
                className="flex w-full max-w-md flex-col sm:flex-row gap-4 items-center justify-center"
              >
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 sm:max-w-md"
                  required
                />
                <Button type="submit" className="w-full bg-blue-600 text-white hover:bg-blue-700 sm:w-auto">
                  Subscribe
                </Button>
              </form>
            </div>

            <p id="newsletter-result" className="mt-4 text-sm text-gray-500">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button size="lg" className="rounded-full bg-blue-600 px-6 text-white shadow-lg hover:bg-blue-700" asChild>
          <Link href="/quote">Get a Free Quote</Link>
        </Button>
      </div>

      <Footer />
    </div>
  )
}

