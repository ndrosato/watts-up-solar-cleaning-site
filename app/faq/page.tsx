import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata = {
  title: "Solar Panel Cleaning FAQs | Watts Up Solar Cleaning Sydney",
  description:
    "Answers to common questions about solar panel cleaning, maintenance and care. Expert advice from Sydney's trusted solar cleaners.",
}

export default function FAQPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Frequently Asked Questions</h1>
            <p className="text-lg text-blue-100 md:text-xl">
              Everything you need to know about our solar panel cleaning services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {/* General Questions */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">General Questions</h2>
              <div className="divide-y divide-gray-200">
                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Why do solar panels need cleaning?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Solar panels need cleaning because dirt, dust, bird droppings, pollen, and other debris can reduce
                    their efficiency by up to 30%. Regular cleaning ensures maximum energy production, extends the
                    lifespan of your panels, and helps maintain warranty compliance.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">How often should I clean my solar panels?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    For most Sydney homes, we recommend professional cleaning 2-4 times per year, depending on your
                    location and local conditions. Coastal properties, areas with heavy tree coverage, or high pollution
                    may require more frequent cleaning.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Doesn't rain clean my solar panels?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    While rain can help remove some loose dust, it's not sufficient for proper cleaning. Rain often
                    leaves mineral deposits behind as it dries, and it can't remove stubborn substances like bird
                    droppings, tree sap, or salt spray. Professional cleaning ensures all contaminants are removed
                    without leaving residue.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Can I clean my solar panels myself?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    While DIY cleaning is possible, we don't recommend it for several reasons: risk of personal injury
                    from working at heights, potential damage to expensive panels from improper cleaning methods, and
                    often incomplete results that don't fully restore performance. Professional cleaning is safer, more
                    effective, and helps maintain warranty compliance.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Will cleaning really make a difference to my energy production?
                  </h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Absolutely. Independent studies show that dirty solar panels can lose 15-30% of their efficiency.
                    Our customers typically see a 20-25% increase in energy production after a professional clean, which
                    translates directly to savings on your electricity bill.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Our Services</h2>
              <div className="divide-y divide-gray-200">
                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">What cleaning methods do you use?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    We use specialized water-fed poles with soft brushes designed specifically for solar panels,
                    combined with purified water systems that leave no residue. Our methods are gentle yet effective,
                    removing all dirt and contaminants without risking damage to your panels.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Do you use chemicals to clean solar panels?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    No, we primarily use purified water which is highly effective for most cleaning needs. In rare cases
                    where stubborn contaminants are present, we may use mild, biodegradable, solar-panel-safe cleaning
                    solutions that won't damage your panels or the environment.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">How long does a cleaning service take?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    A typical residential system (10-20 panels) takes about 1-2 hours to clean thoroughly, inspect, and
                    document. Larger systems or those with difficult access may take longer. Commercial systems are
                    quoted based on size and complexity.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Do I need to be home during the cleaning?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    No, you don't need to be present during the cleaning as long as our technicians can safely access
                    your solar panels. We'll coordinate with you beforehand to ensure we have all necessary access
                    information.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">What areas do you service?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    We service all of Sydney and surrounding suburbs, including the Northern Beaches, North Shore,
                    Eastern Suburbs, Inner West, Western Sydney, and Sutherland Shire. If you're unsure if we cover your
                    area, please contact us.
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing & Booking */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Pricing & Booking</h2>
              <div className="divide-y divide-gray-200">
                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">How much does solar panel cleaning cost?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Our pricing depends on several factors including the number of panels, roof type, accessibility, and
                    location. We provide free detailed quotes after assessing the job.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Do you offer maintenance plans?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Yes, we offer scheduled maintenance plans that provide regular cleanings at discounted rates. These
                    plans ensure your system stays at peak performance year-round and can be customized to your specific
                    needs and budget.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">How quickly can you schedule a cleaning?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    We typically can schedule residential cleanings within 1-2 weeks, depending on the season and
                    demand. For urgent needs, we offer priority scheduling when possible.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">What payment methods do you accept?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    We accept credit cards, direct bank transfers, and cash. For commercial clients, we also offer
                    invoicing options with payment terms.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Do you offer any guarantees?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Yes, we offer a satisfaction guarantee. If you're not completely satisfied with our service, contact
                    us within 7 days and we'll return to address any issues at no additional cost.
                  </p>
                </div>
              </div>
            </div>

            {/* Technical Questions */}
            <div className="mb-16">
              <h2 className="mb-8 text-3xl font-bold text-gray-900">Technical Questions</h2>
              <div className="divide-y divide-gray-200">
                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Will cleaning affect my warranty?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Professional cleaning actually helps maintain your warranty. Most solar panel manufacturers require
                    regular cleaning as part of their warranty conditions. Our cleaning methods comply with manufacturer
                    guidelines, and we provide documentation of service that can be used for warranty purposes.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">Can cleaning damage my solar panels?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    When done properly, cleaning will not damage your panels. Our technicians are trained in solar-safe
                    cleaning techniques and use equipment specifically designed for solar panels. DIY cleaning with
                    improper tools or techniques, however, can potentially cause damage.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    Do you also check for other issues with my solar system?
                  </h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Yes, our service includes a visual inspection of your panels, mounting hardware, and visible wiring.
                    We'll alert you to any potential issues we identify, such as microcracks, hot spots, or loose
                    connections. For more comprehensive inspections, we offer specialized maintenance services.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">What is bird proofing and do I need it?</h3>
                  <p className="mt-3 text-lg text-gray-700">
                    Bird proofing involves installing protective mesh or barriers to prevent birds from nesting under
                    your solar panels. This is recommended if you have birds in your area, as nests can cause fire
                    hazards, damage wiring, and create additional mess. During our cleaning service, we can assess
                    whether bird proofing would benefit your system.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    How do you measure the improvement after cleaning?
                  </h3>
                  <p className="mt-3 text-lg text-gray-700">
                    When possible, we take performance readings before and after cleaning to document the improvement.
                    This can be done through your system's monitoring app or device, or by checking the inverter
                    readings. We include these measurements in our service report.
                  </p>
                </div>
              </div>
            </div>

            {/* Still Have Questions */}
            <div className="rounded-lg bg-blue-50 p-8 text-center">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">Still Have Questions?</h2>
              <p className="mb-6 text-lg text-gray-700">
                We're here to help! Contact our team for answers to any other questions you might have about our solar
                panel cleaning services.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/quote">Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

