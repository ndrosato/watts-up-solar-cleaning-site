import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, CheckCircle, AlertTriangle, Shield, Zap, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DIYvsProPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Featured Image */}
      <div className="relative h-[300px] w-full md:h-[400px]">
        <Image
          src="/images/diy-vs-professional-cleaning.png"
          alt="Comparison of DIY vs professional solar panel cleaning methods"
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
              Solar Panel Cleaning: DIY vs Professional
            </h1>
            <h2 className="mb-4 text-xl text-gray-700 md:text-2xl">Why Professional Cleaning Is Worth Every Penny</h2>
            <div className="flex items-center text-gray-600">
              <Calendar className="mr-2 h-4 w-4" />
              <time dateTime="2023-05-10">May 10, 2023</time>
            </div>
          </div>

          {/* Blog Content */}
          <article className="mx-auto max-w-3xl space-y-6 text-lg">
            <p>
              You've invested thousands in your solar system, and now you're wondering: "Can I just clean these panels
              myself?" It's a common question, and while the DIY approach might seem appealing, there are compelling
              reasons why professional cleaning is the smarter choice for your solar investment.
            </p>

            <p>
              In this article, we'll compare DIY and professional solar panel cleaning approaches, highlighting why the
              professional route offers superior results, better protection, and ultimately greater value.
            </p>

            {/* Comparison Table */}
            <div className="my-8 overflow-hidden rounded-lg border">
              <table className="w-full border-collapse">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="border-b p-4 text-left">Aspect</th>
                    <th className="border-b p-4 text-left">DIY Cleaning</th>
                    <th className="border-b p-4 text-left">Professional Cleaning</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr className="bg-white">
                    <td className="p-4 font-medium">Equipment</td>
                    <td className="p-4">Basic household tools, garden hose</td>
                    <td className="p-4">Specialized water-fed poles, purified water systems, soft brushes</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Safety</td>
                    <td className="p-4">Risk of falls, electrical hazards</td>
                    <td className="p-4">Trained professionals with safety equipment</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-medium">Effectiveness</td>
                    <td className="p-4">Partial removal of dirt and debris</td>
                    <td className="p-4">Complete removal of all contaminants</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-4 font-medium">Warranty</td>
                    <td className="p-4">May void manufacturer warranty</td>
                    <td className="p-4">Maintains warranty compliance</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 font-medium">Panel Damage Risk</td>
                    <td className="p-4">High (scratches, cracks)</td>
                    <td className="p-4">Minimal to none</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Protecting Your Warranty</h2>
            <div className="rounded-lg bg-blue-50 p-6">
              <div className="flex items-start">
                <Shield className="mr-3 mt-1 h-6 w-6 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold">Did You Know?</h3>
                  <p className="text-gray-700">
                    Most solar panel manufacturers require professional cleaning to maintain warranty coverage. DIY
                    cleaning with improper tools or techniques can void your warranty—potentially costing you thousands
                    if something goes wrong.
                  </p>
                </div>
              </div>
            </div>
            <p>
              Solar panel warranties typically last 25-30 years, representing significant financial protection for your
              investment. However, these warranties often contain specific maintenance requirements, including
              professional cleaning at regular intervals.
            </p>
            <p>
              When you choose professional cleaning, you receive documentation of the service that can be used to
              demonstrate warranty compliance if you ever need to make a claim. This alone can justify the cost of
              professional cleaning several times over.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">The Purified Water Advantage</h2>
            <p>
              One of the biggest differences between DIY and professional cleaning is the water quality. Professional
              solar panel cleaners use specialized purified water systems that remove all minerals, impurities, and
              chemicals from the water.
            </p>
            <p>
              Why does this matter? Regular tap water contains minerals that leave residue behind when it dries—creating
              spots and streaks that can block sunlight and reduce efficiency. This residue can actually attract more
              dirt, making your panels get dirty faster after cleaning.
            </p>
            <p>Our purified water systems ensure:</p>
            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>No mineral deposits or water spots left behind</li>
              <li>Panels stay cleaner longer after professional cleaning</li>
              <li>No chemical residues that could damage panel coatings</li>
              <li>Environmentally friendly cleaning without detergents</li>
            </ul>

            <div className="my-8 rounded-lg bg-yellow-50 p-6">
              <div className="flex items-start">
                <Zap className="mr-3 mt-1 h-6 w-6 text-yellow-600" />
                <div>
                  <h3 className="text-xl font-bold">Energy Output Boost</h3>
                  <p className="text-gray-700">
                    Studies show that professionally cleaned solar panels can produce up to 30% more energy than dirty
                    ones. Even a thin layer of dust can reduce efficiency by 5-10%, while bird droppings or pollen can
                    create "hot spots" that significantly decrease output.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Safety Considerations</h2>
            <p>
              Solar panel cleaning often requires working at heights on sloped surfaces—a dangerous combination.
              Professional cleaners are trained in roof safety, use proper harnesses and equipment, and carry insurance
              to protect both themselves and your property.
            </p>
            <div className="my-6 rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
              <div className="flex">
                <AlertTriangle className="mr-3 h-6 w-6 text-red-500" />
                <div>
                  <h3 className="font-bold text-red-800">Safety Warning</h3>
                  <p className="text-red-700">
                    Falls from roofs are among the most common home accident injuries. Professional cleaners have the
                    training and equipment to safely access and clean your panels without risk.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Specialized Equipment Makes a Difference</h2>
            <p>Professional solar panel cleaners use purpose-built equipment designed specifically for the job:</p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Water-fed extension poles</strong> that can reach panels without walking on the roof
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Soft-bristle brushes</strong> designed to clean effectively without scratching delicate panel
                  surfaces
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Deionized water filtration systems</strong> that leave no residue or spots
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  <strong>Performance monitoring tools</strong> to measure the improvement in output after cleaning
                </span>
              </li>
            </ul>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Beyond Just Cleaning: The Professional Advantage</h2>
            <p>
              When you hire professionals like Watts Up Solar Cleaning, you're getting more than just a cleaning
              service. Our technicians are trained to:
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>Identify potential issues with your system during cleaning</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>Spot microcracks, hot spots, or damaged cells that might be reducing performance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>Check mounting hardware and wiring for potential problems</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>Provide documentation of the cleaning for warranty purposes</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>Measure performance before and after cleaning to demonstrate improvement</span>
              </li>
            </ul>

            <div className="my-8 rounded-lg bg-green-50 p-6">
              <div className="flex items-start">
                <Heart className="mr-3 mt-1 h-6 w-6 text-green-600" />
                <div>
                  <h3 className="text-xl font-bold">Extended System Life</h3>
                  <p className="text-gray-700">
                    Regular professional cleaning doesn't just improve performance—it extends the life of your entire
                    system. By preventing buildup that can cause permanent damage and hot spots, professional cleaning
                    helps your panels reach their full 25-30 year potential lifespan.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">When DIY Might Be Appropriate</h2>
            <p>
              While professional cleaning is generally the best option, there are limited circumstances where a careful
              DIY approach might be suitable:
            </p>
            <ul className="ml-6 list-disc space-y-2 pl-4">
              <li>Ground-mounted systems that can be safely accessed without climbing</li>
              <li>Emergency cleaning of a single spot (like bird droppings) between professional cleanings</li>
              <li>Very gentle rinsing with distilled water during extended dry periods</li>
            </ul>
            <p>
              However, even in these cases, it's important to follow manufacturer guidelines and use only approved
              methods and materials.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">The Cost-Benefit Analysis</h2>
            <p>
              When considering the cost of professional cleaning versus DIY, it's important to look at the complete
              picture:
            </p>
            <ul className="space-y-3 pt-2">
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>
                  A 20-30% increase in energy production can save hundreds of dollars annually on electricity bills
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>Maintaining warranty coverage protects your multi-thousand dollar investment</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>Preventing damage from improper cleaning techniques saves on repair costs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="mr-2 mt-1 h-5 w-5 text-green-500" />
                <span>The time and safety risks of DIY cleaning have their own costs</span>
              </li>
            </ul>
            <p className="mt-4">
              For most solar owners, professional cleaning 2-3 times per year provides the best return on investment,
              with increased energy production quickly offsetting the cleaning costs.
            </p>

            <h2 className="mt-8 text-2xl font-bold text-gray-900">Conclusion: The Professional Advantage</h2>
            <p>
              While the DIY approach might seem cost-effective initially, professional solar panel cleaning offers
              superior results, better protection for your investment, and ultimately greater long-term value. From
              maintaining warranty coverage to maximizing energy output with specialized equipment, the benefits of
              professional cleaning far outweigh the costs.
            </p>
            <p>
              At Watts Up Solar Cleaning, we're committed to helping you get the most from your solar investment through
              expert, thorough, and safe cleaning services that keep your system performing at its peak.
            </p>

            <div className="mt-10 rounded-lg bg-blue-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Ready to maximize your solar investment?</h3>
              <p className="mb-4">
                Our professional cleaning service can increase your energy production by up to 30%. Contact us today for
                a free quote and see the difference professional cleaning can make.
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

