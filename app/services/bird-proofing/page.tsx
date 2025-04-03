import Image from "next/image"
import { CheckCircle, Shield, AlertTriangle, Zap, Clock, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function BirdProofingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-20 md:py-32">
        <div className="absolute inset-0 z-0 opacity-30 mix-blend-overlay">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vgJ7DSR4uOTbffpRpcKaC11vfaUlNK.png"
            alt="Birds nesting under solar panels"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 text-center text-white md:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Solar Panel Bird Proofing
            </h1>
            <p className="mb-8 text-lg md:text-xl">
              Protect your solar investment from bird damage with our professional bird proofing solutions.
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
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Why Bird Proofing Is Essential</h2>
            <p className="mb-6 text-lg text-gray-700">
              Birds are naturally attracted to solar panels as they provide shelter, warmth, and protection from
              predators. Unfortunately, birds nesting under your panels can cause significant problems, including:
            </p>

            <div className="mb-8 space-y-4">
              <div className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 h-6 w-6 text-amber-500" />
                <div>
                  <h3 className="text-xl font-bold">Fire Hazards</h3>
                  <p className="text-gray-700">
                    Nesting materials can create fire risks when in contact with electrical components.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 h-6 w-6 text-amber-500" />
                <div>
                  <h3 className="text-xl font-bold">Reduced Efficiency</h3>
                  <p className="text-gray-700">Bird droppings on panels can significantly reduce energy production.</p>
                </div>
              </div>

              <div className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 h-6 w-6 text-amber-500" />
                <div>
                  <h3 className="text-xl font-bold">Damage to Wiring</h3>
                  <p className="text-gray-700">Birds can damage or dislodge wiring, causing system failures.</p>
                </div>
              </div>

              <div className="flex items-start">
                <AlertTriangle className="mr-3 mt-1 h-6 w-6 text-amber-500" />
                <div>
                  <h3 className="text-xl font-bold">Warranty Issues</h3>
                  <p className="text-gray-700">Bird damage may not be covered by your solar panel warranty.</p>
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-700">
              Our professional bird proofing solutions create a protective barrier that prevents birds from accessing
              the space beneath your panels while maintaining proper ventilation and system performance.
            </p>
          </div>
        </div>
      </section>

      {/* Our Bird Proofing Solutions */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Our Bird Proofing Solutions
            </h2>

            <div className="space-y-8">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">Mesh Barrier System</h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <p className="mb-4 text-gray-700">
                      Our most popular solution uses high-quality, UV-resistant mesh that creates a durable barrier
                      around the perimeter of your solar array. This mesh is:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                        <span>Virtually invisible from ground level</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                        <span>Designed for maximum airflow</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                        <span>Weather and UV resistant</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                        <span>Securely attached without damaging panels</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative h-[200px] overflow-hidden rounded-lg">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-71MLihqD3rGQnNqPTDZj8Aopus0RCH.png"
                      alt="Solar panel mesh barrier system installed around the perimeter of solar panels"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">Clips and Fastening System</h3>
                <p className="mb-4 text-gray-700">
                  Our specialized clips and fastening system ensures the mesh is securely attached without damaging your
                  solar panels or voiding warranties. The system is:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Non-invasive to your solar system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Designed to withstand high winds</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Compatible with all panel types and mounting systems</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Removable for maintenance access</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold">Nest Removal & Cleaning</h3>
                <p className="mb-4 text-gray-700">
                  If birds have already nested under your panels, our service includes:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Safe removal of nests and nesting materials</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Thorough cleaning of droppings and debris</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Inspection for damage to wiring or panels</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                    <span>Sanitization to remove harmful bacteria</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Benefits of Our Bird Proofing
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Protects Your Investment</h3>
                <p className="text-gray-700">
                  Prevents costly damage to your solar system and helps maintain warranty compliance.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Zap className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Maintains Efficiency</h3>
                <p className="text-gray-700">
                  Keeps panels clean and functioning at optimal levels by preventing bird droppings.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <AlertTriangle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Reduces Fire Risk</h3>
                <p className="text-gray-700">
                  Eliminates the fire hazard created by nesting materials near electrical components.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Long-Lasting Solution</h3>
                <p className="text-gray-700">
                  Our UV-resistant materials provide years of protection against bird intrusion.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <Leaf className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Humane Approach</h3>
                <p className="text-gray-700">
                  Prevents birds from nesting without harming them, using deterrence rather than harmful methods.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                  <CheckCircle className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">Peace of Mind</h3>
                <p className="text-gray-700">
                  Eliminates ongoing maintenance issues and concerns about bird-related damage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Our Installation Process
            </h2>

            <div className="space-y-12">
              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Site Assessment</h3>
                  <p className="text-lg text-gray-700">
                    We begin with a thorough assessment of your solar system, checking for existing bird activity,
                    nests, and potential entry points. This helps us determine the best approach for your specific
                    situation.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Nest Removal & Cleaning</h3>
                  <p className="text-lg text-gray-700">
                    If birds have already nested under your panels, we safely remove all nesting materials and
                    thoroughly clean the area, removing droppings and sanitizing to eliminate harmful bacteria.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Panel Cleaning</h3>
                  <p className="text-lg text-gray-700">
                    We clean your solar panels using our specialized equipment and eco-friendly methods to remove all
                    dirt, bird droppings, and debris that could be affecting performance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Mesh Installation</h3>
                  <p className="text-lg text-gray-700">
                    Our technicians carefully install the UV-resistant mesh around the perimeter of your solar array,
                    ensuring it's secure while maintaining proper ventilation and system performance.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start md:flex-row md:items-center">
                <div className="mb-6 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mb-0 md:mr-6">
                  <span className="text-xl font-bold">5</span>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-bold">Final Inspection</h3>
                  <p className="text-lg text-gray-700">
                    We conduct a thorough inspection to ensure the bird proofing is properly installed and that your
                    solar system is functioning correctly. We also provide documentation of the work completed for your
                    records.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-10 text-center text-3xl font-bold tracking-tight text-gray-900">
              Real Customer Success Story
            </h2>

            <div className="rounded-lg bg-blue-50 p-8">
              <h3 className="mb-4 text-xl font-bold text-blue-800">Northern Beaches Home</h3>
              <p className="mb-4 text-blue-700">
                A homeowner in Sydney's Northern Beaches contacted us after noticing a significant drop in their solar
                system's performance. Upon inspection, we discovered extensive bird nesting under their panels, with
                droppings covering nearly 30% of the panel surface.
              </p>
              <p className="mb-4 text-blue-700">
                Our team removed the nests, thoroughly cleaned the panels and surrounding area, and installed our
                premium mesh barrier system. The results were immediate and impressive:
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                  <span className="text-blue-700">Energy production increased by 34%</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                  <span className="text-blue-700">No further bird activity detected</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                  <span className="text-blue-700">System temperature reduced by 8°C due to improved airflow</span>
                </li>
              </ul>
              <p className="italic text-blue-700">
                "I had no idea birds were causing so much damage to my solar system. The Watts Up team was professional,
                thorough, and their bird proofing solution has completely solved the problem. My system is performing
                better than ever!" - Michael T., Northern Beaches
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 text-white md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Protect Your Solar Investment Today</h2>
            <p className="mb-8 text-lg text-blue-100 md:text-xl">
              Don't let birds damage your valuable solar system. Our professional bird proofing solutions provide
              long-lasting protection and help maintain optimal system performance.
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
                  question: "Will bird proofing affect my solar panel performance?",
                  answer:
                    "No, our bird proofing solutions are designed to maintain proper airflow and ventilation around your panels. In fact, by preventing bird droppings and nest buildup, our bird proofing typically improves system performance.",
                },
                {
                  question: "How long does the bird proofing installation take?",
                  answer:
                    "For most residential systems, the installation can be completed in 2-4 hours, depending on the size of your system and the extent of any existing bird issues. Commercial installations may take longer.",
                },
                {
                  question: "Is the mesh visible from the ground?",
                  answer:
                    "Our mesh is designed to be virtually invisible from ground level. It's black in color and sits flush with the panels, making it unnoticeable from most viewing angles.",
                },
                {
                  question: "Will bird proofing void my solar panel warranty?",
                  answer:
                    "No, our installation methods are non-invasive and designed to comply with manufacturer guidelines. We don't drill into panels or make any modifications that would affect your warranty. In fact, preventing bird damage can help maintain warranty compliance.",
                },
                {
                  question: "How long does the bird proofing last?",
                  answer:
                    "Our UV-resistant mesh and fastening systems are designed to last 7-10 years under normal conditions. We offer a 5-year warranty on all installations and can provide maintenance as needed.",
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

