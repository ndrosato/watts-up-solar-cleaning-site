import Image from "next/image"
import { Sun, Zap, ShieldCheck, CloudRain, DollarSign, Droplets, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function HowItWorksSection() {
  return (
    <section className="bg-white pt-6 pb-6 md:pt-14 md:pb-14">
      {/* Section Title */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            How Professional Solar Panel Cleaning Works
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Understand why cleaning matters, how we do it, and the benefits you'll experience
          </p>
        </div>

        {/* Problem Cards */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">Why Dirty Solar Panels Are a Problem</h3>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-0 bg-blue-50 shadow-md transition-all duration-200 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="mb-2 text-xl font-bold">Reduced Energy Output</h4>
                <p className="text-gray-600">
                  Dirt, dust, and debris block sunlight from reaching your panels, reducing energy production by up to
                  30%.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-blue-50 shadow-md transition-all duration-200 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <Sun className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="mb-2 text-xl font-bold">Hot Spots & Damage</h4>
                <p className="text-gray-600">
                  Bird droppings and concentrated dirt create hot spots that can permanently damage your panels and
                  reduce lifespan.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 bg-blue-50 shadow-md transition-all duration-200 hover:shadow-lg">
              <CardContent className="flex flex-col items-center p-6 text-center">
                <div className="mb-4 rounded-full bg-blue-100 p-3">
                  <ShieldCheck className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="mb-2 text-xl font-bold">Warranty Risks</h4>
                <p className="text-gray-600">
                  Most manufacturers require regular cleaning to maintain warranty coverage. Neglect can void your
                  protection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Speak to a Technician Button */}
        <div className="mb-0 text-center">
          <Button
            className="w-full py-8 flex items-center justify-center text-lg font-medium bg-blue-600 text-white hover:bg-blue-700"
            asChild
          >
            <Link href="/contact" scroll={true}>
              Speak to a Technician
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Why Rain Isn't Enough */}
        <div className="mb-20 overflow-hidden rounded-xl bg-gray-50 shadow-lg">
          <div className="grid items-center gap-8 pt-[62px] md:grid-cols-2">
            <div className="relative h-[300px] md:h-[400px] overflow-hidden rounded-lg">
              <Image
                src="/images/wet-solar-panels.png"
                alt="Dirty solar panels after rain"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6 md:p-8 lg:p-12">
              <h3 className="mb-4 text-2xl font-bold text-gray-800">Why Rain Isn't Enough</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-blue-100 p-1">
                    <CloudRain className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Rain Leaves Residue</h4>
                    <p className="text-gray-600">
                      Rain water contains minerals and pollutants that dry and leave a film on your panels.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-blue-100 p-1">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Stubborn Substances Remain</h4>
                    <p className="text-gray-600">
                      Bird droppings, tree sap, and pollen are sticky and won't wash away with rain alone.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mr-4 mt-1 rounded-full bg-blue-100 p-1">
                    <DollarSign className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-medium">Costs You Money</h4>
                    <p className="text-gray-600">
                      Relying on rain means accepting lower energy production and paying higher electricity bills.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Cleaning Process */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">Our Professional Cleaning Process</h3>

          <div className="relative mx-auto max-w-3xl">
            {/* Vertical Line */}
            <div className="absolute left-[21px] top-0 h-full w-1 bg-blue-200 md:left-1/2 md:-ml-0.5"></div>

            {/* Step 1 */}
            <div className="mb-12 md:mb-0">
              <div className="flex flex-col md:flex-row">
                <div className="flex md:w-1/2 md:justify-end md:pr-8">
                  <div className="z-10 mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mr-0">
                    <span className="text-lg font-bold">1</span>
                  </div>
                  <div className="pt-1 md:hidden">
                    <h4 className="text-xl font-bold">Inspection & Assessment</h4>
                    <p className="text-gray-600">
                      We thoroughly examine your panels to identify dirt buildup, potential issues, and customize our
                      cleaning approach.
                    </p>
                  </div>
                </div>
                <div className="hidden pl-12 md:block md:w-1/2 md:pl-8">
                  <h4 className="text-xl font-bold">Inspection & Assessment</h4>
                  <p className="text-gray-600">
                    We thoroughly examine your panels to identify dirt buildup, potential issues, and customize our
                    cleaning approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="mb-12 md:mb-0 md:mt-24">
              <div className="flex flex-col md:flex-row">
                <div className="hidden md:block md:w-1/2 md:pr-8 md:text-right">
                  <h4 className="text-xl font-bold">Specialized Cleaning</h4>
                  <p className="text-gray-600">
                    Using purified water and eco-friendly solutions, we gently remove all dirt, bird droppings, and
                    buildup without damaging your panels.
                  </p>
                </div>
                <div className="flex md:w-1/2 md:justify-start md:pl-8">
                  <div className="z-10 mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mr-0">
                    <span className="text-lg font-bold">2</span>
                  </div>
                  <div className="pt-1 md:hidden">
                    <h4 className="text-xl font-bold">Specialized Cleaning</h4>
                    <p className="text-gray-600">
                      Using purified water and eco-friendly solutions, we gently remove all dirt, bird droppings, and
                      buildup without damaging your panels.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="md:mt-24">
              <div className="flex flex-col md:flex-row">
                <div className="flex md:w-1/2 md:justify-end md:pr-8">
                  <div className="z-10 mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white md:mr-0">
                    <span className="text-lg font-bold">3</span>
                  </div>
                  <div className="pt-1 md:hidden">
                    <h4 className="text-xl font-bold">Performance Verification</h4>
                    <p className="text-gray-600">
                      We check your system's performance after cleaning and provide a detailed report showing the
                      improvement in energy production.
                    </p>
                  </div>
                </div>
                <div className="hidden pl-12 md:block md:w-1/2 md:pl-8">
                  <h4 className="text-xl font-bold">Performance Verification</h4>
                  <p className="text-gray-600">
                    We check your system's performance after cleaning and provide a detailed report showing the
                    improvement in energy production.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">Benefits After Professional Cleaning</h3>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-blue-600 p-3 text-white">
                <Zap className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-lg font-bold">Increased Energy Production</h4>
              <p className="text-gray-600">Up to 30% more electricity generation from your clean, efficient panels.</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-blue-600 p-3 text-white">
                <DollarSign className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-lg font-bold">Lower Electricity Bills</h4>
              <p className="text-gray-600">Maximize your investment with reduced reliance on grid electricity.</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-blue-600 p-3 text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-lg font-bold">Extended System Life</h4>
              <p className="text-gray-600">Prevent permanent damage and maintain warranty protection.</p>
            </div>

            <div className="rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 p-6 shadow-md">
              <div className="mb-4 inline-flex rounded-full bg-blue-600 p-3 text-white">
                <Droplets className="h-6 w-6" />
              </div>
              <h4 className="mb-2 text-lg font-bold">Scheduled Maintenance</h4>
              <p className="text-gray-600">Worry-free service plans to keep your system at peak performance.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center text-white shadow-lg md:p-12">
          <h3 className="mb-3 text-2xl font-bold md:text-3xl">Ready to Maximize Your Solar Investment?</h3>
          <p className="mx-auto mb-6 max-w-2xl text-lg text-blue-100">
            Join hundreds of satisfied customers who are getting more power from their solar panels with our
            professional cleaning service.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50" asChild>
            <Link href="/quote">
              Get a Free Quote Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

