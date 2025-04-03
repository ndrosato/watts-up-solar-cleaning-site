"use client"

import Image from "next/image"
import { MapPin, CheckCircle, Zap, Shield, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">About Us</h1>
            <h2 className="mb-6 text-2xl font-medium md:text-3xl">Clean Panels. More Power. Happier Homes.</h2>
            <p className="text-lg text-blue-100 md:text-xl">
              At Watts Up Solar Cleaning, we're on a mission to help Sydney homes and businesses get the most out of
              their solar investment. With clean panels, you'll generate more power, improve efficiency, and extend the
              life of your solar system—it's that simple.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <p className="mb-8 text-lg text-gray-700">
              We're not just another cleaning company. We specialise solely in solar panel care, using the safest
              techniques, purpose-built equipment, and expert knowledge to deliver the best possible results—without
              ever compromising your panels.
            </p>
            <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
              <Image
                src="/images/technician-cleaning-solar-panels.png"
                alt="Watts Up Solar Cleaning technician cleaning solar panels"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why We Started */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-2xl">🔧</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Why We Started</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-700">
              <p>
                After being introduced to the solar industry back in 2018, we saw firsthand just how much energy
                efficiency can drop from something as small as a single dirty cell. But what really hit home was
                learning about the environmental cost—not just in energy loss, but in waste.
              </p>
              <p>
                By 2050, it's projected that the world will have a mound of discarded solar panels the size of Mount
                Everest. That's a shocking amount of waste from systems that, in many cases, could've lasted much longer
                with proper care and maintenance.
              </p>
              <p>
                That's why we started Watts Up Solar Cleaning—to help people protect their solar investment, reduce
                waste, and maximise energy output. By offering professional solar panel cleaning and maintenance, we're
                doing our part to extend the lifespan of solar systems, improve performance, and raise awareness about
                the importance of clean energy done right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-2xl">🧼</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">What Makes Us Different</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-bold">Solar-Safe Techniques</h3>
                </div>
                <p className="text-gray-700">
                  We only use purified water systems and soft-bristle rotary brushes designed specifically for solar
                  panels. No harsh chemicals. No pressure washers.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-bold">Certified, Insured Technicians</h3>
                </div>
                <p className="text-gray-700">
                  Our team is fully trained, safety-certified, and insured for both residential roofs and large-scale
                  commercial jobs.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-bold">Performance Reporting</h3>
                </div>
                <p className="text-gray-700">
                  After every clean, we provide a summary of your panel condition and any maintenance issues we spot.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex items-start">
                  <CheckCircle className="mr-3 h-6 w-6 text-green-500" />
                  <h3 className="text-xl font-bold">More Than Cleaning</h3>
                </div>
                <p className="text-gray-700">
                  We also offer bird-proofing, debris removal, inspections, and scheduled maintenance programs to keep
                  your system performing year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proudly Local to Sydney */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-2xl">🌏</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Proudly Local to Sydney</h2>
            </div>
            <p className="mb-8 text-lg text-gray-700">We're Sydney-based and proudly service:</p>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                "Northern Beaches",
                "North Shore",
                "Inner West",
                "Eastern Suburbs",
                "Western Sydney",
                "Sutherland Shire",
              ].map((area, index) => (
                <div key={index} className="flex items-center rounded-lg bg-white p-4 shadow-sm">
                  <MapPin className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-lg text-gray-700">
              We understand local weather patterns, roof types, and the unique challenges solar owners face across the
              city.
            </p>
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <span className="text-2xl">🤝</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Promise</h2>
            </div>
            <div className="rounded-lg bg-blue-50 p-8">
              <p className="text-lg text-gray-700">
                At Watts Up Solar Cleaning, we believe in honest work, quality results, and friendly service. We treat
                every roof like it's our own and leave no panel untouched. We're here to keep your system running at its
                peak—so you can keep saving money and powering your home the smart way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Our Core Values</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Excellence</h3>
                <p className="text-gray-700">
                  We strive for perfection in every clean, using the best techniques and equipment.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Integrity</h3>
                <p className="text-gray-700">
                  We're honest, transparent, and committed to doing what's right for your solar system.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-4">
                  <Award className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Sustainability</h3>
                <p className="text-gray-700">
                  We're dedicated to extending the life of solar systems and reducing environmental waste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600">
                <span className="text-3xl">🔋</span>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to boost your solar performance?</h2>
            <p className="mb-8 text-lg text-blue-100">
              Get in touch today for a free quote or to book your next clean. Let's get your panels shining
              again—because clean solar just makes sense.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
              <Link href="/quote">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

