"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { CheckCircle, Calendar, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function BookInspectionPage() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    panelCount: "",
    roofType: "",
    inspectionType: "standard",
    preferredDate: "",
    preferredTime: "",
    notes: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 1500)
  }

  const firstName = formData.fullName.split(" ")[0]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-400 py-16 text-white md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">Book a Solar Inspection</h1>
            <p className="text-lg text-blue-100 md:text-xl">
              Schedule a comprehensive inspection to ensure your solar system is performing at its best
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            {isSubmitted ? (
              <div className="rounded-lg border border-green-100 bg-green-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-green-800">Thanks, {firstName}!</h3>
                <p className="text-green-700">
                  We've received your inspection booking request. Our team will contact you within 24 hours to confirm
                  your appointment.
                </p>
                <Button
                  className="mt-6 bg-green-600 hover:bg-green-700"
                  onClick={() => {
                    setIsSubmitted(false)
                    setFormData({
                      fullName: "",
                      email: "",
                      phone: "",
                      address: "",
                      panelCount: "",
                      roofType: "",
                      inspectionType: "standard",
                      preferredDate: "",
                      preferredTime: "",
                      notes: "",
                    })
                  }}
                >
                  Book Another Inspection
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Contact Information */}
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Contact Information</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        type="tel"
                        placeholder="0450 123 456"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">
                        Property Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="123 Solar Street, Sydney NSW 2000"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* System Details */}
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">System Details</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="panelCount">
                        Number of Panels <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="panelCount"
                        name="panelCount"
                        value={formData.panelCount}
                        onChange={handleChange}
                        type="number"
                        placeholder="12"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="roofType">
                        Roof Type <span className="text-red-500">*</span>
                      </Label>
                      <Select onValueChange={(value) => handleSelectChange("roofType", value)} required>
                        <SelectTrigger id="roofType">
                          <SelectValue placeholder="Select roof type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="flat">Flat</SelectItem>
                          <SelectItem value="tiled">Tiled</SelectItem>
                          <SelectItem value="steep">Steep</SelectItem>
                          <SelectItem value="multi-storey">Multi-storey</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Inspection Type */}
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Inspection Type</h2>
                  <RadioGroup
                    defaultValue="standard"
                    onValueChange={(value) => handleSelectChange("inspectionType", value)}
                    className="space-y-4"
                  >
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="standard" id="standard" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="standard" className="font-medium">
                          Standard Inspection
                        </Label>
                        <p className="text-sm text-gray-500">
                          Visual inspection, performance check, and basic cleaning
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="comprehensive" id="comprehensive" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="comprehensive" className="font-medium">
                          Comprehensive Inspection
                        </Label>
                        <p className="text-sm text-gray-500">
                          Includes thermal imaging, electrical testing, and detailed performance analysis
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <RadioGroupItem value="maintenance" id="maintenance" className="mt-1" />
                      <div className="grid gap-1.5">
                        <Label htmlFor="maintenance" className="font-medium">
                          Maintenance Package
                        </Label>
                        <p className="text-sm text-gray-500">
                          Full inspection plus cleaning, bird proofing assessment, and maintenance plan
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Preferred Schedule */}
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Preferred Schedule</h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Calendar className="mr-2 h-4 w-4 text-gray-500" />
                        <Label htmlFor="preferredDate">Preferred Date</Label>
                      </div>
                      <Input
                        id="preferredDate"
                        name="preferredDate"
                        value={formData.preferredDate}
                        onChange={handleChange}
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-gray-500" />
                        <Label htmlFor="preferredTime">Preferred Time</Label>
                      </div>
                      <Select onValueChange={(value) => handleSelectChange("preferredTime", value)}>
                        <SelectTrigger id="preferredTime">
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="morning">Morning (8am - 12pm)</SelectItem>
                          <SelectItem value="afternoon">Afternoon (12pm - 4pm)</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Additional Notes */}
                <div className="rounded-lg border p-6 shadow-sm">
                  <h2 className="mb-4 text-xl font-bold text-gray-900">Additional Information</h2>
                  <div className="space-y-2">
                    <Label htmlFor="notes">Additional Notes (Optional)</Label>
                    <Textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Please provide any additional details about your system or specific concerns you'd like us to address..."
                      rows={4}
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Processing..." : "Book Inspection"}
                </Button>

                <p className="text-center text-sm text-gray-500">
                  By submitting this form, you agree to our{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>{" "}
                  and{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms of Service
                  </a>
                  .
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">Why Book a Professional Inspection?</h2>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 text-center text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-center text-lg font-bold">Identify Hidden Issues</h3>
                <p className="text-center text-gray-600">
                  Detect problems invisible to the naked eye with our thermal imaging and electrical testing.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 text-center text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="mb-2 text-center text-lg font-bold">Maximize Performance</h3>
                <p className="text-center text-gray-600">
                  Ensure your system is operating at peak efficiency to get the most from your investment.
                </p>
              </div>

              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 text-center text-blue-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mx-auto h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="mb-2 text-center text-lg font-bold">Protect Your Warranty</h3>
                <p className="text-center text-gray-600">
                  Regular inspections help maintain warranty compliance and document your system's condition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

