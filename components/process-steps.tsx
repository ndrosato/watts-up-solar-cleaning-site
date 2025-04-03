import { CheckCircle, Search, Droplets, Sun } from "lucide-react"

export default function ProcessSteps() {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Inspect",
      description: "We thoroughly assess your solar panels to identify dirt, debris, and potential issues.",
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-600" />,
      title: "Clean",
      description: "Using specialized equipment and eco-friendly solutions, we safely remove all contaminants.",
    },
    {
      icon: <Sun className="h-12 w-12 text-blue-600" />,
      title: "Maximise",
      description: "Your panels are left spotless and ready to generate maximum energy efficiency.",
    },
  ]

  return (
    <div className="relative mx-auto max-w-4xl">
      <div className="grid gap-12 md:grid-cols-3 md:gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 p-4">
              {step.icon}
            </div>
            <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>

            <div className="absolute -bottom-6 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-white text-blue-600 shadow-md md:bottom-auto md:left-auto md:right-0 md:top-1/2 md:-translate-y-1/2">
              {index < 2 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              ) : (
                <CheckCircle className="h-4 w-4" />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

