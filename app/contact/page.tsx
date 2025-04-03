import Image from "next/image"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import ContactForm from "@/components/contact-form"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contact Us | Watts Up Solar Cleaning Sydney",
  description:
    "Get in touch with Sydney's trusted solar panel cleaners. Request a quote, book a service or ask questions about solar panel maintenance.",
}

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Contact Us</h1>
            <p className="text-lg text-blue-100 md:text-xl">
              Have questions or ready to book? We're here to help you get the most from your solar panels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Get In Touch</h2>
              <p className="mb-8 text-lg text-gray-600">
                Whether you have questions about our services, want to schedule a cleaning, or need a quote, our team is
                ready to assist you.
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
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Phone</h3>
                    <p className="text-gray-600">0450 872 806</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Email</h3>
                    <p className="text-gray-600">service@wattsupsolarcleaning.com.au</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 8:00 AM - 2:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-lg bg-blue-50 p-6">
                <h3 className="mb-3 text-xl font-bold">Need a Quote Fast?</h3>
                <p className="mb-4">
                  For a quick response, contact one of our technicians directly to get a personalized estimate for your
                  solar panel cleaning needs.
                </p>
                <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="/quote">
                    Call Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="rounded-lg border p-6 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-gray-900">Send Us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900">Our Location</h2>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/sydney-stylized-map.png"
                  alt="Map showing Watts Up Solar Cleaning location in Sydney"
                  fill
                  className="object-cover"
                />
                {/* Map without overlay */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Our Service Areas</h2>
            <p className="mb-10 text-lg text-gray-600">
              We proudly serve residential and commercial clients throughout Sydney and surrounding areas.
            </p>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {[
                "Northern Beaches",
                "North Shore",
                "Eastern Suburbs",
                "Inner West",
                "Western Sydney",
                "Sutherland Shire",
              ].map((area, index) => (
                <div key={index} className="rounded-lg bg-blue-50 p-4 text-center">
                  <span className="font-medium text-blue-800">{area}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-gray-600">Not sure if we service your area? Contact us to find out!</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Frequently Asked Questions
            </h2>

            <div className="divide-y divide-gray-200">
              {[
                {
                  question: "How quickly can you schedule a cleaning?",
                  answer:
                    "We typically can schedule residential cleanings within 1-2 weeks, depending on the season and demand. For urgent needs, we offer priority scheduling when possible.",
                },
                {
                  question: "Do I need to be home during the cleaning?",
                  answer:
                    "No, you don't need to be present during the cleaning as long as our technicians can safely access your solar panels. We'll coordinate with you beforehand to ensure we have all necessary access information.",
                },
                {
                  question: "How do I get a quote for my solar panel cleaning?",
                  answer:
                    "You can request a quote through our website's quote form, by phone, or by email. We'll need some basic information about your system size, location, and any specific concerns to provide an accurate estimate.",
                },
                {
                  question: "Do you offer emergency cleaning services?",
                  answer:
                    "Yes, we offer emergency cleaning services for situations where immediate attention is required, such as after severe storms or when significant debris has accumulated on your panels.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept credit cards, direct bank transfers, and cash. For commercial clients, we also offer invoicing options with payment terms.",
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

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to get started?</h2>
            <p className="mb-8 text-lg text-blue-100">
              Contact us today to schedule your solar panel cleaning or request a free quote.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
                <Link href="/quote">Get a Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

